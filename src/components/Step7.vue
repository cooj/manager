<!-- 客户引导 -->
<template>
    <div class="video-box"  :class="data.stepVal == 1 ? 'show' : ''">
        <video id="video1" muted autoplay="true" preload="false">
            <source :src="data.getSource.step1" type="video/mp4" />
        </video>
    </div>

    <TakeMap v-show="map.showMap" @itemOpen="playOpen"></TakeMap>

</template>

<script setup>
import { ref, reactive, onBeforeMount, onMounted } from "vue";
import { message } from 'ant-design-vue';
import { customerGuidance } from "@/utils/fileSource";

import TakeMap from '@/components/modal/takeMap.vue';
import { Comm, req_all, http_step7 } from '@/api/api';
import { Session, wait } from '@/utils';
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

        nextStep(key);
    }

}

// 执行下一步事件
const nextStep =async (key) => {
    //console.log("key :>> ", key);

    data.stepVal = key;
    videoPlay();
    if (key == 1) { //操作完成
        await wait(2500);
        let complete = stateData.completeList;
        if (complete.indexOf(7) == -1) {
            complete.push(7)
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



// 场景地图部分
const map = reactive({
    showMap: false,   //选择场景弹窗
})

const playOpen = (item) => {
    //console.log(item);
    // Comm.SaveBZ({Steps: 2,Val: item.val}).then((res)=>{
    //   data.getSource = customerGuidance(item.key, stateData.role);
    //   map.showMap = false;
    //   data.stepVal = 1;
    //   videoPlay();
    // })
    data.getSource = customerGuidance(item.key, stateData.role);
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
