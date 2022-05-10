<template>
  <a-config-provider :locale="locale">
    <router-view v-if="isRouterAlive"></router-view>
  </a-config-provider>

  <!-- <i class="fa fa-refresh" @click="reload" title="刷新页面"></i> -->
</template>

<script  lang="ts" setup>
import { ref, nextTick, provide } from "vue";
import BaseTheme from "@comp/others/BaseTheme.vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
dayjs.locale("zh-cn");

const locale = ref(zhCN);

// 局部组件刷新
const isRouterAlive = ref(true);
const reload = () => {
  isRouterAlive.value = false;
  nextTick(() => {
    isRouterAlive.value = true;
  });
};
provide("reload", reload);
</script>
<style scoped>
.fa.fa-refresh {
  position: fixed;
  top: 20px;
  right: 20px;
  font-size: 24px;
  z-index: 10;
  cursor: pointer;
  color: #02a9f4;
}
</style>
<style>
@import "@/assets/css/font-awesome.min.css";
@import "@/assets/css/base.scss";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100%;
  background: linear-gradient(
    135deg,
    rgba(242, 246, 248, 1) 0%,
    rgba(60, 111, 77, 0.35) 11%,
    rgba(10, 74, 30, 0.35) 14%,
    rgba(181, 198, 208, 0.35) 26%,
    rgba(38, 212, 73, 0.35) 47%,
    rgba(38, 206, 84, 0.35) 49%,
    rgba(38, 164, 168, 0.35) 64%,
    rgba(38, 142, 212, 0.35) 72%,
    rgba(38, 142, 212, 0.35) 74%,
    rgba(38, 142, 212, 0.36) 86%,
    rgba(38, 142, 212, 0.36) 92%,
    rgba(74, 10, 10, 0.36) 100%
  );
}
</style>

