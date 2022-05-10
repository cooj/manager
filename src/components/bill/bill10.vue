<!-- 银行汇票申请书（存 -->
<template>
  <BillBox>
    <template v-slot:title>
      <div style="display: inline-block; border-bottom: 1px solid">
        银行汇票申请书（存&emsp;根）NO
        <a-input
          style="width: 150px"
          type="text"
          v-model:value="formData.form.val1.value"
          :maxlength="20"
        />
      </div>
    </template>
    <template v-slot:top>
      <div class="time">
        <i class="red" style="margin-left: 5px">*</i>申请日期：
        <span class="year">
          <a-input
            type="text"
            v-model:value="formData.form.val2.value"
            :maxlength="4"
          /> </span
        >年
        <span class="month">
          <a-input
            type="text"
            v-model:value="formData.form.val3.value"
            :maxlength="2"
          /> </span
        >月
        <span class="date">
          <a-input
            type="text"
            v-model:value="formData.form.val4.value"
            :maxlength="2"
          /> </span
        >日
      </div>
      <div class="hao">
        第<span class="haox">
          <a-input
            type="text"
            v-model:value="formData.form.val19.value"
            :maxlength="50"
          /> </span
        >号
      </div>
    </template>
    <template v-slot:body>
      <tr>
        <td colspan="4">
          <div class="text-center"><i class="red">*</i>申&nbsp;请&nbsp;人</div>
        </td>
        <td colspan="8">
          <a-input
            type="text"
            v-model:value="formData.form.val5.value"
            :maxlength="50"
          />
        </td>
        <td colspan="4">
          <div class="text-center"><i class="red">*</i>收&nbsp;款&nbsp;人</div>
        </td>
        <td colspan="9">
          <a-input
            type="text"
            v-model:value="formData.form.val6.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center"><i class="red">*</i>账号或地址</div>
        </td>
        <td colspan="8">
          <a-input
            type="text"
            v-model:value="formData.form.val7.value"
            :maxlength="50"
          />
        </td>
        <td colspan="4">
          <div class="text-center"><i class="red">*</i>账号或地址</div>
        </td>
        <td colspan="9">
          <a-input
            type="text"
            v-model:value="formData.form.val8.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center"><i class="red">*</i>用&emsp;途</div>
        </td>
        <td colspan="8">
          <a-input
            type="text"
            v-model:value="formData.form.val9.value"
            :maxlength="50"
          />
        </td>
        <td colspan="4">
          <div class="text-center"><i class="red">*</i>代理付款行</div>
        </td>
        <td colspan="9">
          <a-input
            type="text"
            v-model:value="formData.form.val10.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center">款项金额</div>
        </td>
        <td colspan="12">
          <div class="mon_lt">
            <em><i class="red">*</i>人民币(大写)</em>
            <span>
              <a-input
                type="text"
                v-model:value="formData.form.val11.value"
                :maxlength="50"
              />
            </span>
          </div>
        </td>
        <td colspan="9">
          <div class="mon-a">
            <MoneyFix :viewData="formData.money" @getMoney="newMoney" />
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="12">
          <div>
            <span style="color: #999; font-size: 16px"
              >上列款项请从我账户内支付</span
            >
            <a-textarea
              type="text"
              v-model:value="formData.form.val12.value"
              :maxlength="250"
              :rows="3"
              readonly
            />
          </div>
          <div class="t_intro1">
            <i class="red">*</i>申请人：
            <span class="sqr">
              <a-input
                type="text"
                v-model:value="formData.form.val18.value"
                :maxlength="50"
              />
            </span>
          </div>
        </td>
        <td colspan="13">
          <div class="t_intro2">
            <div>
              科目(借)
              <span class="kemu" style="width: 50%">
                <a-input
                  type="text"
                  v-model:value="formData.form.val13.value"
                  :maxlength="50"
                />
              </span>
            </div>
            <div>
              对方科目(贷)
              <span class="dkemu" style="width: 50%">
                <a-input
                  type="text"
                  v-model:value="formData.form.val14.value"
                  :maxlength="50"
                />
              </span>
            </div>
            <div>
              转账日期
              <span class="zhuguan" style="width: 12%">
                <a-input
                  type="text"
                  v-model:value="formData.form.val20.value"
                  :maxlength="4"
                />
              </span>
              年
              <span class="fuhe" style="width: 10%">
                <a-input
                  type="text"
                  v-model:value="formData.form.val21.value"
                  :maxlength="2"
                />
              </span>
              月
              <span class="jinban" style="width: 10%">
                <a-input
                  type="text"
                  v-model:value="formData.form.val22.value"
                  :maxlength="2"
                />
              </span>
              日
            </div>
            <div>
              财务主管
              <span class="zhuguan" style="width: 25%">
                <a-input
                  type="text"
                  v-model:value="formData.form.val15.value"
                  :maxlength="50"
                />
              </span>
              复核
              <span class="fuhe" style="width: 20%">
                <a-input
                  type="text"
                  v-model:value="formData.form.val16.value"
                  :maxlength="50"
                />
              </span>
              经办
              <span class="jinban" style="width: 20%">
                <a-input
                  type="text"
                  v-model:value="formData.form.val17.value"
                  :maxlength="50"
                />
              </span>
            </div>
          </div>
        </td>
      </tr>
    </template>
    <template v-slot:bot> </template>
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
  let i = 201; //开始
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
.mon_lt {
  display: flex;
  > span {
    width: 75%;
    padding-left: 10px;
  }
}
.t_intro2 {
  span {
    display: inline-block;
    border-bottom: 1px solid;
    margin: 4px 0;
  }
}
.t_intro1 {
  text-align: right;
  .sqr {
    display: inline-block;
    border-bottom: 1px solid;
    margin: 4px 0;
  }
}
</style>
