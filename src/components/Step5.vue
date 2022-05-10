  <!-- 单据填写 -->
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
    <div class="modal-box">
        <a-modal title width="1280px" :closable="false" :mask="false" :maskClosable="false" :visible="bill.visible">
            <template #footer>
                <div style="text-align: center">
                    <a-button type="primary" @click="handleOk">确定</a-button>
                </div>
            </template>
            <div style="height: calc(100vh - 300px); overflow: auto">
                <component :is="bill.curComponent" ref="getFormData"></component>
            </div>
        </a-modal>
    </div>
</template>
<script  setup>
import { ref, reactive, defineAsyncComponent, onBeforeMount, onMounted, unref, markRaw } from "vue";
import { documentFilling } from "@/utils/fileSource";
import Talk from "@/components/modal/talk.vue";
import { Comm, req_all, http_step5 } from '@/api/api';
import { Session, wait } from '@/utils';
import { mainInfo } from '@/store/mainInfo';
import { message } from "ant-design-vue";

const stateData = mainInfo.data;  //获取store保存的数据
// const stateData = mainInfo.getState();  //获取store保存的数据
// //console.log(stateData);

const emits = defineEmits(["disabledStatus", "childClick"]);

//动态引入Step1 ~ Step9组件
const AsyncComp = (key) => {
    return defineAsyncComponent(() =>
        // import("../../components/Step1.vue")
        import(`../components/bill/bill${key}.vue`)
    )
}


// 视频对应部分
const data = reactive({
    btnShow: false, //下一步、完成按钮显示
    getSource: documentFilling(), //取得对应角色的视频
    stepVal: 0, //当前操作的步骤（用于切换到对应的视频动画）
    myVideo: null,
});

// 设置当前的操作状态（页面显示已完成状态或未操作状态）
const setStep = async (key) => {

    nextStep(key);
}

// 执行下一步事件
const nextStep = async (key) => {
    //console.log("key :>> ", key);
    data.stepVal = key;
    videoPlay();

    let complete = stateData.completeList;
    if (key == 1) {
        await wait(2000);   //等待2s后执行
        //是否完成第四步
        if (complete.indexOf(4) == -1) {

            message.warning('没有完成引导填单步骤');
            return false
        } else {

            // http_step5.GetBill().then((res) => {
            //     ////console.log("单据填写 :>> ", res);
            //     if (res) {
            //         bill.curComponent = await AsyncComp(res);
            //         bill.visible = true;
            //     }
            // });

            // const res = await http_step5.GetBill();
            // bill.curComponent = await AsyncComp(res);
            // bill.visible = true;

            let choseBill = Session.get("step4");
            let comp = await AsyncComp(choseBill.id);
            bill.curComponent = markRaw(comp);

            bill.visible = true;
        }


    } else if (key == 2) {

        if (complete.indexOf(5) == -1) {
            complete.push(5);
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

const bill = reactive({
    visible: false,
    curComponent: ""
})

const getFormData = ref(null);
// 点击确定按钮
const handleOk = async (param) => {
    //console.log(getFormData.value);
    // 保存当前步骤和表单数据
    // const res = await req_all([http_step5.SaveBills({ val: getFormData.value.formData.form }), Comm.SaveBZ({ Steps: 5 })]);
    // if (res) {
    //     bill.visible = false;
    //     nextStep(data.stepVal + 1);
    // }

    Session.set("step5", getFormData.value.formData.form)
    bill.visible = false;
    nextStep(data.stepVal + 1);

}

defineExpose({
    data,
    setStep,
    nextStep
})
</script>

<style lang="scss">
</style>
