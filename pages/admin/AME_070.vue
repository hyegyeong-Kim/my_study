<script setup>
definePageMeta({
  layout: "admin"
});
</script>

<template>
  <div class="content">
    <!-- 검색조건 -->
    <div class="area-contition">
      <table>
        <!-- Add 23-10-19 -->
        <colgroup>
          <col width="85px" />
          <col width="" />
        </colgroup>
        <!-- //Add 23-10-19 -->
        <tbody><!-- Add 23-10-19 tbody -->
          <tr>
            <th>탈퇴일자</th>
            <td>
              <label class="input-wrap">
                <input type="text" value="0000-00-00" />
                <button type="button" class="icon cal">날짜선택</button>
              </label>
              <span>~</span>
              <label class="input-wrap">
                <input type="text" value="0000-00-00" />
                <button type="button" class="icon cal">날짜선택</button>
              </label>
            </td>
          </tr>
        </tbody><!-- Add 23-10-19 tbody -->
      </table>
      <button type="submit" class="submit">조회</button>
    </div>

    <!-- 그리드제목 -->
    <div class="area-title">
      <h3 class="h3">탈퇴 목록</h3>
      <div class="count">총 <span>12</span>건</div>
      <div class="buttons">
        <button type="button" class="point dnld">엑셀 다운로드</button>
        <label class="select-wrap">
          <select>
            <option value="">10개씩 보기</option>
            <option value="">25개씩 보기</option>
            <option value="">50개씩 보기</option>
            <option value="">100개씩 보기</option>
          </select>
        </label>
      </div>
    </div>

    <!-- 그리드 -->
    <div class="area-result">
      <table>
        <thead>
          <tr>
            <th>
              <span class="el-checkbox">
                <input id="checkboxGridAll" type="checkbox" name="checkboxGridName" />
                <label for="checkboxGridAll"></label>
              </span>
            </th>
            <th>가입일자</th>
            <th>탈퇴일자</th>
            <th>회원유형</th>
            <th>소속</th>
            <th>사유1</th>
            <th>사유2</th>
            <th>사유3</th>
            <th>사유4</th>
            <th>사유5</th>
            <th>기타</th>
            <th>기타내용</th>
            <th>건의사항</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span class="el-checkbox">
                <input id="checkboxGrid01" type="checkbox" name="checkboxGridName" />
                <label for="checkboxGrid01"></label>
              </span>
            </td>
            <td>2023-06-28</td>
            <td>2023-06-28</td>
            <td>SK가족</td>
            <td>(유)미주계전</td>
            <td>Y</td>
            <td>N</td>
            <td>N</td>
            <td>N</td>
            <td>N</td>
            <td>N</td>
            <td></td>
            <td></td>
          </tr>

          <!-- 결과 없을 경우 -->
          <tr>
            <td colspan="999">
              <p class="no-result">조회내역이 없습니다.</p>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="box-pagination">
        <a href="" class="move first">첫페이지 이동</a>
        <a href="" class="move prev">이전페이지 이동</a>
        <a href="">991</a>
        <a href="">992</a>
        <a href="">993</a>
        <a href="">994</a>
        <a href="" class="current">995</a>
        <a href="">996</a>
        <a href="">997</a>
        <a href="">998</a>
        <a href="">999</a>
        <a href="">1000</a>
        <a href="" class="move next">다음페이지 이동</a>
        <a href="" class="move last">마지막페이지 이동</a>
      </div>
    </div>
  </div>
</template>
