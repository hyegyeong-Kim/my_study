<script setup>
definePageMeta({
  layout: "admin"
});
</script>

<template>
  <div class="content">
    <!-- 타이틀영역 -->
    <div class="area-title">
      <h3 class="h3">영역타이틀</h3>
    </div>

    <!-- 입력폼 -->
    <div class="area-regist">
      <table>
        <tr>
          <th>항목명 필수</th>
          <td>
            <label class="select-wrap">
              <select>
                <option value="">select</option>
              </select>
            </label>
          </td>
        </tr>
        <tr>
          <th>항목명</th>
          <td>
            <label class="input-wrap w100">
              <input type="text" value="text" />
            </label>
          </td>
        </tr>
        <tr>
          <th>항목명</th>
          <td>
            <label class="input-textarea w100">
              <textarea></textarea>
            </label>
          </td>
        </tr>
        <tr>
          <th>항목명</th>
          <td>
            <span class="el-radio">
              <input id="radio1" type="radio" name="radioName" checked />
              <label for="radio1">checked</label>
            </span>
            <span class="el-radio">
              <input id="radio2" type="radio" name="radioName" />
              <label for="radio2">default</label>
            </span>
            <span class="el-radio">
              <input id="radio3" type="radio" name="radioName" disabled />
              <label for="radio3">disabled</label>
            </span>
          </td>
        </tr>
        <tr>
          <th>항목명</th>
          <td>
            <span class="el-checkbox">
              <input id="checkbox1" type="checkbox" name="checkboxName" checked />
              <label for="checkbox1">checked</label>
            </span>
            <span class="el-checkbox">
              <input id="checkbox2" type="checkbox" name="checkboxName" />
              <label for="checkbox2">default</label>
            </span>
            <span class="el-checkbox">
              <input id="checkbox3" type="checkbox" name="checkboxName" disabled />
              <label for="checkbox3">disabled</label>
            </span>
          </td>
        </tr>
        <tr>
          <th>항목명</th>
          <td>
            <label class="input-wrap">
              <input type="text" value="0000-00-00" />
              <button type="button" class="icon cal">날짜선택</button>
            </label>
            <label class="select-wrap">
              <select>
                <option value="">00:00</option>
              </select>
            </label>
            <span>~</span>
            <label class="input-wrap">
              <input type="text" value="0000-00-00" />
              <button type="button" class="icon cal">날짜선택</button>
            </label>
            <label class="select-wrap">
              <select>
                <option value="">00:00</option>
              </select>
            </label>
          </td>
        </tr>
      </table>
    </div>

    <!-- 타이틀영역 -->
    <div class="area-title">
      <h3 class="h3">영역타이틀</h3>
    </div>

    <!-- 입력폼 -->
    <div class="area-regist">
      <table>
        <tr>
          <th>항목명</th>
          <td>
            <label class="input-wrap w100">
              <input type="text" value="text" />
            </label>
          </td>
        </tr>
        <tr>
          <th>Redirect URI</th>
          <td>
            <div class="box-regist-inputs">
              <div class="top">
                <p>최대 20개까지 등록 가능합니다.</p>
                <button type="button" class="prime">추가하기</button>
              </div>
              <div class="context">
                <label class="input-wrap w100">
                  <input type="text" value="text" />
                  <button type="button" class="icon del">삭제</button>
                  <button type="button" class="text-only">삭제</button>
                </label>
                <label class="input-wrap w100">
                  <input type="text" value="text" />
                  <button type="button" class="icon del">삭제</button>
                  <button type="button" class="text-only">삭제</button>
                </label>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>

    <!-- 버튼영역 -->
    <div class="box-buttons">
      <button type="button" class="">취소</button>
      <button type="button" class="prime solid">저장</button>

      <button type="button" class="disabled">취소</button><!-- Add 23-11-20 : desabled button [class="disabled"] -->
    </div>
  </div>
</template>
