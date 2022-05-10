<!-- 信用卡申请表 -->
<template>
  <BillBox>
    <template v-slot:title>信用卡申请表</template>
    <template v-slot:top>
      <p></p>
    </template>
    <template v-slot:body>
      <tr>
        <td colspan="4">
          <div class="text-center">姓名</div>
        </td>
        <td colspan="4">
          <a-input
            type="text"
            v-model:value="formData.form.val1.value"
            :maxlength="50"
          />
        </td>
        <td colspan="4">
          <div class="text-center">性别</div>
        </td>
        <td colspan="4">
          <div class="btext">
            <a-radio-group name="radioSex" v-model="formData.form.val2.value">
              <a-radio value="1" style="margin-left: 8px"
                ><span style="font-size: 16px">男</span></a-radio
              >
              <a-radio value="2"
                ><span style="font-size: 16px">女</span></a-radio
              >
            </a-radio-group>
          </div>
        </td>
        <td colspan="4">
          <div class="text-center">婚姻状况</div>
        </td>
        <td colspan="5">
          <a-input
            type="text"
            v-model:value="formData.form.val3.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center">手机号码</div>
        </td>
        <td colspan="4">
          <a-input
            type="text"
            v-model:value="formData.form.val4.value"
            :maxlength="50"
          />
        </td>
        <td colspan="4">
          <div class="text-center">QQ/邮箱</div>
        </td>
        <td colspan="8">
          <a-input
            type="text"
            v-model:value="formData.form.val5.value"
            :maxlength="50"
          />
        </td>
        <td colspan="2">
          <div class="text-center">子女数</div>
        </td>
        <td colspan="3">
          <a-input
            type="text"
            v-model:value="formData.form.val6.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center">身份证号码</div>
        </td>
        <td colspan="8">
          <a-input
            type="text"
            v-model:value="formData.form.val7.value"
            :maxlength="50"
          />
        </td>
        <td colspan="4">
          <div class="text-center">证件有效期</div>
        </td>
        <td colspan="9">
          <a-date-picker  v-model="formData.form.val8.value" valueFormat="YYYY-MM-DD" />
          <!-- <a-input
            type="text"
            v-model:value="formData.form.val8.value"
            :maxlength="50"
          /> -->
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center">身份证详细地址</div>
        </td>
        <td colspan="12">
          <a-input
            type="text"
            v-model:value="formData.form.val9.value"
            :maxlength="50"
          />
        </td>
        <td colspan="4">
          <div class="text-center">发证机关地区公安局</div>
        </td>
        <td colspan="5">
          <a-input
            type="text"
            v-model:value="formData.form.val10.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center">现住宅详细地址</div>
        </td>
        <td colspan="12">
          <a-input
            type="text"
            v-model:value="formData.form.val11.value"
            :maxlength="50"
          />
        </td>
        <td colspan="4">
          <div class="text-center">住宅邮箱</div>
        </td>
        <td colspan="5">
          <a-input
            type="text"
            v-model:value="formData.form.val12.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center">住宅类型</div>
        </td>
        <td colspan="12">
          <a-radio-group name="houseType" v-model="formData.form.val13.value">
            <a-radio value="1" style="margin-left: 8px"
              ><span style="font-size: 16px">自购有按揭</span></a-radio
            >
            <a-radio value="2"
              ><span style="font-size: 16px">自购无按揭</span></a-radio
            >
            <a-radio value="3"
              ><span style="font-size: 16px">租用</span></a-radio
            >
            <a-radio value="4"
              ><span style="font-size: 16px">与父母同住</span></a-radio
            >
            <a-radio value="5"
              ><span style="font-size: 16px">单位宿舍</span></a-radio
            >
          </a-radio-group>
        </td>
        <td colspan="4">
          <div class="text-center">住宅座机</div>
        </td>
        <td colspan="5">
          <a-input
            type="text"
            v-model:value="formData.form.val14.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center">居住年限</div>
        </td>
        <td colspan="4">
          <a-input
            type="text"
            v-model:value="formData.form.val15.value"
            :maxlength="50"
          />
        </td>
        <td colspan="4">
          <div class="text-center">毕业小学</div>
        </td>
        <td colspan="4">
          <a-input
            type="text"
            v-model:value="formData.form.val16.value"
            :maxlength="50"
          />
        </td>
        <td colspan="4">
          <div class="text-center">学历</div>
        </td>
        <td colspan="5">
          <a-input
            type="text"
            v-model:value="formData.form.val17.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center">有无房贷</div>
        </td>
        <td colspan="4">
          <a-input
            type="text"
            v-model:value="formData.form.val18.value"
            :maxlength="50"
          />
        </td>
        <td colspan="4">
          <div class="text-center">已还贷时间</div>
        </td>
        <td colspan="4">
           <a-date-picker  v-model="formData.form.val19.value" valueFormat="YYYY-MM-DD" />
        </td>
        <td colspan="4">
          <div class="text-center">月还贷金额</div>
        </td>
        <td colspan="5">
          <a-input
            type="text"
            v-model:value="formData.form.val20.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center">车型</div>
        </td>
        <td colspan="4">
          <a-input
            type="text"
            v-model:value="formData.form.val21.value"
            :maxlength="50"
          />
        </td>
        <td colspan="4">
          <div class="text-center">车牌号</div>
        </td>
        <td colspan="4">
          <a-input
            type="text"
            v-model:value="formData.form.val22.value"
            :maxlength="50"
          />
        </td>
        <td colspan="4">
          <div class="text-center">已还贷时间</div>
        </td>
        <td colspan="5">
           <a-date-picker  v-model="formData.form.val23.value" valueFormat="YYYY-MM-DD" />
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center">单位名称</div>
        </td>
        <td colspan="12">
          <a-input
            type="text"
            v-model:value="formData.form.val24.value"
            :maxlength="50"
          />
        </td>
        <td colspan="4">
          <div class="text-center">单位座机</div>
        </td>
        <td colspan="5">
          <a-input
            type="text"
            v-model:value="formData.form.val25.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center">单位地址</div>
        </td>
        <td colspan="12">
          <a-input
            type="text"
            v-model:value="formData.form.val26.value"
            :maxlength="50"
          />
        </td>
        <td colspan="4">
          <div class="text-center">邮编</div>
        </td>
        <td colspan="5">
          <a-input
            type="text"
            v-model:value="formData.form.val27.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center">单位性质</div>
        </td>
        <td colspan="12">
          <a-radio-group name="workType" v-model="formData.form.val28.value">
            <a-radio value="1" style="margin-left: 8px"
              ><span style="font-size: 16px">国有</span></a-radio
            >
            <a-radio value="2"
              ><span style="font-size: 16px">事业</span></a-radio
            >
            <a-radio value="3"
              ><span style="font-size: 16px">民营</span></a-radio
            >
            <a-radio value="4"
              ><span style="font-size: 16px">个体</span></a-radio
            >
          </a-radio-group>
        </td>
        <td colspan="4">
          <div class="text-center">行业类型</div>
        </td>
        <td colspan="5">
          <a-input
            type="text"
            v-model:value="formData.form.val29.value"
            :maxlength="50"
          />
        </td>
      </tr>

      <tr>
        <td colspan="4">
          <div class="text-center">任职部门</div>
        </td>
        <td colspan="4">
          <a-input
            type="text"
            v-model:value="formData.form.val30.value"
            :maxlength="50"
          />
        </td>
        <td colspan="4">
          <div class="text-center">职位</div>
        </td>
        <td colspan="4">
          <a-input
            type="text"
            v-model:value="formData.form.val31.value"
            :maxlength="50"
          />
        </td>
        <td colspan="4">
          <div class="text-center">有无社保</div>
        </td>
        <td colspan="5">
          <a-input
            type="text"
            v-model:value="formData.form.val32.value"
            :maxlength="50"
          />
        </td>
      </tr>

      <tr>
        <td colspan="4">
          <div class="text-center">入职时间</div>
        </td>
        <td colspan="4">
           <a-date-picker  v-model="formData.form.val33.value" valueFormat="YYYY-MM-DD" />
        </td>
        <td colspan="4">
          <div class="text-center">前一单位工龄</div>
        </td>
        <td colspan="4">
          <a-input
            type="text"
            v-model:value="formData.form.val34.value"
            :maxlength="50"
          />
        </td>
        <td colspan="4">
          <div class="text-center">总工龄</div>
        </td>
        <td colspan="5">
          <a-input
            type="text"
            v-model:value="formData.form.val35.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center">年收入</div>
        </td>
        <td colspan="4">
          <a-input
            type="text"
            v-model:value="formData.form.val36.value"
            :maxlength="50"
          />
        </td>
        <td colspan="4">
          <div class="text-center">工资发放形式</div>
        </td>
        <td colspan="4">
          <a-input
            type="text"
            v-model:value="formData.form.val37.value"
            :maxlength="50"
          />
        </td>
        <td colspan="4">
          <div class="text-center">单位员工人数</div>
        </td>
        <td colspan="5">
          <a-input
            type="text"
            v-model:value="formData.form.val38.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center">配偶/父母姓名</div>
        </td>
        <td colspan="4">
          <a-input
            type="text"
            v-model:value="formData.form.val39.value"
            :maxlength="50"
          />
        </td>
        <td colspan="4">
          <div class="text-center">关系</div>
        </td>
        <td colspan="4">
          <a-input
            type="text"
            v-model:value="formData.form.val40.value"
            :maxlength="50"
          />
        </td>
        <td colspan="4">
          <div class="text-center">手机号</div>
        </td>
        <td colspan="5">
          <a-input
            type="text"
            v-model:value="formData.form.val41.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center">工作单位</div>
        </td>
        <td colspan="12">
          <a-input
            type="text"
            v-model:value="formData.form.val42.value"
            :maxlength="50"
          />
        </td>

        <td colspan="4">
          <div class="text-center">单位座机</div>
        </td>
        <td colspan="5">
          <a-input
            type="text"
            v-model:value="formData.form.val43.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center">同事/朋友/亲戚</div>
        </td>
        <td colspan="4">
          <a-input
            type="text"
            v-model:value="formData.form.val44.value"
            :maxlength="50"
          />
        </td>
        <td colspan="4">
          <div class="text-center">关系</div>
        </td>
        <td colspan="4">
          <a-input
            type="text"
            v-model:value="formData.form.val45.value"
            :maxlength="50"
          />
        </td>
        <td colspan="4">
          <div class="text-center">手机号</div>
        </td>
        <td colspan="5">
          <a-input
            type="text"
            v-model:value="formData.form.val46.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center">工作单位</div>
        </td>
        <td colspan="12">
          <a-input
            type="text"
            v-model:value="formData.form.val47.value"
            :maxlength="50"
          />
        </td>

        <td colspan="4">
          <div class="text-center">单位座机</div>
        </td>
        <td colspan="5">
          <a-input
            type="text"
            v-model:value="formData.form.val48.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="4" rowspan="4">
          <div class="text-center">
            已持有信用卡额度（将信用卡额度填到对应银行下）
          </div>
        </td>
        <td colspan="3">
          <div class="text-center">中国银行</div>
        </td>
        <td colspan="3">
          <div class="text-center">建设银行</div>
        </td>
        <td colspan="3">
          <div class="text-center">工商银行</div>
        </td>
        <td colspan="3">
          <div class="text-center">农业银行</div>
        </td>
        <td colspan="3">
          <div class="text-center">邮政银行</div>
        </td>
        <td colspan="3">
          <div class="text-center">招商银行</div>
        </td>
        <td colspan="3">
          <div class="text-center">兴业银行</div>
        </td>
      </tr>

      <tr class="text-center">
        <td colspan="3">
          <a-input
            type="text"
            v-model:value="formData.form.val49.value"
            :maxlength="50"
          />
        </td>
        <td colspan="3">
          <a-input
            type="text"
            v-model:value="formData.form.val50.value"
            :maxlength="50"
          />
        </td>
        <td colspan="3">
          <a-input
            type="text"
            v-model:value="formData.form.val51.value"
            :maxlength="50"
          />
        </td>
        <td colspan="3">
          <a-input
            type="text"
            v-model:value="formData.form.val52.value"
            :maxlength="50"
          />
        </td>
        <td colspan="3">
          <a-input
            type="text"
            v-model:value="formData.form.val53.value"
            :maxlength="50"
          />
        </td>
        <td colspan="3">
          <a-input
            type="text"
            v-model:value="formData.form.val54.value"
            :maxlength="50"
          />
        </td>
        <td colspan="3">
          <a-input
            type="text"
            v-model:value="formData.form.val55.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="3">
          <div class="text-center">交通银行</div>
        </td>
        <td colspan="3">
          <div class="text-center">华夏银行</div>
        </td>
        <td colspan="3">
          <div class="text-center">浦发银行</div>
        </td>
        <td colspan="3">
          <div class="text-center">平安银行</div>
        </td>
        <td colspan="3">
          <div class="text-center">光大银行</div>
        </td>
        <td colspan="3">
          <div class="text-center">广发银行</div>
        </td>
        <td colspan="3">
          <div class="text-center">中信银行</div>
        </td>
      </tr>

      <tr class="text-center">
        <td colspan="3">
          <a-input
            type="text"
            v-model:value="formData.form.val56.value"
            :maxlength="50"
          />
        </td>
        <td colspan="3">
          <a-input
            type="text"
            v-model:value="formData.form.val57.value"
            :maxlength="50"
          />
        </td>
        <td colspan="3">
          <a-input
            type="text"
            v-model:value="formData.form.val58.value"
            :maxlength="50"
          />
        </td>
        <td colspan="3">
          <a-input
            type="text"
            v-model:value="formData.form.val59.value"
            :maxlength="50"
          />
        </td>
        <td colspan="3">
          <a-input
            type="text"
            v-model:value="formData.form.val60.value"
            :maxlength="50"
          />
        </td>
        <td colspan="3">
          <a-input
            type="text"
            v-model:value="formData.form.val61.value"
            :maxlength="50"
          />
        </td>
        <td colspan="3">
          <a-input
            type="text"
            v-model:value="formData.form.val62.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="7">
          <div class="text-center">最高额度信用卡使用时间</div>
        </td>
        <td colspan="6">
          <a-input
            type="text"
            v-model:value="formData.form.val63.value"
            :maxlength="50"
          />
        </td>

        <td colspan="3">
          <div class="text-center">总额度</div>
        </td>
        <td colspan="9">
          <a-input
            type="text"
            v-model:value="formData.form.val64.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="5">
          <div class="text-center">希望办理的信用卡银行</div>
        </td>
        <td colspan="20">
          <a-radio-group name="bankType" v-model="formData.form.val65.value">
            <a-radio value="1" style="margin-left: 8px"
              ><span style="font-size: 16px">交通</span></a-radio
            >
            <a-radio value="2"
              ><span style="font-size: 16px">邮政</span></a-radio
            >
            <a-radio value="3"
              ><span style="font-size: 16px">招商</span></a-radio
            >
            <a-radio value="4"
              ><span style="font-size: 16px">兴业</span></a-radio
            >
          </a-radio-group>
        </td>
      </tr>
      <tr>
        <td colspan="5">
          <div class="text-center">中介签名</div>
        </td>
        <td colspan="8">
          <a-input
            type="text"
            v-model:value="formData.form.val66.value"
            :maxlength="50"
          />
        </td>
        <td colspan="4">
          <div class="text-center">交单时间</div>
        </td>
        <td colspan="8">
           <a-date-picker  v-model="formData.form.val67.value" valueFormat="YYYY-MM-DD" />
          <!-- <a-input
            type="text"
            v-model:value="formData.form.val67.value"
            :maxlength="50"
          /> -->
        </td>
      </tr>
    </template>
    <template v-slot:bot>
      <div class="t_tips">
        注意！所填写的资料一定要和最后一张信用卡的资料一样！
      </div>
    </template>
    <template v-slot></template>
  </BillBox>
</template>

<script setup>
import { onBeforeMount, reactive } from "vue";
import MoneyFix from "./MoneyFix.vue";
import BillBox from "./BillBox.vue";

const Props = defineProps({
  form: {
    type: Object,
    default: {},
  },
});

const formData = reactive({
  form: {
    val1: { name: "", value: "" },
    val2: { name: "", value: "" },
    val3: { name: "", value: "" },
    val4: { name: "", value: "" },
    val5: { name: "", value: "" },
    val6: { name: "", value: "" },
    val7: { name: "", value: "" },
    val8: { name: "", value: "" },
    val9: { name: "", value: "" },
    val10: { name: "", value: "" },
    val11: { name: "", value: "" },
    val12: { name: "", value: "" },
    val13: { name: "", value: "" },
    val14: { name: "", value: "" },
    val15: { name: "", value: "" },
    val16: { name: "", value: "" },
    val17: { name: "", value: "" },
    val18: { name: "", value: "" },
    val19: { name: "", value: "" },
    val20: { name: "", value: "" },
    val21: { name: "", value: "" },
    val22: { name: "", value: "" },
    val23: { name: "", value: "" },
    val24: { name: "", value: "" },
    val25: { name: "", value: "" },
    val26: { name: "", value: "" },
    val27: { name: "", value: "" },
    val28: { name: "", value: "" },
    val29: { name: "", value: "" },
    val29: { name: "", value: "" },
    val30: { name: "", value: "" },
    val31: { name: "", value: "" },
    val32: { name: "", value: "" },
    val33: { name: "", value: "" },
    val34: { name: "", value: "" },
    val35: { name: "", value: "" },
    val36: { name: "", value: "" },
    val37: { name: "", value: "" },
    val38: { name: "", value: "" },
    val39: { name: "", value: "" },
    val40: { name: "", value: "" },
    val41: { name: "", value: "" },
    val42: { name: "", value: "" },
    val43: { name: "", value: "" },
    val44: { name: "", value: "" },
    val45: { name: "", value: "" },
    val46: { name: "", value: "" },
    val47: { name: "", value: "" },
    val48: { name: "", value: "" },
    val49: { name: "", value: "" },
    val50: { name: "", value: "" },
    val51: { name: "", value: "" },
    val52: { name: "", value: "" },
    val53: { name: "", value: "" },
    val54: { name: "", value: "" },
    val55: { name: "", value: "" },
    val56: { name: "", value: "" },
    val57: { name: "", value: "" },
    val58: { name: "", value: "" },
    val59: { name: "", value: "" },
    val60: { name: "", value: "" },
    val61: { name: "", value: "" },
    val62: { name: "", value: "" },
    val63: { name: "", value: "" },
    val64: { name: "", value: "" },
    val65: { name: "", value: "" },
    val66: { name: "", value: "" },
    val67: { name: "", value: "" },
    val68: { name: "", value: "" },
    val69: { name: "", value: "" },
    val70: { name: "", value: "" },
    val71: { name: "", value: "" },
    val72: { name: "", value: "" },
    val73: { name: "", value: "" },
    val74: { name: "", value: "" },
    val75: { name: "", value: "" },
    val76: { name: "", value: "" },
    val77: { name: "", value: "" },
    val78: { name: "", value: "" },
    val79: { name: "", value: "" },
    val80: { name: "", value: "" },
    val81: { name: "", value: "" },
    val82: { name: "", value: "" },
    val83: { name: "", value: "" },
    val84: { name: "", value: "" },
    val85: { name: "", value: "" },
    val86: { name: "", value: "" },
    val87: { name: "", value: "" },
    val88: { name: "", value: "" },
    val89: { name: "", value: "" },
    val90: { name: "", value: "" },
    val91: { name: "", value: "" },
    val92: { name: "", value: "" },
    val93: { name: "", value: "" },
    val94: { name: "", value: "" },
    val95: { name: "", value: "" },
    val96: { name: "", value: "" },
    val97: { name: "", value: "" },
    val98: { name: "", value: "" },
    val99: { name: "", value: "" },
    val100: { name: "", value: "" },
    val101: { name: "", value: "" },
    val102: { name: "", value: "" },
    val103: { name: "", value: "" },
    val104: { name: "", value: "" },
    val105: { name: "", value: "" },
    val106: { name: "", value: "" },
    val107: { name: "", value: "" },
    val108: { name: "", value: "" },
    val109: { name: "", value: "" },
    val110: { name: "", value: "" },
    val111: { name: "", value: "" },
    val112: { name: "", value: "" },
    val113: { name: "", value: "" },
    val114: { name: "", value: "" },
    val115: { name: "", value: "" },
    val116: { name: "", value: "" },
    val117: { name: "", value: "" },
    val118: { name: "", value: "" },
    val119: { name: "", value: "" },
    val120: { name: "", value: "" },

    val201: { name: "亿", value: "" },
    val202: { name: "千", value: "" },
    val203: { name: "百", value: "" },
    val204: { name: "十", value: "" },
    val205: { name: "万", value: "" },
    val206: { name: "千", value: "" },
    val207: { name: "百", value: "" },
    val208: { name: "十", value: "" },
    val209: { name: "元", value: "" },
    val210: { name: "角", value: "" },
    val211: { name: "分", value: "" },
    val212: { name: "", value: "" },
    val213: { name: "", value: "" },
    val214: { name: "", value: "" },
    val215: { name: "", value: "" },
    val216: { name: "", value: "" },
    val217: { name: "", value: "" },
    val218: { name: "", value: "" },
    val219: { name: "", value: "" },
  },

  money: {},
  names: {
    val201: "亿",
    val202: "千",
    val203: "百",
    val204: "十",
    val205: "万",
    val206: "千",
    val207: "百",
    val208: "十",
    val209: "元",
    val210: "角",
    val211: "分",
    val212: "",
    val213: "",
    val214: "",
    val215: "",
  },
});
// 子组件传过来的
const newMoney = (obj) => {
  //console.log(obj);
  formData.form = { ...formData.form, ...obj };
};

onBeforeMount(() => {
  //console.log(Props.form);
  if (Props.form != {}) {
    formData.form = { ...formData.form, ...Props.form };
  }

  // 钱填写那部分
  let i = 202; //开始
  let end = 211; //结束
  for (i; i <= end; i++) {
    let obj;
    if (formData.form["val" + i].name) {
      obj = formData.form["val" + i];
    } else {
      obj = { name: formData.names["val" + i], value: "" };
    }
    formData.money["val" + i] = obj;
  }
});

defineExpose({
  formData,
});
</script>

<style lang="scss" scoped>
.text-center{
  td{
    input{
      text-align:center;
    }
  }
}
</style>
