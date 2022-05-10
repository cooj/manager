  <!-- 单据审核 -->
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
                    <a-button @click="handleOk('B')">重置</a-button>
                    <a-button type="primary" @click="handleOk('A')">通过</a-button>
                </div>
            </template>
            <div style="height: calc(100vh - 300px); overflow: auto">
                <component class="pans-x" :is="bill.curComponent" :form="bill.form" ref="getFormData"></component>
            </div>
        </a-modal>
    </div>

</template>

<script  setup>
import { ref, reactive, defineAsyncComponent, onBeforeMount, onMounted, unref, markRaw} from "vue";
import { documentApproval } from "@/utils/fileSource";
import Talk from "@/components/modal/talk.vue";
import { Comm, req_all, http_step6 } from '@/api/api';
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
    getSource: documentApproval(stateData.role), //取得对应角色的视频
    stepVal: 0, //当前操作的步骤（用于切换到对应的视频动画）
    myVideo: null,
});

// 设置当前的操作状态（页面显示已完成状态或未操作状态）
const setStep = async (key) => {

    nextStep(key);
}

// 执行下一步事件
const nextStep = async (key, isFail) => {
    //console.log("key :>> ", key);
    data.stepVal = key;
    videoPlay();

    let complete = stateData.completeList;
    if (key == 1) {

        await wait(2000);

        //是否完成第5步
        if (complete.indexOf(5) == -1) {
            message.warning('没有完成单据填写步骤');
            return false
        } else {
            //获取已选择的表单和填写的数据
            // const result = await http_step6.GetBillData();
            // //console.log(result);
            // if (result.BillsNo) {
            //     let comp = await AsyncComp(result.BillsNo);
            //     bill.curComponent = markRaw(comp);
            //     bill.form = JSON.parse(result.Val);
            //     bill.visible = true;
            // }

            let choseBill = Session.get("step4");
            if (choseBill) {
                let comp = await AsyncComp(choseBill.id);
                bill.curComponent = markRaw(comp);

                let BillData = Session.get("step5");
                bill.form = BillData;
                bill.visible = true;
            }


        }

    } else if (key == 2) {
        if (isFail) {
            emits("childClick", 5);   //返回上一步
        } else {
            if (complete.indexOf(6) == -1) {
                complete.push(6);
                mainInfo.setData("completeList", complete); //当前步骤加入已完成列中
            }
            
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
    curComponent: "",
    form: ""
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

    // Session.set("step5", getFormData.value.formData.form)
    // bill.visible = false;
    // nextStep(data.stepVal + 1);

    var fail = ""; //用于判断，回到上一步的操作
    if (param == "A") { // 确定

        // const result = await Comm.SaveBZ({ Steps: 6 });
        Session.set("step6", "完成")

    } else if (param == "B") { //取消

        // const result = await http_step6.FailBill({ Steps: 6 });
        Session.remove("step5")
        let complete = stateData.completeList;
        if (complete.indexOf(5) != -1) {
            complete.splice(complete.indexOf(5), 1)
            mainInfo.setData("completeList", complete);
        }

        fail = 1;
    }

    bill.visible = false;
    nextStep(data.stepVal + 1, fail);
}

defineExpose({
    data,
    setStep,
    nextStep
})
</script>

<style lang="scss" scoped>
.pans-x{
    position: relative;
    &::after{
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
    }
}
</style>
