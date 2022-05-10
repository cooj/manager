<template>
  <BillBox>
    <template v-slot:title>开立单位银行结算账户申请书</template>
    <template v-slot:top></template>
    <template v-slot:body>
      <tr>
        <td colspan="4">
          <div class="text-center"><i class="red">*</i>存款人名称</div>
        </td>
        <td colspan="11">
          <a-input
            type="text"
            v-model:value="formData.form.val1.value"
            :maxlength="50"
          />
        </td>
        <td colspan="3">
          <div class="text-center"><i class="red">*</i>存款人类别</div>
        </td>
        <td colspan="7">
          <a-input
            type="text"
            v-model:value="formData.form.val2.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center"><i class="red">*</i>注册地址</div>
        </td>
        <td colspan="11">
          <a-input
            type="text"
            v-model:value="formData.form.val3.value"
            :maxlength="50"
          />
        </td>
        <td colspan="3">
          <div class="text-center"><i class="red">*</i>组织机构代码</div>
        </td>
        <td colspan="7">
          <a-input
            type="text"
            v-model:value="formData.form.val4.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center"><i class="red">*</i>通信地址</div>
        </td>
        <td colspan="11">
          <a-input
            type="text"
            v-model:value="formData.form.val5.value"
            :maxlength="50"
          />
        </td>
        <td colspan="3">
          <div class="text-center"><i class="red">*</i>邮政编码</div>
        </td>
        <td colspan="7">
          <a-input
            type="text"
            v-model:value="formData.form.val6.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="4" rowspan="2">
          <i class="red">*</i>
          <div class="in-list">
            <a-radio-group v-model:value="formData.form.val7.value">
              <a-radio style="display: block" :value="1">法定代表人</a-radio>
              <a-radio style="display: block" :value="2">单位负责人</a-radio>
            </a-radio-group>
          </div>
        </td>
        <td colspan="2">
          <div class="text-center"><i class="red">*</i>姓名</div>
        </td>
        <td colspan="6">
          <a-input
            type="text"
            v-model:value="formData.form.val8.value"
            :maxlength="50"
          />
        </td>
        <td colspan="3">
          <div class="text-center"><i class="red">*</i>证件种类</div>
        </td>
        <td colspan="10">
          <a-radio-group v-model:value="formData.form.val9.value">
            <a-radio :value="1">身份证</a-radio>
            <a-radio :value="2">
              其他<a-input
                :readonly="formData.form.val9.value !== 2 ? 'readonly' : false"
                v-model:value="formData.form.val10.value"
                style="width: 100px; border-bottom: 1px solid"
              />
            </a-radio>
          </a-radio-group>
        </td>
      </tr>
      <tr>
        <th colspan="3">
          <div class="text-center"><i class="red">*</i>证件号码</div>
        </th>
        <td colspan="8">
          <a-input
            type="text"
            v-model:value="formData.form.val11.value"
            :maxlength="50"
          />
        </td>
        <td colspan="3">
          <div class="text-center"><i class="red">*</i>手机号码</div>
        </td>
        <td colspan="7">
          <a-input
            type="text"
            v-model:value="formData.form.val12.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center"><i class="red">*</i>行业分类</div>
        </td>
        <td colspan="21">
          <a-radio-group
            v-model="formData.form.val13.value"
            style="margin-top: 5px"
          >
            <a-radio
              v-for="(item, index) in formData.arrEn"
              :key="index"
              class="flex-rado"
              :value="item"
              >{{ item }}</a-radio
            >
          </a-radio-group>
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center"><i class="red">*</i>注册基金</div>
        </td>

        <td colspan="8">
          <a-input
            type="text"
            v-model:value="formData.form.val14.value"
            :maxlength="50"
          />
        </td>
        <td colspan="3">
          <div class="text-center"><i class="red">*</i>地区代码</div>
        </td>
        <td colspan="10">
          <a-input
            type="text"
            v-model:value="formData.form.val15.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center"><i class="red">*</i>经营范围</div>
        </td>
        <td colspan="21">
          <a-input
            type="text"
            v-model:value="formData.form.val16.value"
            :maxlength="50"
          />
        </td>
      </tr>

      <tr>
        <td colspan="4" rowspan="1">
          <div class="text-center"><i class="red">*</i>证明文件种类</div>
        </td>

        <td colspan="8">
          <a-input
            type="text"
            v-model:value="formData.form.val17.value"
            :maxlength="50"
          />
        </td>
        <td colspan="3" rowspan="1">
          <div class="text-center"><i class="red">*</i>证明文件编号</div>
        </td>
        <td colspan="10">
          <a-input
            type="text"
            v-model:value="formData.form.val18.value"
            :maxlength="50"
          />
        </td>
      </tr>

      <!-- <tr>
        <td colspan="8">
          <div class="kldw_text"></div>
        </td>

        <td colspan="10">
          <div class="kldw_text"></div>
        </td>
      </tr> -->
      <tr>
        <td colspan="4">
          <div class="text-center">税务登记证编号</div>
        </td>
        <td colspan="2">
          <div class="text-center"><i class="red">*</i>国税</div>
        </td>
        <td colspan="6">
          <a-input
            type="text"
            v-model:value="formData.form.val19.value"
            :maxlength="50"
          />
        </td>
        <td colspan="3">
          <div class="text-center"><i class="red">*</i>意见</div>
        </td>
        <td colspan="10">
          <a-input
            type="text"
            v-model:value="formData.form.val20.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center"><i class="red">*</i>账户性质</div>
        </td>

        <td colspan="8">
          <a-radio-group v-model:value="formData.form.val21.value">
            <a-radio :value="1">基本</a-radio>
            <a-radio :value="2">一般</a-radio>
            <a-radio :value="3">专用</a-radio>
            <a-radio :value="4"
              >其他<a-input
                :readonly="formData.form.val21.value !== 4 ? 'readonly' : false"
                v-model:value="formData.form.val22.value"
                style="width: 80px; border-bottom: 1px solid"
              />
            </a-radio>
          </a-radio-group>
        </td>
        <td colspan="3">
          <div class="text-center"><i class="red">*</i>币种</div>
        </td>
        <td colspan="10">
          <a-radio-group v-model:value="formData.form.val23.value">
            <a-radio :value="1">人民币</a-radio>
            <a-radio :value="2">美元</a-radio>
            <a-radio :value="3">港币</a-radio>
            <a-radio :value="4">欧元</a-radio>
            <a-radio :value="5"
              >其他
              <a-input
                :readonly="formData.form.val23.value !== 5 ? 'readonly' : false"
                v-model:value="formData.form.val24.value"
                style="width: 80px; border-bottom: 1px solid"
              />
            </a-radio>
          </a-radio-group>
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center"><i class="red">*</i>资金性质</div>
        </td>

        <td colspan="8">
          <a-input
            type="text"
            v-model:value="formData.form.val25.value"
            :maxlength="50"
          />
        </td>
        <td colspan="3">
          <div class="text-center"><i class="red">*</i>有效期至</div>
        </td>
        <td colspan="10">
          <a-date-picker
            v-model="formData.form.val26.value"
            valueFormat="YYYY-MM-DD"
          />
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center"><i class="red">*</i>预留联系人姓名</div>
        </td>

        <td colspan="7">
          <a-input
            type="text"
            v-model:value="formData.form.val27.value"
            :maxlength="50"
          />
        </td>
        <td colspan="7">
          <a-input
            type="text"
            v-model:value="formData.form.val28.value"
            :maxlength="50"
          />
        </td>
        <td colspan="7">
          <a-input
            type="text"
            v-model:value="formData.form.val29.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center"><i class="red">*</i>证件种类</div>
        </td>

        <td colspan="7">
          <a-radio-group v-model:value="formData.form.val30.value">
            <a-radio :value="1">身份证</a-radio>
            <a-radio :value="2"
              >其他<a-input
                :readonly="formData.form.val30.value !== 2 ? 'readonly' : false"
                v-model:value="formData.form.val31.value"
                style="width: 100px; border-bottom: 1px solid"
              />
            </a-radio>
          </a-radio-group>
        </td>
        <td colspan="7">
          <a-radio-group v-model:value="formData.form.val32.value">
            <a-radio :value="1">身份证</a-radio>
            <a-radio :value="2"
              >其他<a-input
                :readonly="formData.form.val32.value !== 2 ? 'readonly' : false"
                v-model:value="formData.form.val33.value"
                style="width: 100px; border-bottom: 1px solid"
              />
            </a-radio>
          </a-radio-group>
        </td>
        <td colspan="7">
          <a-radio-group v-model:value="formData.form.val34.value">
            <a-radio :value="1">身份证</a-radio>
            <a-radio :value="2"
              >其他<a-input
                :readonly="formData.form.val34.value !== 2 ? 'readonly' : false"
                v-model:value="formData.form.val35.value"
                style="width: 100px; border-bottom: 1px solid"
              />
            </a-radio>
          </a-radio-group>
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center"><i class="red">*</i>证件号码</div>
        </td>
        <td colspan="7">
          <a-input
            type="text"
            v-model:value="formData.form.val36.value"
            :maxlength="50"
          />
        </td>
        <td colspan="7">
          <a-input
            type="text"
            v-model:value="formData.form.val37.value"
            :maxlength="50"
          />
        </td>
        <td colspan="7">
          <a-input
            type="text"
            v-model:value="formData.form.val38.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center"><i class="red">*</i>手机号码</div>
        </td>

        <td colspan="7">
          <a-input
            type="text"
            v-model:value="formData.form.val39.value"
            :maxlength="50"
          />
        </td>
        <td colspan="7">
          <a-input
            type="text"
            v-model:value="formData.form.val40.value"
            :maxlength="50"
          />
        </td>
        <td colspan="7">
          <a-input
            type="text"
            v-model:value="formData.form.val41.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center">是否开通电话银行</div>
        </td>

        <td colspan="8">
          <a-radio-group
            v-model:value="formData.form.val42.value"
            style="margin-left: 10px"
          >
            <a-radio :value="1">是</a-radio>
            <a-radio :value="2">否</a-radio>
          </a-radio-group>
        </td>
        <td colspan="4">
          <div class="text-center">是否开通浙商e信</div>
        </td>
        <td colspan="9">
          <a-radio-group
            v-model:value="formData.form.val43.value"
            style="margin-left: 10px"
          >
            <a-radio :value="1">是</a-radio>
            <a-radio :value="2">否</a-radio>
          </a-radio-group>
        </td>
      </tr>
      <tr>
        <td colspan="4" rowspan="2">
          <div class="text-center">
            账户类型
            <br />(任选其一)
          </div>
        </td>
        <td colspan="10" rowspan="2">
          <a-radio-group
            v-model:value="formData.form.val44.value"
            style="margin-left: 10px"
          >
            <a-radio :value="1">支付密码结算账户</a-radio>
            <a-radio :value="2">网银结算账户</a-radio><br />
            <a-radio :value="3">凭印支付结算账户</a-radio>
            <a-radio :value="4">电子结算账户</a-radio>
          </a-radio-group>
        </td>
        <td colspan="2" rowspan="3">
          <div class="text-center">电子结算账户绑定主账户</div>
        </td>
        <td colspan="2">
          <div class="text-center">户号</div>
        </td>
        <td colspan="7">
          <a-input
            type="text"
            v-model:value="formData.form.val45.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <div class="text-center">账号</div>
        </td>
        <td colspan="7">
          <a-input
            type="text"
            v-model:value="formData.form.val46.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="6">
          <div class="text-center">申请开通支付密码的请选择</div>
        </td>
        <td colspan="8">
          <a-radio-group
            v-model:value="formData.form.val47.value"
            style="margin-left: 10px"
          >
            <a-radio :value="1">领用新支付密码器</a-radio>
            <a-radio :value="2">在原有支付密码器中增加账号</a-radio>
          </a-radio-group>
        </td>

        <td colspan="2">
          <div class="text-center">开户行</div>
        </td>
        <td colspan="7">
          <a-input
            type="text"
            v-model:value="formData.form.val48.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <th colspan="25" class="bgcol">以下为存款人上级法人或主管单位信息</th>
      </tr>
      <tr>
        <th colspan="6">
          <div class="text-center">上级法人或主管单位名称</div>
        </th>
        <td colspan="19">
          <a-input
            type="text"
            v-model:value="formData.form.val49.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <th colspan="6">
          <div class="text-center">基本存款账户开户许可证核准号</div>
        </th>
        <td colspan="9">
          <a-input
            type="text"
            v-model:value="formData.form.val50.value"
            :maxlength="50"
          />
        </td>
        <td colspan="3">
          <div class="text-center">组织机构代码</div>
        </td>
        <td colspan="7">
          <a-input
            type="text"
            v-model:value="formData.form.val51.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="4" rowspan="2">
          <a-radio-group
            v-model:value="formData.form.val52.value"
            style="margin-left: 10px"
          >
            <a-radio :value="1">法定代表人</a-radio>
            <a-radio :value="2">单位负责人</a-radio>
          </a-radio-group>
        </td>
        <td colspan="2">
          <div class="text-center">姓名</div>
        </td>
        <td colspan="6">
          <a-input
            type="text"
            v-model:value="formData.form.val53.value"
            :maxlength="50"
          />
        </td>
        <td colspan="3">
          <div class="text-center">证件种类</div>
        </td>
        <td colspan="10">
          <a-radio-group v-model:value="formData.form.val54.value">
            <a-radio :value="1">身份证</a-radio>
            <a-radio :value="2"
              >其他<a-input
                :readonly="formData.form.val54.value !== 2 ? 'readonly' : false"
                v-model:value="formData.form.val55.value"
                style="width: 90px; border-bottom: 1px solid"
              />
            </a-radio>
          </a-radio-group>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <div class="text-center">证件号码</div>
        </td>
        <td colspan="20">
          <a-input
            type="text"
            v-model:value="formData.form.val56.value"
            :maxlength="50"
          />
        </td>
      </tr>

      <tr>
        <th colspan="25" class="bgcol">
          以下为存款人一本银行结算账户申请注册网银填写内容
        </th>
      </tr>
      <tr>
        <th colspan="6" rowspan="4">
          <a-radio-group
            v-model:value="formData.form.val57.value"
            style="margin-left: 10px"
          >
            <a-radio :value="1">开立网银印章账户</a-radio>
            <a-radio :value="2">开立网银普通证书客户</a-radio>
            <a-radio :value="3">开立网银密码账户</a-radio>
            <a-radio :value="4">本账户以往已注册网银</a-radio>
          </a-radio-group>
        </th>
        <td colspan="4">
          <div class="text-center">角色及姓名</div>
        </td>
        <td colspan="5">
          <div class="kl_bot">
            帐号：<span
              style="
                display: inline-block;
                width: 65%;
                border-bottom: 1px solid;
              "
            >
              <a-input
                type="text"
                v-model:value="formData.form.val58.value"
                :maxlength="50"
              />
            </span>
          </div>
        </td>
        <td colspan="5">
          <div class="kl_bot">
            授权员：<span
              style="
                display: inline-block;
                width: 65%;
                border-bottom: 1px solid;
              "
            >
              <a-input
                type="text"
                v-model:value="formData.form.val59.value"
                :maxlength="50"
              />
            </span>
          </div>
        </td>
        <td colspan="5">
          <div class="kl_bot">
            管理员：<span
              style="
                display: inline-block;
                width: 65%;
                border-bottom: 1px solid;
              "
            >
              <a-input
                type="text"
                v-model:value="formData.form.val60.value"
                :maxlength="50"
              />
            </span>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center">证件种类</div>
        </td>
        <td colspan="5">
          <a-radio-group v-model:value="formData.form.val61.value">
            <a-radio :value="1">身份证</a-radio>
            <a-radio :value="2"
              >其他<a-input
                :readonly="formData.form.val61.value !== 2 ? 'readonly' : false"
                v-model:value="formData.form.val62.value"
                style="width: 65px; border-bottom: 1px solid"
              />
            </a-radio>
          </a-radio-group>
        </td>
        <td colspan="5">
          <a-radio-group v-model:value="formData.form.val63.value">
            <a-radio :value="1">身份证</a-radio>
            <a-radio :value="2"
              >其他<a-input
                :readonly="formData.form.val63.value !== 2 ? 'readonly' : false"
                v-model:value="formData.form.val64.value"
                style="width: 65px; border-bottom: 1px solid"
              />
            </a-radio>
          </a-radio-group>
        </td>
        <td colspan="5">
          <a-radio-group v-model:value="formData.form.val65.value">
            <a-radio :value="1">身份证</a-radio>
            <a-radio :value="2"
              >其他<a-input
                :readonly="formData.form.val65.value !== 2 ? 'readonly' : false"
                v-model:value="formData.form.val66.value"
                style="width: 65px; border-bottom: 1px solid"
              />
            </a-radio>
          </a-radio-group>
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center">证件号码</div>
        </td>
        <td colspan="5">
          <a-input
            type="text"
            v-model:value="formData.form.val67.value"
            :maxlength="50"
          />
        </td>
        <td colspan="5">
          <a-input
            type="text"
            v-model:value="formData.form.val68.value"
            :maxlength="50"
          />
        </td>
        <td colspan="5">
          <a-input
            type="text"
            v-model:value="formData.form.val69.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="text-center">手机号码</div>
        </td>
        <td colspan="5">
          <a-input
            type="text"
            v-model:value="formData.form.val70.value"
            :maxlength="50"
          />
        </td>
        <td colspan="5">
          <a-input
            type="text"
            v-model:value="formData.form.val71.value"
            :maxlength="50"
          />
        </td>
        <td colspan="5">
          <a-input
            type="text"
            v-model:value="formData.form.val72.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <th colspan="25" class="bgcol">以下由开户银行审核后填写</th>
      </tr>
      <tr>
        <td colspan="25">
          <div class="kldw_text" style="min-height: 100px"></div>
        </td>
      </tr>
      <tr>
        <td colspan="9">
          <div class="kldw_intro">
            <div class="tt">
              本存款人因需要申请开立银行结算账户和上述业务事项，承运所提供的开户资料真实有效
            </div>
            <div class="cont">
              <a-radio-group v-model:value="formData.form.val73.value">
                <a-radio :value="1"
                  >同时一并申请以本银行结算账户网银，已阅读并同意《浙商银行电子银F（单）业务协议》和《浙商银行信息服务持议书》（浙滴银行网站公布），对申请的相关功能，已了解相应的业务规定，并自愿遵守其规定</a-radio
                >
                <a-radio :value="2"
                  >同时一并申请开立电子存折，并指定本银行结算，账户为该电子存折的主系户，承诺遵守《浙商银电子存折业务办法》及有关规定</a-radio
                >
              </a-radio-group>
            </div>
            <div class="bott">
              <div class="qian"></div>
              <div class="gai">存款人（公章）</div>
              <div class="time">
                日期：
                <span class="year"></span>年 <span class="month"></span>月
                <span class="date"></span>日
              </div>
            </div>
          </div>
        </td>
        <td colspan="8">
          <div class="kldw_intro">
            <div class="tt">开户银行审核意见</div>
            <div class="cont">
              <a-radio-group v-model:value="formData.form.val74.value">
                <a-radio :value="1">同意贵单位开银行结算账户</a-radio>
                <a-radio :value="2"
                  >经审校，因存在待校实事项，同意贵单位开立待启用银行结算账户，待账户正式启用完，不办对外付款业务。我行与贵单位校实无误后，正式启用本账户</a-radio
                >
              </a-radio-group>
            </div>
            <div class="bott">
              <div class="qian">
                <p>
                  经办:
                  <span class="jinban"></span>
                </p>
                <p>
                  主管:
                  <span class="zhuguan"></span>
                </p>
              </div>
              <div class="gai">存款人（公章）</div>
              <div class="time">
                日期：
                <span class="year"></span>年 <span class="month"></span>月
                <span class="date"></span>日
              </div>
            </div>
          </div>
        </td>
        <td colspan="8">
          <div class="kldw_intro">
            <div class="tt">人民银行审核意见</div>
            <div class="cont"></div>
            <div class="bott">
              <div class="qian"></div>
              <div class="gai">人民银行签章</div>
              <div class="time">
                日期：
                <span class="year"></span>年 <span class="month"></span>月
                <span class="date"></span>日
              </div>
            </div>
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
  arrEn: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
  ],
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
.in-list {
  display: inline-block;
  margin: 0;
  vertical-align: middle;
}
.flex-rado {
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  margin: 0 5px;
  padding: 2px 3px;
}
.bgcol {
  background: #eee;
}
.kldw_intro {
  position: relative;
  height: 350px;
  padding-bottom: 50px;
  .tt {
    margin-bottom: 10px;
    line-height: 1.3;
  }
  .cont {
    height: 300px;
  }

  .bott {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: right;
    span {
      display: inline-block;
      min-width: 30px;
    }
    .qian {
      span {
        display: inline-block;
        width: 100px;
      }
    }
    .gai {
      padding-right: 30px;
    }
  }
}
</style>
