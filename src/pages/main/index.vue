
<!-- 任务列表页面 -->
<template>

    <div class="full-box">
        <div class="user-type">
            <h3>模拟角色选择</h3>
            <a-radio-group v-model:value="user" @change="setUser">
                <a-radio :value="1" class="radio"><span style="font-size: 16px">角色一</span></a-radio>
                <a-radio :value="2" class="radio"><span style="font-size: 16px">角色二</span></a-radio>
                <a-radio :value="3" class="radio"><span style="font-size: 16px">角色三</span></a-radio>
                <a-radio :value="4" class="radio"><span style="font-size: 16px">角色四</span></a-radio>
            </a-radio-group>
        </div>
        <div class="main-box">
            <div class="top">
                <div class="posit">
                    当前任务：<span class="tableText">首页</span><span style="color: red"> - 大堂经理</span>
                </div>

                <a-button class="go-back">
                    <router-link to="/"> 返回首页</router-link>
                </a-button>
            </div>
            <div class="info-text">
                大堂经理是银行业改善金融服务、提高服务质量的一个重要环节。银行大堂经理岗位设计的业务内容非常广泛，对综合素质要求较高。
                大堂经理需协助管理和监督银行事务，以规范的服务礼仪接待客户，引导、解答客户需求，减少客户投诉。
                大堂经理岗熟知银行各类服务内容，与客户沟通交流时，推介适合的银行金融产品，提供理财建议。
            </div>
            <a-table class="table-box" :pagination="false" :columns="tableData.columnsList"
                :data-source="tableData.dataList">
                <!-- #action="{ record }" -->
                <template #action="{ record }">
                    <div class="table-btn">

                        <a-button v-if="record.submit" type="primary" danger disabled>
                            开启</a-button>
                        <a-button v-else-if="record.id == tableData.openId" type="primary" danger
                            @click="openTask(record)">继续</a-button>
                        <a-button v-else type="primary" danger @click="openTask(record)">开启</a-button>

                        <a-button v-if="record.submit" type="primary" danger @click="RedoTask(record)">重做
                        </a-button>
                        <a-button v-else-if="record.id == tableData.openId" type="primary" danger
                            @click="RedoTask(record)">重做
                        </a-button>
                        <a-button v-else type="primary" danger disabled>重做</a-button>

                        <a-button v-if="record.submit" type="primary" danger disabled>完成</a-button>
                        <a-button v-else-if="record.id == tableData.openId" type="primary" danger
                            @click="submitTask(record)">提交
                        </a-button>
                        <a-button v-else type="primary" danger disabled>提交</a-button>

                    </div>
                </template>
            </a-table>
        </div>
    </div>
</template>
  
<script setup>
import { onBeforeMount } from 'vue';
import { reactive, ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { getCurrentInstance, inject, provide } from "@vue/runtime-core";
import { Comm,  req_all } from '@/api/api';
import { Session, wait } from '@/utils';

// import { mainInfo } from '@/stores';
import { mainInfo } from '@/store/mainInfo';
const stateData = mainInfo.data;  //获取store保存的数据

const router = useRouter();
// table数据
const tableData = reactive({
    openId: "",  //开启任务的id
    dataList: [],
    columnsList: [
        {
            title: "序号",
            dataIndex: "key",
            align: "center",
            // slots: { title: 'customTitle' },
            // slots: { customRender: 'name' },
        },
        {
            title: "任务名称",
            dataIndex: "name",
            align: "center",
            slots: { customRender: "name" },
        },
        {
            title: "分值",
            dataIndex: "countVal",
            align: "center",
        },
        {
            title: "操作",
            dataIndex: "action",
            align: "center",
            width: 300,
            slots: { customRender: "action" },
        },
    ],
});
// 开启、继续任务
const openTask = (item) => {
    // console.log(item);
    if (item.type == 1 || item.type == 3) {
        router.push("/beforeBusiness");
    } else if (item.type == 2) {
        //向后端发送，记录操作的哪一套题
        // Comm.ReadySteps().then((res)=>{
        //   if(res){
        //   }
        // })
        Session.set("task", item.id)
        router.push("/inBusiness");
    }
};

// 重做
const RedoTask = (item) => {
    // console.log(item);
    Session.remove();   //清空所有缓存
    mainInfo.setData("current", 1);
    mainInfo.setData("completeList", []);
    openTask(item)
};
//提交
const submitTask = (item) => {

}
onBeforeMount(() => {
    let list = [
        {
            key: "1",       // 序号
            name: "营业前准备",    // 任务名称
            type: 1,        // 1、营业前；2、营业中；3、营业后
            countVal: "40",     // 分值
            submit: true,      // 是否完成（已提交）
            id: 1005,    // 数据id
        },
        {
            key: "2",
            name: "营业中服务",
            type: 2,
            countVal: "4",
            submit: true,
            id: 1006,
        },
        {
            key: "3",
            name: "营业后调整",
            type: 3,
            countVal: "4",
            submit: true,
            id: 100,
        },
        {
            key: "4",
            name: "异议及投诉处理",
            type: 2,
            countVal: "8",
            submit: false,
            id: 1007,
        },
        {
            key: "5",
            name: "上门服务",
            type: 2,
            countVal: "20",
            submit: false,
            id: 1008,
        },
        {
            key: "6",
            name: "代客操作",
            type: 2,
            countVal: "5",
            submit: false,
            id: 1009,
        },
        {
            key: "7",
            name: "风险识别",
            type: 2,
            countVal: "5",
            submit: false,
            id: 1012,
        },
        {
            key: "8",
            name: "营业后调整",
            type: 2,
            countVal: "16",
            submit: false,
            id: 1013,
        },
    ]

    tableData.dataList = list;
    let openId = Session.get("task");
    if (openId) {
        tableData.openId = openId;
    }
})


//模拟设置角色
const user = ref()

const setUser = (e) => {
    Session.set("user", user.value)
    mainInfo.setData("role", user.value);
}
onBeforeMount(() => {
    var s = Session.get("user");
    // console.log(s);
    user.value = s ? s : 1;

})
</script>
<style lang="scss" scoped>
.full-box {
    width: 100%;
    height: 100%;
    padding: 20px;
    overflow: auto;

    .main-box {
        width: 1200px;
        max-width: 100%;
        min-height: 100%;
        background: #fff;
        margin: 0 auto;
        border-radius: 15px;

        .top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px 40px;
            border-bottom: 1px solid #eee;

            .posit {
                font-weight: bold;
                font-size: 18px;
            }

            .go-back {
                background: #e60012;
                border-color: #e60012;
                border-radius: 3px;
                color: #fff;
            }
        }

        .info-text {
            padding: 20px;
            text-indent: 2em;
            line-height: 1.6;
            font-size: 16px;
            color: #333333;
        }

        :deep(.ant-table-thead > tr > th) {
            background-color: #fa805b;
            font-weight: bold;
            color: #fff;
            font-size: 16px;
            padding: 12px 15px;
        }
    }
}

.table-btn {
    button {
        +button {
            margin-left: 10px;
        }
    }
}

.user-type {
    position: fixed;
    top: 80px;
    left: 10px;

    .radio {
        display: block;
    }
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
