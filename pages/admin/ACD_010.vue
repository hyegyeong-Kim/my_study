<script setup>
definePageMeta({
  layout: "admin"
});
</script>

<template>
  <div class="content">
    <!-- 그리드제목 -->
    <div class="area-title">
      <h3 class="h3">그룹 목록</h3>
      <div class="count">총 <span>12</span>건</div>
      <div class="buttons">
        <button type="button" class="prime">그룹 등록</button>
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
            <th>그룹 코드</th>
            <th>그룹명</th>
            <th>비고</th>
            <th>수정허용</th>
            <th>다국어</th>
            <th>등록 개수</th>
            <th>수정</th>
            <th>수정일</th>
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
            <td>Job_Grade</td>
            <td>직급</td>
            <td>일반급</td>
            <td>N</td>
            <td>N</td>
            <td><button type="button" class="underline">9</button></td>
            <td><button type="button" class="underline">수정</button></td>
            <td>2023-07-03</td>
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
