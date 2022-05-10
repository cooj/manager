<!-- 境内汇款申请书 -->
<template>
  <BillBox>
    <template v-slot:title>境内汇款申请书
      <p class="en">APPLICATION FOR FUNDS TRANSFERS(DOMESTIC)</p>
    </template>
    <template v-slot:top>
      <div class="zhi-top">
        <div class="zhi-cn">
          <div>致:</div>
          <div>
            TO:
            <a-input style="width: 150px; border-bottom: 1px solid" type="text" v-model:value="formData.form.val1.value"
              :maxlength="50" />
          </div>
        </div>
        <div>
          <div class="time">
            <i class="red" style="margin-left: 5px">*</i>日期：
            <span class="year">
              <a-input type="text" v-model:value="formData.form.val2.value" :maxlength="4" />
            </span>年
            <span class="month">
              <a-input type="text" v-model:value="formData.form.val3.value" :maxlength="2" />
            </span>月
            <span class="date">
              <a-input type="text" v-model:value="formData.form.val4.value" :maxlength="2" />
            </span>日
          </div>

          <div class="gt_box">
            <div class="lt">
              <a-radio-group v-model:value="formData.form.val5.value" style="margin-left: 10px">
                <a-radio value="1">电汇 T/T</a-radio>
                <a-radio value="2">票汇 D/D</a-radio>
                <a-radio value="3">信汇 M/T</a-radio>
              </a-radio-group>
            </div>
            <div class="line"></div>
            <div class="gt">
              <div class="tt">
                <p class="cn">发电等级</p>
                <p class="en">protic</p>
              </div>
              <div>
                <a-radio-group v-model:value="formData.form.val6.value" style="margin-left: 10px">
                  <a-radio value="1">普通 Normal</a-radio>
                  <a-radio value="2">加急 Urgent</a-radio>
                </a-radio-group>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:body>
      <tr>
        <td colspan="6">
          <div class="text-center">申报号码&ensp;Report No.</div>
        </td>
        <td colspan="19">
          <a-input type="text" v-model:value="formData.form.val7.value" :maxlength="50" />
        </td>
      </tr>
      <tr>
        <td colspan="6">
          <div class="text-center">
            <p class="cn let3">银行业务编号</p>
            <p class="en">Bank Transac.Rcf.No</p>
          </div>
        </td>
        <td colspan="5">
          <a-input type="text" v-model:value="formData.form.val8.value" :maxlength="50" />
        </td>
        <td colspan="6">
          <div class="text-center">
            <p class="cn let3">收电行/付款行</p>
            <p class="en">Reciver/Drawn on</p>
          </div>
        </td>
        <td colspan="8">
          <a-input type="text" v-model:value="formData.form.val9.value" :maxlength="50" />
        </td>
      </tr>
      <tr>
        <td colspan="6">
          <div class="text-center">
            <p class="cn let3">汇款币种及金额</p>
            <p class="en">Currcncy&Interbank Settlcmcnt Amount</p>
          </div>
        </td>
        <td colspan="5">
          <a-input type="text" v-model:value="formData.form.val10.value" :maxlength="50" />
        </td>
        <td colspan="6">
          <div class="text-center">
            <p class="cn let3">金额大写</p>
            <p class="en">Amount in words</p>
          </div>
        </td>
        <td colspan="8">
          <a-input type="text" v-model:value="formData.form.val11.value" :maxlength="50" />
        </td>
      </tr>

      <tr>
        <td rowspan="3">
          <div class="writ_lr">其&nbsp;中</div>
        </td>
        <td colspan="5">
          <div class="text-center">
            <p class="cn">现汇金额</p>
            <p class="en">Amount in FX</p>
          </div>
        </td>
        <td colspan="5">
          <a-input type="text" v-model:value="formData.form.val12.value" :maxlength="50" />
        </td>
        <td colspan="6">
          <div class="text-center">
            <p class="cn">账号</p>
            <p class="en">Account NO./Credit Card No.</p>
          </div>
        </td>
        <td colspan="8">
          <a-input type="text" v-model:value="formData.form.val13.value" :maxlength="50" />
        </td>
      </tr>
      <tr>
        <td colspan="5">
          <div class="text-center">
            <p class="cn">购汇金额</p>
            <p class="en">Amount of Purchase</p>
          </div>
        </td>
        <td colspan="5">
          <a-input type="text" v-model:value="formData.form.val14.value" :maxlength="50" />
        </td>
        <td colspan="6">
          <div class="text-center">
            <p class="cn">账号</p>
            <p class="en">Account NO./Credit Card No.</p>
          </div>
        </td>
        <td colspan="8">
          <a-input type="text" v-model:value="formData.form.val15.value" :maxlength="50" />
        </td>
      </tr>
      <tr>
        <td colspan="5">
          <div class="text-center">
            <p class="cn">其他金额</p>
            <p class="en">Amount of Others</p>
          </div>
        </td>
        <td colspan="5">
          <a-input type="text" v-model:value="formData.form.val16.value" :maxlength="50" />
        </td>
        <td colspan="6">
          <div class="text-center">
            <p class="cn">账号</p>
            <p class="en">Account NO./Credit Card No.</p>
          </div>
        </td>
        <td colspan="8">
          <a-input type="text" v-model:value="formData.form.val17.value" :maxlength="50" />
        </td>
      </tr>
      <tr>
        <td colspan="6">
          <div class="text-center">
            <p class="cn let3">汇款人名称及地址</p>
            <p class="en">Remitter's Name&Address</p>
          </div>
        </td>
        <td colspan="19">
          <a-input type="text" v-model:value="formData.form.val18.value" :maxlength="50" />
        </td>
      </tr>

      <tr>
        <td colspan="2">
          <!-- 对公、对私 -->
          <a-input type="hidden" v-model:value="formData.form.val19.value" :maxlength="50" />
          <a-input type="hidden" v-model:value="formData.form.val20.value" :maxlength="50" />
          <div class="text-center">
            <a-checkbox v-model:checked="formData.check1">对公</a-checkbox>
          </div>
        </td>
        <td colspan="3">
          <div class="text-center">
            <p class="cn">组织机构代码</p>
            <p class="en">Unit Code</p>
          </div>
        </td>
        <td colspan="6">
          <a-input type="text" v-model:value="formData.form.val21.value" :maxlength="50" />
        </td>
        <td colspan="2">
          <div class="text-center">
            <a-checkbox v-model:checked="formData.check2">对私</a-checkbox>
          </div>
        </td>
        <td colspan="12">
          <div>
            <span class="c-line">
              个人身份证件号码 IndividualID No.
            </span>
            <div class="c-line" style="border-bottom: 1px solid;width:45%;">
              <a-input v-model:value="formData.form.val22.value" :maxlength="50" />
            </div>
            <a-radio-group v-model:value="formData.form.val23.value" style="margin-left: 10px">
              <a-radio value="1">中国个人居民 Resident Individual</a-radio>
              <a-radio value="2">中国非个人居民 No-Resident Individual</a-radio>
            </a-radio-group>
          </div>
        </td>
      </tr>

      <tr>
        <td colspan="5">
          <div class="text-center">
            <p class="cn">收款人银行之代理行名称及地址</p>
            <p class="en">Coorrespondent of Beneficiary's Bank Name&Address</p>
          </div>
        </td>
        <td colspan="20">
          <a-textarea v-model:value="formData.form.val24.value" :maxlength="250" :rows="4" />
        </td>
      </tr>

      <tr>
        <td colspan="5" rowspan="2">
          <div class="text-center">
            <p class="cn">收款人开户银行名称及地址</p>
            <p class="en">Beneficiary's Bank Name&Address</p>
          </div>
        </td>
        <td colspan="20">
          <div class="">
            <span class="c-line">收款人开户银行在其代理行账号 Bene's Bank A/C No</span>
            <div class="c-line" style="width:50%;border-bottom: 1px solid;">
              <a-input type="text" v-model:value="formData.form.val25.value" :maxlength="50" />
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="20">
          <span class="c-line"></span>
          <div class="c-line" style="width:80%;border-bottom: 1px solid;">
            <a-input type="text" v-model:value="formData.form.val26.value" :maxlength="50" />
          </div>
        </td>
      </tr>

      <tr>
        <td colspan="5" rowspan="2">
          <div class="text-center">
            <p class="cn">收款人名称及地址</p>
            <p class="en">Beneficiary's Name&Address</p>
          </div>
        </td>
        <td colspan="20">
          <span class="c-line">收款人账号 Bene's A/C No</span>
          <div class="c-line" style="width:50%;border-bottom: 1px solid;">
            <a-input type="text" v-model:value="formData.form.val27.value" :maxlength="50" />
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="20">
          <span class="c-line"></span>
          <div class="c-line" style="width:80%;border-bottom: 1px solid;">
            <a-input type="text" v-model:value="formData.form.val28.value" :maxlength="50" />
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="5" rowspan="2">
          <div class="text-center">
            <p class="cn">汇&emsp;款&emsp;附&emsp;言</p>
            <p class="en">Remittance Information</p>
          </div>
        </td>
        <td colspan="11">
          <div class="">只限140个字 Not Exceeding 140 Characters</div>
        </td>
        <td colspan="9" rowspan="2">
          <div class="text-center">
            <p class="cn">国内外费用承担</p>
            <p class="en">All Back's Charges If Any Are To Be Borne By</p>
          </div>
          <a-radio-group v-model:value="formData.form.val30.value" style="margin-left: 10px">
            <a-radio value="1">汇款人OUR</a-radio>
            <a-radio value="2">收款人BEN</a-radio>
            <a-radio value="3">共同SHA</a-radio>
          </a-radio-group>
        </td>
      </tr>
      <tr>
        <td colspan="11">
          <a-textarea v-model:value="formData.form.val29.value" :maxlength="140" :rows="3" />
        </td>
      </tr>

      <tr>
        <td colspan="25">
          <div class="t-flex">
            <div class="lt">
              <p class="cn">收款人常驻国家（地区）名称及代码</p>
              <p class="en">Resident Country/Region Name&Code</p>
            </div>
            <div class="gt">
              <a-input type="text" v-model:value="formData.form.val31.value" :maxlength="50" />
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="7">
          <div class="text-center">本款项是否为保税货物项下付款</div>
        </td>
        <td colspan="18">
          <a-radio-group v-model:value="formData.form.val32.value" style="margin-left: 10px">
            <a-radio value="1">是</a-radio>
            <a-radio value="2">否</a-radio>
          </a-radio-group>
        </td>
      </tr>

      <tr>
        <td colspan="3">
          <div class="text-center">本币款项选择</div>
        </td>
        <td colspan="22">
          <a-radio-group v-model:value="formData.form.val33.value" style="margin-left: 10px">
            <a-radio value="1">预付货款&ensp;Advance Payment</a-radio>
            <a-radio value="2">货到付款&ensp;Payment Against Deliver</a-radio>
            <a-radio value="3">退款&ensp;Refund</a-radio>
            <a-radio value="4">其他&ensp;Others</a-radio>
          </a-radio-group>
        </td>
      </tr>
      <tr>
        <td colspan="3">
          <div class="text-center">付汇性质</div>
        </td>
        <td colspan="22">
          <a-radio-group v-model:value="formData.form.val34.value" style="margin-left: 10px">
            <a-radio value="1">保税区</a-radio>
            <a-radio value="2">出口加工区</a-radio>
            <a-radio value="3">钻石交易所</a-radio>
            <a-radio value="4">其他</a-radio>
            <a-radio value="5">其他特殊经济区域</a-radio>
            <a-radio value="6">深加工结转</a-radio>
          </a-radio-group>

        </td>
      </tr>

      <tr>
        <td colspan="3" rowspan="2">
          <div class="text-center">
            <p class="cn">交易编码</p>
            <p class="en">Bop Transac Code</p>
          </div>
        </td>
        <td colspan="4">
          <div class="text-center">
            <a-input type="text" v-model:value="formData.form.val35.value" :maxlength="50" />

          </div>
        </td>
        <td colspan="4" rowspan="2">
          <div class="text-center">
            <p class="cn">相应币种及金币</p>
            <p class="en">Currency&Amount</p>
          </div>
        </td>
        <td colspan="5">
          <a-input type="text" v-model:value="formData.form.val36.value" :maxlength="50" />

        </td>
        <td colspan="4">
          <div class="text-center">合同号</div>
        </td>
        <td colspan="5">
          <a-input type="text" v-model:value="formData.form.val37.value" :maxlength="50" />

        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center">
            <a-input type="text" v-model:value="formData.form.val38.value" :maxlength="50" />

          </div>
        </td>

        <td colspan="5">
          <a-input type="text" v-model:value="formData.form.val39.value" :maxlength="50" />

        </td>
        <td colspan="4">
          <div class="text-center">发票号</div>
        </td>

        <td colspan="5">
          <a-input type="text" v-model:value="formData.form.val40.value" :maxlength="50" />

        </td>
      </tr>
      <tr>
        <td colspan="7">
          <div class="text-center">外汇局批件号/备案号/业务编号</div>
        </td>
        <td colspan="18">
          <a-input type="text" v-model:value="formData.form.val41.value" :maxlength="50" />

        </td>
      </tr>

      <tr>
        <td colspan="9">
          <div class="text-center">
            <p class="cn">银行专用栏</p>
            <p class="en">For Bank Use Only</p>
          </div>
        </td>
        <td colspan="8">
          <div class="text-center">
            <p class="cn">申请人签章</p>
            <p class="en">Applicant's Signature</p>
          </div>
        </td>
        <td colspan="8">
          <div class="text-center">
            <p class="cn">银行签章</p>
            <p class="en">Bank's Signature</p>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center">
            <p class="cn">购汇汇率</p>
            <p class="en">@Rete</p>
          </div>
        </td>
        <td colspan="5">
          <a-input type="text" v-model:value="formData.form.val42.value" :maxlength="50" />
        </td>
        <td colspan="8" rowspan="6">
          <div class="j-intro">
            <div class="tt">
              <p class="cn">请按照贵行所列条款代办以上汇款并进行申报</p>
              <p class="en">Please Effect The UpWards Remittance,Subject To The Conditions
                Overleaf:
              </p>
            </div>
            <div class="bot">
              <div class="line-flex">
                <div class="lt">
                  <p class="cn">申请人姓名</p>
                  <p class="en">Name of Applicant</p>
                </div>
                <div class="gt">
                  <a-input type="text" v-model:value="formData.form.val48.value" :maxlength="50" />
                </div>
              </div>
              <div class="line-flex">
                <div class="lt">
                  <p class="cn">电话</p>
                  <p class="en">Phone No.</p>
                </div>
                <div class="gt">
                  <a-input type="text" v-model:value="formData.form.val49.value" :maxlength="50" />
                </div>
              </div>
            </div>
          </div>
        </td>
        <td colspan="8" rowspan="6">
          <div class="j-intro">
            <div class="tt"></div>
            <div class="bot">
              <div class="line-flex">
                <div class="lt">
                  <p class="cn">核准人签字</p>
                  <p class="en">Authorized Person</p>
                </div>
                <div class="gt">
                  <a-input type="text" v-model:value="formData.form.val50.value" :maxlength="50" />
                </div>
              </div>
              <div class="line-flex">
                <div class="lt">
                  <p class="cn">日期</p>
                  <p class="en">Date</p>
                </div>
                <div class="gt">
                  <a-input type="text" v-model:value="formData.form.val51.value" :maxlength="50" />
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center">
            <p class="cn">等值人民币</p>
            <p class="en">RMB Equivalent</p>
          </div>
        </td>
        <td colspan="5">
          <a-input type="text" v-model:value="formData.form.val43.value" :maxlength="50" />

        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center">
            <p class="cn">手续费</p>
            <p class="en">Commission</p>
          </div>
        </td>
        <td colspan="5">
          <a-input type="text" v-model:value="formData.form.val44.value" :maxlength="50" />

        </td>
      </tr>

      <tr>
        <td colspan="4">
          <div class="text-center">
            <p class="cn">电报费</p>
            <p class="en">Cable Charges</p>
          </div>
        </td>
        <td colspan="5">
          <a-input type="text" v-model:value="formData.form.val45.value" :maxlength="50" />

        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center">
            <p class="cn">合计</p>
            <p class="en">Total Charges</p>
          </div>
        </td>
        <td colspan="5">
          <a-input type="text" v-model:value="formData.form.val46.value" :maxlength="50" />

        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center">
            <p class="cn">支付费用方式</p>
            <p class="en">In Payment of the Remittance</p>
          </div>
        </td>
        <td colspan="5">
          <a-radio-group v-model:value="formData.form.val47.value" style="margin-left: 10px">
            <a-radio value="1">现金 by Cash</a-radio>
            <a-radio value="2">支票 by Check</a-radio>
            <a-radio value="3">账户 from Account</a-radio>
          </a-radio-group>
        </td>
      </tr>

      <tr>
        <td colspan="4">
          <div class="text-center">核印 Sig.Ver</div>
        </td>
        <td colspan="5">
          <a-input type="text" v-model:value="formData.form.val52.value" :maxlength="50" />
        </td>
        <td colspan="3">
          <div class="text-center">经办 Maker</div>
        </td>
        <td colspan="5">
          <a-input type="text" v-model:value="formData.form.val53.value" :maxlength="50" />
        </td>
        <td colspan="3">
          <div class="text-center">复核 Checker</div>
        </td>
        <td colspan="5">
          <a-input type="text" v-model:value="formData.form.val54.value" :maxlength="50" />
        </td>
      </tr>
    </template>
    <template v-slot:bot> </template>
    <template v-slot>
      <div class="t_tips text-center">
        <p class="cn">请仔细阅读各联条款及填报说明</p>
        <p class="en">Please read the conditions and instructions overlent before filling in this application</p>
      </div>
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

  if (formData.form.val19.value) {
    formData.check1 = true;
  }
  if (formData.form.val20.value) {
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
      // formData.check2 = false;
      formData.form.val19.value = 1;
      formData.form.val20.value = "";

      // formData.form.val16.value = "";
      // formData.form.val17.value = "";
      // formData.form.val18.value = "";
      // formData.form.val19.value = "";
      // formData.form.val20.value = "";
      // formData.form.val21.value = "";
      // formData.form.val22.value = "";
    }
  }
);
watch(
  () => formData.check2,
  (res) => {
    if (res == true) {
      // formData.check1 = false;
      formData.form.val19.value = "";
      formData.form.val20.value = 1;
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

    .time {
      text-align: right;
    }
  }
}

.cn,
.en {
  margin: 0;
  line-height: 1.2;
}

.gt_box {
  display: flex;
  border: 1px solid #888;
  margin-bottom: -3px;

  .lt {
    display: flex;
    align-items: center;
  }

  .line {
    width: 1px;
    background-color: #888;
  }

  .gt {
    display: flex;
    align-items: center;

    .tt {
      font-size: 16px;
      padding: 5px 10px;

      p {
        line-height: 1;
      }
    }
  }
}

.c-line {
  display: inline-block;
  vertical-align: middle;

  +.c-line {
    margin-left: 5px;
  }
}

.t-flex {
  display: flex;
  align-items: center;

  .lt {
    width: 340px;
    text-align: center;
  }

  .gt {
    flex: 1;
  }
}

.j-intro {
  height: 330px;
  position: relative;

  .bot {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

  }
}

.line-flex {
  display: flex;
  align-items: center;
  padding-left: 10px;

  .gt {
    width: 50%;
    border-bottom: 1px solid;
    margin-left: 5px;
  }
}
.t_tips {
    font-size: 16px;
    color: #333;
    padding-top: 3px;
}
</style>
<style lang="scss">
.form-box .bill-top .zhi-top {
  input {
    text-align: left;
  }
}
</style>
