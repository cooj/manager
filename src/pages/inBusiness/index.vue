<template>
  <div class="main-box">
    <div class="right-box">
      <div class="text-right">
        <a-button class="go-back"  type="primary" danger style="background-color: #ff0000">
          <router-link to="/">返回</router-link>
        </a-button>
        <div class="tab-item">
          <div class="icon-img">
            <a-tooltip placement="top">
              <template #title>
                <span>任务详情</span>
              </template>
              <img @click="itemChoses(2)" class="viewButton" src="@/assets/images/button1.png" />
            </a-tooltip>
          </div>
          <div class="icon-img" style="margin-left: 10px">
            <a-tooltip placement="top">
              <template #title>
                <span>操作步骤</span>
              </template>
              <img @click="itemChoses(1)" class="viewButton" src="@/assets/images/button2.png" />
            </a-tooltip>
          </div>
        </div>
      </div>

      <div class="tab-box">
        <transition name="component-fade" mode="out-in">
          <div v-if="visible" class="task-box">
            <div class="btn-item" v-for="(item, index) in data.stepList" :key="index">
              <a-button :type="data.actionID === item.key ? 'primary' : 'text'" @click="playPause(item.key, item)"
                :disabled="item.disabled">{{ item.name }}</a-button>
            </div>
          </div>
          <div v-else class="remark-box">
            <div class="t-box">
              <template v-for="(item, index) in data.remarkTab" :key="index">
                <a-button type="primary" :class="item.key == data.nowKey ? 'active' : ''" @click="changeTab(item.key)">
                  {{ item.text }}</a-button>
              </template>
            </div>
            <div class="t-boxing">
              <div class="remarkBoxItem" v-if="data.nowKey != 2" v-html="viewHtmlForm(data.remarkData.text)"></div>
              <div class="remarkBoxItem" v-else v-html="viewHtmlForm(data.remarkData.tips)"></div>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="com-pon">
      <component :is="data.curComponent" @disabledStatus="disabledStatus" @childClick="playPause" ref="comRef"></component>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref, unref } from "@vue/reactivity";
import { defineAsyncComponent, nextTick, onMounted,markRaw,shallowRef } from "vue";
import { Comm } from '@/api/api';
import { Session, wait } from '@/utils';


// import { mainInfo } from '@/stores';
import { mainInfo } from '@/store/mainInfo';
const stateData = mainInfo.data;  //获取store保存的数据

//动态引入Step1 ~ Step9组件
const AsyncComp = (key) => {
  return defineAsyncComponent(() =>
    // import("../../components/Step1.vue")
    import(`../../components/Step${key}.vue`)
  )
}

// console.log(storeState);
// 格式化带html标签的文本
const viewHtmlForm = (data) => {
  return (
    data &&
    data
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'")
  );
};

//右侧tab切换效果
const visible = ref(false);
const itemChoses = (key) => {
  if (key === 1) {
    visible.value = true;
  } else {
    visible.value = false;
  }
};

const data = reactive({
  curComponent: "", //当前组件
  actionID: "",
  nowKey: 1,
  remarkTab: [
    {
      key: 1,
      text: "任务说明",
    },
    {
      key: 2,
      text: "重要提示",
    },
  ],
  remarkData: {
    //任务详情
    text: "客户来我行咨询投资事项，并表明有投资意愿，想投资一些优质产品",
    tips: "操作1（接待客户）：客户在进入厅堂后，大堂经理需要在系统选择正确的操作行为。如果大堂经理选择错误，则此步骤不得分",
  },
  stepList: [
    //右侧按钮
    {
      key: 1,
      name: "接待客户",
      disabled: false,
    },
    {
      key: 2,
      name: "疑难解答",
      disabled: true,
    },
    {
      key: 3,
      name: "协助取号",
      disabled: true,
    },
    {
      key: 4,
      name: "引导填单",
      disabled: true,
    },
    {
      key: 5,
      name: "单据填写",
      disabled: true,
    },
    {
      key: 6,
      name: "单据审核",
      disabled: true,
    },
    {
      key: 7,
      name: "客户引导",
      disabled: true,
    },
    {
      key: 8,
      name: "现场处理",
      disabled: true,
    },
    {
      key: 9,
      name: "送别",
      disabled: true,
    },
  ],
});

const changeTab = (i) => {
  data.nowKey = i;
};

// 进入对应步骤
const playPause = async (key, item) => {
  // console.log(item);

  // console.log('stateData :>> ', stateData);
  if (key == stateData.current && key == data.actionID) { //当前操作，不让继续点击
    return false;
  }
  data.actionID = key;  //记录当前点击过一次的按钮，后面不让点击
  mainInfo.setData("current", key);  //记录当前操作步骤
  // let step = await Comm.SaveSteps({ Steps: key })   //保存当前步骤

  //判断步骤是否已完成，组件进入到对应的状态
  let completeList = stateData.completeList;
  let stepCount = "";
  if (key == 1) {
    stepCount = completeList.indexOf(key) == -1 ? 1 : 5;
    // stepCount = 5;

  } else if (key == 2 || key == 8) {
    stepCount = completeList.indexOf(key) == -1 ? "" : 4;
    // stepCount=4;

  } else if (key == 3 || key == 9) {
    stepCount = completeList.indexOf(key) == -1 ? 1 : 3;
    // stepCount = 3;
  } else if (key == 4 || key == 5 || key == 6) {
    stepCount = completeList.indexOf(key) === -1 ? 1 : 2;
  } else if (key == 7) {
    stepCount = completeList.indexOf(key) === -1 ? "" : 1;

  }

  //console.log(stepCount);

  //data.curComponent = AsyncComp(key);
  data.curComponent = markRaw(AsyncComp(key));
  await wait(500);
  nextTick(() => {
    comRef.value.setStep(stepCount);
  });

};
  // 更新步骤按钮状态
const disabledStatus = () => {

  let completeList = stateData.completeList;
  // console.log(completeList);
  for (let index = 0; index < data.stepList.length; index++) {
    const element = data.stepList[index];
    // true  禁用，  false 启用
    if (completeList.indexOf(element.key) !== -1) {
      element.disabled = true;
    } else {
      element.disabled = false;
    }

    // 当前操作为第一步，没有操作完成的
    if (stateData.current == 1 && completeList.length == 0) {
      if (element.key == 1) {
        element.disabled = false;
      } else {
        element.disabled = true;
      }
    }

    // console.log(element);
  }
};
const comRef = ref(null);
// const comRef = shallowRef(null);

onMounted(() => {

  playPause(stateData.current);
  disabledStatus();
})

defineExpose({
  playPause
})
</script>
<style lang="scss" scoped>
.main-box {
  width: 100%;
  height: 100%;
}

.go-back {
  //   position: fixed;
  //   top: 100px;
  //   right: 20px;
  margin-top: 20px;
}

.right-box {
  position: fixed;
  top: 0;
  right: 20px;
  margin-top: 70px;
  // height: 100vh;
  z-index: 10000;
}

.tab-item {
  padding: 20px 0;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;

  .icon-img {
    width: 45px;
  }
}

.tab-box {
  height: 600px;
    position: absolute;
    right: 0;
  .task-box {
    height: 100%;

    .btn-item {
      text-align: right;
      margin: 8px 0;

      button {
        height: 36px;
        width: 90px;
        color: #fff;
        background: #984822;
        border-color: #984822;
        font-weight: bold;

        &.ant-btn-primary,
        &:hover {
          background: #cc8246;
          border-color: #cc8246;
        }

        &[disabled],
        &[disabled]:hover,
        &[disabled]:focus,
        &[disabled]:active {
          color: #bbb;
          background: #f5f5f5;
          border-color: #eee;
        }

        &.ant-btn-primary {

          &[disabled],
          &[disabled]:hover,
          &[disabled]:focus,
          &[disabled]:active {
            color: #bbb;
            background: #f5f5f5;
            border-color: #eee;
          }
        }
      }
    }
  }

  .remark-box {
    height: 100%;
    width: 250px;
    border: 5px solid #984807;
    border-radius: 8px;
    background: #fff;

    .t-box {
      display: flex;
      justify-content: space-between;
      background: rgb(204, 130, 70);
      padding: 1px 0;
      height: 40px;

      button {
        width: 50%;
        height: 100%;
        background: rgb(204, 130, 70);
        color: #fff;
        border: 1px solid rgb(190, 104, 78);
        margin: 0 1px;

        &.active {
          background: #984807;
        }
      }
    }

    .t-boxing {
      padding: 8px;
      overflow: auto;
      height: calc(100% - 40px);
    }
  }
}

.com-pon {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>

<style lang="scss">
.ant-tooltip{
  z-index: 10000;
}
.video-box {
    width: 100%;
    height: 100%;
    position: absolute;
    transition: all 0.5s;
    top: 0;
    left: 0;
    opacity: 0;
    &.show{
      z-index: 10;
      opacity: 1;
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    video {
        height: 100%;
        max-width: 100%;
        object-fit: cover;
        display: block;
        margin: 0 auto;
    }

    .btn-next {
        cursor: pointer;
        position: absolute;
        z-index: 10;
        transition: all 0.8s;

        &:hover {
            filter: drop-shadow(1px 2px 2px);
        }

        img {
            width: 120px;
            height: 40px;
        }
    }

    .btn-audio {
        position: absolute;
        top: 20%;
        left: 51%;
        z-index: 10;
        cursor: pointer;

        img {
            width: 40px;
            height: 40px;
        }
    }
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
