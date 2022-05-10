<template>
  <div class="a-box">
    <div class="right-btn">
      <a-button  type="primary" danger><router-link to="/">返回</router-link></a-button>
    </div>
    <div class="center-box">
      <div class="lt-img">
        <img src="@/assets/images/role.png" />
      </div>
      <div class="gt-info">
        <div class="tle">{{ data.headerText }}</div>
        <div class="cont-box">
          <div class="over-box">
            <div class="timu">{{ data.title }}</div>
            <div class="xuanxiang">
              <a-checkbox-group v-model:value="data.testVal" @change="onChange">
                <a-row :gutter="[24, 16]">
                  <a-col
                    :span="24"
                    style="display: flex"
                    v-for="(item, index) in data.dataList"
                    :key="index"
                  >
                    <a-checkbox :value="item.key" style="font-size: 18px">
                      {{ item.value }}</a-checkbox
                    >
                  </a-col>
                </a-row>
              </a-checkbox-group>
            </div>
          </div>

          <div class="bot-btn">
            <a-button
              size="large"
              style="color: #984807; font-weight: 600"
              disabled
              >上一题</a-button
            >
            <a-button size="large" style="color: #984807; font-weight: 600"
              >提交</a-button
            >
            <a-button size="large" style="color: #984807; font-weight: 600"
              >下一题</a-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "@vue/reactivity";

const data = reactive({
  headerText: "营业开始前，大堂经理需要进行营业前准备工作。",
  testVal: [],
  title: "2、(不定项选择)下列用语中，属于服务忌语的是（ ）。",
  dataList: [
    {
      key: 1,
      value: "A、请；请问；请说",
    },
    {
      key: 2,
      value: "B、请多指教",
    },
    {
      key: 3,
      value: "C、这边是大客户服务专用窗口，你到那边排队去",
    },
    {
      key: 4,
      value: "D、您走好",
    },
    {
      key: 5,
      value: "E：",
    },
  ],
});
const onChange = () => {};
</script>
<style lang="scss" scoped>
.a-box {
  width: 100%;
  height: 100%;
  background: url(@/assets/images/backgroundSubject.png);
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  overflow: auto;
}
.right-btn {
  position: fixed;
  top: 100px;
  right: 20px;
}
.center-box {
  padding: 30px 40px 30px 40px;
  border: 2px solid #856852;
  box-shadow: 1px 1px 4px;
  border-radius: 4px;
  width: 1200px;
  min-height: 80%;
  margin: auto;
  display: flex;
  .lt-img {
    width: 200px;
    padding-right: 40px;
  }
  .gt-info {
    width: calc(100% - 200px);
    .tle {
      font-size: 20px;
      font-weight: 600;
      color: #fff;
      background-color: rgb(204, 130, 70);
      padding: 10px;
      margin-bottom: 20px;
      border-radius: 8px;
      padding-left: 30px;
    }
  }
}
.cont-box {
  height: calc(100% - 70px);
  background: #eee;
  color: #984807;
  background-color: rgb(235, 186, 146);
  padding: 25px 25px 15px;
  .timu {
    font-weight: bold;
    font-weight: bold;
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 10px;
  }
  .xuanxiang {
    background-color: #fff;
    padding: 20px 30px;
  }
  .over-box {
    height: calc(100% - 50px);
    overflow: auto;
  }
  .bot-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
  }
}
</style>
<route lang="yaml">
meta:
  layout: home
</route>