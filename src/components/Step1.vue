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
    <div class="btn-audio">
      <audio id="audio1"></audio>
      <img @click="audioPlay(3)" src="@/assets/images/play.png" />
    </div>
    <div v-if="data.btnShow" class="btn-next" style="bottom: 20px; left: 78%">
      <img @click="nextStep(4)" src="@/assets/images/next.png" />
    </div>
  </div>
  <div class="video-box" :class="data.stepVal == 4 ? 'show' : ''">
    <video id="video4" muted :autoplay="false" preload="false">
      <source :src="data.getSource.step4" type="video/mp4" />
    </video>
    <div v-if="data.btnShow" class="btn-next" style="bottom: 20px; left: 78%">
      <img @click="nextStep(5)" src="@/assets/images/next.png" />
    </div>
  </div>
  <div class="video-box" :class="data.stepVal == 5?'show':''">
    <video id="video5" muted :autoplay="true" preload="false">
      <source :src="data.getSource.step5" type="video/mp4" />
    </video>
  </div>
  <Talk v-model:visible="talkData.visible" v-model:talkData="talkData.options" :multiple="talkData.multiple" @handleCancel="handleCancel"
    @chooseItem="chooseItem" @nextStepItem="nextStepItem" />
</template>

<script setup>
import { ref, reactive, onBeforeMount, onMounted, unref } from "vue";
import { receptionClient } from "@/utils/fileSource";
import Talk from "@/components/modal/talk.vue";
import { Comm } from '@/api/api';

import { mainInfo } from '@/store/mainInfo';
import { message } from "ant-design-vue";
const stateData = mainInfo.data;  //获取store保存的数据
// const stateData = mainInfo.getState();  //获取store保存的数据

// //console.log(stateData);

const emits = defineEmits(["disabledStatus", "childClick"]);


// 视频对应部分
const data = reactive({
  btnShow: false, //下一步、完成按钮显示
  getSource: receptionClient(stateData.role), //取得对应角色的视频
  stepVal: 0, //当前操作的步骤（用于切换到对应的视频动画）
  myVideo: null
});

// 设置当前的操作状态（页面显示已完成状态或未操作状态）
const setStep = (key) => {
  // if (key == "") {
  //   map.showMap = true;
  // } else {
  //   if (key == 4) {
  //     //需要获取已完成的状态
  //     data.getSource = troubleShooting(3, stateData.role);
  //   }
  //   nextStep(key);
  // }

  nextStep(key);

}

// 执行下一步事件
const nextStep = (key) => {
  //console.log("key :>> ", key);
  data.stepVal = key;
  videoPlay();
  if (key == 1) {
    var time1 = setTimeout(() => {
      nextStep(key + 1);
      clearTimeout(time1);
      setTimeout(() => {
        talkData.visible = true;
      }, 2500);
    }, 3500);
  } else if (key == 4) {
    talkData.choose = "";
    data.btnShow = false;
    var time1 = setTimeout(() => {
      talkData.visible = true;
    }, 1500);

  } else if (key == 5) {  //操作完成
    let complete = stateData.completeList;
    if (complete.indexOf(1) == -1) {
      complete.push(1)
      // mainInfo.pushCompete("completeList",1); //当前步骤加入已完成列中
      mainInfo.setData("completeList", complete); //当前步骤加入已完成列中
    }
    emits("disabledStatus");   //更新按钮状态
  }
};

// 音频对话播放
const audioPlay = () => {
  message.warn("没有设置录音");
  return false;
}
// 视频动画播放
const videoPlay = () => {

  data.myVideo = document.getElementById(`video${data.stepVal}`);
  data.myVideo.load();
  data.myVideo.play();
}

onMounted(() => {
  //console.log('data :>> ', data);
  // if (data.stepVal == 1) {
  //   var time1 = setTimeout(() => {
  //     data.stepVal += data.stepVal;
  //     videoPlay();
  //     clearTimeout(time1);
  //     setTimeout(() => {
  //       talkData.visible = true;
  //     }, 2500);

  //   }, 3500);
  // }

})

// 弹出对话部分
const talkData = reactive({
  visible: false, //弹窗显示
  choose: "",    //选中的选项
  multiple:true,
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
  talkData.choose = val;
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

  nextStep(data.stepVal + 1)
};

const nextStepItem = (val) => {
  //console.log(val);
}

defineExpose({
  data,
  setStep,
  nextStep
})
</script>



