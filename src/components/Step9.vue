    <!-- 送别 -->
<template>
    <div class="video-box" :class="data.stepVal == 1 ? 'show' : ''">
        <video id="video1" muted autoplay="true" preload="false">
            <source :src="data.getSource.step1" type="video/mp4" />
        </video>
    </div>
    <div class="video-box" :class="data.stepVal == 2 ? 'show' : ''">
        <video id="video2" muted :autoplay="false" preload="false">
            <source :src="data.getSource.step2" type="video/mp4" />
        </video>
        <div v-if="data.btnShow" class="btn-next" style="bottom: 20px; left: 78%">
            <img @click="nextStep(3)" src="@/assets/images/next.png" />
        </div>
    </div>
    <div class="video-box" :class="data.stepVal == 3 ? 'show' : ''">
        <video id="video3">
            <source :src="data.getSource.step3" type="video/mp4" />
        </video>
    </div>
    <Talk v-model:visible="talkData.visible" v-model:talkData="talkData.options" @handleCancel="handleCancel"
        @chooseItem="chooseItem" />

</template>
<script setup>
import { ref, reactive, onBeforeMount, onMounted } from "vue";
import { message } from 'ant-design-vue';
import { goodbye } from "@/utils/fileSource";
import Talk from "@/components/modal/talk.vue";

import { Comm } from '@/api/api';
import { mainInfo } from '@/store/mainInfo';
import { wait } from "@/utils";
const stateData = mainInfo.data;  //获取store保存的数据
// //console.log(stateData);

const emits = defineEmits(["disabledStatus", "childClick"]);



// 视频对应部分
const data = reactive({
    btnShow: false, //下一步、完成按钮显示
    getSource: goodbye(stateData.role), //取得对应角色的视频
    stepVal: 0, //当前操作的步骤（用于切换到对应的视频动画）
    myVideo: null
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
        await wait(3000)
        talkData.visible = true;

    } else if (key == 3) {  //操作完成

        let complete = stateData.completeList;
        if (complete.indexOf(9) == -1) {
            // 保存答案
            // const result = await Comm.SaveBZ({
            //     Steps: 9,
            //     Val: talkData.choseVal,
            // })
            complete.push(9)
            mainInfo.setData("completeList", complete); //当前步骤加入已完成列中
        }
        await wait(800)
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
    //console.log(data.stepVal);
    data.myVideo = document.getElementById(`video${data.stepVal}`);
    data.myVideo.load();
    data.myVideo.play();

}

onMounted(() => {
    // //console.log('data :>> ', data);
})

// 弹出对话部分
const talkData = reactive({
    visible: false, //弹窗显示
    choseVal: "",
    options: [
        {
            name: "请慢走！",
            value: "A",
            key: 1,
        },
        {
            name: "Hope to see you again",
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

const handleCancel = () => {
    talkData.visible = false;
};

const chooseItem = (val) => {
    //console.log("val :>> ", val);

    // 向后端发送数据
    if (val) {
        // Comm.SaveBZ({
        //     Steps: 9,
        //     Val: val,
        // }).then((res) => {
        //   //console.log("res :>> ", res);
        // });
    }
    talkData.choseVal = val;
    nextStep(data.stepVal + 1);
    data.btnShow = true;   //显示下一步按钮
};



defineExpose({
    data,
    setStep,
    nextStep
})
</script>

<style lang="scss" scoped>
</style>
