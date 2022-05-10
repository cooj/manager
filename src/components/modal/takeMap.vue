<template>
    <div class="troublesBox">
        <div class="im-box">
            <img src="@/assets/images/sceneMap.png" alt />
            <div class="item-boxh-bg">
                <div class="item-boxh">
                    <div
                        v-for="(item, index) in data.mapList"
                        :key="index"
                        :class="`item item-${item.key}`"
                        @click="openItem(item)"
                    ></div>
                </div>
            </div>
        </div>
        <a-modal
            class="tip-box"
            title
            width="400px"
            getContainer=".troublesBox"
            :visible="data.visible"
            centered
            :closable="false"
            :mask="false"
            :maskClosable="false"
            @cancel="handleCancel"
        >
            <div class="c-text">请选择场景区域！</div>
            <template #footer>
                <a-button type="primary" @click="data.visible = false">确定</a-button>
            </template>
        </a-modal>
    </div>
</template>
<script setup>
import { reactive } from 'vue';


const data = reactive({
    visible: true,
    mapList: [
        {
            key: 1,
            val: "E",
            name: "对公柜台区",
        },
        {
            key: 2,
            val: "F",
            name: "综合柜台区",
        },
        {
            key: 3,
            val: "K",
            name: "VIP综合柜台区",
        },

        {
            key: 4,
            val: "D",
            name: "住房公积金柜台区",
        },

        {
            key: 5,
            val: "G",
            name: "等候区",
        },
        {
            key: 6,
            val: "H",
            name: "填单台",
        },
        {
            key: 7,
            val: "I",
            name: "VIP理财服务区",
        },
        {
            key: 8,
            val: "J",
            name: "VIP信贷服务区",
        },

        {
            key: 9,
            val: "L",
            name: "VIP等候区",
        },

        {
            key: 10,
            val: "B",
            name: "智能柜台服务区",
        },
        {
            key: 11,
            val: "A",
            name: "咨询引导台",
        },
        {
            key: 12,
            val: "C",
            name: "自助设备服务区",
        },
    ],
})

const emits = defineEmits(["itemOpen"])

const handleCancel=()=>{

}
const openItem = (item) => {
    //console.log(item);
    emits("itemOpen", item)
}   
</script>

<style lang="scss" scoped>
.troublesBox {
    width: 100%;
    height: 100%;
    padding: 25px 0 20px;
    text-align: center;
    background: #ebba92;
    display: flex;
    align-items: center;
    justify-content: center;
    .im-box {
        display: inline-block;
        // height: 100%;
        position: relative;
        img {
            // height: 100%;
            max-height: 780px;
            object-fit: cover;
        }
    }
    :deep(.ant-modal-mask) {
        background-color: rgba(153, 153, 153, 0.3);
    }

    :deep(.ant-modal) {
        .ant-modal-content {
            border-radius: 8px;
            box-shadow: 1px 1px 9px 3px;
        }
        .ant-modal-footer{
            text-align: center;
        }
        .ant-btn {
            background-color: #f77f2a;
            border-color: #f77f2a;
            &:hover {
                background-color: #f19f65;
                border-color: #f19f65;
            }
        }
    }
    .c-text {
        text-align: center;
        font-size: 18px;
        line-height: 2;
    }
}
.item-boxh-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    padding: 1.8% 8.5% 5.75%;
}
.item-boxh {
    width: 100%;
    height: 100%;
    position: relative;
    .item {
        position: absolute;
        cursor: pointer;
        transition: all 0.5s;
        // top: 100%;
        &:hover {
            background-color: rgba(194, 133, 123, 0.466);
        }
        &-1 {
            top: 0;
            left: 0;
            width: 14.2%;
            height: 48%;
        }
        &-2 {
            top: 0;
            left: 14.9%;
            width: 59.15%;
            height: 13.6%;
        }
        &-3 {
            top: 0;
            left: 74.75%;
            width: 25.3%;
            height: 13.6%;
        }
        &-4 {
            top: 49.2%;
            left: 0;
            width: 14.2%;
            height: 20%;
        }
        &-5 {
            top: 14.65%;
            left: 14.9%;
            width: 43.8%;
            height: 54.55%;
        }
        &-6 {
            top: 14.65%;
            left: 59.5%;
            width: 14.6%;
            height: 54.55%;
        }
        &-7 {
            top: 14.65%;
            left: 75.1%;
            width: 12.8%;
            height: 32.55%;
        }
        &-8 {
            top: 49.3%;
            left: 75.1%;
            width: 12.8%;
            height: 19.8%;
        }
        &-9 {
            top: 14.65%;
            left: 88.5%;
            width: 11.55%;

            height: 54.55%;
        }
        &-10 {
            left: 0;
            bottom: 0;
            width: 32.2%;
            height: 20.1%;
        }
        &-11 {
            width: 15%;
            height: 22%;
            left: 51.3%;
            top: 72%;
        }
        &-12 {
            width: 32.1%;
            height: 20.1%;
            bottom: 0;
            right: 0;
        }
    }
}
</style>