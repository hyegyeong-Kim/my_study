<script setup>
definePageMeta({
  layout: "admin"
});
</script>

<template>
  <div class="content">
    <!-- 그리드제목 -->
    <div class="area-title">
      <h3 class="h3">서비스정보</h3>
    </div>

    <!-- 그리드 -->
    <div class="area-regist">
      <table>
        <!-- Add 23-10-19 -->
        <colgroup>
          <col width="10%" />
          <col width="3%" />
          <col width="" />
        </colgroup>
        <!-- //Add 23-10-19 -->
        <tbody>
          <tr>
            <th><span class="required">서비스명</span></th>
            <td colspan="2">
              <label class="input-wrap w100">
                <input type="text" placeholder="서비스명 입력 (최대 20byte)
                " />
              </label>
            </td>
          </tr>
          <tr>
            <th><span class="required">서비스 대상</span></th>
            <td colspan="2">
              <span class="el-radio">
                <input id="radio1" type="radio" name="radioName" />
                <label for="radio1">공용</label>
              </span>
              <span class="el-radio">
                <input id="radio2" type="radio" name="radioName" />
                <label for="radio2">일반사용자</label>
              </span>
              <span class="el-radio">
                <input id="radio3" type="radio" name="radioName" />
                <label for="radio3">SK구성원</label>
              </span>
            </td>
          </tr>
          <!-- Add 23-10-19 -->
          <tr>
            <th><span class="required">닉네임 사용 여부</span></th>
            <td colspan="2">
              <span class="el-radio">
                <input id="radio4" type="radio" name="nickradio" />
                <label for="radio4">사용</label>
              </span>
              <span class="el-radio">
                <input id="radio5" type="radio" name="nickradio" />
                <label for="radio5">미사용</label>
              </span>
            </td>
          </tr>
          <tr>
            <th><span class="required">프로필 사용 여부</span></th>
            <td colspan="2">
              <span class="el-radio">
                <input id="radio6" type="radio" name="profileradio" />
                <label for="radio6">사용</label>
              </span>
              <span class="el-radio">
                <input id="radio7" type="radio" name="profileradio" />
                <label for="radio7">미사용</label>
              </span>
            </td>
          </tr>
          <!-- //Add 23-10-19 -->
          <tr>
            <th><span class="required">지원 언어</span></th>
            <td colspan="2">
              <span class="el-checkbox">
                <input id="checkbox1" type="checkbox" name="checkboxName" />
                <label for="checkbox1">KR</label>
              </span>
              <span class="el-checkbox">
                <input id="checkbox2" type="checkbox" name="checkboxName" />
                <label for="checkbox2">EN</label>
              </span>
              <span class="el-checkbox">
                <input id="checkbox3" type="checkbox" name="checkboxName" />
                <label for="checkbox3">ZH</label>
              </span>
            </td>
          </tr>
          <tr>
            <th rowspan="3"><span class="required">대고객 서비스명</span></th>
            <td>KR</td>
            <td>
              <label class="input-wrap w100">
                <input type="text" placeholder="대고객 서비스명 입력 (최대 20byte)" />
              </label>
            </td>
          </tr>
          <tr>
            <td>EN</td>
            <td>
              <label class="input-wrap w100">
                <input type="text" placeholder="대고객 서비스명 입력 (최대 20byte)" />
              </label>
            </td>
          </tr>
          <tr>
            <td>ZN</td>
            <td>
              <label class="input-wrap w100">
                <input type="text" placeholder="대고객 서비스명 입력 (최대 20byte)" />
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="box-buttons align-right">
      <button type="button" class="prime solid">등록</button>
    </div>
  </div>
</template>
