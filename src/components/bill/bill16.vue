<template>
  <BillBox>
    <template v-slot:title>个人定期存款申请书</template>
    <template v-slot:top>
      <div class="zhi-top">
        <div class="zhi-cn">
          <div>致:</div>
          <div>
            TO:<a-input
              style="width: 150px; border-bottom: 1px solid"
              type="text"
              v-model:value="formData.form.val1.value"
              :maxlength="50"
            />
          </div>
        </div>
        <div class="time">
          <i class="red" style="margin-left: 5px">*</i>日期Date：<span
            class="year"
            style="width: 150px"
          >
            <a-date-picker
              v-model="formData.form.val2.value"
              valueFormat="YYYY-MM-DD"
            />
          </span>
        </div>
      </div>
    </template>
    <template v-slot:body>
      <tr>
        <td colspan="4">
          <div class="text-center">
            <p class="cn">银行专用</p>
            <p class="en">For Bank Use Only</p>
          </div>
        </td>
        <td colspan="21">
          <a-textarea
            v-model:value="formData.form.val3.value"
            :maxlength="250"
            readonly
            :rows="3"
          />
        </td>
      </tr>

      <tr>
        <td colspan="4">
          <div class="text-center">
            <p class="cn let3">客户姓名</p>
            <p class="en">Customer Name</p>
          </div>
        </td>
        <td colspan="8">
          <a-input
            type="text"
            v-model:value="formData.form.val4.value"
            :maxlength="50"
          />
        </td>
        <td colspan="4">
          <div class="text-center">
            <p class="cn let3">客户编号</p>
            <p class="en">Customer Number</p>
          </div>
        </td>
        <td colspan="9">
          <a-input
            type="text"
            v-model:value="formData.form.val5.value"
            :maxlength="50"
          />
        </td>
      </tr>

      <tr>
        <td colspan="4">
          <div class="text-center">
            <p class="cn let3">存款币种</p>
            <p class="en">Deposit Currency</p>
          </div>
        </td>
        <td colspan="8">
          <a-input
            type="text"
            v-model:value="formData.form.val6.value"
            :maxlength="50"
          />
        </td>
        <td colspan="13" rowspan="2">
          <div class="dqck_qixian">
            <div class="tt">存款期限 Deposit Period</div>
            <div class="dqck-box">
              <div class="ltt">
                <p class="cn">定期存款期限为</p>
                <p class="en"></p>
              </div>
              <div class="gtt">
                <a-radio-group
                  v-model:value="formData.form.val7.value"
                  style="margin-left: 10px"
                >
                  <a-radio value="A">天 days</a-radio>
                  <a-radio value="B">周 week(s) </a-radio><br />
                  <a-radio value="C">月 month(s) </a-radio>
                  <a-radio value="D">年 year(s) </a-radio>
                </a-radio-group>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center">
            <p class="cn let3">存款金额</p>
            <p class="en">Deposit Amount</p>
          </div>
        </td>
        <td colspan="8">
          <a-input
            type="text"
            v-model:value="formData.form.val8.value"
            :maxlength="50"
          />
        </td>
      </tr>

      <tr>
        <td colspan="25">扣款账户("账户") Debit Account(the "Account")</td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center">
            <p class="cn let3">其他</p>
            <p class="en">Other</p>
          </div>
        </td>
        <td colspan="8">
          <a-input
            type="text"
            v-model:value="formData.form.val9.value"
            :maxlength="50"
          />
        </td>
        <td colspan="4">
          <div class="text-center">
            <p class="cn let3">账户号码</p>
            <p class="en">Account No.</p>
          </div>
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
        <td colspan="25">
          开户目的 Purpose of Account Opening
          <span
            style="display: inline-block; width: 50%; border-bottom: 1px solid"
          >
            <a-input
              type="text"
              v-model:value="formData.form.val11.value"
              :maxlength="50"
            />
          </span>
        </td>
      </tr>
      <tr>
        <td colspan="5">
          <div class="text-center">
            <p class="cn let3">其他请说明</p>
            <p class="en">Others Please Specify</p>
          </div>
        </td>
        <td colspan="20">
          <a-input
            type="text"
            v-model:value="formData.form.val12.value"
            :maxlength="50"
          />
        </td>
      </tr>

      <tr>
        <td colspan="25">到期处理指示 Maturlty Instructions</td>
      </tr>
      <tr>
        <td colspan="25">
          <!-- 利率续存和续存本金使用 -->
          <a-input
            type="hidden"
            v-model:value="formData.form.val13.value"
            :maxlength="50"
          />
          <a-input
            type="hidden"
            v-model:value="formData.form.val14.value"
            :maxlength="50"
          />
          <div class="dqck_chuli">
            <div class="top">
              <div class="flt">
                <a-radio v-model:checked="formData.check1">
                  <p class="cn">按当时利率缓存</p>
                  <p class="en">Renew at prevailing interest rate</p>
                </a-radio>
              </div>
              <div class="fgt">
                <div class="dqck_qixian">
                  <div
                    :class="formData.check1 ? 'info_box' : 'info_box e-none'"
                    style="display: flex"
                  >
                    <div class="ltt">
                      <p class="cn">定期存款期限为</p>
                      <p class="en"></p>
                    </div>
                    <div class="gtt">
                      <a-radio-group
                        v-model:value="formData.form.val15.value"
                        style="margin-left: 10px"
                      >
                        <a-radio value="A">天 days</a-radio>
                        <a-radio value="B">周 week(s) </a-radio>
                        <a-radio value="C">月 month(s) </a-radio>
                        <a-radio value="D">年 year(s) </a-radio>
                      </a-radio-group>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="top">
              <div class="flt">
                <a-radio v-model:checked="formData.check2">
                  <p class="cn">按当时利率缓存</p>
                  <p class="en">Renew at prevailing interest rate</p>
                </a-radio>
              </div>
              <div class="fgt"></div>
            </div>
            <div
              :class="formData.check2 ? 'top choose2' : 'top choose2 e-none'"
            >
              <div class="flt">
                <a-radio-group
                  v-model:value="formData.form.val16.value"
                  style="margin-left: 10px"
                >
                  <a-radio value="1"
                    >不更改本金 No change of the principal</a-radio
                  >
                  <a-radio value="2">
                    <div>额外增加本金 Increased principal</div>
                    <div class="cc">自账户扣款 Debiting the Account</div>
                  </a-radio>
                  <a-radio value="3">
                    <div>减少本金 Reduced principal</div>
                    <div class="cc">存入账户 Paying to the Account</div>
                  </a-radio>
                </a-radio-group>
              </div>
              <div class="fgt">
                <div class="dqck-jia" style="height: 25px"></div>
                <div
                  class="dqck-jia"
                  :class="formData.form.val16.value == 2 ? '' : 'e-none'"
                >
                  币种 Currency<span class="borx">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val17.value"
                      :maxlength="50"
                    />
                  </span>
                  金额 Amount<span class="borx">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val18.value"
                      :maxlength="50"
                    />
                  </span>

                  Frequency<span class="borx">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val19.value"
                      :maxlength="50"
                    />
                  </span>
                </div>
                <div
                  class="dqck-jia"
                  :class="formData.form.val16.value == 3 ? '' : 'e-none'"
                >
                  币种 Currency<span class="borx">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val20.value"
                      :maxlength="50"
                    />
                  </span>
                  金额 Amount<span class="borx">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val21.value"
                      :maxlength="50"
                    />
                  </span>
                  Frequency<span class="borx">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val22.value"
                      :maxlength="50"
                    />
                  </span>
                </div>
              </div>
            </div>

            <div class="xucun"></div>
          </div>
        </td>
      </tr>

      <tr>
        <td colspan="12">
          <p class="cn">续存利息</p>
          <p class="en" style="letter-spacing: -1px">Interest option</p>
        </td>
        <td colspan="4">
          <div class="text-center">
            <p class="cn let3">账户号码</p>
            <p class="en">Account Number</p>
          </div>
        </td>
        <td colspan="9">
          <a-input
            type="text"
            v-model:value="formData.form.val23.value"
            :maxlength="50"
          />
        </td>
      </tr>

      <tr>
        <td colspan="12">
          <p class="cn">不续存，本金及利息一并存入账户</p>
          <p class="en" style="letter-spacing: -1px">
            Not to Renew.Pay principal and interest to the Account.
          </p>
        </td>
        <td colspan="4">
          <div class="text-center">
            <p class="cn let3">账户号码</p>
            <p class="en">Account Number</p>
          </div>
        </td>
        <td colspan="9">
          <a-input
            type="text"
            v-model:value="formData.form.val24.value"
            :maxlength="50"
          />
        </td>
      </tr>

      <tr>
        <td colspan="25">
          <div class="dqck_que">
            <div class="tt">客户确认 Customer Confirmation</div>
            <div class="pp">
              <p class="cn">我已阅悉遵守开立定期存款账户之条款</p>
              <p class="en">
                I have read that I abide by the terms and conditions of opening
                a time deposit account
              </p>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="12">
          <div class="dqck_intro">
            <div class="cont"></div>
            <div class="gai">签名及盖章 Signature and Chop</div>
          </div>
        </td>
        <td colspan="13">
          <div class="dqck_intro">
            <div class="cont"></div>
            <div class="gai">签名及盖章 Signature and Chop</div>
          </div>
        </td>
      </tr>
    </template>
    <template v-slot:bot></template>
    <template v-slot>
      <div class="t_tips"></div>
    </template>
  </BillBox>
</template>

<script setup>
import { onBeforeMount, reactive, watch } from "vue";
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
  check1: false,
  check2: false,
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

  if (formData.form.val13.value) {
    formData.check1 = true;
  }
  if (formData.form.val14.value) {
    formData.check2 = true;
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

watch(
  () => formData.check1,
  (res) => {
    //console.log(res);
    if (res == true) {
      formData.check2 = false;
      formData.form.val13 = 1;
      formData.form.val14 = "";

      formData.form.val16.value = "";
      formData.form.val17.value = "";
      formData.form.val18.value = "";
      formData.form.val19.value = "";
      formData.form.val20.value = "";
      formData.form.val21.value = "";
      formData.form.val22.value = "";
    }
  }
);
watch(
  () => formData.check2,
  (res) => {
    if (res == true) {
      formData.check1 = false;
      formData.form.val13 = "";
      formData.form.val14 = 1;

      formData.form.val15.value = "";
    }
  }
);
watch(
  () => formData.form.val16.value,
  (val) => {
    //console.log(val);
    if (val == 2) {
      formData.form.val20.value = "";
      formData.form.val21.value = "";
      formData.form.val22.value = "";
    } else if (val == 3) {
      formData.form.val17.value = "";
      formData.form.val18.value = "";
      formData.form.val19.value = "";
    } else {
      formData.form.val17.value = "";
      formData.form.val18.value = "";
      formData.form.val19.value = "";
      formData.form.val20.value = "";
      formData.form.val21.value = "";
      formData.form.val22.value = "";
    }
  }
);

defineExpose({
  formData,
});
</script>

<style lang="scss" scoped>
.zhi-top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .zhi-cn {
    text-align: left;
  }
}
.cn,
.en {
  margin: 0;
  line-height: 1.2;
}
.dqck-box {
  display: flex;
  height: 70px;
}
.dqck_chuli .top {
  display: flex;
  margin-bottom: 10px;
  .flt {
    width: 40%;
  }

  .flt label {
    display: inline-flex;
    align-items: center;
  }

  .flt label input {
    margin: 0 2px;
  }

  .fgt {
    flex: 1;
  }
}

.dqck_chuli .choose2 .flt {
  padding-left: 20px;
}

.dqck_chuli .choose2 .flt .cc {
  color: #777;
  font-size: 15px;
}
.dqck-jia {
  padding: 10px 0;
  .borx {
    display: inline-block;
    width: 80px;
    border: 1px solid;
    padding: 0 5px;
    margin: 0 5px;
  }
}
.dqck_que {
  .pp {
    padding-left: 15px;
    color: #777;
  }
}
.dqck_intro {
  .cont {
    height: 180px;
  }
  .gai {
    text-align: right;
  }
}
</style>
<style lang="scss">
.e-none {
  pointer-events: none;
  filter: opacity(0.7);
}
.form-box .bill-top .zhi-top {
  input {
    text-align: left;
  }
}
</style>
