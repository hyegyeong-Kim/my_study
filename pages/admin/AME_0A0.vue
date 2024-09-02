<script setup>
definePageMeta({
  layout: "admin"
});
</script>

<template>
  <div class="content">
    <!-- Delete 23-10-19 검색조건 삭제 -->

    <!-- 그리드제목 -->
    <div class="area-title">
      <h3 class="h3">등록 결과</h3><!-- Edit 23-10-23 -->
      <div class="count">총 <span>12</span>건</div>
      <div class="buttons">
        <button type="button" class="point dnld">엑셀 다운로드</button>
        <span class="point upld">
          <label for="fileUpload">엑셀 업로드</label>
          <input id="fileUpload" type="file" class="blind" />
        </span>
        <!-- Delete 23-10-19 sorting 삭제 -->
      </div>
    </div>

    <!-- 그리드 -->
    <div class="area-result">
      <!-- Edit 23-10-19 -->
      <table>
        <colgroup>
          <col width="90px" />
          <col width="" />
          <col width="" />
          <col width="" />
          <col width="90px" />
          <col width="110px" />
          <col width="" />
          <col width="" />
          <col width="" />
          <col width="" />
          <col width="" />
          <col width="" />
          <col width="" />
          <col width="" />
          <col width="70px" />
          <col width="" />
          <col width="80px" />
          <col width="" />
          <col width="80px" />
          <col width="70px" />
          <col width="" />
        </colgroup>
        <thead>
          <tr>
            <th>사번</th>
            <th>이름(KR)</th>
            <th>이름(EN)</th>
            <th>이름(ZH)</th>
            <th>생년월일</th>
            <th>국제전화 코드</th>
            <th>휴대폰 번호</th>
            <th>E-mail</th>
            <th>소속</th>
            <th>부서</th>
            <th>직무</th>
            <th>직급</th>
            <th>직위</th>
            <th>직책</th>
            <th>파트너</th>
            <th>고용형태</th>
            <th>퇴직여부</th>
            <th>국가</th>
            <th>mySUNI</th>
            <th>결과</th>
            <th>결과실패사유</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SK000000</td>
            <td>김*니</td>
            <td></td>
            <td></td>
            <td>****-**-**</td>
            <td>+82</td>
            <td>010-****-1234</td>
            <td>mySUNI@sk.com</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>N</td>
            <td>정규직</td>
            <td>N</td>
            <td>KR</td>
            <td>Y</td>
            <td>실패</td>
            <td>동일인 정보 존재</td>
          </tr>
          <!-- //Edit 23-10-19 -->

          <!-- 결과 없을 경우 -->
          <tr>
            <td colspan="999">
              <p class="no-result">조회내역이 없습니다.</p>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- Delete 23-10-19 페이징 삭제 -->
    </div>
  </div>
</template>
