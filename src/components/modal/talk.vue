<template>
  <!-- 对话框-->
  <div class="talk-box" style="position: relative">
    <a-modal class="talk-modal" title :visible="props.visible" getContainer=".talk-box" centered :closable="false"
      :mask="false" :maskClosable="false">
      <!-- 选项 -->
      <div class="choose-box">
        <div v-for="(item, index) in props.talkData" :key="index"
          :class="[data.selectArr.includes(item.key) ? 'item cho' : 'item']" @click="itemChoose(item)">
          <div class="num">{{ data.selectVal === item.key ? "" : `0${index + 1}` }}</div>
          <div class="text" v-html="formatText(item.name)"></div>
        </div>
      </div>
      <template #footer>
        <a-button class="my-bottom" type="primary" @click="handleOk" :disabled="data.selectVal ? false : true">确定
        </a-button>
      </template>
    </a-modal>
    <!-- gif动图 -->
    <a-modal class="gif-modal" title="" :visible="data.gifShow" getContainer=".talk-box" width="100%"
      wrapClassName="full-modal" :mask="false" :footer="null" :maskClosable="false" @cancel="handleCancel">
      <div class="im-box">
        <img src="@/assets/images/welcome.gif" alt="">
      </div>
    </a-modal>
  </div>
</template>
<script setup>
import { reactive, onBeforeMount, onMounted } from "vue";
import { Session, wait } from '@/utils';
const props = defineProps({
  visible: {
    //是否显示答题弹窗
    type: Boolean,
    default: false,
  },
  talkData: {
    //题目数组
    type: Array,
    default: () => [],
  },
  multiple: {
    //是否为多选
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(["update:visible", "chooseItem"]);

const data = reactive({
  visible: props.visible,
  selectVal: "", //选中的那个值
  selectArr: [], //选中值的数组 
  gifShow: false,
});


const handleOk = () => {
  data.visible = false;
  emits("update:visible", data.visible); //更新父组件当前页的值
  emits("chooseItem", data.selectVal);

  setTimeout(() => {
    data.selectVal = "";  //清空选中的值
    data.selectArr=[];
  }, 200)
};
const formatText = (val) => {
  return val;
};
// 选中的选项
const itemChoose = (item) => {
  // console.log("item :>> ", item);

  if(props.multiple){   //多选
    let index=data.selectArr.indexOf(item.key);
    
    if(index > -1){
      data.selectArr.splice(index,1)
    }else{
      
      data.selectArr.push(item.key);
    }

  }else{
    data.selectArr=[item.key];
  }
  data.selectVal=data.selectArr.join(",");


  //暂时先做个展示
  if (item.name == "手语") {
    //上面追加进去了，这里要等于-1
    if(props.multiple && data.selectArr.indexOf(item.key) == -1){
      return
    }
    data.gifShow = true;
  }
};

const handleCancel = () => {
  data.gifShow = false

};

onMounted(() => {
  //console.log('data :>> ', data);
  //console.log(props);
});
</script>
<style lang="scss" scoped>
.talk-box {
  :deep(.ant-modal-mask) {
    background-color: rgba(0, 0, 0, 0.1);
  }

  :deep(.talk-modal) {
    .ant-modal-content {
      /* background-color: #ffffffb0; */
      background-color: rgba(255, 255, 255, 0.5);
      /* border: 2px solid rgb(152,71,6); */
      border-radius: 8px;
      /* box-shadow: 1px 1px 9px 3px; */
      min-width: 600px;
      max-width: 1000px;
    }

    .ant-modal-footer {
      text-align: center;
    }
  }


  .my-bottom:not([disabled]) {
    color: #fff;
    background: #984822;
    border-color: #984822;

    &:hover {
      background: #b66d4b;
      border-color: #b66d4b;
    }
  }

  :deep(.gif-modal) {
    width: 100%;
    padding: 0;
    top: 0;
    height: 100%;

    .ant-modal-content {
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 8px;
      height: 100%;
    }

    .ant-modal-body {
      height: 100%;
    }
    .ant-modal-close-x svg{
      transform: scale(1.8);
    }
  }

  .im-box {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.choose-box {
  .item {
    margin: 20px 0;
    display: flex;
    cursor: pointer;

    .num {
      width: 55px;
      // min-height:55px;
      background-color: rgb(241, 241, 241);
      padding-left: 6px;
      text-align: center;
      color: rgb(193, 193, 193);
      font-size: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 6px;
        height: 100%;
        background: rgb(193, 193, 193);
      }

      &:after {
        // content: "√";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(152, 72, 34);
        border-left: 6px solid rgb(128, 58, 26);
        font-weight: bold;
        font-size: 32px;
        line-height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        padding-bottom: 2px;
      }
    }

    .text {
      width: calc(100% - 55px);
      border: 2px solid rgb(241, 241, 241);
      background: #fff;
      min-height: 40px;
      padding: 10px;
      font-size: 16px;
    }

    &.cho {
      color: rgb(152, 72, 34);

      .num::after {
        content: "√";
      }
    }
  }
}
</style>
