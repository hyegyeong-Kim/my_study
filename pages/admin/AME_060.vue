<script setup>
definePageMeta({
  layout: "admin"
});

const getFile = ref('');
function loadimage(e) {
  getFile.value = e.target.value;

  /* 파일유형에 따른 알림팝업 */
  openModal('modal-typeCheck');
  /* 파일유형에 따른 알림팝업 */
}

function openModal(id, _type) {
  document.getElementById(id).classList.add("active");
  if(_type){
    document.getElementById(id).children[0].classList.add(_type);
  }
}
function closeModal(id) {
  document.getElementById(id).classList.remove("active");
}
function closeModalOverlay(e) {
  e.target.classList.remove("active");
}
</script>

<template>
  <div class="content">
    <!-- Edit 2024.02.19 : 페이지 형식 변경 -->
    <div class="layout-column">
        <!-- 개인정보 입력 -->
        <div class="column">
            <!-- 타이틀영역 -->
            <div class="area-title">
              <h3 class="h3">개인정보 입력</h3>
              <div class="buttons">
                  <button type="button" class="prime solid" @click="openModal('modal-typeCheck');">확인</button>
                  <!-- add 2024-02-22 -->
                  <button type="button">수정</button>
                  <!-- //add 2024-02-22 -->
              </div>
            </div>
            <div class="area-regist">
                <table>
                    <colgroup>
                        <col style="width:20%;" />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th>E-mail ID</th>
                            <td>
                              <label class="input-wrap w100">
                                  <input type="text" value="">
                                  <button type="button" class="icon del">삭제</button>
                              </label>
                            </td>
                        </tr>
                        <tr>
                            <th>이름</th>
                            <td>
                              <label class="input-wrap w100">
                                  <input type="text" value="">
                                  <button type="button" class="icon del">삭제</button>
                              </label>
                            </td>
                        </tr>
                        <tr>
                            <th>생년월일</th>
                            <td>
                              <label class="input-wrap w100">
                                  <input type="text" value="">
                                  <button type="button" class="icon del">삭제</button>
                              </label>
                            </td>
                        </tr>
                        <tr>
                            <th>휴대폰번호</th>
                            <td>
                              <label class="input-wrap w100">
                                  <input type="text" value="">
                                  <button type="button" class="icon del">삭제</button>
                              </label>
                            </td>
                        </tr>
                        <tr>
                            <th>성별</th>
                            <td>
                              <CMultiple
                                :id="['sex']"
                                :type="'radio'"
                                :title="'성별'"
                                :name="'sex'"
                                :label="['남자', '여자']"
                                :checked="[true, false]"
                                :disabled="false"
                                :confirm="false"
                              />
                            </td>
                        </tr>
                        <tr>
                            <th>회원유형</th>
                            <td>
                              <CMultiple
                                :id="['mem_type']"
                                :type="'radio'"
                                :title="'유형'"
                                :name="'mem_type'"
                                :label="['미지정', '비지니스파트너', '사회적기업', 'SK구성원 가족', '대학생']"
                                :checked="[true, false]"
                                :disabled="true"
                                :confirm="false"
                              />
                            </td>
                        </tr>
                        <tr>
                          <th>약관동의 파일</th>
                          <td>
                            <label class="input-wrap" style="width: calc(100% - 110px)"><!-- Edit 23-10-19 -->
                              <input type="text" :value="getFile" readonly />
                            </label>
                            <span class="file-upload">
                              <label for="fileUpload">파일찾기</label>
                              <input id="fileUpload" type="file" class="blind" @change="loadimage($event)" />
                            </span>
                          </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- //개인정보 입력 -->

        <!-- 가입 필수 정보 입력 -->
        <div class="column">
            <!-- 타이틀영역 -->
            <div class="area-title">
                <h3 class="h3">가입 필수 정보 입력</h3>
                <div class="buttons">
                    <button type="button" class="prime solid" @click="openModal('modal-typeCheck');">저장</button>
                </div>
            </div>
            <div class="area-regist">
                <table>
                    <colgroup>
                        <col style="width:20%;" />
                        <col style="width:20%;" />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th colspan="2">비밀번호</th>
                            <td>
                                <label class="input-wrap w100">
                                    <input type="text" value="">
                                    <button type="button" class="icon del">삭제</button>
                                </label>
                                <p class="error-text">연속되는 숫자, 문자를 세 글자 이상 사용할 수 없습니다.</p>
                            </td>
                        </tr>
                        <tr>
                            <!-- edit 2024-02-22 -->
                            <th>닉네임</th>
                            <th>
                              <CSelectBox :coptions="[
                                { val: 'val1', txt: 'mySUNI' },
                                { val: 'val2', txt: 'LRS' },
                                { val: 'val3', txt: '이천포럼' },
                                { val: 'val4', txt: '울산포럼' },
                                { val: 'val5', txt: 'AAA' }
                                ]" :title="'닉네임'" :changed="false" />
                            </th>
                            <!-- //edit 2024-02-22 -->
                            <td>
                                <label class="input-wrap w100">
                                    <input type="text" value="">
                                    <button type="button" class="icon del">삭제</button>
                                </label>
                                <p class="error-text">최소 2자 이상 입력하세요.</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- //가입 필수 정보 입력 -->
    </div>

    <!-- 모달 -->
    <div id="modal-typeCheck" class="modal-overlay" @click="closeModalOverlay($event)">
      <div class="modal-container" @click.stop>
        <div class="header">
          <strong class="title">알림</strong>
          <button type="button" class="button" @click.prevent="closeModal('modal-typeCheck')">닫기</button>
        </div>
        <!-- 파일 확장자 -->
        <div class="content">
          <p>ZIP, GIF,JPG, PNG, BMP, PDF만 업로드 가능합니다.</p>
        </div>
        <!-- //파일 확장자 -->

        <!-- 'E-mail ID' 항목에 사용불가 도메인 입력 시 -->
        <div class="content">
          <p>mySUNI는 %발송 제한 도메인% E-mail 사용이 제한되어 있습니다.</p>
          <p>상세한 내용은 Help Desk(02-6323-9002)를 통해 확인하세요.</p>
        </div>
        <!-- //'E-mail ID' 항목에 사용불가 도메인 입력 시 -->

        <!-- 입력되지 않은 정보 있을 경우 -->
        <div class="content">
          <p>정상적으로 입력되지 않은 정보가 있습니다.</p>
          <p>모든 정보가 정상 입력되어야 합니다.</p>
        </div>
        <!-- //입력되지 않은 정보 있을 경우 -->

        <!-- 일인 존재 시 ({이름&생년&휴대폰 번호} 값이 동일할 경우) -->
        <div class="content">
          <p>동일 정보로 가입한 계정이 이미 존재합니다.</p>
          <p>ID 찾기를 통해 기존 계정을 검색하시거나 Help Desk(02-6323-9002)로 문의하세요.</p>
        </div>
        <!-- //일인 존재 시 ({이름&생년&휴대폰 번호} 값이 동일할 경우) -->
        <div class="footer">
          <!-- 버튼영역 -->
          <div class="box-buttons">
            <button type="button">취소</button>
            <button type="button" class="prime solid" @click="openModal('modal-sub');">확인</button>
          </div>
        </div>
      </div>
    </div>
    <!-- //모달 -->

    <!-- 서브모달 -->
    <div id="modal-sub" class="modal-overlay" @click="closeModalOverlay($event)">
      <div class="modal-container" @click.stop>
        <div class="header">
          <strong class="title">알림</strong>
          <button type="button" class="button" @click.prevent="closeModal('modal-sub')">닫기</button>
        </div>
        <div class="content">
          <p>선택하신 사용자가 모든 서비스에 정상 가입 되었습니다.</p>
          <p>선택하신 사용자 가입 처리에 실패하였습니다.</p>
        </div>
        <div class="footer">
          <!-- 버튼영역 -->
          <div class="box-buttons">
            <button type="button" class="prime solid">확인</button>
          </div>
        </div>
      </div>
    </div>
    <!-- //서브모달 -->
    <!-- //Edit 2024.02.19 : 페이지 형식 변경 -->    
  </div>
</template>
