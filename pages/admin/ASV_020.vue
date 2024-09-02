<script setup>
definePageMeta({
  layout: "admin"
});

/* Add 23-10-19 file value */
const getFile = ref('');
function loadimage(e) {
  getFile.value = e.target.value;
}
/* //Add 23-10-19 file value */
</script>

<template>
  <div class="content">
    <div class="layout-column">
      <div class="column-4"><!-- Edit 23-10-19 -->
        <!-- 그리드제목 -->
        <div class="area-title">
          <h3 class="h3">서비스 목록</h3>
          <div class="count">총 <span>12</span>건</div>
          <div class="buttons">
            <span class="el-checkbox">
              <input id="checkboxService" type="checkbox" name="checkboxService" />
              <label for="checkboxService">미사용 서비스 포함</label>
            </span>
          </div>
        </div>

        <!-- 그리드 -->
        <div class="area-result">
          <table>
            <!-- Add 23-10-19 -->
            <colgroup>
              <col width="80px" />
              <col width="" />
              <col width="110px" />
            </colgroup>
            <!-- //Add 23-10-19 -->
            <thead>
              <tr>
                <th>No.</th>
                <th>서비스명</th>
                <th>서비스 상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>이천포럼</td>
                <td>사용</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="column-6"><!-- Edit 23-10-19 -->
        <!-- 그리드제목 -->
        <div class="area-title">
          <h3 class="h3">로그인 화면</h3>
        </div>

        <!-- 그리드 -->
        <div class="area-regist">
          <table>
            <!-- Add 23-10-19 -->
            <colgroup>
              <col width="13%" />
              <col width="5%" />
              <col width="" />
            </colgroup>
            <!-- //Add 23-10-19 -->
            <tbody>
              <tr>
                <th><span class="required">BI 이미지</span></th>
                <td colspan="2">
                  <!-- Edit 23-10-19 첨부파일명 노출관련 기능 추가 -->
                  <label class="input-wrap" style="width: calc(100% - 110px)"><!-- Edit 23-10-19 -->
                    <input type="text" :value="getFile" readonly />
                  </label>
                  <span class="file-upload">
                    <label for="fileUpload">이미지 등록</label>
                    <input id="fileUpload" type="file" class="blind" @change="loadimage($event)" />
                  </span>
                  <!-- //Edit 23-10-19 첨부파일명 노출관련 기능 추가 -->
                </td>
              </tr>
              <tr>
                <th><span class="required">배경 색상</span></th>
                <td colspan="2">
                  <label class="input-wrap">
                    <input type="text" placeholder="색상 코드 입력" />
                  </label>
                </td>
              </tr>
              <tr>
                <th rowspan="3"><span class="required">배경 이미지</span></th><!-- Edit 23-10-19 Text -->
                <td>KR</td>
                <td>
                  <!-- Edit 23-10-19 첨부파일명 노출관련 기능 추가 -->
                  <label class="input-wrap" style="width: calc(100% - 190px)"><!-- Edit 23-10-19 -->
                    <input type="text" :value="getFile" readonly />
                  </label>
                  <span class="file-upload">
                    <label for="fileUpload">이미지 등록</label>
                    <input id="fileUpload" type="file" class="blind" @change="loadimage($event)" />
                  </span>
                  <!-- //Edit 23-10-19 첨부파일명 노출관련 기능 추가 -->
                  <button type="button" class="prime">미리보기</button>
                  <div class="image-box">
                    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F24283C3858F778CA2E" alt="" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>EN</td>
                <td>
                  <!-- Edit 23-10-19 첨부파일명 노출관련 기능 추가 -->
                  <label class="input-wrap" style="width: calc(100% - 190px)"><!-- Edit 23-10-19 -->
                    <input type="text" :value="getFile" readonly />
                  </label>
                  <span class="file-upload">
                    <label for="fileUpload">이미지 등록</label>
                    <input id="fileUpload" type="file" class="blind" @change="loadimage($event)" />
                  </span>
                  <!-- //Edit 23-10-19 첨부파일명 노출관련 기능 추가 -->
                  <button type="button" class="prime">미리보기</button>
                  <div class="image-box">
                    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F24283C3858F778CA2E" alt="" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>ZH</td>
                <td>
                  <!-- Edit 23-10-19 첨부파일명 노출관련 기능 추가 -->
                  <label class="input-wrap" style="width: calc(100% - 190px)"><!-- Edit 23-10-19 -->
                    <input type="text" :value="getFile" readonly />
                  </label>
                  <span class="file-upload">
                    <label for="fileUpload">이미지 등록</label>
                    <input id="fileUpload" type="file" class="blind" @change="loadimage($event)" />
                  </span>
                  <!-- //Edit 23-10-19 첨부파일명 노출관련 기능 추가 -->
                  <button type="button" class="prime">미리보기</button>
                  <div class="image-box">
                    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F24283C3858F778CA2E" alt="" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="box-buttons align-right">
          <button type="button" class="prime solid">저장</button>
        </div>
      </div>
    </div>
  </div>
</template>
