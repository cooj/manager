<!-- 现场处理 -->
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
        <div class="btn-audio">
            <audio id="audio1"></audio>
            <img @click="audioPlay(3)" src="@/assets/images/play.png" />
        </div>
        <div v-if="data.btnShow" class="btn-next" style="bottom: 20px; left: 78%">
            <img @click="nextStep(3)" src="@/assets/images/next.png" />
        </div>
    </div>
    <div class="video-box" :class="data.stepVal == 3 ? 'show' : ''">
        <video id="video3">
            <source :src="data.getSource.step3" type="video/mp4" />
        </video>
        <div v-if="data.btnShow" class="btn-next" style="bottom: 20px; left: 78%">
            <img @click="nextStep(4)" src="@/assets/images/next.png" />
        </div>
    </div>
    <div class="video-box" :class="data.stepVal == 4 ? 'show' : ''">
        <video id="video4" muted autoplay="true" preload="false">
            <source :src="data.getSource.step4" type="video/mp4" />
        </video>
    </div>
    <TakeMap v-show="map.showMap" @itemOpen="playOpen"></TakeMap>
    <Talk v-model:visible="talkData.visible" v-model:talkData="talkData.options" @chooseItem="chooseItem" />

</template>

<script setup>
import { ref, reactive, onBeforeMount, onMounted } from "vue";
import { message } from 'ant-design-vue';
import { fieldTreatment } from "@/utils/fileSource";
import Talk from "@/components/modal/talk.vue";
import TakeMap from '@/components/modal/takeMap.vue';
import { Comm } from '@/api/api';
import { mainInfo } from '@/store/mainInfo';
const stateData = mainInfo.data;  //获取store保存的数据
// //console.log(stateData);

const emits = defineEmits(["disabledStatus", "childClick"]);



// 视频对应部分
const data = reactive({
    btnShow: false, //下一步、完成按钮显示
    getSource: "", //取得对应角色的视频
    stepVal: 0, //当前操作的步骤（用于切换到对应的视频动画）
    myVideo: null
});

// 设置当前的操作状态（页面显示已完成状态或未操作状态）
const setStep = (key) => {
    if (key == "") {
        map.showMap = true;
    } else {
        if (key == 4) {

            //需要获取已完成的状态
            // const res=await http_step7.GetScene({steps: key })
            // let num = 1;
            // if (res.Scene == "E") {
            //   num = 1
            // } else if (res.Scene == "D") {
            //   num = 2
            // } else if (res.Scene == "F") {
            //   num = 3
            // } else if (res.Scene == "G") {
            //   num = 4
            // } else if (res.Scene == "I") {
            //   num = 5
            // } else if (res.Scene == "J") {
            //   num = 6
            // } else if (res.Scene == "H") {
            //   num = 7
            // } else if (res.Scene == "L") {
            //   num = 8
            // } else if (res.Scene == "K") {
            //   num = 9
            // } else if (res.Scene == "B") {
            //   num = 10
            // } else if (res.Scene == "A") {
            //   num = 11
            // } else if (res.Scene == "C") {
            //   num = 12
            // }

            let num = 1;
            data.getSource = customerGuidance(num, stateData.role);

        }
        nextStep(key);
    }

}

// 执行下一步事件
const nextStep = (key) => {
    //console.log("key :>> ", key);

    data.stepVal = key;
    videoPlay();
    if (key == 1) {
        setTimeout(() => {
            nextStep(key + 1)
        }, 2500);
    } else if (key == 4) {  //操作完成
        let complete = stateData.completeList;
        if (complete.indexOf(8) == -1) {
            complete.push(8)
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

const handleCancel = () => {
    talkData.visible = false;
};

const chooseItem = (val) => {
    //console.log("val :>> ", val);
    data.btnShow = true;   //显示下一步按钮
    // 向后端发送数据
    if (val) {
        // Comm.SaveBZ({
        //   Steps: 1,
        //   Val: val,
        // }).then((res) => {
        //   //console.log("res :>> ", res);
        // });
    }

    videoPlay();
};

const nextStepItem = (val) => {
    //console.log(val);
}


// 场景地图部分
const map = reactive({
    showMap: false,   //选择场景弹窗
})

const playOpen = (item) => {
    //console.log(item);
    // Comm.SaveBZ({Steps: 2,Val: item.val}).then((res)=>{
    //   data.getSource = fieldTreatment(item.key, stateData.role);
    //   map.showMap = false;
    //   data.stepVal = 1;
    //   videoPlay();
    // })
    data.getSource = fieldTreatment(item.key, stateData.role);
    map.showMap = false;
    nextStep(1);
    // data.stepVal = 1;
    // videoPlay();
}


defineExpose({
    data,
    setStep,
    nextStep
})
</script>

<style lang="scss" scoped>
</style>
