  <!-- 引导填单-->
<template>
    <div class="video-box"  :class="data.stepVal == 1 ? 'show' : ''">
        <video id="video1" muted autoplay="true" preload="false">
            <source :src="data.getSource.step1" type="video/mp4" />
        </video>
    </div>
    <div class="video-box"  :class="data.stepVal == 2 ? 'show' : ''">
        <video id="video2" muted autoplay="true" preload="false">
            <source :src="data.getSource.step2" type="video/mp4" />
        </video>
    </div>
    <div class="modal-box">
        <a-modal :visible="bill.show" :width="850" :closable="false" :centered="true" :mask="false"
            :maskClosable="false" getContainer=".modal-box">
            <ul class="bill-box">
                <li v-for="(item, index) in bill.list" :key="index" :class="bill.choose == item.id ? 'on' : ''">
                    <div class="card" @click="itemChoses(item)">
                        <div class="imco">
                            <!-- <img :src="item.img" /> -->
                            <img :src="BillImages(item.id)" />
                        </div>
                        <div class="text">
                            <div class="lt">
                                <a-radio :checked="bill.choose == item.id"></a-radio>
                            </div>
                            <div class="gt">{{ item.name }}</div>
                        </div>
                    </div>
                </li>
            </ul>
            <template #footer>
                <div style="text-align: center">
                    <a-button type="primary" @click="handleChange">确定</a-button>
                </div>
            </template>
        </a-modal>
    </div>
</template>
<script setup>

import { ref, reactive, onBeforeMount, onMounted, unref } from "vue";
import { guidedFilling, BillImages } from "@/utils/fileSource";
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
    getSource: guidedFilling(stateData.role), //取得对应角色的视频
    stepVal: 0, //当前操作的步骤（用于切换到对应的视频动画）
    myVideo: null,

});

// 设置当前的操作状态（页面显示已完成状态或未操作状态）
const setStep = (key) => {
    if (key == 1) {
        setTimeout(() => {
            bill.show = true
        }, 2000)
    }
    nextStep(key);
}

// 执行下一步事件
const nextStep = (key) => {
    //console.log("key :>> ", key);
    data.stepVal = key;
    videoPlay();

    if (key == 2) {
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
    show: false,
    choose: "",
    curItem: "",
    list: [
        {
            id: 1,
            name: "进账单",
            value: "C",
        },
        {
            id: 2,
            name: "结算业务申请书",
            value: "D",
        },
        {
            id: 3,
            name: "个人结算业务申请书",
            value: "E",
        },
        {
            id: 4,
            name: "现金解款单",
            value: "I",

        },
        {
            id: 5,
            name: "境内汇款申请书",
            value: "O",
        },
        {
            id: 6,
            name: "境外汇款申请书",
            value: "P",
        },
        {
            id: 7,
            name: "信用卡激活申请书",
            value: "L",
        },
        {
            id: 8,
            name: "现金缴纳单",
            value: "F",
        },
        {
            id: 9,
            name: "银行本票申请书",
            value: "G",
        },
        {
            id: 10,
            name: "银行汇票申请书",
            value: "H",

        },
        {
            id: 11,
            name: "挂失止付通知书",
            value: "J",

        },
        {
            id: 12,
            name: "现金存款单",
            value: "K",

        },
        {
            id: 13,
            name: "开立个人银行结算账户申请书",
            value: "A",
        },
        {
            id: 14,
            name: "开立单位银行结算账户申请书",
            value: "B",
        },
        {
            id: 15,
            name: "个人客户挂失申请书",
            value: "N",
        },
        {
            id: 16,
            name: "个人定期存款申请书",
            value: "M",
        },
        {
            id: 17,
            name: "个人通知存款申请书",
            value: "Q",
        },
    ],
})
// 选中表单
const itemChoses = (item) => {
    bill.choose = item.id;
    bill.curItem = item;
}
const handleChange = () => {
    if (bill.choose) {
        // Comm.SaveBZ({ Step: 4, Val: bill.curItem.value }).then(res => {
        //     if (res) {
        //         bill.show=false;
        //         let complete = stateData.completeList;
        //         if (complete.indexOf(4) == -1) {
        //             complete.push(4);
        //             mainInfo.setData("completeList", complete); //当前步骤加入已完成列中
        //         }
        //         nextStep(2)
        //     }
        // })
        bill.show = false;
        let complete = stateData.completeList;
        if (complete.indexOf(4) == -1) {
            complete.push(4);
            mainInfo.setData("completeList", complete); //当前步骤加入已完成列中
        }
        nextStep(2)

        // 这里使用本地缓存，记录当前选中的单据，用于下一步填写操作
        //sessionStorage.setItem("step4", bill.curItem.value)
        Session.set("step4", bill.curItem)
    } else {
        message.warn("请先选择一个单据");
        return false;
    }
}


defineExpose({
    data,
    setStep,
    nextStep,
})
</script>

<style lang="scss" scoped>
.modal-box {
    :deep(.ant-modal-content) {
        background-color: rgba(0, 0, 0, 0.3);
    }

    :deep(.ant-modal-mask) {
        background-color: rgba(0, 0, 0, 0.15);
    }

    :deep(.ant-modal-footer) {
        border: 0;

        button {
            background-color: #f77f2a;
            border-color: #f77f2a;
        }
    }
}

.bill-box {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    height: 460px;
    overflow: auto;
    padding: 0 5px;

    >li {
        width: 20%;
        padding: 10px;

        &.on {
            .card {
                border-color: #f77f29;
                color: #f77f29;

                &::after {
                    content: "√";
                    font-size: 36px;
                    line-height: 36px;
                    font-weight: bold;
                    position: absolute;
                    top: 0;
                    right: 3px;
                    color: #f77f29;
                }

                .text {
                    color: #f77f29;
                }
            }
        }

        .card {
            height: 100%;
            width: 100%;
            position: relative;
            // background: #fff;
            // border: 1px solid transparent;
            // padding: 5px;
            cursor: pointer;
            color: #ddd;

            &:hover {
                border-color: #f77f29;
                color: #f77f29;

                .text {
                    color: #f77f29;
                }
            }

            .imco {
                position: relative;
                width: 100%;
                padding-bottom: 72%;
                border: 1px solid;

                >img {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    object-fit: cover;
                }
            }

            .text {
                line-height: 1.2;
                padding-top: 5px;
                display: flex;
                color: #ffa666;

                :deep(.ant-radio-checked) {
                    .ant-radio-inner {
                        border-color: #f77f29;

                        &::after {
                            background-color: #f77f29;
                        }
                    }
                }

                .gt {
                    padding-top: 4px;
                }
            }
        }
    }
}
</style>
