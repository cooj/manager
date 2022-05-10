<template>
  <div class="body-top">
    <Header></Header>
  </div>
  <div class="body-cont" v-if="isReady">
    <router-view v-slot="{ Component }">
      <transition name="fade" :duration="{ enter: 200, leave: 300 }">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<script setup >
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Comm,  req_all } from '@/api/api';
import Header from "@comp/common/header.vue";
import { mainInfo } from '@/store/mainInfo';
// console.log(mainInfo);

const router = useRouter();
const isReady = ref(false);

//获取角色、当前操作步骤、已操作完成的步骤
// req_all([Comm.GetSteps(),Comm.ReadySteps()]).then((res) => {
//   mainInfo.setData("role",res[0].roleVal);
//   mainInfo.setData("current",res[0].current);
//   mainInfo.setData("completeList",res[1]);
// })

isReady.value = true;
// mainInfo.setData("role", 1);
// mainInfo.setData("current", 2);
// mainInfo.setData("completeList", [1]);

</script>
<style scoped>
.body-top {
  height: 70px;
}

.body-cont {
  height: calc(100vh - 70px);
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
