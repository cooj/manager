<template>
  <header class="header">
    <div class="lt">
      <router-link to="/">
        <img src="@/assets/images/yh2-logo.png" alt="" />
      </router-link>
    </div>
    <div class="cen">
      <a-statistic-countdown
        class="time"
        title="倒计时"
        :value="deadline"
        @finish="onFinish"
      />
      <a-button class="endBtn" type="primary">结束竞赛</a-button>
    </div>
    <div class="gt">
      <div class="account">当前账户:<span>S00010005(用户5)</span></div>
      <div class="userinfo">
        <img src="@/assets/images/yh2-uinfo.png" alt="" />
        <span>个人信息</span>
      </div>
      <div class="logout">
        <img src="@/assets/images/yh2-uclose.png" alt="" />
        <span>注销</span>
      </div>
    </div>
  </header>
</template>

<script setup>
// import { Comm } from "@/api/api.js";
import { reactive, ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
const route = useRoute();

// 倒计时结束
const onFinish = () => {
  //console.log("finished!");
};
const deadline = ref(Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30);
//console.log(deadline.value);
</script>

<style lang="scss" scoped>
.header {
  height: 100%;
  width: 100%;
  padding: 0 20px;
  // backdrop-filter: saturate(180%) blur(20px);
  // -webkit-backdrop-filter: saturate(180%) blur(20px);
  background: #ffffffcc;
  // box-shadow: 0 0 10px #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .lt {
    width: 38%;
  }
  .gt {
    width: 38%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 16px;
    color: #f55f3b;
    .userinfo {
      margin: 0 20px;
      cursor: pointer;
      display: flex;
      align-items: center;
      img {
        height: 27px;
        margin-right: 3px;
      }
    }
    .logout {
      cursor: pointer;
      display: flex;
      align-items: center;
      img {
        height: 28px;
        margin-right: 4px;
      }
    }
    .userinfo:hover,
    .logout:hover {
      filter: opacity(0.8);
    }
  }
  .cen {
    display: flex;
    align-items: center;

    .time {
      display: flex;
      align-items: center;
      color: #fe694b;
      border: 2px solid #fe694b;
      padding: 0 10px;
      margin-right: 15px;
      border-radius: 4px;
      :deep(.ant-statistic-title) {
        margin-bottom: 0;
        margin-right: 5px;
        color: #fe694b;
        font-size: 16px;
      }
      :deep(.ant-statistic-content) {
        color: #fe694b;
        font-size: 18px;
      }
    }
    .endBtn {
      background-color: #fe694b;
      border-color: #fe694b;
      &:hover {
        opacity: 0.85;
      }
    }
  }
}
</style>