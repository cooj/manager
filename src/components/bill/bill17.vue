
<template>
  <BillBox>
    <template v-slot:title>个人通知存款申请书</template>
    <template v-slot:top>
      <div class="t-type">
        <i class="red" style="margin-left: 5px">*</i>业务类型：
        <a-radio-group
          v-model:value="formData.form.val1.value"
          style="margin-left: 10px"
        >
          <a-radio value="1">存入</a-radio>
          <a-radio value="2">通知</a-radio>
          <a-radio value="3">取消通知</a-radio>
          <a-radio value="4">变更通知</a-radio>
          <a-radio value="5">支取</a-radio>
        </a-radio-group>
      </div>
      <div class="time">
        <i class="red" style="margin-left: 5px">*</i>日期：
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
    </template>
    <template v-slot:body>
      <tr>
        <td colspan="5">
          <div class="text-center"><i class="red">*</i>存户户名</div>
        </td>
        <td colspan="20">
          <a-input
            type="text"
            v-model:value="formData.form.val5.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="5">
          <div class="text-center"><i class="red">*</i>活期账户</div>
        </td>
        <td colspan="20">
          <a-input
            type="text"
            v-model:value="formData.form.val6.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="5">
          <div class="text-center"><i class="red">*</i>币别</div>
        </td>
        <td colspan="20">
          <a-radio-group
            v-model:value="formData.form.val7.value"
            style="margin-left: 10px"
          >
            <a-radio value="1">人民币</a-radio>
            <a-radio value="2">美元</a-radio>
            <a-radio value="3">港币</a-radio>
            <a-radio value="4">欧元</a-radio>
            <a-radio value="5">英镑</a-radio>
            <a-radio value="6">日元</a-radio>
            <a-radio value="7">澳元</a-radio>
          </a-radio-group>
        </td>
      </tr>
      <tr>
        <td colspan="5">
          <div class="text-center"><i class="red">*</i>存款类型</div>
        </td>
        <td colspan="20">
          <a-radio-group
            v-model:value="formData.form.val8.value"
            style="margin-left: 10px"
          >
            <a-radio value="1">一天通知存款(限人民币)</a-radio>
            <a-radio value="2">七天通知存款</a-radio>
            <a-radio value="3">七天特殊通知存款</a-radio>
          </a-radio-group>
        </td>
      </tr>

      <tr>
        <td colspan="5">
          <div class="text-center">
            <i class="red">*</i>存入金额 <br />(大写)
          </div>
        </td>
        <td colspan="11">
          <a-input
            type="text"
            v-model:value="formData.form.val9.value"
            :maxlength="50"
          />
        </td>
        <td colspan="9">
          <div class="mon-a">
            <MoneyFix :viewData="formData.money" @getMoney="newMoney" />
          </div>
        </td>
      </tr>

      <tr>
        <td colspan="5">
          <div class="text-center"><i class="red">*</i>存单账号</div>
        </td>
        <td colspan="20">
          <a-input
            type="text"
            v-model:value="formData.form.val10.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="5">
          <div class="text-center">通知指示</div>
        </td>
        <td colspan="20">
          <div class="ckkh-text1">
            <div class="tt1">
              支取日期
              <span class="year">
                <a-input
                  type="text"
                  v-model:value="formData.form.val11.value"
                  :maxlength="4"
                /> </span
              >年
              <span class="month">
                <a-input
                  type="text"
                  v-model:value="formData.form.val12.value"
                  :maxlength="2"
                /> </span
              >月
              <span class="date">
                <a-input
                  type="text"
                  v-model:value="formData.form.val13.value"
                  :maxlength="2"
                /> </span
              >日,
              <a-radio-group
                v-model:value="formData.form.val14.value"
                style="margin-left: 10px"
              >
                <a-radio value="1">全部支取</a-radio>
                <a-radio value="2">部分支取</a-radio>
              </a-radio-group>
            </div>
            <div class="tt2">
              支取金额（大写）
              <span class="da">
                <a-input
                  type="text"
                  v-model:value="formData.form.val15.value"
                  :maxlength="50"
                />
              </span>
              （小写）
              <span class="xiao">
                <a-input
                  type="text"
                  v-model:value="formData.form.val16.value"
                  :maxlength="50"
                />
              </span>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="5">
          <div class="text-center">支取指示</div>
        </td>
        <td colspan="20">
          <div class="ckkh-text1">
            <div class="tt1">
              <a-radio-group
                v-model:value="formData.form.val17.value"
                style="margin-left: 10px"
              >
                <a-radio value="1">全部支取</a-radio>
                <a-radio value="2">部分支取</a-radio>
              </a-radio-group>
            </div>
            <div class="tt2">
              支取金额（大写）
              <span class="da">
                <a-input
                  type="text"
                  v-model:value="formData.form.val18.value"
                  :maxlength="50"
                />
              </span>
              （小写）
              <span class="xiao">
                <a-input
                  type="text"
                  v-model:value="formData.form.val19.value"
                  :maxlength="50"
                />
              </span>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="25">
          <div class="ckkh_endbox">
            <div class="ckkh_endul">
              <p class="pp">
                (一)本人兹向贵行申请上列服务事项，声明本人已审慎阅读、了解且愿遵守贵行《银行账户协议》之
                内容，并同意贵行得于修改该协议内容后，置放营业单位供索阅及公布于贵行官网以代通知，本人
                仍愿遵守之。
              </p>
              <p class="pp">
                (二)本人约定本通知存款参照活期账户的预留印鉴，不提供新印鉴卡。
              </p>
              <p class="pp">
                (三)本人知悉当通知存款到期或本人做出通知存款支取指示，本息转入活期账户后,原存款证实书失效。
              </p>
            </div>
            <div class="cont"></div>
            <div class="bot">申请人签章（预留印鉴）：</div>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="25" class="bgcol">
          <div class="tles">银行填写</div>
        </td>
      </tr>
      <tr>
        <td colspan="8">
          核章:
          <div class="tles">
            <a-input
              type="text"
              v-model:value="formData.form.val20.value"
              :maxlength="50"
            />
          </div>
        </td>
        <td colspan="8">
          经办:
          <div class="tles">
            <a-input
              type="text"
              v-model:value="formData.form.val21.value"
              :maxlength="50"
            />
          </div>
        </td>
        <td colspan="9">
          复核:
          <div class="tles">
            <a-input
              type="text"
              v-model:value="formData.form.val22.value"
              :maxlength="50"
            />
          </div>
        </td>
      </tr>
    </template>
    <template v-slot:bot></template>
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
.ckkh-text1 {
  .tt1 {
    margin-bottom: 5px;
    span {
      display: inline-block;
      width: 40px;
      &.year {
        width: 60px;
      }
      input {
        text-align: center;
        border-bottom: 1px solid;
      }
    }
  }
  .tt2 {
    span {
      display: inline-block;
      border-bottom: 1px solid;
    }
    .da {
      width: 40%;
    }
    .xiao {
      width: 30%;
    }
  }
}
.bgcol {
  background-color: #f1f1f1;
}
.tles {
  display: inline-block;
  width: 80%;
}
</style>