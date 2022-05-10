<template>
    <ul class="mon_gt">
        <li v-for="(item, index) in data.itemList" :key="index">
            <div class="name">{{ item.name }}</div>
            <div class="money">
                <a-input type="text" v-model:value="item.value"  :maxlength="1" @input="sendVal()"  />
                <!-- v-enter-next-input  -->
            </div>
        </li>
    </ul>
</template>

<script setup>
import { onBeforeMount, reactive } from "vue";

const Props = defineProps({
    viewData: {
        type: Object,
        default: {}
    }
})
const Emits=defineEmits(["getMoney"])

const data = reactive({
    formList: [
        { name: "亿", value: "" },
        { name: "千", value: "" },
        { name: "百", value: "" },
        { name: "十", value: "" },
        { name: "万", value: "" },
        { name: "千", value: "" },
        { name: "百", value: "" },
        { name: "十", value: "" },
        { name: "元", value: "" },
        { name: "角", value: "" },
        { name: "分", value: "" },
    ],
    itemList: {},
})
onBeforeMount(() => {
//console.log(Props.viewData);

    data.itemList = Props.viewData;
})


const sendVal=()=>{
    // //console.log(data.itemList);
    Emits("getMoney",data.itemList);    //值传递给父组件
}
</script>

<style lang="scss" scoped>
.mon_gt {
    display: flex;
    text-align: center;
    margin:-5px;
    li {
        flex: 1;
        border-right: 1px solid #888;
        &:last-child {
            border-right: 0;
        }
        .name {
            border-bottom: 1px solid #888;
            padding: 2px 0;
        }
        .money {
            padding: 2px 0;
            input {
                text-align: center;
            }
        }
    }
}
</style>