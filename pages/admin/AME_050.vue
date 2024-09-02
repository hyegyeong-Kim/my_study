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

/* 자동완성 레이어 팝업 */
function auto_complete_modal(e){
  if(!e.target.closest('.auto_complete_wrap').querySelector('.code-search-list').classList.contains('active')){
    e.target.closest('.auto_complete_wrap').querySelector('.code-search-list').classList.add('active');
  }
}

function close_auto_complete_modal(e){
  e.target.closest('.code-search-list').classList.remove('active');
}
/* //자동완성 레이어 팝업 */


</script>

<template>
    <div class="content">
        <div class="layout-column">
            <!-- 구성원 선택 -->
            <div class="column">
                <!-- 타이틀영역 -->
                <div class="area-title">
                    <h3 class="h3">계정정보</h3>
                    <div class="buttons">
                        <button type="button" class="prime solid" @click="openModal('modal-memberSearch-1')">구성원 찾기</button>
                    </div>
                </div>
                <div class="area-regist">
                    <table>
                        <colgroup>
                            <col style="width:20%;" />
                            <col />
                            <col style="width:20%;" />
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>E-mail ID</th>
                                <td colspan="3">mySU**@sk.com</td>
                            </tr>
                            <tr>
                                <th>이름</th>
                                <td>김*희</td>
                                <th>소속</th>
                                <td>SK플래닛</td>
                            </tr>
                            <tr>
                                <th>사번</th>
                                <td>SK123456</td>
                                <th>mySUNI YN</th>
                                <td>Y</td>
                            </tr>
                        </tbody>
                    </table>
                    <p class="reference">※ mySUNI YN 정보가 N일 경우, mySUNI 서비스 이용이 불가할 수 있습니다.</p>
                </div>

                <!-- 2024-04-17 어드민 개선 -->
                <!-- 서비스 가입 현황-->
                <!-- 타이틀영역 -->
                <div class="area-title">
                    <h3 class="h3">서비스 가입 현황</h3>
                </div>
                <div class="area-regist">
                    <table>
                        <colgroup>
                            <col style="width:20%;" />
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>mySUNI</th>
                                <td>가입 완료</td>
                            </tr>
                            <tr>
                                <th>이천포럼</th>
                                <td>가입 완료</td>
                            </tr>
                            <tr>
                                <th>울산포럼</th>
                                <td>가입 완료</td>
                            </tr>
                            <tr>
                                <th>LRS</th>
                                <td>가입 완료</td>
                            </tr>
                            <tr>
                                <th>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAㅇㅇㅇㅇㅇㅇㅇㅇ</th>
                                <td>가입 완료</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- // 서비스 가입 현황-->
                <!-- //2024-04-17 어드민 개선 -->
            </div>
            

            <div class="column">
                <!-- 가입 필수 정보 입력 (mySUNI ID 가입 처리 & 모든 서비스 가입 처리)  -->
                <!-- 타이틀영역 -->
                <div class="area-title">
                    <h3 class="h3">가입 필수 정보 입력</h3>
                    <div class="buttons">
                        <button type="button" class="prime solid" @click="openModal('alarm')">저장</button>
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
                                <th rowspan="5">닉네임</th>
                                <th>mySUNI</th>
                                <td>
                                    <label class="input-wrap w100">
                                        <input type="text" value="">
                                        <button type="button" class="icon del">삭제</button>
                                    </label>
                                    <p class="error-text">최소 2자 이상 입력하세요.</p>
                                </td>
                            </tr>
                            <tr>
                                <th>LRS</th>
                                <td>
                                    <label class="input-wrap w100">
                                        <input type="text" value="">
                                        <button type="button" class="icon del">삭제</button>
                                    </label>
                                    <p class="error-text">이미 사용중인 닉네임입니다.</p>
                                </td>
                            </tr>
                            <tr>
                                <th>이천포럼</th>
                                <td>
                                    <label class="input-wrap w100">
                                        <input type="text" value="">
                                        <button type="button" class="icon del">삭제</button>
                                    </label>
                                    <p class="error-text">사용할 수 없는 닉네임입니다.</p>
                                </td>
                            </tr>
                            <tr>
                                <th>울산포럼</th>
                                <td>
                                    <label class="input-wrap w100">
                                        <input type="text" value="">
                                        <button type="button" class="icon del">삭제</button>
                                    </label>
                                    <p class="solid-text">사용 가능한 닉네임입니다.</p>
                                </td>
                            </tr>
                            <tr>
                                <th>AAA</th>
                                <td>
                                    <label class="input-wrap w100">
                                        <input type="text" value="" disabled>
                                    </label>
                                    <p class="reference">닉네임을 사용하지 않는 서비스입니다.</p>
                                </td>
                            </tr>
                            <tr>
                                <th rowspan="4">부가 정보</th>
                                <th>현재 직군</th>
                                <td>
                                    <label class="select-wrap w100">
                                        <select>
                                        <option value="">select</option>
                                        </select>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <th>현재 직무</th>
                                <td>
                                    <label class="select-wrap w100">
                                        <select>
                                        <option value="">select</option>
                                        </select>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <th>희망 직군</th>
                                <td>
                                    <label class="select-wrap w100">
                                        <select disabled>
                                        <option value="">select</option>
                                        </select>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <th>희망 직무</th>
                                <td>
                                    <label class="select-wrap w100">
                                        <select>
                                        <option value="">select</option>
                                        </select>
                                    </label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- //가입 필수 정보 입력 (mySUNI ID 가입 처리 & 모든 서비스 가입 처리) -->


                <!-- 2024-04-17 어드민개선 -->
                <!-- 가입 필수 정보 입력 (특정서비스 가입 처리) -->
                <!-- 타이틀영역 -->
                <div class="area-title">
                    <h3 class="h3">가입 필수 정보 입력</h3>
                    <div class="buttons">
                        <button type="button" class="prime solid" @click="openModal('alarm')">저장</button>
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
                                <th>닉네임</th>
                                <th>
                                    <label class="select-wrap w100">
                                        <select>
                                        <option value="">울산포럼</option>
                                        </select>
                                    </label>
                                </th>
                                <td>
                                    <label class="input-wrap w100">
                                        <input type="text" value="">
                                        <button type="button" class="icon del">삭제</button>
                                    </label>
                                    <p class="error-text">최소 2자 이상 입력하세요.</p>
                                </td>
                            </tr>
                            <tr>
                                <th rowspan="4">부가 정보</th>
                                <th>현재 직군</th>
                                <td>
                                    <label class="select-wrap w100">
                                        <select>
                                        <option value="">select</option>
                                        </select>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <th>현재 직무</th>
                                <td>
                                    <label class="select-wrap w100">
                                        <select>
                                        <option value="">select</option>
                                        </select>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <th>희망 직군</th>
                                <td>
                                    <label class="select-wrap w100">
                                        <select disabled>
                                        <option value="">select</option>
                                        </select>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <th>희망 직무</th>
                                <td>
                                    <label class="select-wrap w100">
                                        <select>
                                        <option value="">select</option>
                                        </select>
                                    </label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- //가입 필수 정보 입력 (특정서비스 가입 처리) -->
                <!-- // 2024-04-17 어드민개선 -->
            </div>
        </div>
    </div>

    <!-- 멤버사 회원 조회 -->
    <div id="modal-memberSearch-1" class="modal-overlay" @click="closeModalOverlay($event)">
        <div class="modal-container modal_container_large" @click.stop>
        <div class="header">
            <strong class="title">SK구성원 조회</strong>
            <button type="button" class="button" @click.prevent="closeModal('modal-memberSearch-1')">닫기</button>
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
                        <input type="text" value="" @keyup="auto_complete_modal($event);" class="AME_belong"/>
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
                    <input type="text" value=""/>
                    </label>
                </td>
                </tr>
                <tr>
                <th>E-mail</th>
                <td>
                    <label class="input-wrap">
                    <input type="text" value="" />
                    </label>
                </td>
                <th>이름</th>
                <td>
                    <label class="input-wrap">
                    <input type="text" value="" maxlength="8"/>
                    </label>
                </td>
                </tr>
            </table>
            <button type="submit" class="submit" @click="openModal('alarm')">조회</button>
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
                    <th>사번</th>
                    <th>이름(KR)</th>
                    <th>E-mail</th>
                    <th>소속</th>
                    <th>통합 ID 회원 가입</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>SK0000000</td>
                    <td>김*니</td>
                    <td>mySU**@sk.com</td>
                    <td>SK 이노베이션</td>
                    <td>N</td>
                </tr>
                <tr>
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
                <button type="button" class="prime solid">선택</button>
            </div>
        </div>
        </div>
    </div>

    <!-- 알림 -->
    <div id="alarm" class="modal-overlay" @click="closeModalOverlay($event)">
        <div class="modal-container" @click.stop>
        <div class="header">
            <strong class="title">알림</strong>
            <button type="button" class="button" @click.prevent="closeModal('alarm')">닫기</button>
        </div>
        <div class="content">
            <!-- 수정된 SB상의 문구 적용이 필요합니다.(개발자의 소스 분석 용이하게 하기 위함) -->

            <!-- 입력되지 않은 정보 있을 경우 -->
            <p>정상적으로 입력되지 않은 정보가 있습니다.<br/> 모든 정보가 정상 입력되어야 합니다.</p>

            <!-- 모든 정보가 정상 입력되었을 경우 -->
            <p>선택하신 구성원을 가입 처리 하시겠습니까?</p>

            <!-- 모든 정보가 정상 입력되었을 경우 : 성공 -->
            <p>선택하신 구성원이 모든 서비스에 정상 가입 되었습니다.</p>
            <!-- 모든 정보가 정상 입력되었을 경우 : 실패 -->
            <p>선택하신 구성원 가입 처리에 실패하였습니다.</p>
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
</template>
