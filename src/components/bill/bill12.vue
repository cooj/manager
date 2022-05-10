<!-- 现金存款单 -->
<template>
  <BillBox>
    <template v-slot:title>现金存款单</template>
    <template v-slot:top>
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
        <td colspan="1" rowspan="3">
          <div class="writ_lr">存款人</div>
        </td>
        <td colspan="3">
          <div class="text-center"><i class="red">*</i>全称</div>
        </td>
        <td colspan="21">
          <a-input
            type="text"
            v-model:value="formData.form.val5.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="3">
          <div class="text-center"><i class="red">*</i>账号</div>
        </td>
        <td colspan="10">
          <a-input
            type="text"
            v-model:value="formData.form.val6.value"
            :maxlength="50"
          />
        </td>
        <td colspan="3">
          <div class="text-center"><i class="red">*</i>款项来源</div>
        </td>
        <td colspan="8">
          <a-input
            type="text"
            v-model:value="formData.form.val7.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="3">
          <div class="text-center"><i class="red">*</i>开户行</div>
        </td>
        <td colspan="10">
          <a-input
            type="text"
            v-model:value="formData.form.val8.value"
            :maxlength="50"
          />
        </td>
        <td colspan="3">
          <div class="text-center"><i class="red">*</i>交款人</div>
        </td>
        <td colspan="8">
          <a-input
            type="text"
            v-model:value="formData.form.val9.value"
            :maxlength="50"
          />
        </td>
      </tr>
      <tr>
        <td colspan="14">
          <div class="mon_lt">
            <em><i class="red">*</i>金额（大写）</em>
            <span>
              <a-input
                type="text"
                v-model:value="formData.form.val10.value"
                :maxlength="50"
              />
            </span>
          </div>
        </td>

        <td colspan="3">
          <div class="text-center">
            金额
            <br />（小写）
          </div>
        </td>
        <td colspan="8">
          <div class="mon-a">
            <MoneyFix :viewData="formData.money" @getMoney="newMoney" />
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="17">
          <div class="mar-5">
            <TableBox :chunk="22">
              <tr>
                <th colspan="3">
                  <div class="text-center">票面</div>
                </th>
                <th colspan="2">
                  <div class="text-center">张数</div>
                </th>
                <th>
                  <div class="text-center">十</div>
                </th>
                <th>
                  <div class="text-center">万</div>
                </th>
                <th>
                  <div class="text-center">千</div>
                </th>
                <th>
                  <div class="text-center">百</div>
                </th>
                <th>
                  <div class="text-center">十</div>
                </th>
                <th>
                  <div class="text-center">元</div>
                </th>
                <th colspan="3">
                  <div class="text-center">票面</div>
                </th>
                <th colspan="2">
                  <div class="text-center">张数</div>
                </th>
                <th>
                  <div class="text-center">千</div>
                </th>
                <th>
                  <div class="text-center">百</div>
                </th>
                <th>
                  <div class="text-center">十</div>
                </th>
                <th>
                  <div class="text-center">元</div>
                </th>
                <th>
                  <div class="text-center">角</div>
                </th>
                <th>
                  <div class="text-center">分</div>
                </th>
              </tr>
              <tr>
                <th colspan="3">
                  <div class="text-center">壹佰元</div>
                </th>
                <td colspan="2">
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val11.value"
                      :maxlength="5"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val12.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val13.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val14.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val15.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val16.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val17.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <th colspan="3">
                  <div class="text-center">伍角</div>
                </th>
                <td colspan="2">
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val18.value"
                      :maxlength="5"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val19.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val20.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val21.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val22.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val23.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val24.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th colspan="3">
                  <div class="text-center">伍拾元</div>
                </th>
                <td colspan="2">
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val25.value"
                      :maxlength="5"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val26.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val27.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val28.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val29.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val30.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val31.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <th colspan="3">
                  <div class="text-center">贰角</div>
                </th>
                <td colspan="2">
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val32.value"
                      :maxlength="5"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val33.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val34.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val35.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val36.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val37.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val38.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th colspan="3">
                  <div class="text-center">贰拾元</div>
                </th>
                <td colspan="2">
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val39.value"
                      :maxlength="5"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val40.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val41.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val42.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val43.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val44.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val45.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <th colspan="3">
                  <div class="text-center">壹角</div>
                </th>
                <td colspan="2">
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val46.value"
                      :maxlength="5"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val47.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val48.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val49.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val50.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val51.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val52.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th colspan="3">
                  <div class="text-center">拾元</div>
                </th>
                <td colspan="2">
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val53.value"
                      :maxlength="5"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val54.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val55.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val56.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val57.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val58.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val59.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <th colspan="3">
                  <div class="text-center">伍分</div>
                </th>
                <td colspan="2">
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val60.value"
                      :maxlength="5"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val61.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val62.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val63.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val64.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val65.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val66.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th colspan="3">
                  <div class="text-center">伍元</div>
                </th>
                <td colspan="2">
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val67.value"
                      :maxlength="5"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val68.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val69.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val70.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val71.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val72.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val73.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <th colspan="3">
                  <div class="text-center">贰分</div>
                </th>
                <td colspan="2">
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val74.value"
                      :maxlength="5"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val75.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val76.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val77.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val78.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val79.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val80.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th colspan="3">
                  <div class="text-center">贰元</div>
                </th>
                <td colspan="2">
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val81.value"
                      :maxlength="5"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val82.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val83.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val84.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val85.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val86.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val87.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <th colspan="3">
                  <div class="text-center">壹分</div>
                </th>
                <td colspan="2">
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val88.value"
                      :maxlength="5"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val89.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val90.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val91.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val92.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val93.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val94.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th colspan="3">
                  <div class="text-center">壹元</div>
                </th>
                <td colspan="2">
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val95.value"
                      :maxlength="5"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val96.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val97.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val98.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val99.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val100.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val101.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <th colspan="3">
                  <div class="text-center">其他</div>
                </th>
                <td colspan="2">
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val102.value"
                      :maxlength="5"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val103.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val104.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val105.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val106.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val107.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
                <td>
                  <div class="text-center">
                    <a-input
                      type="text"
                      v-model:value="formData.form.val108.value"
                      :maxlength="1"
                    />
                  </div>
                </td>
              </tr>
            </TableBox>
          </div>
        </td>

        <td colspan="8">
          <div class="t_intro">
            备注：
            <div>
              <a-textarea  v-model:value="formData.form.val109.value" :maxlength="250" :rows="10" />
            </div>
          </div>
        </td>
      </tr>
    </template>
    <template v-slot:bot></template>
    <template v-slot>
      <div class="t_tips">第一联银行核对联</div>
    </template>
  </BillBox>
</template>

<script setup>
import { onBeforeMount, reactive } from "vue";
import MoneyFix from "./MoneyFix.vue";
import BillBox from "./BillBox.vue";
import TableBox from "./TableBox.vue";
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
.mon_lt {
  display: flex;
  > span {
    width: 75%;
    padding-left: 10px;
  }
}
.mar-5 {
  margin: -5px;
}
.text-center{
  input{
    text-align:center;
  }
}
</style>
