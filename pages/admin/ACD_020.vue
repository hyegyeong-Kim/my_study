<script setup>
definePageMeta({
  layout: "admin"
});
</script>

<template>
  <div class="content">
    <div class="layout-column">
      <div class="column">
        <!-- 그리드제목 -->
        <div class="area-title">
          <h3 class="h3">그룹 목록</h3>
          <div class="count">총 <span>12</span>건</div>
        </div>

        <!-- 그리드 -->
        <div class="area-result">
          <table>
            <thead>
              <tr>
                <th>그룹명</th>
                <th>그룹 코드</th>
                <th>비고</th>
                <th>다국어</th>
                <th>수정허용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>직급</td>
                <td>Nickname_bann</td>
                <td>닉네임 금칙어</td>
                <td>N</td>
                <td>Y</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 그리드제목 -->
        <div class="area-title">
          <h3 class="h3">그룹 목록</h3>
          <div class="count">총 <span>12</span>건</div>
        </div>

        <!-- 그리드 -->
        <div class="area-result">
          <table>
            <thead>
              <tr>
                <th>그룹명</th>
                <th>그룹 코드</th>
                <th>비고</th>
                <th>다국어</th>
                <th>수정허용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>직급</td>
                <td>Nickname_bann</td>
                <td>닉네임 금칙어</td>
                <td>N</td>
                <td>Y</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="column">
        <!-- 그리드제목 -->
        <div class="area-title">
          <h3 class="h3">닉네임 금칙어 코드 관리</h3>
          <div class="count">총 <span>12</span>건</div>
          <div class="buttons">
            <button type="button" class="prime solid">저장</button>
            <button type="button" class="prime">추가</button>
            <button type="button">삭제</button>
            <button type="button" class="point upld">엑셀 업로드</button>
            <button type="button" class="point dnld">엑셀 다운로드</button>
          </div>
        </div>

        <!-- 그리드 -->
        <div class="area-result">
          <table>
            <thead>
              <tr>
                <th>
                  <span class="el-checkbox">
                    <input id="checkboxGridAll1" type="checkbox" name="checkboxGridName1" />
                    <label for="checkboxGridAll1"></label>
                  </span>
                </th>
                <th>코드</th>
                <th>코드명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span class="el-checkbox">
                    <input id="checkbox1" type="checkbox" name="checkboxName1" />
                    <label for="checkbox1"></label>
                  </span>
                </td>
                <td>
                  <label class="input-wrap w100">
                    <input type="text" />
                  </label>
                </td>
                <td>
                  <label class="input-wrap w100">
                    <input type="text" />
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 그리드제목 -->
        <div class="area-title">
          <h3 class="h3">국제전화코드 코드 관리</h3>
          <div class="count">총 <span>12</span>건</div>
          <div class="buttons">
            <button type="button" class="prime solid">저장</button>
            <button type="button" class="prime">추가</button>
            <button type="button">삭제</button>
            <button type="button" class="point upld">엑셀 업로드</button>
            <button type="button" class="point dnld">엑셀 다운로드</button>
          </div>
        </div>

        <!-- 그리드 -->
        <div class="area-result">
          <table>
            <thead>
              <tr>
                <th>
                  <span class="el-checkbox">
                    <input id="checkboxGridAll2" type="checkbox" name="checkboxGridName2" />
                    <label for="checkboxGridAll2"></label>
                  </span>
                </th>
                <th>코드</th>
                <th>코드명</th>
                <th>코드명(EN)</th>
                <th>코드명(ZH)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span class="el-checkbox">
                    <input id="checkbox2" type="checkbox" name="checkboxName2" />
                    <label for="checkbox2"></label>
                  </span>
                </td>
                <td>
                  <label class="input-wrap w100">
                    <input type="text" />
                  </label>
                </td>
                <td>
                  <label class="input-wrap w100">
                    <input type="text" />
                  </label>
                </td>
                <td>
                  <label class="input-wrap w100">
                    <input type="text" />
                  </label>
                </td>
                <td>
                  <label class="input-wrap w100">
                    <input type="text" />
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
