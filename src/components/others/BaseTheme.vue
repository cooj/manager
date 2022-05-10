<template>
    <div @click="themeMode">切换</div>
</template>
<script setup>
import { ref } from '@vue/reactivity';



const themeMode=()=>{
    document.documentElement.classList.toggle("dark");
    // document.documentElement.classList.toggle("dark");
    // document.getElementById("app").classList.toggle("dark");
}
</script>
<style>
  .dark {
    transition: all 0.5s; /* 增加动画，不会显得那么僵硬 */
    filter: invert(1) hue-rotate(180deg);
  }
/* 浅色模式样式 */
@media (prefers-color-scheme: light) {
}
/* 暗色模式样式 */
@media (prefers-color-scheme: dark) {
  html {
    transition: all 0.5s; /* 增加动画，不会显得那么僵硬 */
    filter: invert(1) hue-rotate(180deg);
  }
}
</style>