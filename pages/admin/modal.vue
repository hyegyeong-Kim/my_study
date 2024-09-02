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

/* Add 23-10-19 file value */
const getFile = ref('');
function loadimage(e) {
  getFile.value = e.target.value;
}
/* //Add 23-10-19 file value */

/* 자동완성 레이어 팝업 23-11-07 */
function auto_complete_modal(e){
  // alert('a');
  console.log(e.target);
  if(!e.target.closest('.auto_complete_wrap').querySelector('.code-search-list').classList.contains('active')){
    e.target.closest('.auto_complete_wrap').querySelector('.code-search-list').classList.add('active');
  }
}

function close_auto_complete_modal(e){
  e.target.closest('.code-search-list').classList.remove('active');
}
/* //자동완성 레이어 팝업 23-11-07 */

const smsContext = `
mySUNI 이용 안내 드립니다.
mySUNI 회원 체계 개편으로 통합 ID 전환이 필요합니다.
로그인 후 통합 ID로 전환을 진행해 주세요.
&lt;진행 방법&gt;
1. mySUNI 접속 후 로그인 실행
2. 통합 ID 전환 화면으로 이동
3. 완료
보다 자세한 사항은 아래 안내 페이지를 참고해주세요.
`;
</script>

<template>
  <div class="modal-page">
    <button type="button" @click="openModal('modal-01')">modal</button><br />
    <button type="button" @click="openModal('modal-02')">파트너사 검색</button><br />
    <strong>AME_P01</strong><button type="button" @click="openModal('modal-03','wide')">이용약관 조회</button><br />
    <strong>AME_P02</strong><button type="button" @click="openModal('modal-04')">개인정보 파일 다운로드</button><br />
    <strong>AME_P03</strong><button type="button" @click="openModal('modal-05')">계정 정지</button>&nbsp;<button type="button" @click="openModal('modal-06')">알림</button><br />
    <strong>AME_P04</strong><button type="button" @click="openModal('modal-07')">계정 메모 입력</button>&nbsp;<button type="button" @click="openModal('modal-08')">알림</button
    ><br />
    <!-- Add 23-10-19 -->
    <strong>AME_P06</strong><button type="button" @click="openModal('modal-25')">SK구성원 조회</button><br />
    <!-- Add 23-10-19 -->
    <!-- Add 23-10-23 -->
    <strong>AME_P07</strong><button type="button" @click="openModal('modal-26')">회원 등록</button><br />
    <!-- Add 23-10-23 -->
    <strong>AME_011</strong><button type="button" @click="openModal('modal-09')">알림</button><br />
    <strong>AME_P05</strong><button type="button" @click="openModal('modal-10', 'wide')">SK구성원 계정연결 변경</button><br />
    <strong>AME_050</strong><button type="button" @click="openModal('modal-11')">알림</button><br />
    <strong>AAU_P01</strong><button type="button" @click="openModal('modal-12','wide')">통합ID 회원 조회</button>&nbsp;<button type="button" @click="openModal('modal-13')">알림</button
    ><br />
    <strong>AAU_P02</strong><button type="button" @click="openModal('modal-14')">멤버사 조회</button><br />
    <strong>AAU_P04</strong><button type="button" @click="openModal('modal-15', 'wide')">멤버사 회원 조회</button>&nbsp;<button type="button" @click="openModal('modal-16')">알림</button
    ><br />
    <strong>ACD_P01</strong><button type="button" @click="openModal('modal-17')">그룹 코드 등록</button><br />
    <strong>ACD_P02</strong><button type="button" @click="openModal('modal-18')">그룹 코드 수정</button><br />
    <strong>ASV_020</strong><button type="button" @click="openModal('modal-19')">알림</button><br />
    <strong>ASV_030</strong><button type="button" @click="openModal('modal-20')">알림</button><br />
    <strong>ATM_010</strong><button type="button" @click="openModal('modal-21')">알림</button><br />
    <strong>ATM_P01</strong><button type="button" @click="openModal('modal-22')">알림</button><br />
    <strong>ASY_P01</strong><button type="button" @click="openModal('modal-23')">E-mail 발송 내역 상세</button><br />
    <strong>ASY_P02</strong><button type="button" @click="openModal('modal-24')">SMS 발송</button><br />
    <!-- 2024-03-04 AME_011 모달팝업 추가 -->
    <strong>AME_P09</strong><button type="button" @click="openModal('modal-27')">계정삭제</button><br />
    <strong>AME_P09</strong><button type="button" @click="openModal('modal-28')">계정삭제_미입력 항목 있을 시</button><br />
    <strong>AME_P09</strong><button type="button" @click="openModal('modal-29')">계정삭제_정상적으로 삭제 완료</button><br />
    <!-- //2024-03-04 AME_011 모달팝업 추가 -->
    <!-- 2024-03-04 AME_020 모답팝업 추가 -->
    <strong>AME_020</strong><button type="button" @click="openModal('modal-30')">확장자가 csv가 아닐경우</button><br />
    <strong>AME_020</strong><button type="button" @click="openModal('modal-31')">엑셀파일 유효성 체크</button><br />
    <!-- //2024-03-04 AME_020 모답팝업 추가 -->
    <strong>AME_P11</strong><button type="button" @click="openModal('modal-32')">회원정보 상세</button><br />

    <ClientOnly>
      <Teleport to="#admin-container">
        <!-- modal -->
        <div id="modal-01" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">팝업 타이틀</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-01')">닫기</button>
            </div>
            <div class="content">
              <!-- 검색조건 -->
              <div class="area-contition">
                <table>
                  <tr>
                    <th>text</th>
                    <td>
                      <label class="input-wrap">
                        <input type="text" value="text" />
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <th>date</th>
                    <td>
                      <label class="input-wrap">
                        <input type="text" value="0000-00-00" />
                        <button type="button" class="icon cal">날짜선택</button>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <th>radio</th>
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
                    <th>select</th>
                    <td>
                      <label class="select-wrap">
                        <select>
                          <option value="">select</option>
                        </select>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <th>period</th>
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
                  <tr>
                    <th>checkbox</th>
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
                </table>
                <button type="submit" class="submit">조회</button>
              </div>

              <!-- 그리드제목 -->
              <div class="area-title">
                <h3 class="h3">그리드 제목</h3>
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
                      <th>집계구분</th>
                      <th>수치</th>
                      <th>강조</th>
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
                      <td>Label</td>
                      <td>1,000.00</td>
                      <td>기본</td>
                    </tr>
                    <tr>
                      <td>
                        <span class="el-checkbox">
                          <input id="checkboxGrid02" type="checkbox" name="checkboxGridName" />
                          <label for="checkboxGrid02"></label>
                        </span>
                      </td>
                      <td>Label</td>
                      <td>1,000.00</td>
                      <td class="emphasis">단일데이터 강조</td>
                    </tr>
                    <tr class="emphasis">
                      <!-- 강조(행): tr 태그에 emphasis 클래스 삽입. -->
                      <td>
                        <span class="el-checkbox">
                          <input id="checkboxGrid03" type="checkbox" name="checkboxGridName" />
                          <label for="checkboxGrid03"></label>
                        </span>
                      </td>
                      <td>Label</td>
                      <td>1,000.00</td>
                      <td>행 강조</td>
                    </tr>
                    <tr class="modify">
                      <!-- 강조(수정예정 행): tr 태그에 modify 클래스 삽입. -->
                      <td>
                        <span class="el-checkbox">
                          <input id="checkboxGrid04" type="checkbox" name="checkboxGridName" />
                          <label for="checkboxGrid04"></label>
                        </span>
                      </td>
                      <td>Label</td>
                      <td>1,000.00</td>
                      <td>수정예정 행 강조</td>
                    </tr>
                    <tr class="checked">
                      <!-- 강조(선택): tr 태그에 checked 클래스 삽입. -->
                      <td>
                        <span class="el-checkbox">
                          <input id="checkboxGrid05" type="checkbox" name="checkboxGridName" checked />
                          <label for="checkboxGrid05"></label>
                        </span>
                      </td>
                      <td>Label</td>
                      <td>1,000.00</td>
                      <td>선택 행 강조</td>
                    </tr>
                    <tr>
                      <td>
                        <span class="el-checkbox">
                          <input id="checkboxGrid06" type="checkbox" name="checkboxGridName" />
                          <label for="checkboxGrid06"></label>
                        </span>
                      </td>
                      <td>Label</td>
                      <td>1,000.00</td>
                      <td>기본</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="footer">
              <!-- 버튼영역 -->
              <div class="box-buttons">
                <button type="button" class="">취소</button>
                <button type="button" class="prime solid">적용</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 파트너사 검색 -->
        <div id="modal-02" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">파트너사 검색</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-02')">닫기</button>
              <div class="row">
                <!-- <div class="border-wrap">
                  <CInputs :id="'partnerName'" :type="'text'" :placeholder="''" :value="'가나'" />
                  <CButtons class="search" :type="'Icon'" />
                </div> -->
                <label class="input-wrap w100">
                  <input type="text" value="" />
                  <button type="button" class="icon del">삭제</button>
                  <button type="button" class="icon sch">검색</button>
                </label>
              </div>
            </div>
            <div class="content">
              <div class="code-search-list">
                <div class="top">
                  <span>총 9999건 조회</span>
                </div>
                <ul class="list">
                  <!-- 파트너사 -->
                  <li>
                    <button type="button" class="button">
                      <div class="name">
                        <strong>(주)<em>가나</em>계전</strong>
                        <span>Kana elec</span>
                      </div>
                      <div class="info">403-81-12188</div>
                    </button>
                  </li>

                  <!-- 사회적기업 -->
                  <li>
                    <button type="button" class="button">
                      <div class="name">
                        <strong>(주)<em>가나</em>계전</strong>
                        <span>Kana elec</span>
                      </div>
                      <div class="info">403-81-12188</div>
                    </button>
                  </li>

                  <!-- 대학교 -->
                  <li>
                    <button type="button" class="button">
                      <div class="name">
                        <strong><em>서울</em>대학교</strong>
                        <span>Seoul National University</span>
                      </div>
                      <div class="info">SNU</div>
                    </button>
                  </li>

                  <!-- 소속사 -->
                  <li>
                    <button type="button" class="button">
                      <div class="name">
                        <strong>SK플래닛</strong>
                        <span><em>SK P</em>LANET</span>
                      </div>
                      <div class="info">403-81-12188</div>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- 이용약관 조회 -->
        <div id="modal-03" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">이용약관 조회</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-03')">닫기</button>
            </div>
            <div class="content">
              <!-- 그리드제목 -->
              <div class="area-title">
                <div class="count">총 <span>12</span>건</div>
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
                      <th>서비스명</th>
                      <th>약관코드</th>
                      <th>약관명</th>
                      <th>필수 여부</th>
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
                      <td>mySUNI</td>
                      <td>COMMON_TERM</td>
                      <td>mySUNI 통합약관</td>
                      <td>필수</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="footer">
              <!-- 버튼영역 -->
              <div class="box-buttons">
                <button type="button" class="">취소</button>
                <button type="button" class="prime solid">등록</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 개인정보 파일 다운로드 -->
        <div id="modal-04" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">개인정보 파일 다운로드</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-04')">닫기</button>
            </div>
            <div class="content">
              <!-- 그리드제목 -->
              <div class="area-title">
                <p>다운로드 사유를 입력하세요.</p>
              </div>

              <!-- 그리드 -->
              <div class="area-regist">
                <table>
                  <tbody>
                    <tr>
                      <th>다운로드 신청자</th>
                      <td>김관리</td>
                    </tr>
                    <tr>
                      <th>마스킹 여부</th>
                      <td>
                        <span class="el-radio">
                          <input id="radio2-1" type="radio" name="radioName2" checked />
                          <label for="radio2-1">Y</label>
                        </span>
                        <span class="el-radio">
                          <input id="radio2-2" type="radio" name="radioName2" />
                          <label for="radio2-2">N</label>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th>다운로드 항목 건수</th>
                      <td>999</td>
                    </tr>
                    <tr>
                      <th><span class="required">다운로드 사유</span></th>
                      <td>
                        <label class="input-textarea w100">
                          <textarea placeholder="사유를 상세히 입력하세요."></textarea>
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
                <button type="button" class="">취소</button>
                <button type="button" class="prime solid">다운로드</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 계정 정지 -->
        <div id="modal-05" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">개인정보 파일 다운로드</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-05')">닫기</button>
            </div>
            <div class="content">
              <!-- 그리드 -->
              <div class="area-regist">
                <table>
                  <tbody>
                    <tr>
                      <th>E-mail ID</th>
                      <td>aaa**@naver.com</td>
                    </tr>
                    <tr>
                      <th><span class="required">정지 사유</span></th>
                      <td>
                        <label class="select-wrap w100">
                          <select>
                            <option value="">이용약관 위배</option>
                            <option value="">관리자 사칭</option>
                            <option value="">해킹 등 개인정보 도용의심</option>
                            <option value="">욕설 및 광고성 글 작성</option>
                            <option value="">기타(직접입력)</option>
                          </select>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <th>직접입력</th>
                      <td>
                        <label class="input-textarea w100">
                          <textarea placeholder="사유를 상세히 입력하세요." disabled></textarea>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <th>처리자</th>
                      <td>김관리</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="footer">
              <!-- 버튼영역 -->
              <div class="box-buttons">
                <button type="button" class="">취소</button>
                <button type="button" class="prime solid">확인</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 알림 -->
        <div id="modal-06" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">알림</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-06')">닫기</button>
            </div>
            <div class="content">
              <p>aaa**@naver.com 계정의 정지를 해제하시겠습니까?</p>
              <p>aaa**@naver.com 계정의 정지가 정상 처리되었습니다.</p>
              <p>aaa**@naver.com 계정의 정지 해제가 정상 처리되었습니다.</p>
            </div>
            <div class="footer">
              <!-- 버튼영역 -->
              <div class="box-buttons">
                <button type="button" class="prime solid">확인</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 계정 메모 입력 -->
        <div id="modal-07" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">계정 메모 입력</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-07')">닫기</button>
            </div>
            <div class="content">
              <!-- 그리드 -->
              <div class="area-regist">
                <table>
                  <tbody>
                    <tr>
                      <th><span class="required">관리 사유</span></th>
                      <td>
                        <label class="input-textarea w100">
                          <textarea placeholder="관리 지정 사유를 입력하세요."></textarea>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <th>지정자</th>
                      <td>김관리</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="footer">
              <!-- 버튼영역 -->
              <div class="box-buttons">
                <button type="button" class="">취소</button>
                <button type="button" class="prime solid">확인</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 알림 -->
        <div id="modal-08" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">알림</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-08')">닫기</button>
            </div>
            <div class="content">
              <p>aaa**@naver.com 계정의 메모 입력이 정상 처리 되었습니다.</p>
              <p>aaa**@naver.com 계정의 메모를 삭제하시겠습니까?</p>
              <p>aaa**@naver.com 계정의 메모 삭제가 정상 처리되었습니다.</p>
            </div>
            <div class="footer">
              <!-- 버튼영역 -->
              <div class="box-buttons">
                <button type="button" class="prime solid">확인</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 알림 -->
        <div id="modal-09" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">알림</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-09')">닫기</button>
            </div>
            <div class="content">
              <p>
                aaa**@naver.com 계정의 비밀번호를 초기화 하시겠습니까?<br />
                비밀번호 변경 링크가 E-mail 발송됩니다.
              </p>
              <p>aaa**@naver.com으로 초기화 E-mail이 발송되었습니다.</p>
            </div>
            <div class="footer">
              <!-- 버튼영역 -->
              <div class="box-buttons">
                <button type="button" class="prime solid">확인</button>
              </div>
            </div>
          </div>
        </div>

        <!-- SK구성원 계정연결 변경 -->
        <div id="modal-10" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">SK구성원 계정연결 변경</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-10')">닫기</button>
            </div>
            <div class="content">
              <!-- 그리드제목 -->
              <div class="area-title">
                <div class="count">총 <span>12</span>건</div>
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
                      <th>사번</th>
                      <th>이름(KR)</th>
                      <th>휴대폰 번호</th>
                      <th>E-mail</th>
                      <th>소속</th>
                      <th>통합 ID 회원</th>
                      <th>관리방식</th>
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
                      <td>SK0000000</td>
                      <td>김*니</td>
                      <td>010-****-0000</td>
                      <td>mySU**@sk.com</td>
                      <td>SK 이노베이션</td>
                      <td>Y</td>
                      <td>GDI</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="footer">
              <!-- 버튼영역 -->
              <div class="box-buttons">
                <button type="button" class="">취소</button>
                <button type="button" class="prime solid">등록</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 알림 -->
        <div id="modal-11" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">알림</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-11')">닫기</button>
            </div>
            <div class="content">
              <p>등록하신 12개 항목을 회원으로 등록하시겠습니까?</p>
              <p>
                회원등록이 정상 처리되었습니다. <br />
                (12건 중 11건 등록)
              </p>
            </div>
            <div class="footer">
              <!-- 버튼영역 -->
              <div class="box-buttons">
                <button type="button" class="">취소</button>
                <button type="button" class="prime solid">확인</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 통합ID 회원 조회 -->
        <div id="modal-12" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">통합ID 회원 조회</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-12')">닫기</button>
            </div>
            <div class="content">
              <!-- 검색조건 -->
              <div class="area-contition">
                <table>
                  <!-- Add 23-10-19 -->
                  <colgroup>
                    <col width="85px" />
                    <col width="" />
                    <col width="85px" />
                    <col width="" />
                  </colgroup>
                  <!-- //Add 23-10-19 -->
                  <tbody><!-- Add 23-10-19 -->
                    <tr>
                      <th>소속</th>
                      <td>
                        <label class="input-wrap">
                          <input type="text" value="" />
                          <button type="button" class="icon sch">검색</button>
                        </label>
                      </td>
                      <th>사번</th><!-- Edit 23-10-19 Text-->
                      <td>
                        <label class="input-wrap">
                          <input type="text" value="" />
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <th>E-mail ID</th>
                      <td>
                        <label class="input-wrap">
                          <input type="text" value="" />
                        </label>
                      </td>
                      <th>이름</th>
                      <td>
                        <label class="input-wrap">
                          <input type="text" value="" />
                        </label>
                      </td>
                    </tr>
                  </tbody><!-- Add 23-10-19 -->
                </table>
                <button type="submit" class="submit">조회</button>
              </div>

              <!-- 그리드제목 -->
              <div class="area-title">
                <div class="count">총 <span>12</span>건</div>
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
                      <th>E-mail ID</th><!-- Edit 23-10-19 -->
                      <th>이름(KR)</th>
                      <th>회원유형</th>
                      <th>소속</th>
                      <th>사번</th>
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
                      <td>SK0000000</td>
                      <td>김*니</td>
                      <td>SK구성원</td>
                      <td>SK 이노베이션</td>
                      <td>SK0000000</td>
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
            <div class="footer">
              <!-- 버튼영역 -->
              <div class="box-buttons">
                <button type="button" class="">취소</button>
                <button type="button" class="prime solid">등록</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 알림 -->
        <div id="modal-13" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">알림</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-13')">닫기</button>
            </div>
            <div class="content">
              <p>
                관리자 등록이 정상 처리되었습니다. <br />
                (12건 중 11건 등록, 1건 등록 실패)
              </p>
            </div>
            <div class="footer">
              <!-- 버튼영역 -->
              <div class="box-buttons">
                <button type="button" class="">취소</button>
                <button type="button" class="prime solid">확인</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 멤버사 조회 -->
        <div id="modal-14" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">멤버사 조회</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-14')">닫기</button>
            </div>
            <div class="content">
              <!-- 검색조건 -->
              <div class="area-contition">
                <table>
                  <tr>
                    <th>그룹사</th>
                    <td>
                      <label class="select-wrap">
                        <select>
                          <option value="">select</option>
                        </select>
                      </label>
                    </td>
                    <th>멤버사</th>
                    <td>
                      <label class="input-wrap">
                        <input type="text" value="" />
                      </label>
                    </td>
                  </tr>
                </table>
                <button type="submit" class="submit">조회</button>
              </div>

              <!-- 그리드제목 -->
              <div class="area-title">
                <div class="count">총 <span>12</span>건</div>
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
                      <th>그룹사</th>
                      <th>멤버사</th>
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
                      <td>SK 이노베이션</td>
                      <td>SK 이노베이션</td>
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
            <div class="footer">
              <!-- 버튼영역 -->
              <div class="box-buttons">
                <button type="button" class="">취소</button>
                <button type="button" class="prime solid">등록</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 멤버사 회원 조회 -->
        <div id="modal-15" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">멤버사 회원 조회</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-15')">닫기</button>
            </div>
            <div class="content">
              <!-- 검색조건 -->
              <div class="area-contition">
                <table>
                  <!-- Add 23-10-19 -->
                  <colgroup>
                    <col width="85px" />
                    <col width="" />
                    <col width="85px" />
                    <col width="" />
                  </colgroup>
                  <!-- //Add 23-10-19 -->
                  <tbody><!-- Add 23-10-19 -->
                    <tr>
                      <th>소속</th>
                      <td>
                        <label class="input-wrap">
                          <input type="text" value="" />
                          <button type="button" class="icon sch">검색</button>
                        </label>
                      </td>
                      <th>사번</th>
                      <td>
                        <label class="input-wrap">
                          <input type="text" value="" />
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <th>E-mail ID</th>
                      <td>
                        <label class="input-wrap">
                          <input type="text" value="" />
                        </label>
                      </td>
                      <th>이름</th>
                      <td>
                        <label class="input-wrap">
                          <input type="text" value="" />
                        </label>
                      </td>
                    </tr>
                  </tbody><!-- Add 23-10-19 -->
                </table>
                <button type="submit" class="submit">조회</button>
              </div>

              <!-- 그리드제목 -->
              <div class="area-title">
                <div class="count">총 <span>12</span>건</div>
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
                      <th>사번</th>
                      <th>이름(KR)</th>
                      <th>E-mail ID</th>
                      <th>소속</th>
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
                      <td>SK0000000</td>
                      <td>김*니</td>
                      <td>mySU**@sk.com</td>
                      <td>SK 이노베이션</td>
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
            <div class="footer">
              <!-- 버튼영역 -->
              <div class="box-buttons">
                <button type="button" class="">취소</button>
                <button type="button" class="prime solid">등록</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 알림 -->
        <div id="modal-16" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">알림</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-16')">닫기</button>
            </div>
            <div class="content">
              <p>
                관리자 등록이 정상 처리되었습니다. <br />
                (12건 중 11건 등록, 1건 등록 실패)
              </p>
            </div>
            <div class="footer">
              <!-- 버튼영역 -->
              <div class="box-buttons">
                <button type="button" class="">취소</button>
                <button type="button" class="prime solid">확인</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 그룹 코드 수정 -->
        <div id="modal-17" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">그룹 코드 등록</strong><!-- Edit 23-10-19 -->
              <button type="button" class="button" @click.prevent="closeModal('modal-17')">닫기</button>
            </div>
            <div class="content">
              <!-- 그리드 -->
              <div class="area-regist">
                <table>
                  <!-- Add 23-10-19 -->
                  <colgroup>
                    <col width="22%" />
                    <col width="" />
                  </colgroup>
                  <!-- //Add 23-10-19 -->
                  <tbody>
                    <tr>
                      <th><span class="required">그룹 코드</span></th><!-- Edit 23-10-19 -->
                      <td>
                        <label class="input-wrap">
                          <input type="text" value="" />
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <th><span class="required">그룹명</span></th>
                      <td>
                        <label class="input-wrap">
                          <input type="text" value="" />
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <th>수정허용 여부</th>
                      <td>
                        <!-- Edit 23-10-19 -->
                        <span class="el-radio">
                          <input id="acd_p01-1" type="radio" name="acd_p01-1" />
                          <label for="acd_p01-1">Y</label>
                        </span>
                        <span class="el-radio">
                          <input id="acd_p01-2" type="radio" name="acd_p01-1" />
                          <label for="acd_p01-2">N</label>
                        </span>
                        <!-- //Edit 23-10-19 -->
                      </td>
                    </tr>
                    <tr>
                      <th>다국어</th>
                      <td>
                        <!-- Edit 23-10-19 -->
                        <span class="el-radio">
                          <input id="acd_p01-3" type="radio" name="acd_p01-3" />
                          <label for="acd_p01-3">Y</label>
                        </span>
                        <span class="el-radio">
                          <input id="acd_p01-4" type="radio" name="acd_p01-3" />
                          <label for="acd_p01-4">N</label>
                        </span>
                        <!-- //Edit 23-10-19 -->
                      </td>
                    </tr>
                    <tr>
                      <th><span class="required">비고</span></th>
                      <td>
                        <label class="input-textarea w100">
                          <textarea placeholder=""></textarea>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <th>최초 등록자</th>
                      <td>김슈퍼, 2023-07-03</td>
                    </tr>
                    <tr>
                      <th>최근 수정자</th>
                      <td>이수정, 2023-07-25</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="footer">
              <!-- 버튼영역 -->
              <div class="box-buttons">
                <button type="button" class="">취소</button>
                <button type="button" class="prime solid">저장</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 그룹 코드 수정 -->
        <div id="modal-18" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">그룹 코드 수정</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-18')">닫기</button>
            </div>
            <div class="content">
              <!-- 그리드 -->
              <div class="area-regist">
                <table>
                  <!-- Add 23-10-19 -->
                  <colgroup>
                    <col width="22%" />
                    <col width="" />
                  </colgroup>
                  <!-- //Add 23-10-19 -->
                  <tbody>
                    <tr>
                      <th>그룹 코드</th>
                      <td>
                        <label class="input-wrap">
                          <input type="text" value="Job Group" readonly /><!-- Edit 23-10-19 -->
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <th><span class="required">그룹명</span></th>
                      <td>
                        <label class="input-wrap">
                          <input type="text" value="" />
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <th>수정허용 여부</th>
                      <td>Y</td>
                    </tr>
                    <tr>
                      <th>다국어</th>
                      <td>Y</td>
                    </tr>
                    <tr>
                      <th><span class="required">비고</span></th>
                      <td>
                        <label class="input-textarea w100">
                          <textarea placeholder=""></textarea>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <th>최초 등록자</th>
                      <td>김슈퍼, 2023-07-03</td>
                    </tr>
                    <tr>
                      <th>최근 수정자</th>
                      <td>이수정, 2023-07-25</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="footer">
              <!-- 버튼영역 -->
              <div class="box-buttons">
                <button type="button" class="">취소</button>
                <button type="button" class="prime solid">저장</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 알림 -->
        <div id="modal-19" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">알림</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-19')">닫기</button>
            </div>
            <div class="content">
              <p>BI 이미지, 배경 색상, 배경 이미지가 모두 입력되어야<br />미리보기가 가능합니다.</p>
              <p>필수 입력해야 하는 항목이 입력되지 않았습니다.</p>
              <p>정보 저장이 정상 처리되었습니다.</p>
            </div>
            <div class="footer">
              <!-- 버튼영역 -->
              <div class="box-buttons">
                <button type="button" class="prime solid">확인</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 알림 -->
        <div id="modal-20" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">알림</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-20')">닫기</button>
            </div>
            <div class="content">
              <p>필수 입력해야 하는 항목이 입력되지 않았습니다.</p>
              <p>정보 저장이 정상 처리되었습니다.</p>
            </div>
            <div class="footer">
              <!-- 버튼영역 -->
              <div class="box-buttons">
                <button type="button" class="prime solid">확인</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 알림 -->
        <div id="modal-21" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">알림</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-21')">닫기</button>
            </div>
            <div class="content">
              <p>필수 입력해야 하는 항목이 입력되지 않았습니다.</p>
              <p>삭제할 약관을 선택하세요.</p>
              <p>이미 적용된 약관은 삭제할 수 없습니다.</p>
              <p>선택된 약관을 삭제하시겠습니까? <br />(총 5건)</p>
              <p>약관 삭제가 정상 처리되었습니다.</p>
            </div>
            <div class="footer">
              <!-- 버튼영역 -->
              <div class="box-buttons">
                <button type="button" class="prime solid">확인</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 약관 파일 등록 -->
        <div id="modal-22" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">알림</strong>
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

        <!-- E-mail 발송 내역 상세 -->
        <div id="modal-23" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">E-mail 발송 내역 상세</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-23')">닫기</button>
            </div>
            <div class="content">
              <!-- 그리드제목 -->
              <div class="area-title">
                <h3 class="h3">E-mail 수신인</h3>
                <div class="count">총 <span>12</span>건</div>
                <div class="count">성공 <span>6</span>건</div>
                <div class="count">실패 <span>6</span>건</div>
                <div class="buttons">
                  <span class="el-checkbox">
                    <input id="checkboxFail" type="checkbox" name="checkboxFail" />
                    <label for="checkboxFail">실패 내역만 조회</label>
                  </span>
                </div>
              </div>

              <!-- 그리드 -->
              <div class="area-result">
                <table>
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>E-mail</th>
                      <th>발송 결과</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>aaa**@sk.com</td>
                      <td>성공</td>
                    </tr>
                  </tbody>
                </table>
                <!-- Add 23-10-19 -->
                <div class="box-pagination mb20">
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
                <!-- //Add 23-10-19 -->
              </div>

              <!-- 그리드제목 -->
              <div class="area-title">
                <h3 class="h3">제목 및 본문</h3>
              </div>

              <!-- 그리드 -->
              <div class="area-regist">
                <table>
                  <!-- Add 23-10-19 -->
                  <colgroup>
                    <col width="14%" />
                    <col width="" />
                  </colgroup>
                  <!-- //Add 23-10-19 -->
                  <tbody>
                    <tr>
                      <th>제목</th>
                      <td>mySUNI 이용 안내 드립니다.</td>
                    </tr>
                    <tr>
                      <th><span class="required">내용</span></th>
                      <td>
                        <label class="input-textarea w100">
                          <textarea placeholder=""></textarea>
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
                <button type="button" class="">취소</button>
                <button type="button" class="prime solid">저장</button>
              </div>
            </div>
          </div>
        </div>

        <!-- SMS 발송 -->
        <div id="modal-24" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">SMS 발송</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-24')">닫기</button>
            </div>
            <div class="content">
              <!-- 그리드제목 -->
              <div class="area-title">
                <h3 class="h3">SMS 수신인</h3>
                <div class="count">총 <span>12</span>건</div>
                <div class="count">성공 <span>6</span>건</div>
                <div class="count">실패 <span>6</span>건</div>
                <div class="buttons">
                  <span class="el-checkbox">
                    <input id="checkboxFail" type="checkbox" name="checkboxFail" />
                    <label for="checkboxFail">실패 내역만 조회</label>
                  </span>
                </div>
              </div>

              <!-- 그리드 -->
              <div class="area-result">
                <table>
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>E-mail</th>
                      <th>발송 결과</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>aaa**@sk.com</td>
                      <td>성공</td>
                    </tr>
                  </tbody>
                </table>
                <!-- Add 23-10-19 -->
                <div class="box-pagination mb20">
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
                <!-- //Add 23-10-19 -->
              </div>

              <!-- 그리드제목 -->
              <div class="area-title">
                <h3 class="h3">내용</h3>
              </div>

              <!-- 그리드 -->
              <div class="area-regist">
                <table>
                  <!-- Add 23-10-19 -->
                  <colgroup>
                    <col width="14%" />
                    <col width="" />
                  </colgroup>
                  <!-- //Add 23-10-19 -->
                  <tbody>
                    <tr>
                      <th><span class="required">내용</span></th>
                      <td>
                        <pre>{{ smsContext }}</pre>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="footer">
              <!-- 버튼영역 -->
              <div class="box-buttons">
                <button type="button" class="">취소</button>
                <button type="button" class="prime solid">저장</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 멤버사 회원 조회 -->
        <div id="modal-25" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">SK구성원 조회</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-25')">닫기</button>
            </div>
            <div class="content">
              <!-- 검색조건 -->
              <div class="area-contition">
                <table>
                  <tr>
                    <th>소속</th>
                    <td>
                      <!-- 자동완성 레이어가 노출되는 경우 <div class="auto_complete_wrap">로 감싸야 함 23-11-07 -->
                      <div class="auto_complete_wrap left"><!-- 자동완성 좌측 시작이 필요할 경우 left 클래스 추가 (기본 right) -->
                          <label class="input-wrap">
                          <input type="text" value="" @keyup="auto_complete_modal($event);" />
                          <button type="button" class="icon del">삭제</button>
                          <button type="button" class="icon sch">검색</button>
                          </label>
                          <!-- 자동완성 레이어 -->
                          <div class="code-search-list">
                          <ul class="list">
                              <!-- 결과 없음 -->
                              <li>
                              <p class="no_data">검색 결과가 없습니다.</p>
                              </li>
                              <!-- //결과 없음 -->
                              <li>
                              <button type="button" class="button" @click="close_auto_complete_modal($event);">
                                  <div class="name">
                                  <strong>(주)<em>가나</em>계전</strong>
                                  <span>Kana elec</span>
                                  </div>
                                  <div class="info"><em>코드명</em></div>
                              </button>
                              </li>
                              <li>
                              <button type="button" class="button" @click="close_auto_complete_modal($event);">
                                  <div class="name">
                                  <strong>(주)<em>가나</em>계전</strong>
                                  <span>Kana elec</span>
                                  </div>
                                  <div class="info">코드명</div>
                              </button>
                              </li>
                          </ul>
                          </div>
                          <!-- //자동완성 레이어 -->
                      </div>
                      <!-- //자동완성 레이어가 노출되는 경우 <div class="auto_complete_wrap">로 감싸야 함 23-11-07 -->
                    </td>
                    <th>사번</th>
                    <td>
                      <label class="input-wrap">
                        <input type="text" value="" />
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <th>E-mail ID</th>
                    <td>
                      <label class="input-wrap">
                        <input type="text" value="" />
                      </label>
                    </td>
                    <th>이름</th>
                    <td>
                      <label class="input-wrap">
                        <input type="text" value="" />
                      </label>
                    </td>
                  </tr>
                </table>
                <button type="submit" class="submit">조회</button>
              </div>

              <!-- 그리드제목 -->
              <div class="area-title">
                <div class="count">총 <span>12</span>건</div>
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
                      <th>사번</th>
                      <th>이름(KR)</th>
                      <th>E-mail</th>
                      <th>소속</th>
                      <th>통합 ID 회원</th>
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
                      <td>SK0000000</td>
                      <td>김*니</td>
                      <td>mySU**@sk.com</td>
                      <td>SK 이노베이션</td>
                      <td>N</td>
                    </tr>
                    <tr>
                      <td>
                        <span class="el-checkbox">
                          <input id="checkboxGrid01" type="checkbox" name="checkboxGridName" />
                          <label for="checkboxGrid01"></label>
                        </span>
                      </td>
                      <td>SK0000000</td>
                      <td>김*니</td>
                      <td>mySU**@sk.com</td>
                      <td>SK 이노베이션</td>
                      <td>N</td>
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
            <div class="footer">
              <!-- 버튼영역 -->
              <div class="box-buttons">
                <button type="button" class="">취소</button>
                <button type="button" class="prime solid">추가</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Add 23-10-23 회원 등록 -->
        <div id="modal-26" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">회원 등록</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-26')">닫기</button>
            </div>
            <div class="content">
              <!-- 그리드 -->
              <div class="area-regist">
                <table>
                  <colgroup>
                    <col width="25%" />
                    <col width="" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th><span class="required">회원유형</span></th>
                      <td>
                        <div class="check_group">
                          <span class="el-radio">
                            <input id="mem_type-1" type="radio" name="mem_type" />
                            <label for="mem_type-1">미지정</label>
                          </span>
                          <span class="el-radio">
                            <input id="mem_type-2" type="radio" name="mem_type" />
                            <label for="mem_type-2">비즈니스 파트너</label>
                          </span>
                          <span class="el-radio">
                            <input id="mem_type-3" type="radio" name="mem_type" />
                            <label for="mem_type-3">사회적 기업</label>
                          </span>
                          <span class="el-radio">
                            <input id="mem_type-4" type="radio" name="mem_type" />
                            <label for="mem_type-4">SK구성원 가족</label>
                          </span>
                          <span class="el-radio">
                            <input id="mem_type-5" type="radio" name="mem_type" />
                            <label for="mem_type-5">대학생</label>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th><span class="required">소속</span></th>
                      <td>
                        <!-- 자동완성 레이어가 노출되는 경우 <div class="auto_complete_wrap">로 감싸야 함 23-11-07 -->
                        <div class="auto_complete_wrap">
                          <label class="input-wrap w100">
                            <input type="text" value="text" @keyup="auto_complete_modal($event);">
                            <button type="button" class="icon sch">검색</button>
                          </label>
                          <!-- 자동완성 레이어 -->
                          <div class="code-search-list">
                            <ul class="list">
                              <!-- 결과 없음 -->
                              <li>
                                <p class="no_data">검색 결과가 없습니다.</p>
                              </li>
                              <!-- //결과 없음 -->
                              <li>
                                <button type="button" class="button" @click="close_auto_complete_modal($event);">
                                  <div class="name">
                                    <strong>(주)<em>가나</em>계전</strong>
                                    <span>Kana elec</span>
                                  </div>
                                  <div class="info"><em>코드명</em></div>
                                </button>
                              </li>
                              <li>
                                <button type="button" class="button" @click="close_auto_complete_modal($event);">
                                  <div class="name">
                                    <strong>(주)<em>가나</em>계전</strong>
                                    <span>Kana elec</span>
                                  </div>
                                  <div class="info">코드명</div>
                                </button>
                              </li>
                            </ul>
                          </div>
                          <!-- //자동완성 레이어 -->
                        </div>
                        <!-- //자동완성 레이어가 노출되는 경우 <div class="auto_complete_wrap">로 감싸야 함 23-11-07 -->
                      </td>
                    </tr>
                    <tr>
                      <th><span class="required">신청 서비스</span></th>
                      <td>
                        <label class="select-wrap w100">
                          <select>
                            <option value="">mySUNI</option>
                          </select>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <th><span class="required">회원등록 양식</span></th>
                      <td>등록할 회원유형에 맞는 양식을 다운로드 받으세요.
                        <div class="reference">
                          <button type="button" class="underline">미지정</button>
                          <button type="button" class="underline">비즈니스 파트너</button>
                          <button type="button" class="underline">사회적 기업</button>
                          <button type="button" class="underline">SK구성원 가족</button>
                          <button type="button" class="underline">대학생</button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th><span class="required">엑셀 업로드</span></th>
                      <td>
                        <label class="input-wrap" style="width: calc(100% - 110px)">
                          <input type="text" :value="getFile" readonly />
                        </label>
                        <span class="file-upload">
                          <label for="fileUpload">파일찾기</label>
                          <input id="fileUpload" type="file" class="blind" @change="loadimage($event)" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th><span class="required">증빙자료 업로드</span></th>
                      <td>
                        <label class="input-wrap" style="width: calc(100% - 110px)">
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
                <p class="reference">※등록 시 계정이 즉시 생성 되니, 업로드 전 내용을 한번 더 확인하시기 바랍니다.</p>
              </div>
            </div>
            <div class="footer">
              <!-- 버튼영역 -->
              <div class="box-buttons">
                <button type="button" class="">취소</button>
                <button type="button" class="prime solid">등록</button>
              </div>
            </div>
          </div>
        </div>
        <!-- //Add 23-10-23 회원 등록 -->


        <!-- 회원정보상세 2024-05-21 -->
        <div id="modal-32" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container large" @click.stop>
            <div class="header">
              <strong class="title">회원정보 상세</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-32')">닫기</button>
            </div>
            <div class="content">
              <div class="layout-column">
                <div class="column">
                  <!-- 타이틀영역 -->
                  <div class="area-title">
                    <h3 class="h3">계정정보</h3>
                    <div class="buttons">
                      <button type="button" class="prime solid">계정 연결 변경</button>
                    <!--2024-03-03 계정삭제 버튼 생성-->
                      <button type="button" class="prime solid" @click="openModal('modal-27')">계정 삭제</button>
                    <!--//2024-03-03 계정삭제 버튼 생성-->
                    </div>
                  </div>
                  <div class="area-regist">
                    <table>
                      <tr>
                        <th>E-mail ID</th>
                        <td colspan="3">mySU**@sk.com</td>
                      </tr>
                      <tr>
                        <th>구분</th>
                        <td colspan="3">SK구성원</td>
                      </tr>
                      <tr>
                        <th>이름(KR)</th><!-- Edit 23-10-19 Text -->
                        <td>김*희</td>
                        <th>이름(ZH)</th><!-- Edit 23-10-19 Text -->
                        <td>김*희</td>
                      </tr>
                      <tr>
                        <th>이름(EN)</th><!-- Edit 23-10-19 Text -->
                        <td>김*희</td>
                        <th>실명인증</th>
                        <td>Y</td>
                      </tr>
                      <tr>
                        <th>국가코드</th><!-- Edit 23-10-19 Text -->
                        <td>+82 대한민국</td>
                        <th>휴대폰 번호</th>
                        <td>010-****-1234</td>
                      </tr>
                      <tr>
                        <th>생년월일</th>
                        <td>****-**-**</td>
                        <th>성별</th>
                        <td>여성</td>
                      </tr>
                      <tr>
                        <th>회사코드</th>
                        <td>SKP</td>
                        <th>소속</th>
                        <td>SK 플래닛</td>
                      </tr>
                      <tr>
                        <th>부서코드</th><!-- Edit 23-10-19 Text -->
                        <td>SKP.00001</td>
                        <th>부서</th>
                        <td>IT</td>
                      </tr>
                      <tr>
                        <th>직책</th>
                        <td>팀장</td>
                        <th>직무</th><!-- Edit 23-10-19 Text -->
                        <td>IT 관리</td>
                      </tr>
                      <!-- Add 23-10-19 -->
                      <tr>
                        <th>직급</th>
                        <td>수석</td>
                        <th>직위</th>
                        <td>매니저</td>
                      </tr>
                      <tr>
                        <th>파트너 YN</th>
                        <td>Y</td>
                        <th>고용형태</th>
                        <td>파트너</td>
                      </tr>
                      <tr>
                        <th>퇴직여부 YN</th>
                        <td>Y</td>
                        <th>외국인여부</th>
                        <td>N</td>
                      </tr>
                      <tr>
                        <th>국가</th>
                        <td class="td_flex">
                          <label class="select-wrap">
                            <select>
                              <option value="KR">KR</option>
                              <option value="US">US</option>
                              <option value="CN">CN</option>
                            </select>
                          </label>
                          <button class="prime solid" @click="openModal('modal-33')">저장</button>

                        </td>
                        <th>mySUNI YN</th>
                        <td class="td_flex">
                          <label class="select-wrap">
                            <select>
                              <option value="Y">Y</option>
                              <option value="N">N</option>
                            </select>
                          </label>
                          <button class="prime disabled" @click="openModal('modal-33')">저장</button>
                        </td>
                      </tr>
                      <tr>
                        <th>non-GDI</th>
                        <td>Y</td>
                        <th>└GDI 비동기화</th>
                        <td>N</td>
                      </tr>
                      <!-- //Add 23-10-19 -->
                    </table>
                  </div>

                  <!-- 타이틀영역 -->
                  <div class="area-title">
                    <h3 class="h3">회원 관리</h3>
                  </div>
                  <div class="area-regist">
                    <table>
                      <tr>
                        <th>보호</th>
                        <td>
                          Y (2023-07-07)
                          <!-- Edit 23-10-19 -->
                          <p class="box-buttons fr"><button type="button">비밀번호 초기화</button></p>
                          <!-- //Edit 23-10-19 -->
                        </td>
                      </tr>
                      <tr>
                        <th>정지</th>
                        <td>
                          Y (2023-07-07)
                          <!-- Edit 23-10-19 -->
                          <p class="box-buttons fr">
                            <button type="button" class="disabled">정지</button><!-- Add 23-11-20 : desabled button [class="disabled"] -->
                            <button type="button">정지</button>
                            <button type="button">정지해제</button>
                          </p>
                          <!-- //Edit 23-10-19 -->
                        </td>
                      </tr>
                      <tr>
                        <th>정지사유</th>
                        <td>기타 (Help desk 욕설)</td>
                      </tr>
                      <tr>
                        <th>정지 관리자</th>
                        <td>김관리</td>
                      </tr>
                      <tr>
                        <th>관리대상</th>
                        <td>
                          Y (2023-07-05)
                          <!-- Edit 23-10-19 -->
                          <p class="box-buttons fr">
                            <button type="button">메모수정</button>
                            <button type="button">메모삭제</button>
                          </p>
                          <!-- //Edit 23-10-19 -->
                        </td>
                      </tr>
                      <tr>
                        <th>관리내용</th>
                        <td>Help desk 욕설 2회 (06/23, 07/25)</td>
                      </tr>
                      <tr>
                        <th>관리 지정자</th>
                        <td>김관리</td>
                      </tr>
                      <tr>
                        <th>탈퇴대상 여부</th>
                        <td>N</td>
                      </tr>
                      <tr>
                        <th>사용자 로그인</th>
                        <td>
                          <button type="button">mySUNI</button>
                          <button type="button">mySUNI대외</button>
                          <button type="button">mySUNI ON</button>
                          <button type="button">이천포럼</button>
                          <p class="reference">※ 해당 사용자가 사용중인 경우 접속이 종료될 수 있습니다. 사용시 주의하시기 바랍니다.</p>
                        </td>
                      </tr>
                    </table>
                  </div>

                  <!-- Add 23-11-21 -->
                  <div class="box-buttons align-right">
                    <button type="button" class="dark solid">서비스 해지</button>
                    <button type="button" class="prime solid">회원 탈퇴</button>
                  </div>
                  <!-- //Add 23-11-21 -->

                  <!-- Add 23-10-19 -->
                  <div class="area-title">
                    <h3 class="h3">회사/직무 이력</h3>
                  </div>
                  <div class="area-result align-left">
                    <table>
                      <thead>
                        <tr>
                          <th>소속</th>
                          <th>부서</th>
                          <th>직무</th>
                          <th>기간</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>SK 플래닛</td>
                          <td></td>
                          <td></td>
                          <td>2022.12 ~</td>
                        </tr>
                        <tr>
                          <td>SK 플래닛</td>
                          <td></td>
                          <td></td>
                          <td>2022.03 ~ 2022.12</td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="preloader_wrap active"><!-- active 클래스 추가 시 보여집니다. -->
                        <div class="preloader">
                            <div class="spinner_layer">
                                <div class="circle_clipper left">
                                    <div class="circle"></div>
                                </div>
                                <div class="gap_patch">
                                    <div class="circle"></div>
                                </div>
                                <div class="circle_clipper right">
                                    <div class="circle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                  <!-- //Add 23-10-19 -->
                </div>
                <div class="column">
                  <div class="common-tabs type-02">
                    <button type="button" class="active">프로필/약관</button>
                    <button type="button" class="">서비스 정보</button>
                  </div>

                  <!-- 타이틀영역 -->
                  <div class="area-title">
                    <h3 class="h3">프로필 정보</h3>
                    <!-- Del 24-07-17 <div class="buttons">
                      <button type="button" class="prime solid">저장</button>
                    </div> -->
                  </div>

                  <!-- 그리드 -->
                  <div class="area-result align-left table-wrap"><!-- edit 24-07-22 : table-wrap 클래스 추가 -->
                    <table>
                      <!-- Add 23-10-19 -->
                      <colgroup>
                        <!-- edit 24-07-22 -->
                        <col style="width:120px" />
                        <col style="min-width:30%;" />
                        <col style="min-width:250px" />
                        <col />
                        <!-- //edit 24-07-22 -->
                      </colgroup>
                      <!-- //Add 23-10-19 -->
                      <thead>
                        <tr>
                          <th>서비스</th>
                          <th>Sub</th><!-- add 24-07-17 -->
                          <th>닉네임</th>
                          <th>프로필 이미지 URL</th>
                          <!-- <th>저장</th> del 24-07-17 -->
                          <!-- <th>이용약관동의</th> del 24-07-18 -->
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>가나다라마바사아자차카타파하</td>
                          <td>122AEDDF23D-FEA122AEDDF23D-FEA122AEDDF23D-FEA 122AEDDF23D-FEA122AEDDF23D-FEA122AEDDF23D-FEA</td><!-- add 24-07-17 -->
                          <td>
                            <label class="input-wrap"><!-- Edit 23-10-19 -->
                              <input type="text" value="가나다라마바사아자차카타파하" />
                              <button type="button" class="icon del">삭제</button>
                            </label>
                            <button type="button" class="prime solid ml8">저장</button>
                          </td>
                          <td>
                            <!-- edit 24-07-22 : ellipsis 클래스 추가 및 최대 넓이 추가 -->
                            <a href="#none" class="ellipsis" style="width:250px;">http://~~.JPGhttp://~~.JPGhttp://~~.JPGhttp://~~.JPGhttp://~~.JPGhttp://~~.JPG</a><!-- edit style : max-width -> width -->
                            <!-- //edit 24-07-22 : ellipsis 클래스 추가 및 최대 넓이 추가 -->
                          </td>
                          <!-- <td><button type="button" class="prime solid">저장</button></td> del 24-07-17 -->
                          <!-- <td><button type="button" class="prime solid">조회</button></td> del 24-07-18 -->
                        </tr>
                        <tr>
                          <td>mySUNI 대외확대</td>
                          <td>122AEDDF23D-FEA</td><!-- add 24-07-17 -->
                          <td>
                            <label class="input-wrap"><!-- Edit 23-10-19 -->
                              <input type="text" value="text" />
                              <button type="button" class="icon del">삭제</button>
                            </label>
                            <button type="button" class="prime solid ml8">저장</button>
                          </td>
                          <td>
                            <a href="#none" class="ellipsis" style="width:250px;">mySUNI</a><!-- edit style : max-width -> width -->
                          </td>
                          <!-- <td><button type="button" class="prime solid">저장</button></td> del 24-07-17 -->
                          <!-- <td><button type="button" class="prime solid">조회</button></td> del 24-07-18 -->
                        </tr>
                        <tr>
                          <td>mySUNI ON</td>
                          <td>122AEDDF23D-FEA</td><!-- add 24-07-17 -->
                          <td>
                            <label class="input-wrap"><!-- Edit 23-10-19 -->
                              <input type="text" value="text" />
                              <button type="button" class="icon del">삭제</button>
                            </label>
                            <button type="button" class="prime solid ml8">저장</button>
                          </td>
                          <td>
                            <a href="#none" class="ellipsis" style="width:250px;">서니온!</a><!-- edit style : max-width -> width -->
                          </td>
                          <!-- <td><button type="button" class="prime solid">저장</button></td> del 24-07-17 -->
                          <!-- <td><button type="button" class="prime solid">조회</button></td> del 24-07-18 -->
                        </tr>
                        <tr>
                          <td>이천포럼</td>
                          <td>122AEDDF23D-FEA</td><!-- add 24-07-17 -->
                          <td>
                            <label class="input-wrap"><!-- Edit 23-10-19 -->
                              <input type="text" value="text" />
                              <button type="button" class="icon del">삭제</button>
                            </label>
                            <button type="button" class="prime solid ml8">저장</button>
                          </td>
                          <td>
                            <a href="#none" class="ellipsis" style="width:250px;">나팀장</a><!-- edit style : max-width -> width -->
                          </td>
                          <!-- <td><button type="button" class="prime solid">저장</button></td> del 24-07-17 -->
                          <!-- <td><button type="button" class="prime solid">조회</button></td> del 24-07-18 -->
                        </tr>
                        <tr>
                          <td>mySUNI</td>
                          <td>122AEDDF23D-FEA</td><!-- add 24-07-17 -->
                          <td>
                            <label class="input-wrap"><!-- Edit 23-10-19 -->
                              <input type="text" value="text" />
                              <button type="button" class="icon del">삭제</button>
                            </label>
                            <button type="button" class="prime solid ml8">저장</button>
                          </td>
                          <td>
                            <a href="#none" class="ellipsis" style="width:250px;">http://~~.JPG</a><!-- edit style : max-width -> width -->
                          </td>
                          <!-- <td><button type="button" class="prime solid">저장</button></td> del 24-07-17 -->
                          <!-- <td><button type="button" class="prime solid">조회</button></td> del 24-07-18 -->
                        </tr>



                        <!-- 결과 없을 경우 -->
                        <tr>
                          <td colspan="999">
                            <p class="no-result">조회내역이 없습니다.</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <!-- 타이틀영역 -->
                  <div class="area-title">
                    <h3 class="h3">이용약관 동의 현황</h3>
                  </div>

                  <!-- 그리드 -->
                  <div class="area-result align-left">
                    <table>
                      <thead>
                        <tr>
                          <!-- <th>서비스</th> del 24-07-17 -->
                          <th>약관코드</th>
                          <th>약관명</th>
                          <th>언어</th><!-- add 24-07-17 -->
                          <th>동의 버전</th>
                          <th>필수여부</th>
                          <th>최신버전</th>
                          <th>동의일자</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <!-- <td>mySUNI</td> -->
                          <td>SK_PRIVACY_ST</td>
                          <td>mySUNI 통합약관</td>
                          <td>KR</td><!-- add 24-07-17 -->
                          <td>1.0.1</td>
                          <td>필수</td>
                          <td>1.1.1</td>
                          <td>2023-07-01</td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="preloader_wrap active"><!-- active 클래스 추가 시 보여집니다. -->
                        <div class="preloader">
                            <div class="spinner_layer">
                                <div class="circle_clipper left">
                                    <div class="circle"></div>
                                </div>
                                <div class="gap_patch">
                                    <div class="circle"></div>
                                </div>
                                <div class="circle_clipper right">
                                    <div class="circle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>

                  <!-- 그리드 -->
                  <div class="area-regist">
                    <table>
                      <tbody>
                        <tr>
                          <th>현재 직군</th>
                          <td>
                            <label class="select-wrap">
                              <select>
                                <option value="">select</option>
                              </select>
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <th>현재 직무</th>
                          <td>
                            <label class="select-wrap">
                              <select>
                                <option value="">select</option>
                              </select>
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <th>희망 직군</th>
                          <td>
                            <label class="select-wrap">
                              <select>
                                <option value="">select</option>
                              </select>
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <th>희망 직무</th>
                          <td>
                            <label class="select-wrap">
                              <select>
                                <option value="">select</option>
                              </select>
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <th>관심 카테고리</th>
                          <td>
                            <label class="select-wrap">
                              <select>
                                <option value="">select</option>
                              </select>
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <th>관심분야</th>
                          <td>
                            <label class="select-wrap">
                              <select>
                                <option value="">select</option>
                              </select>
                            </label>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="preloader_wrap active"><!-- active 클래스 추가 시 보여집니다. -->
                      <div class="preloader">
                          <div class="spinner_layer">
                              <div class="circle_clipper left">
                                  <div class="circle"></div>
                              </div>
                              <div class="gap_patch">
                                  <div class="circle"></div>
                              </div>
                              <div class="circle_clipper right">
                                  <div class="circle"></div>
                              </div>
                          </div>
                      </div>
                  </div>
                  </div>

                  <!-- add 24-07-17 -->
                  <div class="area-title">
                    <h3 class="h3">서비스 별 이용약관 동의 현황</h3>
                  </div>

                  <div class="area-regist">
                    <table>
                      <colgroup>
                        <col width="15%" />
                        <col width="" />
                      </colgroup>
                      <tr>
                        <th>이용동의 서비스</th>
                        <td>
                          <button type="button">mySUNI</button>
                          <button type="button">이천포럼</button>
                          <button type="button">울산포럼</button>
                          <p class="reference">※ 이용약관 동의 현황을 조회할 서비스 선택 시, 하단에 동의 현황이 조회됩니다.</p>
                        </td>
                      </tr>
                    </table>
                  </div>

                  <div class="area-result align-left">
                    <table>
                      <thead>
                        <tr>
                          <th>약관코드</th>
                          <th>약관명</th>
                          <th>언어</th>
                          <th>동의 버전</th>
                          <th>필수여부</th>
                          <th>최신버전</th>
                          <th>동의일자</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>SK_PRIVACY_ST</td>
                          <td>mySUNI 통합약관</td>
                          <td>KR</td>
                          <td>1.0.1</td>
                          <td>필수</td>
                          <td>1.1.1</td>
                          <td>2023-07-01</td>
                        </tr>
                        <tr>
                          <td>SK_PRIVACY_ST</td>
                          <td>mySUNI 통합약관</td>
                          <td>KR</td>
                          <td>1.0.1</td>
                          <td>필수</td>
                          <td>1.1.1</td>
                          <td>2023-07-01</td>
                        </tr>
                        <tr>
                          <td>SK_PRIVACY_ST</td>
                          <td>mySUNI 통합약관</td>
                          <td>KR</td>
                          <td>1.0.1</td>
                          <td>필수</td>
                          <td>1.1.1</td>
                          <td>2023-07-01</td>
                        </tr>
                        <tr>
                          <td>SK_PRIVACY_ST</td>
                          <td>mySUNI 통합약관</td>
                          <td>KR</td>
                          <td>1.0.1</td>
                          <td>필수</td>
                          <td>1.1.1</td>
                          <td>2023-07-01</td>
                        </tr>
                        <tr>
                          <td>SK_PRIVACY_ST</td>
                          <td>mySUNI 통합약관</td>
                          <td>KR</td>
                          <td>1.0.1</td>
                          <td>필수</td>
                          <td>1.1.1</td>
                          <td>2023-07-01</td>
                        </tr>
                        <tr>
                          <td>SK_PRIVACY_ST</td>
                          <td>mySUNI 통합약관</td>
                          <td>KR</td>
                          <td>1.0.1</td>
                          <td>필수</td>
                          <td>1.1.1</td>
                          <td>2023-07-01</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- //add 24-07-17 -->

                  <!-- Edit 23-10-19 -->
                  <div class="area-title">
                    <div class="buttons">
                      <button type="button" class="prime solid">저장</button>
                    </div>
                  </div>
                  <!-- //Edit 23-10-19 -->

                  <div class="area-regist">
                    <table>
                      <colgroup>
                        <col width="13%" />
                        <col width="14%" /><!-- Edit 23-10-19 -->
                        <col width="35%" /><!-- Edit 23-11-28 -->
                        <col width="13%" />
                        <col width="" />
                      </colgroup>
                      <!-- 회원유형 -->
                      <tr>
                        <th colspan="2">회원유형</th>
                        <td colspan="3">
                          <span class="el-radio">
                            <input id="radio1-1" type="radio" name="radioName1" checked />
                            <label for="radio1-1">미지정</label>
                          </span>
                          <span class="el-radio">
                            <input id="radio1-2" type="radio" name="radioName1" />
                            <label for="radio1-2">비즈니스 파트너</label>
                          </span>
                          <span class="el-radio">
                            <input id="radio1-3" type="radio" name="radioName1" />
                            <label for="radio1-3">사회적 기업</label>
                          </span>
                          <span class="el-radio">
                            <input id="radio1-4" type="radio" name="radioName1" />
                            <label for="radio1-4">SK구성원 가족</label>
                          </span>
                          <span class="el-radio">
                            <input id="radio1-5" type="radio" name="radioName1" />
                            <label for="radio1-5">대학생</label>
                          </span>
                        </td>
                      </tr>

                      <!-- 비즈니스 파트너 -->
                      <tr>
                        <th rowspan="3">비즈니스<br />파트너</th>
                        <th><span class="required">회사명</span></th>
                        <td colspan="3">
                          <div class="auto_complete_wrap">
                            <label class="input-wrap w100">
                              <input type="text" value="" @keyup="auto_complete_modal($event);" />
                              <button type="button" class="icon del">삭제</button>
                              <button type="button" class="icon sch">검색</button>
                            </label>
                            <!-- 자동완성 레이어 -->
                            <div class="code-search-list">
                              <ul class="list">
                                <!-- 결과 없음 -->
                                <li>
                                  <p class="no_data">검색 결과가 없습니다.</p>
                                </li>
                                <!-- //결과 없음 -->
                                <li>
                                  <button type="button" class="button" @click="close_auto_complete_modal($event);">
                                    <div class="name">
                                      <strong>(주)<em>가나</em>계전</strong>
                                      <span>Kana elec</span>
                                    </div>
                                    <div class="info"><em>코드명</em></div>
                                  </button>
                                </li>
                                <li>
                                  <button type="button" class="button" @click="close_auto_complete_modal($event);">
                                    <div class="name">
                                      <strong>(주)<em>가나</em>계전</strong>
                                      <span>Kana elec</span>
                                    </div>
                                    <div class="info">코드명</div>
                                  </button>
                                </li>
                              </ul>
                            </div>
                            <!-- //자동완성 레이어 -->
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th><span class="required">직무</span></th>
                        <td>
                          <!-- Edit 23-11-28 input text 추가 -->
                          <label class="select-wrap w100 mb10">
                            <select>
                              <option value="">선택</option>
                            </select>
                          </label>

                          <label class="input-wrap w100">
                            <input type="text" value="text" />
                            <button type="button" class="icon del">삭제</button>
                          </label>
                          <!-- //Edit 23-11-28 input text 추가 -->
                        </td>
                        <th>직급</th>
                        <td>
                          <label class="select-wrap w100">
                            <select>
                              <option value="">선택</option>
                            </select>
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <th>승인</th>
                        <td colspan="3">
                          <span class="el-radio">
                            <input id="radio2-1" type="radio" name="radioName2" checked />
                            <label for="radio2-1">Y</label>
                          </span>
                          <span class="el-radio">
                            <input id="radio2-2" type="radio" name="radioName2" />
                            <label for="radio2-2">N</label>
                          </span>
                        </td>
                      </tr>

                      <!-- 사회적 기업 -->
                      <tr>
                        <th rowspan="3">사회적<br />기업</th>
                        <th><span class="required">회사명</span></th>
                        <td colspan="3">
                          <div class="auto_complete_wrap">
                            <label class="input-wrap w100">
                              <input type="text" value="" @keyup="auto_complete_modal($event);" />
                              <button type="button" class="icon del">삭제</button>
                              <button type="button" class="icon sch">검색</button>
                            </label>
                            <!-- 자동완성 레이어 -->
                            <div class="code-search-list">
                              <ul class="list">
                                <!-- 결과 없음 -->
                                <li>
                                  <p class="no_data">검색 결과가 없습니다.</p>
                                </li>
                                <!-- //결과 없음 -->
                                <li>
                                  <button type="button" class="button" @click="close_auto_complete_modal($event);">
                                    <div class="name">
                                      <strong>(주)<em>가나</em>계전</strong>
                                      <span>Kana elec</span>
                                    </div>
                                    <div class="info"><em>코드명</em></div>
                                  </button>
                                </li>
                                <li>
                                  <button type="button" class="button" @click="close_auto_complete_modal($event);">
                                    <div class="name">
                                      <strong>(주)<em>가나</em>계전</strong>
                                      <span>Kana elec</span>
                                    </div>
                                    <div class="info">코드명</div>
                                  </button>
                                </li>
                              </ul>
                            </div>
                            <!-- //자동완성 레이어 -->
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th><span class="required">직무</span></th>
                        <td>
                          <!-- Edit 23-11-28 input text 추가 -->
                          <label class="select-wrap w100 mb10">
                            <select>
                              <option value="">선택</option>
                            </select>
                          </label>

                          <label class="input-wrap w100">
                            <input type="text" value="text" />
                            <button type="button" class="icon del">삭제</button>
                          </label>
                          <!-- //Edit 23-11-28 input text 추가 -->
                        </td>
                        <th>직급</th>
                        <td>
                          <label class="select-wrap w100">
                            <select>
                              <option value="">선택</option>
                            </select>
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <th>승인</th>
                        <td colspan="3">
                          <span class="el-radio">
                            <input id="radio3-1" type="radio" name="radioName3" checked />
                            <label for="radio3-1">Y</label>
                          </span>
                          <span class="el-radio">
                            <input id="radio3-2" type="radio" name="radioName3" />
                            <label for="radio3-2">N</label>
                          </span>
                        </td>
                      </tr>

                      <!-- SK구성원 가족 -->
                      <tr>
                        <th rowspan="4">SK구성원<br />가족</th>
                        <th>
                          <span class="required">추천인<br />소속사</span>
                        </th>
                        <td colspan="3">
                          <div class="auto_complete_wrap">
                            <label class="input-wrap w100">
                              <input type="text" value="" @keyup="auto_complete_modal($event);" />
                              <button type="button" class="icon del">삭제</button>
                              <button type="button" class="icon sch">검색</button>
                            </label>
                            <!-- 자동완성 레이어 -->
                            <div class="code-search-list">
                              <ul class="list">
                                <!-- 결과 없음 -->
                                <li>
                                  <p class="no_data">검색 결과가 없습니다.</p>
                                </li>
                                <!-- //결과 없음 -->
                                <li>
                                  <button type="button" class="button" @click="close_auto_complete_modal($event);">
                                    <div class="name">
                                      <strong>(주)<em>가나</em>계전</strong>
                                      <span>Kana elec</span>
                                    </div>
                                    <div class="info"><em>코드명</em></div>
                                  </button>
                                </li>
                                <li>
                                  <button type="button" class="button" @click="close_auto_complete_modal($event);">
                                    <div class="name">
                                      <strong>(주)<em>가나</em>계전</strong>
                                      <span>Kana elec</span>
                                    </div>
                                    <div class="info">코드명</div>
                                  </button>
                                </li>
                              </ul>
                            </div>
                            <!-- //자동완성 레이어 -->
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th><span class="required">사번</span></th>
                        <td colspan="3">
                          <label class="input-wrap">
                            <input type="text" value="text" />
                          </label>
                          <button type="button">구성원 확인</button>
                        </td>
                      </tr>
                      <tr>
                        <th><span class="required">관계</span></th>
                        <td colspan="3">
                          <label class="select-wrap">
                            <select>
                              <option value="">선택</option>
                            </select>
                          </label>
                          <label class="input-wrap">
                            <input type="text" value="text" />
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <th>승인</th>
                        <td colspan="3">
                          <span class="el-radio">
                            <input id="radio4-1" type="radio" name="radioName4" checked />
                            <label for="radio4-1">Y</label>
                          </span>
                          <span class="el-radio">
                            <input id="radio4-2" type="radio" name="radioName4" />
                            <label for="radio4-2">N</label>
                          </span>
                        </td>
                      </tr>

                      <!-- 대학생 -->
                      <tr>
                        <th rowspan="10">대학생</th>
                        <th><span class="required">대학교</span></th>
                        <td colspan="3">
                          <div class="auto_complete_wrap">
                            <label class="input-wrap w100">
                              <input type="text" value="" @keyup="auto_complete_modal($event);" />
                              <button type="button" class="icon del">삭제</button>
                              <button type="button" class="icon sch">검색</button>
                            </label>
                            <!-- 자동완성 레이어 -->
                            <div class="code-search-list">
                              <ul class="list">
                                <!-- 결과 없음 -->
                                <li>
                                  <p class="no_data">검색 결과가 없습니다.</p>
                                </li>
                                <!-- //결과 없음 -->
                                <li>
                                  <button type="button" class="button" @click="close_auto_complete_modal($event);">
                                    <div class="name">
                                      <strong>(주)<em>가나</em>계전</strong>
                                      <span>Kana elec</span>
                                    </div>
                                    <div class="info"><em>코드명</em></div>
                                  </button>
                                </li>
                                <li>
                                  <button type="button" class="button" @click="close_auto_complete_modal($event);">
                                    <div class="name">
                                      <strong>(주)<em>가나</em>계전</strong>
                                      <span>Kana elec</span>
                                    </div>
                                    <div class="info">코드명</div>
                                  </button>
                                </li>
                              </ul>
                            </div>
                            <!-- //자동완성 레이어 -->
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>재학증명서</th>
                        <td colspan="3">
                          <label class="input-wrap">
                            <input type="text" value="text" />
                          </label>
                          <button type="button">다운로드</button>
                        </td>
                      </tr>
                      <tr>
                        <th><span class="required">주전공1</span></th>
                        <td colspan="3">
                          <label class="select-wrap">
                            <select>
                              <option value="">공학 계열</option>
                            </select>
                          </label>
                          <label class="input-wrap">
                            <input type="text" value="text" />
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <th>주전공2</th>
                        <td colspan="3">
                          <label class="select-wrap">
                            <select>
                              <option value="">선택</option>
                            </select>
                          </label>
                          <label class="input-wrap">
                            <input type="text" value="text" />
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <th>주전공3</th>
                        <td colspan="3">
                          <label class="select-wrap">
                            <select>
                              <option value="">선택</option>
                            </select>
                          </label>
                          <label class="input-wrap">
                            <input type="text" value="text" />
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <th>복수전공1</th>
                        <td colspan="3">
                          <label class="select-wrap">
                            <select>
                              <option value="">선택</option>
                            </select>
                          </label>
                          <label class="input-wrap">
                            <input type="text" value="text" />
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <th>복수전공2</th>
                        <td colspan="3">
                          <label class="select-wrap">
                            <select>
                              <option value="">선택</option>
                            </select>
                          </label>
                          <label class="input-wrap">
                            <input type="text" value="text" />
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <th>복수전공3</th>
                        <td colspan="3">
                          <label class="select-wrap">
                            <select>
                              <option value="">선택</option>
                            </select>
                          </label>
                          <label class="input-wrap">
                            <input type="text" value="text" />
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <th><span class="required">수료학기</span></th>
                        <td colspan="3">
                          <label class="select-wrap">
                            <select>
                              <option value="">1학년 1학기</option>
                            </select>
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <th>승인</th>
                        <td colspan="3">
                          <span class="el-radio">
                            <input id="radio5-1" type="radio" name="radioName5" checked />
                            <label for="radio5-1">Y</label>
                          </span>
                          <span class="el-radio">
                            <input id="radio5-2" type="radio" name="radioName5" />
                            <label for="radio5-2">N</label>
                          </span>
                        </td>
                      </tr>
                    </table>
                  </div>

                  <div class="box-buttons align-right">
                    <button type="button" class="prime solid">저장</button>
                  </div>
                </div>
              </div>  
              <div class="preloader_wrap active"><!-- active 클래스 추가 시 보여집니다. -->
                <div class="preloader">
                  <div class="spinner_layer">
                      <div class="circle_clipper left">
                          <div class="circle"></div>
                      </div>
                      <div class="gap_patch">
                          <div class="circle"></div>
                      </div>
                      <div class="circle_clipper right">
                          <div class="circle"></div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- //회원정보상세 2024-05-21 -->


        <!-- Add 24-03-04 계정삭제 -->
        <div id="modal-27" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">계정삭제</strong>
            </div>
            <div class="content">
              <!-- 그리드 -->
              <div class="area-regist">
                <table>
                  <colgroup>
                    <col width="25%" />
                    <col width="" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th><span class="required">삭제사유</span></th>
                      <td>
                        <label class="input-wrap w100">
                          <input type="text" value="" placeholder="삭제 사유를 입력하세요"/>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <th><span class="required">비밀번호 </span></th>
                      <td>
                        <label class="input-wrap w100">
                          <input type="text" value="" placeholder="비밀번호를 입력하세요." />
                        </label>
                        <p class="text">비밀번호가 일치하지 않습니다.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p class="reference">삭제된 계정은 복구가 불가능하며 Admin에서 더 이상 조회되지 않습니다.</p>
              </div>
            </div>
            <div class="footer">
              <!-- 버튼영역 -->
              <div class="box-buttons">
                <button type="button" @click.prevent="closeModal('modal-27')">취소</button>
                <button type="button" class="prime solid" @click="openModal('modal-28')">확인</button>
              </div>
            </div>
          </div>
        </div>
        <!-- //Add 24-03-04 계정삭제 -->


        <!-- Add 24-03-04 계정삭제_미입력 항목 있을 시 -->
        <div id="modal-28" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">알림</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-28')">닫기</button>
            </div>
            <div class="content">
              <p class="paragraph">
                삭제 사유 및 비밀번호를 입력하세요.
              </p>
            </div>
            <div class="footer">
              <!-- 버튼영역 -->
              <div class="box-buttons">
                <button type="button" class="prime solid" @click.prevent="closeModal('modal-28')">확인</button>
              </div>
            </div>
          </div>
        </div>
        <!-- //Add 24-03-04 계정삭제_미입력 항목 있을 시  -->

         <!-- Add 24-03-04 계정삭제_정상적으로 삭제가 완료되었을 시 -->
         <div id="modal-29" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">계정삭제</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-29')">닫기</button>
            </div>
            <div class="content">
              <p class="paragraph">
                계정 삭제가 완료되었습니다.
              </p>
            </div>
            <div class="footer">
              <!-- 버튼영역 -->
              <div class="box-buttons">
                <router-link to="/admin/AHT_010"><button type="button" class="prime solid">확인</button></router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- //Add 24-03-04 계정삭제_정상적으로 삭제가 완료되었을 시  -->

         <!-- Add 24-03-04 AME_020 확장자가 csv가 아닐경우 -->
         <div id="modal-30" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">알림</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-30')">닫기</button>
            </div>
            <div class="content">
              <p class="paragraph">
                csv 파일만 업로드 가능합니다.<br>
                샘플 파일을 참고하여 csv 파일을 업로드 하세요.
              </p>
            </div>
            <div class="footer">
              <!-- 버튼영역 -->
              <div class="box-buttons">
                <button type="button" class="prime solid" @click.prevent="closeModal('modal-30')">확인</button>
              </div>
            </div>
          </div>
        </div>
        <!-- //Add 24-03-04 AME_020 확장자가 csv가 아닐경우  -->

         <!-- Add 24-03-04 AME_020 업로드 된 파일이 없을 경우 -->
         <div id="modal-31" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">알림</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-31')">닫기</button>
            </div>
            <div class="content">
              <p class="paragraph">
                파일 업로드 후 다시 실행해 주세요.
              </p>
            </div>
            <div class="footer">
              <!-- 버튼영역 -->
              <div class="box-buttons">
                <button type="button" class="prime solid" @click.prevent="closeModal('modal-31')">확인</button>
              </div>
            </div>
          </div>
        </div>
        <!-- //Add 24-03-04 AME_020 업로드 된 파일이 없을 경우 -->

        <!-- 알림 -->
        <div id="modal-33" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">알림</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-33')">닫기</button>
            </div>
            <div class="content">
              <p>계정정보 수정이 실패하였습니다.</p>
              <p>
                계정정보 수정이 완료되었습니다.
              </p>
            </div>
            <div class="footer">
              <!-- 버튼영역 -->
              <div class="box-buttons">
                <button type="button" class="prime solid" @click.prevent="closeModal('modal-33')">확인</button>
              </div>
            </div>
          </div>
        </div>

      </Teleport>
    </ClientOnly>
  </div>
</template>

<style scoped lang="scss">
.modal-page {
  > button {
    display: inline-block;
    padding: 10px;
    margin-bottom: 10px;
    color: #fff !important;
    border: none !important;
    border-radius: 4px;
    background: #ff664d !important;
  }
  > strong {
    color: #333;
    margin-right: 20px;
  }
}
</style>
