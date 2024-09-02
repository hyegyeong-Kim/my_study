<script setup>
definePageMeta({
  layout: "admin"
});

function openModal(id, _type) {/* Edit 23-10-19 넓이에 따른 클래스 추가 : 1200 = wide */
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

const getFile = ref('');
function loadimage(e) {
  getFile.value = e.target.value;
}
</script>

<template>
  <div class="content">
    <div class="layout-column">
      <div class="column">
        <!-- 그리드제목 -->
        <div class="area-title">
          <h3 class="h3">약관 목록</h3>
          <div class="count">총 <span>12</span>건</div>
        </div>

        <!-- 그리드 -->
        <div class="area-result">
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>서비스명</th>
                <th>약관코드</th>
                <th>약관명</th>
                <th>버전_KR</th>
                <th>버전_EN</th>
                <th>버전_ZH</th>
                <th>수정 일시</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>이천포럼</td>
                <td>ICHEON_TERM</td>
                <td>서비스 이용 약관</td>
                <td>2.0.1</td>
                <td>1.1.1</td>
                <td>1.1.0</td>
                <td>2023-05-05 00:00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="column">
        <!-- 그리드제목 -->
        <div class="area-title">
          <h3 class="h3">약관 기본 정보</h3>
        </div>

        <!-- 그리드 -->
        <div class="area-regist fix_width">
          <table>
            <tbody>
              <tr>
                <th>서비스명</th>
                <td>mySUrrrrrrrrI</td>
              </tr>
              <tr>
                <th>약관 코드</th>
                <td>COMMON_TERM</td>
              </tr>
              <tr>
                <th>필수 여부</th>
                <td>필수</td>
              </tr>
              <tr>
                <th>약관 재동의 여부</th>
                <td>불필요</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 그리드제목 -->
        <div class="area-title">
          <h3 class="h3">약관 노출 정보</h3>
          <div class="buttons">
            <button type="button" class="prime solid">저장</button>
          </div>
        </div>

        <!-- 그리드 -->
        <div class="area-regist">
          <table>
            <tbody>
              <tr>
                <th rowspan="3"><span class="required">약관명</span></th>
                <td>KR</td>
                <td>
                  <label class="input-wrap w100">
                    <input type="text" value="">
                  </label>
                </td>
              </tr>
              <tr>
                <td>EN</td>
                <td>
                  <label class="input-wrap w100">
                    <input type="text" value="">
                  </label>
                </td>
              </tr>
              <tr>
                <td>ZH</td>
                <td>
                  <label class="input-wrap w100">
                    <input type="text" value="">
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 그리드제목 -->
        <div class="area-title">
          <h3 class="h3">약관 파일 버전
            <span class="el-checkbox">
              <input id="checkboxGridAll" type="checkbox" name="checkboxGridName" />
              <label for="checkboxGridAll">미적용 약관 포함</label>
            </span>

          </h3>
          <div class="buttons">
            <button type="button" class="prime solid" @click="openModal('modal-22')">등록</button><!-- Edit 23-11-06 팝업 적용 -->
            <button type="button" class="prime">삭제</button>
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
                <th>제공 언어</th>
                <th>약관 파일</th>
                <th>버전</th>
                <th>관리 이력/비교</th>
                <th>상태</th>
                <th>등록 일시</th>
                <th>적용 일시</th>
                <th>미리보기</th>
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
                <td>KR</td>
                <td>mySUNI_KR</td>
                <td>2.0.1</td>
                <td>약관 개정</td>
                <td>예정</td>
                <td>2023-06-07 11:00</td>
                <td>2023-05-14 00:00</td>
                <td><button type="button" class="underline">미리보기</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- 약관 파일 등록 Add 23-11-06 팝업 위치 확인 -->
  <div id="modal-22" class="modal-overlay" @click="closeModalOverlay($event)">
    <div class="modal-container" @click.stop>
      <div class="header">
        <strong class="title">약관 파일 등록</strong>
        <button type="button" class="button" @click.prevent="closeModal('modal-22')">닫기</button>
      </div>
      <div class="content">
        <!-- 그리드 -->
        <div class="area-regist">
          <table>
            <colgroup>
              <col width="25%" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th><span class="required">언어</span></th>
                <td>
                  <label class="select-wrap">
                    <select>
                      <option value="">select</option>
                    </select>
                  </label>
                </td>
              </tr>
              <tr>
                <th><span class="required">버전</span></th>
                <td>
                  <label class="input-wrap">
                    <input type="text" placeholder="버전 입력" /><!-- Edit 23-10-19 -->
                  </label>
                  <p>※ 현재 버전 : 2.0.0</p>
                  <p>※ 버전은 숫자, '.'만 입력 가능 (예 : 1.0.0)</p>
                </td>
              </tr>
              <tr>
                <th><span class="required">파일 첨부</span></th><!-- Edit 23-10-19 Text -->
                <!-- Edit 23-10-19 첨부파일명 노출관련 기능 추가 -->
                <td>
                  <label class="input-wrap" style="width: calc(100% - 100px)">
                    <input type="text" :value="getFile" readonly />
                  </label>
                  <span class="file-upload">
                    <label for="fileUpload">등록하기</label>
                    <input id="fileUpload" type="file" class="blind" @change="loadimage($event)" />
                  </span>
                </td>
                <!-- //Edit 23-10-19 첨부파일명 노출관련 기능 추가 -->
              </tr>
              <tr>
                <th><span class="required">적용 일시</span></th>
                <td>
                  <label class="input-wrap">
                    <input type="text" value="0000-00-00" />
                    <button type="button" class="icon cal">날짜선택</button>
                  </label>
                </td>
              </tr>
              <tr>
                <th>관리 이력/비고</th>
                <td>
                  <label class="input-wrap w100">
                    <input type="text" placeholder="관리 이력/비고 입력 (최대 20byte)" /><!-- Edit 23-10-19 -->
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="footer">
        <!-- 버튼영역 -->
        <div class="box-buttons">
          <button type="button" class="prime">취소</button>
          <button type="button" class="prime solid">등록</button>
        </div>
      </div>
    </div>
  </div>
</template>
