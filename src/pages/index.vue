
<!--
  首页加载的页面
 -->
<template>

</template>
  
<script setup>
import { onBeforeMount } from 'vue';
import { reactive, ref } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import { getCurrentInstance, inject, provide } from "@vue/runtime-core";
import { Comm,  req_all } from '@/api/api';
import { Session, wait } from '@/utils';

// import { mainInfo } from '@/stores';
import { mainInfo } from '@/store/mainInfo';
const stateData = mainInfo.data;  //获取store保存的数据

const router = useRouter();
const route =useRoute()

onBeforeMount(() => {
    // console.log(router)
    // console.log(route);
    if(route.path=="/"){
        router.push("/main")
    }
})

</script>
<style lang="scss" scoped>


</style>

<route lang="yaml">
meta:
  layout: home
</route>

<!-- <route>
{
  "meta": {
    "requiresAuth": false,
    "title": "登录页面",
    "keywords":"关键字",
    "description":"描述"
  },
  "layout": "home"
}
</route> -->