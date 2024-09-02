<script setup>
definePageMeta({
  layout: "admin"
});


/* 2024-03-04 preloader 클래스 취소 */
onMounted(() => {
  setTimeout(() => {
    document.querySelectorAll('.preloader_wrap').forEach(a => {
      a.classList.remove('active')
    });
  }, 3000);
});
/* // 2024-03-04 preloader 클래스 취소 */

/* 2024-03-04 팝업 추가를 위한 function 추가 */
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

/* //2024-03-04 팝업 추가를 위한 function 추가 */

function auto_complete_modal(e){
  if(!e.target.closest('.auto_complete_wrap').querySelector('.code-search-list').classList.contains('active')){
    e.target.closest('.auto_complete_wrap').querySelector('.code-search-list').classList.add('active');
  }
}

function close_auto_complete_modal(e){
  e.target.closest('.code-search-list').classList.remove('active');
}
</script>

<template>
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
              <th>소속</th>
              <td>SK 플래닛</td>
              <th>사번</th>
              <td>SK123456</td>
            </tr>
            <tr>
              <th>부서</th><!-- Edit 23-10-19 Text -->
              <td>IT</td>
              <th>직책</th>
              <td>팀장</td>
            </tr>
            <!-- Add 23-10-19 -->
            <tr>
              <th>직무</th>
              <td></td>
              <th>직급</th>
              <td></td>
            </tr>
            <tr>
              <th>직위</th>
              <td></td>
              <th>파트너 YN</th>
              <td></td>
            </tr>
            <tr>
              <th>고용형태</th>
              <td></td>
              <th>퇴직여부 YN</th>
              <td></td>
            </tr>
            <tr>
              <th>국가</th>
              <td></td>
              <th>mySUNI YN</th>
              <td></td>
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
          <div class="buttons">
            <button type="button" class="prime solid">저장</button>
          </div>
        </div>

        <!-- 그리드 -->
        <div class="area-result align-left">
          <table>
            <!-- Add 23-10-19 -->
            <colgroup>
              <col width="135px" />
              <col width="" />
              <col width="" />
              <col width="100px" />
              <col width="100px" />
            </colgroup>
            <!-- //Add 23-10-19 -->
            <thead>
              <tr>
                <th>서비스</th>
                <th>닉네임</th>
                <th>프로필 이미지 URL</th>
                <th>저장</th>
                <th>이용약관동의</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>mySUNI</td>
                <td>
                  <label class="input-wrap w100"><!-- Edit 23-10-19 -->
                    <input type="text" value="text" />
                    <button type="button" class="icon del">삭제</button>
                  </label>
                </td>
                <td>
                  <a href="#none">http://~~.JPG</a>
                </td>
                <td><button type="button" class="prime solid">저장</button></td>
                <td><button type="button" class="prime solid">조회</button></td>
              </tr>
              <tr>
                <td>mySUNI 대외확대</td>
                <td>
                  <label class="input-wrap w100"><!-- Edit 23-10-19 -->
                    <input type="text" value="text" />
                    <button type="button" class="icon del">삭제</button>
                  </label>
                </td>
                <td>
                  <a href="#none">mySUNI</a>
                </td>
                <td><button type="button" class="prime solid">저장</button></td>
                <td><button type="button" class="prime solid">조회</button></td>
              </tr>
              <tr>
                <td>mySUNI ON</td>
                <td>
                  <label class="input-wrap w100"><!-- Edit 23-10-19 -->
                    <input type="text" value="text" />
                    <button type="button" class="icon del">삭제</button>
                  </label>
                </td>
                <td>
                  <a href="#none">서니온!</a>
                </td>
                <td><button type="button" class="prime solid">저장</button></td>
                <td><button type="button" class="prime solid">조회</button></td>
              </tr>
              <tr>
                <td>이천포럼</td>
                <td>
                  <label class="input-wrap w100"><!-- Edit 23-10-19 -->
                    <input type="text" value="text" />
                    <button type="button" class="icon del">삭제</button>
                  </label>
                </td>
                <td>
                  <a href="#none">나팀장</a>
                </td>
                <td><button type="button" class="prime solid">저장</button></td>
                <td><button type="button" class="prime solid">조회</button></td>
              </tr>
              <tr>
                <td>mySUNI</td>
                <td>
                  <label class="input-wrap w100"><!-- Edit 23-10-19 -->
                    <input type="text" value="text" />
                    <button type="button" class="icon del">삭제</button>
                  </label>
                </td>
                <td>
                  <a href="#none">http://~~.JPG</a>
                </td>
                <td><button type="button" class="prime solid">저장</button></td>
                <td><button type="button" class="prime solid">조회</button></td>
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
                <th>서비스</th>
                <th>약관코드</th>
                <th>약관명</th>
                <th>동의 버전</th>
                <th>필수여부</th>
                <th>최신버전</th>
                <th>동의일자</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>mySUNI</td>
                <td></td>
                <td>mySUNI 통합약관</td>
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
        
         <!-- Add 24-02-04 계정삭제 모달 추가 -->
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
        <!-- //Add 24-03-04 계정삭제 모달 추가-->


        <!-- Add 24-02-04 계정삭제_미입력 항목 있을 시 모달 추가-->
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
        <!-- //Add 24-03-04 계정삭제_미입력 항목 있을 시 모달 추가 -->

         <!-- Add 24-03-04 계정삭제_정상적으로 삭제가 완료되었을 시 모달 추가 해당 부분은 modal.vue에서 확인 가능 -->
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
        <!-- //Add 24-03-04 계정삭제_정상적으로 삭제가 완료되었을 시 모달 추가 해당 부분은 modal.vue에서 확인 가능 -->

 


  </div>
</template>
