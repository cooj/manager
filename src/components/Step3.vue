<!-- 协助取号 -->
<template>
    <div class="video-box" :class="data.stepVal == 1 ? 'show' : ''">
        <video id="video1" muted autoplay="true" preload="false">
            <source :src="data.getSource.step1" type="video/mp4" />
        </video>
    </div>
    <div class="video-box" :class="data.stepVal == 2 ? 'show' : ''">
        <video id="video2" muted autoplay="true" preload="false">
            <source :src="data.getSource.step2" type="video/mp4" />
        </video>
    </div>
    <div class="video-box" :class="data.stepVal == 3 ? 'show' : ''">
        <video id="video3" muted autoplay="true" preload="false">
            <source :src="data.getSource.step3" type="video/mp4" />
        </video>
    </div>

    <div v-show="pickOption.show" class="chose-box">
        <div class="chose-btn">
            <a-button v-for="(item, key) in pickOption.option" :key="key"
                :class="pickOption.choose == item.id ? 'choc' : ''" @click="chooseItem(item)">{{ item.name }}</a-button>
        </div>

        <div class="chose-bot">
            <a-button @click="pickOption.choose = ''">取消</a-button>
            <a-button @click="btnSure(2)">确定</a-button>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount, onMounted, unref } from "vue";
import { assistInNumber } from "@/utils/fileSource";
import Talk from "@/components/modal/talk.vue";
import { Comm } from '@/api/api';
import { Session, wait } from '@/utils';
import { mainInfo } from '@/store/mainInfo';
import { message } from "ant-design-vue";
const stateData = mainInfo.data;  //获取store保存的数据
// const stateData = mainInfo.getState();  //获取store保存的数据
// //console.log(stateData);

const emits = defineEmits(["disabledStatus", "childClick"]);


// 视频对应部分
const data = reactive({
    btnShow: false, //下一步、完成按钮显示
    getSource: assistInNumber(stateData.role), //取得对应角色的视频
    stepVal: 0, //当前操作的步骤（用于切换到对应的视频动画）
    myVideo: null,
});

// 设置当前的操作状态（页面显示已完成状态或未操作状态）
const setStep = (key) => {

    nextStep(key);
}

// 执行下一步事件
const nextStep = async (key) => {
    //console.log("key :>> ", key);
    data.stepVal = key;
    videoPlay();
    if (key == 1) {
        await wait(2500);
        pickOption.show = true
    } else if (key == 2) {
        await wait(2000);
        pickOption.show = false;
        // data.stepVal = key+1;
        nextStep(key + 1);
    } else if (key == 3) {
        let complete = stateData.completeList;
        if (complete.indexOf(3) == -1) {
            complete.push(3);
            mainInfo.setData("completeList", complete); //当前步骤加入已完成列中
        }
        emits("disabledStatus");   //更新按钮状态
    }

};

// 音频对话播放
const audioPlay = () => {
    message.warning('没有设置对话');
    data.btnShow = true;
}
// 视频动画播放
const videoPlay = () => {
    data.myVideo = document.getElementById(`video${data.stepVal}`);
    data.myVideo.load();
    data.myVideo.play();
}

onMounted(() => {

})

// 取号选项
const pickOption = reactive({
    show: false,     //是否显示取号选项
    choose: "",      //选中项
    option: [
        { id: 1, name: '个人业务' },
        { id: 2, name: '对公业务' },
        { id: 3, name: 'VIP业务' },
        { id: 4, name: '公积金业务' },
    ]
})
// 取号——点击确定按钮
const btnSure = (key) => {
    // //console.log(data.stepVal);
    // return false;
    if (pickOption.choose) {

        // Comm.SaveBZ({ Steps: 3, Val: pickOption.choose }).then(res => {
        //     //console.log('res :>> ', res);
        //     let complete = stateData.completeList;
        //     if (complete.indexOf(3) == -1) {
        //         complete.push(3);
        //         mainInfo.setData("completeList", complete); //当前步骤加入已完成列中
        //     }
        //     nextStep(key);
        // })

        let complete = stateData.completeList;
        if (complete.indexOf(3) == -1) {
            complete.push(3);
            mainInfo.setData("completeList", complete); //当前步骤加入已完成列中
        }
        // emit("disabledStatus");   //更新按钮状态
        pickOption.show=false;
        nextStep(3);
    } else {
        message.warning('请先选择业务');
        return false;
    }
}


// 弹出对话部分
const talkData = reactive({
    visible: false, //弹窗显示
    choose: "",    //选中的选项
    options: [
        {
            name: "您好，欢迎光临！请问您办理什么业务？",
            value: "A",
            key: 1,
        },
        {
            name: "Welcome！What can i do for you？",
            value: "B",
            key: 2,
        },
        {
            name: "手语",
            value: "C",
            key: 3,
        },
    ],
});

const chooseItem = (param) => {

    //console.log("param :>> ", param);
    pickOption.choose = param.id;
    // talkData.choose = val;
    // data.btnShow = true;   //显示下一步按钮
    // // 向后端发送数据
    // if (val) {
    //     // Comm.SaveBZ({
    //     //   Steps: 1,
    //     //   Val: val,
    //     // }).then((res) => {
    //     //   //console.log("res :>> ", res);
    //     // });
    // }
    // videoPlay();
};

defineExpose({
    data,
    setStep,
    nextStep
})
</script>

<style lang="scss" scoped>
.chose-box {
    top: 23%;
    left: 50%;
    width: 10%;
    // display: grid;
    z-index: 2;
    min-width: 160px;
    position: absolute;
    transform: translateX(-50%);
    z-index: 100;
}

.chose-btn {
    button {
        display: block;
        margin: 20px 0;
        width: 100%;
        font-weight: 600;
        border-radius: 3px;

        &.choc {
            background-color: #79d1ff;
            color: #000;

            /* box-shadow: 1px 1px 4px; */
            border-color: #79d1ff;
        }
    }
}

.chose-bot {
    display: flex;
    justify-content: space-between;
    // button {
    //     color: #fff;
    //     background: #984822;
    //     border-color: #984822;
    //     &:hover {
    //         background: #cc8246;
    //         border-color: #cc8246;
    //     }
    // }
}
</style>
