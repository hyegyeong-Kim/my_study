<script setup>
function openModal(id) {
  document.getElementById(id).classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeModal(id) {
  document.getElementById(id).classList.remove("active");
  document.body.style.overflow = "unset";
}
function closeModalOverlay(e) {
  e.target.classList.remove("active");
  document.body.style.overflow = "unset";
}
</script>

<template>
  <div class="modal-page">
    <button type="button" @click="openModal('modal-01')">모달 - 통합 ID 전환 안내</button> <br />
    <button type="button" @click="openModal('modal-02')">모달 - 이용약관 동의 취소 알림</button> <br />
    <button type="button" @click="openModal('modal-03')">모달 - 인증메일 발송 알림1</button> <br />
    <button type="button" @click="openModal('modal-04')">모달 - 인증메일 발송 알림2</button> <br />
    <button type="button" @click="openModal('modal-05')">모달 - 해외거주/외국인 회원 안내</button> <br />
    <button type="button" @click="openModal('modal-06')">모달 - 14세 미만 가입자 알림</button> <br />
    <button type="button" @click="openModal('modal-07')">모달 - 14세 이상 가입자 알림</button> <br />
    <button type="button" @click="openModal('modal-08')">모달 - 회원유형 선택</button> <br />
    <button type="button" @click="openModal('modal-09')">모달 - 휴면계정 안내</button> <br />
    <button type="button" @click="openModal('modal-10')">모달 - 휴면계정 알림</button> <br />
    <strong>ME_P03</strong><button type="button" @click="openModal('modal-11')">파트너사 검색</button> <br />
    <strong>ME_P07</strong><button type="button" @click="openModal('modal-12')">주전공/복수전공 추가</button> <br />
    <strong>ME_P01</strong><button type="button" @click="openModal('modal-13')">해외 거주 또는 외국인 회원 안내</button> <br />
    <strong>CO_P01</strong><button type="button" @click="openModal('modal-14')">통합 ID 이용 약관</button> <br />
    <strong>CO_P02</strong><button type="button" @click="openModal('modal-15')">개인정보 처리방침</button> <br />
    <strong>CO_P03</strong><button type="button" @click="openModal('modal-16')">E-mail 미수신 안내</button> <br />
    <strong>CO_P04</strong><button type="button" @click="openModal('modal-17')">SMS 미수신 안내</button> <br />
    <strong>LO_P01</strong><button type="button" @click="openModal('modal-18')">인증번호 재발송 (E-mail)</button> <br />
    <strong>LO_P02</strong><button type="button" @click="openModal('modal-19')">인증번호 재발송 (SMS)</button> <br />
    <!--2024-02-22 E-mail ID & 휴대폰 번호} 값으로 일치하는 회원 없을 경우 인증관련 모달추가-->
    <strong>ME_011</strong><button type="button" @click="openModal('modal-20')">{E-mail ID & 휴대폰 번호} 값으로 일치하는 회원 없을 경우</button> <br />
    <!--//2024-02-22 E-mail ID & 휴대폰 번호} 값으로 일치하는 회원 없을 경우 인증관련 모달추가-->

    <ClientOnly>
      <Teleport to="#container">
        <!-- 통합 ID 전환 안내 -->
        <div id="modal-01" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">통합 ID 전환 안내</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-01')">닫기</button>
            </div>
            <div class="content">
              <p class="paragraph">
                mySUNI의 모든 서비스를 하나의 ID로 이용가능한 통합 ID 이용약관 동의가 필요합니다. <br />
                mySUNI 통합 ID에 가입 후 서비스를 계속 이용하실 수 있습니다.
              </p>
            </div>
            <div class="footer">
              <div class="button-box">
                <CButtons class="big point" :title="'전환하기'" />
              </div>
            </div>
          </div>
        </div>

        <!-- 이용약관 동의 취소 알림 -->
        <div id="modal-02" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">알림</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-02')">닫기</button>
            </div>
            <div class="content">
              <p class="paragraph">
                통합 ID 전환 가입을 취소하시면 <br />
                서비스 이용이 불가합니다. <br />
                이전 화면으로 돌아가시겠습니까?
              </p>
            </div>
            <div class="footer">
              <div class="button-box">
                <CButtons class="big gray" :title="'취소'" />
                <CButtons class="big point" :title="'확인'" />
              </div>
            </div>
          </div>
        </div>

        <!-- 인증메일 발송 알림1 -->
        <div id="modal-03" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">알림</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-03')">닫기</button>
            </div>
            <div class="content">
              <p class="paragraph">입력하신 E-mail이 이미 존재합니다.</p>
            </div>
            <div class="footer">
              <div class="button-box">
                <CButtons class="big point" :title="'확인'" />
              </div>
            </div>
          </div>
        </div>

        <!-- 인증메일 발송 알림1 -->
        <div id="modal-04" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">알림</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-04')">닫기</button>
            </div>
            <div class="content">
              <p class="paragraph">
                입력하신 E-mail ID가 이미 존재합니다. <br />
                해당 E-mail ID로 통합 ID 전환가입을 <br />
                진행하시겠습니까?
              </p>
            </div>
            <div class="footer">
              <div class="button-box">
                <CButtons class="big gray" :title="'취소'" />
                <CButtons class="big point" :title="'확인'" />
              </div>
            </div>
          </div>
        </div>

        <!-- 인증메일 발송 알림2 -->
        <div id="modal-05" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">해외 거주 또는 외국인 회원 안내</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-05')">닫기</button>
            </div>
            <div class="content">
              <p class="paragraph">
                통합 ID는 고객님의 개인 정보 접근 관리 및 통합 서비스 제공을 위하여, 휴대폰 본인 인증을 통한 실명 정보를 필요로 합니다. <br />
                휴대폰 본인 인증을 하지 않으신 경우 서비스 이용에 제한이 있을 수 있으니 유의하시기 바랍니다. <br />
                문의 사항이 있으신 경우 Help Desk 02) 6323-9000 로 연락 주시기 바랍니다.
              </p>
            </div>
            <div class="footer">
              <div class="button-box">
                <CButtons class="big gray" :title="'취소'" />
                <CButtons class="big point" :title="'본인 인증 건너뛰기'" />
              </div>
            </div>
          </div>
        </div>

        <!-- 14세 미만 가입자 알림 -->
        <div id="modal-06" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">알림</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-06')">닫기</button>
            </div>
            <div class="content">
              <p class="paragraph">
                mySUNI 및 mySUNI 통합 ID는 14세 이상 회원만 이용가능한 서비스입니다. <br />
                생년월일이 %2009-06-06% 미만 사용자는 회원 가입이 불가합니다.
              </p>
            </div>
            <div class="footer">
              <div class="button-box">
                <CButtons class="big point" :title="'확인'" />
              </div>
            </div>
          </div>
        </div>

        <!-- 14세 이상 가입자 알림 -->
        <div id="modal-07" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">알림</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-07')">닫기</button>
            </div>
            <div class="content">
              <p class="paragraph">신청하신 서비스는 14세 이상 회원만 이용가능한 서비스입니다. 아래 동의 사항을 체크하세요.</p>
              <br />
              <br />
              <CMultiple
                :id="['id']"
                :type="'checkbox'"
                :title="''"
                :style="'black large'"
                :name="'네임'"
                :label="['신청자는 14세 이상이며, 서비스 이용에 동의합니다.']"
                :checked="[true]"
                :disabled="false"
              />
            </div>
            <div class="footer">
              <div class="button-box">
                <CButtons class="big point" :title="'회원 가입 완료'" />
              </div>
            </div>
          </div>
        </div>

        <!-- 회원유형 선택 -->
        <div id="modal-08" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container wide" @click.stop>
            <div class="header">
              <strong class="title">회원유형 선택</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-08')">닫기</button>
            </div>
            <div class="content">
              <div>디자인</div>
            </div>
            <div class="footer">
              <div class="button-box">
                <CButtons class="big point" :title="'확인하기'" />
              </div>
            </div>
          </div>
        </div>

        <!-- 휴면계정 안내 -->
        <div id="modal-09" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container wide" @click.stop>
            <div class="header">
              <strong class="title">휴면계정 안내</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-09')">닫기</button>
            </div>
            <div class="content">
              <p class="paragraph">
                회원님의 개인정보를 안전하게 관리하기 위하여, 1년 이상 미사용 계정은 휴면전환하여 별도로 데이터를 안전하게 보관하고 있습니다.<br /><br />
                휴면을 해제하시려면 휴대폰 본인인증 후 휴면을 해제하여 주세요.
              </p>

              <div class="form-wrap narrow no-border">
                <article>
                  <div class="border-wrap">
                    <strong class="title">E-mail ID</strong>
                    <CInputs :id="'emailId'" :type="'text'" :placeholder="''" :label="'Email ID'" :value="'mysunu@sk.com'" />
                    <CButtons class="authentication" :title="'인증메일 발송'" />
                  </div>
                </article>
                <article>
                  <div class="border-wrap">
                    <strong class="title">인증번호</strong>
                    <CInputs :id="'certNumber'" :type="'text'" :placeholder="'인증번호를 입력하세요.'" :label="'인증번호'" :value="''" :disabled="false" :readonly="false" />
                    <CButtons class="authentication" :title="'인증번호 확인'" />
                    <span class="validation">인증완료</span>
                  </div>
                  <div class="timer-wrap">
                    <!-- 만료시 expired 클래스 추가 -->
                    <p class="text">인증번호가 발송되었습니다.</p>
                    <!-- <p class="text">인증번호가 재발송되었습니다.</p> -->
                    <!-- <p class="text">인증번호 숫자 6자리를 입력하세요.</p> -->
                    <button type="button" class="button">
                      <span>03:00</span>
                    </button>
                  </div>
                  <div class="timer-wrap expired">
                    <!-- 만료시 expired 클래스 추가 -->
                    <p class="text">인증시간이 만료되었습니다. 재발송을 눌러주세요.</p>
                    <button type="button" class="button">
                      <span>만료</span>
                    </button>
                  </div>
                </article>
              </div>
            </div>
            <div class="footer">
              <div class="button-box">
                <CButtons class="big point" :title="'본인인증 후 휴면해제'" />
                <CButtons class="big point" :title="'휴면 해제'" />
              </div>
            </div>
          </div>
        </div>

        <!-- 휴면계정 알림 -->
        <div id="modal-10" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">휴면계정 알림</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-10')">닫기</button>
            </div>
            <div class="content">
              <p class="paragraph">휴면 해제가 완료되었습니다. 정상적으로 서비스 이용이 가능합니다.</p>
            </div>
            <div class="footer">
              <div class="button-box">
                <CButtons class="big point" :title="'확인'" />
              </div>
            </div>
          </div>
        </div>

        <!-- 파트너사 검색 -->
        <div id="modal-11" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">파트너사 검색</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-11')">닫기</button>
              <div class="row">
                <div class="border-wrap">
                  <CInputs :id="'partnerName'" :type="'text'" :placeholder="''" :value="'가나'" />
                  <CButtons class="search" :type="'Icon'" />
                </div>
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

        <!-- 주전공/복수전공 추가 -->
        <div id="modal-12" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">주전공 추가</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-12')">닫기</button>
            </div>
            <div class="content">
              <div class="form-wrap narrow no-border">
                <article>
                  <div class="border-wrap">
                    <strong class="title">전공계열1</strong>
                    <CSelectBox
                      :coptions="[
                        { val: 'default', txt: '선택해주세요' },
                        { val: 'value1', txt: '인문' },
                        { val: 'value2', txt: '사회' },
                        { val: 'value3', txt: '교육' },
                        { val: 'value4', txt: '공학' },
                        { val: 'value5', txt: '자연' },
                        { val: 'value6', txt: '의약' },
                        { val: 'value7', txt: '예체능' },
                        { val: 'value8', txt: '기타' }
                      ]"
                      :title="'전공계열1'"
                      :disabled="false"
                      :changed="false"
                    />
                  </div>
                </article>
                <article>
                  <div class="border-wrap">
                    <strong class="title required">주전공 1</strong>
                    <CInputs :id="''" :type="'text'" :placeholder="'학과를 입력하세요.'" :label="'전공학과'" :value="''" :disabled="true" />
                  </div>
                </article>
                <article>
                  <div class="border-wrap">
                    <strong class="title">전공계열2</strong>
                    <CSelectBox
                      :coptions="[
                        { val: 'default', txt: '선택해주세요' },
                        { val: 'value1', txt: '인문' },
                        { val: 'value2', txt: '사회' },
                        { val: 'value3', txt: '교육' },
                        { val: 'value4', txt: '공학' },
                        { val: 'value5', txt: '자연' },
                        { val: 'value6', txt: '의약' },
                        { val: 'value7', txt: '예체능' },
                        { val: 'value8', txt: '기타' }
                      ]"
                      :title="'전공계열1'"
                      :disabled="false"
                      :changed="false"
                    />
                  </div>
                </article>
                <article>
                  <div class="border-wrap">
                    <strong class="title">주전공 2</strong>
                    <CInputs :id="''" :type="'text'" :placeholder="'학과를 입력하세요.'" :label="'전공학과'" :value="''" :disabled="true" />
                  </div>
                </article>
                <article>
                  <div class="border-wrap">
                    <strong class="title">전공계열3</strong>
                    <CSelectBox
                      :coptions="[
                        { val: 'default', txt: '선택해주세요' },
                        { val: 'value1', txt: '인문' },
                        { val: 'value2', txt: '사회' },
                        { val: 'value3', txt: '교육' },
                        { val: 'value4', txt: '공학' },
                        { val: 'value5', txt: '자연' },
                        { val: 'value6', txt: '의약' },
                        { val: 'value7', txt: '예체능' },
                        { val: 'value8', txt: '기타' }
                      ]"
                      :title="'전공계열1'"
                      :disabled="false"
                      :changed="false"
                    />
                  </div>
                </article>
                <article>
                  <div class="border-wrap">
                    <strong class="title">주전공 3</strong>
                    <CInputs :id="''" :type="'text'" :placeholder="'학과를 입력하세요.'" :label="'전공학과'" :value="''" :disabled="true" />
                  </div>
                </article>
              </div>
            </div>
            <div class="footer">
              <div class="button-box">
                <CButtons class="big gray" :title="'초기화'" />
                <CButtons class="big point" :title="'입력'" />
              </div>
            </div>
          </div>
        </div>

        <!-- 해외 거주 또는 외국인 회원 안내 -->
        <div id="modal-13" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">해외 거주 또는 외국인 회원 안내</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-13')">닫기</button>
            </div>
            <div class="content">
              <p class="paragraph">
                통합 ID는 고객님의 개인 정보 접근 관리 및 통합 서비스 제공을 위하여, 휴대폰 본인 인증을 통한 실명 정보를 필요로 합니다. <br />
                <br />
                휴대폰 본인 인증을 하지 않으신 경우 서비스 이용에 제한이 있을 수 있으니 유의하시기 바랍니다. <br />
                <br />
                문의 사항이 있으신 경우 Help Desk 02) 6323-9000 로 연락 주시기 바랍니다.
              </p>
            </div>
            <div class="footer">
              <div class="button-box">
                <CButtons class="big gray" :title="'취소'" />
                <CButtons class="big point" :title="'본인인증 건너뛰기'" />
              </div>
            </div>
          </div>
        </div>

        <!-- 통합 ID 이용 약관 -->
        <div id="modal-14" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container policy" @click.stop>
            <div class="header">
              <strong class="title">통합 ID 이용 약관</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-14')">닫기</button>
            </div>
            <!-- 2024-03-29 Edit 약관 영역 iframe으로 수정 -->
            <div class="content">
              <iframe src="../policy/PRIVACY_STATEMENT_20231214.html" width="100%" height="500"></iframe>
                <!-- <div class="mysuni_policy_wrap">

                    <dl>
                        <dt>제 1장 총칙</dt>
                        <dd>
                            <dl>
                                <dt>제1조 (목 적)</dt>
                                <dd>본 약관은 회원이 SK Innovation(이하 "회사")이 제공하는 SK mySUNI 서비스 플랫폼 내의 모든 서비스를 이용함에 있어 회원 및 회사의 제반 권리·의무 및 이용조건, 절차 등을 규정함을 목적으로 합니다.</dd>
                                <dt>제2조 (정 의)</dt>
                                <dd>
                                    <ul>
                                        <li>①이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
                                            <ul>
                                                <li>1."서비스"라 함은 SK mySUNI 회원을 위해 회사가 제공하는 mySUNI의 모든 서비스를 의미합니다. 이 서비스의 개요는 본 약관 제3조에 기술된 바와 같습니다.</li>
                                                <li>2."SK mySUNI 회원"(이하 "회원")이라 함은 SK mySUNI 서비스를 제공받기 위해 웹사이트(https://mysuni.sk.com)에 접속하여 이 이용약관에 동의하고 회사가 인정하는 절차를 통해 이용자 번호(회원ID)를 부여 받고 비밀번호(Password)를 설정한 자를 말합니다. 이 회원ID는 통합ID 시스템의 일부로서, 회원은 이를 통해 다양한 서비스에 접근할 수 있습니다.</li>
                                                <li>3.“회원”은 통합ID가 적용된 개별 서비스에서 하나의 ID와 비밀번호로 로그인할 수 있는 회원 인증 서비스를 이용할 수 있습니다.</li>
                                                <li>4."통합ID”(이하 “회원ID”)라 함은 회원의 식별과 서비스 이용을 위해 고객이 설정하거나 회사가 부여하는 문자와 숫자, 기호의 조합을 말합니다. 회원은 이를 사용하여 다른 서비스에서도 동일한 식별자로 로그인할 수 있습니다.</li>
                                                <li>5."비밀번호(Password)"라 함은 회원이 부여받은 회원ID와 일치된 회원임을 확인하고 회원의 권익보호를 위하여 회원이 설정한 문자와 숫자, 기호의 조합을 말합니다.</li>
                                                <li>6.”통합로그인”이라 함은 회원 ID와 비밀번호를 통하여 서비스 신청 및 사용 기타 서비스의 세부정보를 확인할 수 있는 행위를 말합니다.</li>
                                                <li>7."SK mySUNI 홈페이지"(이하 “홈페이지”)라 함은 SK mySUNI 서비스 및 관련 정보를 제공하는 웹페이지로서 회원ID로 통합로그인 가능한 ”SK mySUNI 서비스” 플랫폼 내의 모든 서비스를 말합니다.</li>
                                            </ul>
                                        </li>
                                        <li>②이 약관에서 사용하는 용어의 정의는 본 조 제1항에서 정하는 것을 제외하고는 관계법령 및 서비스 이용안내에서 정하는 바에 따릅니다.</li>
                                    </ul>
                                </dd>
                                <dt>제 3조 (SK mySUNI 서비스 개요)</dt>
                                <dd>
                                    <ul>
                                        <li>①회사가 본 약관에 정해진 바에 따라 회원에게 제공하는 서비스는 다음 각 호와 같으며 서비스를 이용하고자 하는 고객은 본 약관에 정해진 제반 절차를 거쳐 회원으로 가입하여야 합니다. 단, 개별 서비스의 특성에 따라 일부 서비스의 이용조건, 이용범위 등이 제한되거나 회원에게 일정한 자격요건이 요구될 수 있으며, 이 경우 회사는 그 제한사항 및 자격요건을 회원에게 고지해 드립니다.</li>
                                        <li>②회사는 서비스의 원활한 제공을 위하여 홈페이지(써니 https://mysuni.sk.com, 이천포럼 https://www.icheonforum.com)를 운영하고 있으며, 회원은 홈페이지에서 제공하는 각종 서비스를 이용할 수 있습니다. 단, SK mySUNI 서비스 홈페이지를 이용하고자 하는 회원은 회원ID 및 Password 지정 등 회사가 정하는 이용자 정보 등록절차를 거쳐야 합니다.</li>
                                    </ul>
                                </dd>
                                
                            <dt>제 4조 (약관개정)</dt>
                            <dd>
                                    <ul>
                                        <li>①본 약관은 수시로 개정될 수 있으며 약관을 개정하고자 할 경우 회사는 개정된 약관을 적용하고자 하는 날(이하 "효력 발생일")로부터7일 이전에 약관이 개정된다는 사실과 개정된 내용 등을 다음 각 호에 규정된 방법 중 1가지 이상의 방법으로 회원에게 고지하여 드립니다.
                                            <ul>
                                                <li>1.E-mail 통보</li>
                                                <li>2.서면 통보</li>
                                                <li>3.SK mySUNI 서비스 홈페이지(http:// mysuni.sk.com) 내 게시</li>
                                            </ul>
                                        </li>
                                        <li>회사가 E-mail통보 또는 서면통보의 방법으로 본 약관이 개정된 사실 및 개정된 내용을 회원에게 고지하는 경우에는 회사는 회원이 회사에 기제공한 E-mail 주소나 주소지 중 가장 최근에 제공된 곳으로 통보합니다.</li>
                                        <li>③본 조의 규정에 의하여 개정된 약관은 원칙적으로 그 효력 발생일로부터 장래를 향하여 유효합니다.</li>
                                        <li>④본 약관의 개정과 관련하여 이의가 있는 회원은 회원탈퇴를 할 수 있습니다. 단, 이의가 있음에도 불구하고 본 조 제1항 내지 제2항에 정해진 바에 따른 회사의 고지가 있은 후 30일 이내에 회원탈퇴를 하지 않은 회원은 개정 약관에 동의한 것으로 봅니다.</li>
                                        <li>⑤본 조의 통지방법 및 통지의 효력은 본 약관의 각 조항에서 규정하는 개별적인 또는 전체적인 통지의 경우에 이를 준용합니다.</li>
                                            
                                    </ul>
                            </dd>
                                
                            </dl>
                        </dd>

                        <dt>제 2장 회원가입과 탈퇴</dt>
                        <dd>
                            <dl>
                                <dt>제 5조 (회원가입)</dt>
                                <dd>
                                    <ul>
                                        <li>①회원으로 가입하고자 하는 고객은 홈페이지에서 본 약관과 별도의 '개인정보의 수집, 제공 및 활용에 관한 동의서'에 동의 후 회원가입신청서에 본인 정보 입력을 함으로써 회원가입을 신청합니다. 고객은 반드시 실명으로 회원가입을 하여야 하며, 1인의 회원에 대해 1건의 회원가입 신청을 할 수 있습니다. </li>
                                        <li>②회사는 고객의 이용신청이 다음 각 호에 해당하는 경우 그 신청에 대한 승낙을 제한 또는 유보할 수 있습니다.
                                            <ul>
                                                <li>1.성명이 실명이 아닐 경우</li>
                                                <li>2.선량한 풍속, 기타 사회질서를 해 할 목적으로 신청한 경우</li>
                                                <li>3.이용신청서의 내용을 허위로 기재하였거나 허위서류를 첨부하였을 경우</li>
                                                <li>4.회사의 업무수행상 또는 기술상 지장이 있는 경우</li>
                                                <li>5.기타 회사의 판단에 따라 회원으로 적합하지 않다고 여겨지는 경우</li>
                                            </ul>
                                        </li>
                                        <li>③회원은 회원자격을 타인에게 양도하거나 대여 또는 담보의 목적으로 이용할 수 없습니다.</li>
                                        <li>④회원이 등록절차를 거쳐 동의 버튼을 누름으로써 본 약관에 동의한 것으로 간주합니다.</li>
                                    </ul>
                                </dd>

                                <dt>제 6조 (회원탈퇴 및 자격상실/정지)</dt>
                                <dd>
                                    <ul>
                                        <li>①회원은 언제든지 서면, E-mail, 전화 기타 회사가 정하는 방법으로 회원탈퇴를 요청할 수 있으며, 회사는 회원의 요청에 따라 조속히 회원탈퇴에 필요한 제반 절차를 수행합니다.</li>
                                        <li>②회원이 다음 각 호의 사유에 해당하는 경우, 회사는 당해 회원에 대한 통보로써 회원의 자격을 상실 또는 1년 동안 정지시킬 수 있습니다.
                                            <p>단, 제2호의 경우에는 별도의 통보 없이 당연히 자격이 상실됩니다.</p>
                                                <ul>
                                                    <li>1.회원가입 신청 시에 허위의 내용을 등록한 경우</li>
                                                    <li>2.회원이 사망한 경우</li>
                                                    <li>3.회원가입 신청 시의 가입 요건이 더 이상 충족되지 않는 경우</li>
                                                    <li>4.다른 회원의 SK mySUNI 서비스 홈페이지 이용을 방해하거나 그 정보를 도용하는 등 회사의 서비스 운영에 지장을 초래한 경우</li>
                                                    <li>5.SK mySUNI 서비스 홈페이지를 이용하여 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우</li>
                                                    <li>6.다른 회원의 SK mySUNI 서비스 홈페이지 이용을 방해하거나 그 정보를 도용하는 등 전자거래질서를 위협하는 경우</li>
                                                    <li>7.기타 본 약관에 규정된 회원의 의무를 위반한 경우</li>
                                                </ul>
                                        </li>
                                        <li>③본 조 제2항의 사유로 자격이 상실 또는 정지된 회원은 제2항 각 호의 사유가 자신의 고의 또는 과실에 기한 것이 아님을 소명할 수 있습니다. 이 경우 회사는 회원의 소명 내용을 심사하여 회원의 주장이 타당하다고 판단하는 경우 회원으로 하여금 정상적인 SK mySUNI 서비스를 이용할 수 있도록 합니다.</li>
                                        <li>④본 조 제1항에 의한 회원탈퇴 또는 제2항에 의한 회원자격상실이 확정되는 시점은 다음 각 호와 같습니다.
                                            <ul>
                                                <li>1.회원탈퇴 요청일 또는 회원자격상실 통보일</li>
                                                <li>2.사망으로 인한 자격상실의 경우에는 회원 사망일</li>
                                            </ul>
                                        </li>
                                        <li>⑤본 조 제2항에 의한 회원자격 정지는 회원자격정지 통보일로부터 1년간 효력이 있으며, 제2항에 의해 자격이 상실된 회원에 대하여 회사는 회원 재가입을 제한할 수 있습니다.</li>
                                    </ul>
                                </dd>
                            </dl>
                        </dd>

                        <dt>제 3장 홈페이지</dt>
                        <dd>
                            <dl>
                                <dt>제 7조 (홈페이지 서비스)</dt>
                                <dd>
                                    <ul>
                                        <li>①회사는 회원에 대한 효율적인 SK mySUNI 서비스를 제공하기 위하여 SK mySUNI 서비스 홈페이지를 운영하며, 회원은 SK mySUNI 서비스 홈페이지를 통하여 각종 서비스(이하 "홈페이지 서비스")를 제공받을 수 있습니다.</li>
                                        <li>②회사는 홈페이지 서비스 운영과 관련하여 관계 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며, 이 약관이 정하는 바에 따라 지속적이고 안정적으로 상품·서비스를 제공하는 데 최선을 다합니다.</li>
                                        <li>③홈페이지 서비스 운영은 회사의 업무상 또는 기술상 문제가 없는 한 연중무휴 1일 24시간을 원칙으로 합니다. 다만, 정기점검 등의 필요로 회사가 정한 시간은 그러하지 아니하며, 이는 사전에 공지합니다.</li>
                                        <li>④회사는 일부 홈페이지 서비스의 이용가능 시간을 별도로 정할 수 있습니다. 이 경우 홈페이지 서비스 이용 안내를 통해 공지합니다.</li>
                                    </ul>
                                </dd>
                                <dt>제 8조 (홈페이지 서비스의 내용)</dt>
                                <dd>
                                    <p>회사는 홈페이지 서비스를 통하여 다음과 같은 업무를 수행합니다.</p>
                                    <ul>
                                        <li>1.회원에 대한 SK mySUNI 서비스 관련 제반 정보의 제공</li>
                                        <li>2.교육과 자격인증을 위한 서비스 제공</li>
                                        <li>3.이천포럼 및 울산포럼 운영을 위한 서비스 제공</li>
                                        <li>3.기타 회사가 정하는 업무 </li>
                                    </ul>
                                </dd>
                                <dt>제 9조 (홈페이지 서비스의 중단)</dt>
                                <dd>
                                    <ul>
                                        <li>①회사는 다음 각 호에 해당하는 경우 홈페이지 서비스 제공을 중지할 수 있습니다.
                                            <ul>
                                                <li>1.컴퓨터 등 정보통신설비의 점검 / 보수 / 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우</li>
                                                <li>2.전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중지했을 경우</li>
                                                <li>3.천재지변, 국가비상사태 등의 불가항력적인 사유가 발생하였을 경우</li>   
                                            </ul>
                                        </li>
                                        <li>②본 조 제1항의 사유로 홈페이지 서비스를 중단하고자 할 경우 회사는 E-mail로 발송하거나 SK mySUNI 서비스 홈페이지에 게시하는 방법으로 회원에게 홈페이지 서비스 중단사실을 알려드립니다.</li>
                                    </ul>
                                </dd>
                                <dt>제 10조 (회원ID 및 Password)</dt>
                                <dd>
                                    <ul>
                                        <li>①홈페이지 서비스를 이용하고자 하는 회원은 회사가 정하는 바에 따라 회원ID 및 Password를 SK mySUNI 서비스 홈페이지에 각각 등록하여야 합니다.</li>
                                        <li>②회원ID와 Password에 관한 관리책임은 회원 본인에게 있으므로 회원은 자신의 ID 및 password를 제3자에게 알려주거나 이용하게 해서는 안됩니다.</li>
                                        <li>③회원이 자신의 ID 또는 Password를 도난 당하거나 제3자가 사용하고 있음을 인지한 경우에는 즉시 회사에 통보하고 회사의 안내가 있는 경우에는 그에 따라야 합니다.</li>
                                    </ul>
                                </dd>
                                <dt>제 11조 (저작권의 귀속 및 이용제한)</dt>
                                <dd>
                                    <ul>
                                        <li>①홈페이지 내에 회사가 작성한 저작물에 대한 저작권 기타 지식재산권은 회사에 귀속합니다.</li>
                                        <li>② 이용자가 서비스 이용 중 작성한 학습과제, 게시글, 댓글 등 작성물은 당사가 자유롭게 인용 및 사용할 수 있습니다.</li>
                                    </ul>
                                </dd>
                                <dt>제 12조 (게시물 삭제)</dt>
                                <dd>
                                    <p>회사는 회원이 게시하거나 제공하는 자료 등이 다음 각 호에 해당한다고 판단될 경우 사전 통지 없이 홈페이지에서 삭제할 수 있습니다.</p>
                                    <ul>
                                        <li>1.다른 회원 또는 제3자를 비방하거나 명예를 손상시키는 내용인 경우</li>
                                        <li>2.허위 사실의 유포</li>
                                        <li>3.공공질서 및 미풍양속에 위반되는 내용인 경우</li>
                                        <li>4.지식재산권 등 기타 타인의 권리를 침해하는 내용인 경우</li>
                                        <li>5.SK mySUNI 서비스 내용과 합치하지 않은 경우</li>
                                        <li>6.기타 관계법령에 위반된다고 판단되는 경우</li>
                                    </ul>
                                </dd>

                                <dt>제 13조 (홈페이지 서비스 이용 관련 분쟁해결)</dt>
                                <dd>
                                    <ul>
                                        <li>①회사는 SK mySUNI 서비스 이용과 관련하여 회원으로부터 제출되는 불만사항 및 의견을 최대한 신속하게 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 회원에게 그 사유와 처리일정을 조속히 통보해 드립니다.</li>
                                        <li>②회사와 회원간에 발생한 분쟁은 전자문서 및 전자거래기본법에 의하여 설치된 전자문서∙전자거래분쟁-조정위원회의 조정에 따를 수 있습니다.</li>
                                    </ul>
                                </dd>
                            </dl>
                        </dd>

                        <dt>제 4장 SK mySUNI 서비스의 제공과 이용</dt>
                        <dd>
                            <dl>
                                <dt>제 14조 서비스 이용</dt>
                                <dd>회사는 회원에게 제공하는 동영상을 포함한 학습 콘텐츠 및 네트워킹 서비스를 제공하며, 필요한 경우 서비스의 내용을 추가 또는 변경하여 제공할 수 있습니다. </dd>

                                <dt>제 15조 (회사의 의무)</dt>
                                <dd>
                                    <ul>
                                        <li>①회사는 법령 및 본 약관에서 금하는 행위를 하지 않으며, 지속적이고 안정적으로 서비스를 제공하기 위해서 노력합니다.</li>
                                        <li>②회사는 서비스 제공과 관련해 알고 있는 회원의 개인정보를 본인의 승낙 없이 제3자에게 누설하거나 배포하지 않습니다. 단, 법률에 의한 국가기관의 요구나 수사상의 목적, 비식별처리 후 개인을 식별할 수 없는 인구통계학적 자료로는 제공될 수 있습니다.</li>
                                        <li>③회사는 회원이 제기하는 의견이나 불만이 정당하다고 인정되면 즉시 처리합니다. 다만, 즉시 처리가 곤란할 경우에는 회원에게 그 사유와 일정을 통보하여야 합니다.</li>
                                        <li>④회사는 회원이 안전하게 서비스를 이용할 수 있도록 회원의 개인정보 및 신용정보 보호를 위한 보안시스템을 구축합니다.</li>
                                        <li>⑤회사는 지속적이고 안정적인 서비스를 제공하기 위하여 설비에 장애가 있거나 망실된 때에는 이를 지체 없이 수리 또는 복구합니다. 다만, 천재지변이나 비상사태, 기타 부득이한 경우에는 그 서비스를 일시 중단하거나 중지할 수 있습니다. 이때, 회사는 지체 없이 회원에게 통보하여야 합니다.</li>

                                    </ul>
                                </dd>
                                <dt>제 16조 (회원의 의무)</dt>
                                <dd>
                                    <ul>
                                        <li>①회원 가입 시에 입력하는 회원의 정보는 정확하여야 하며, 이미 제공된 회원정보가 정확한 정보가 되도록 유지, 갱신하여야 합니다.</li>
                                        <li>②회원은 홈페이지에 게시된 회사의 보안 정보를 포함한 비밀정보를 외부에 누설하거나 부적절하게 사용하여서는 안 됩니다. 회사의 보안 정보는 회사의 운영, 관리, 연구 개발, 서비스 제공 과정에서 사용되는 모든 기술적, 관리적 정보를 포함하며, 이는 비공개 정보로 간주됩니다.</li>
                                        <li>③회원은 공공의 안녕질서 및 미풍양속을 저해하는 다음 각 호의 통신 활동을 하여서는 안됩니다.
                                            <ul>
                                                <li>1.회원가입 및 SK mySUNI 서비스 이용 관련 제반 신청행위 또는 변경행위 시 허위내용 기재행위</li>
                                                <li>2.SK mySUNI 서비스 홈페이지에 게시된 각종 정보 및 SK mySUNI 서비스를 통하여 얻은 정보를 회사의 사전 승낙 없이 무단 변경, 복제, 삭제 또는 유통시키거나 상업적으로 이용하는 행위</li>
                                                <li>3.회사가 허용한 정보 이외의 다른 정보(컴퓨터 프로그램 및 광고, 스팸메일 등)를 송신하거나 게시하는 행위</li>
                                                <li>4.회사 기타 제3자의 저작권 등 지식재산권에 대한 침해 행위</li>
                                                <li>5.회사 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                                                <li>6.외설 또는 폭력적인 정보(메시지, 화상, 음성 등), 기타 공서양속에 반하는 정보를 SK mySUNI 서비스 홈페이지에 공개하거나 게시하는 행위</li>
                                                <li>7.타인의 회원ID 및 Password를 사용하는 행위</li>
                                                <li>8.기타 법령에 위배되는 행위</li>
                                            </ul>
                                        </li>
                                        <li>④회원ID와 Password(10자 이상, 영문자/숫자/기호 혼용, 단순문자 또는 개인정보 사용금지)의 관리책임은 회원 본인에게 있으며 Password가 타인에게 노출된 경우 즉시 변경하여야 합니다. 회원에게 부여된 회원ID와 Password의 관리소홀, 부정사용에 의하여 발생하는 모든 결과에 대한 책임은 회원에게 있습니다. 본인의 회원ID가 부정하게 사용된 경우, 회원은 반드시 회사에 그 사실을 통보해야 합니다. 회원은 이 약관 및 관계법령을 준수하여야 합니다. 회사는 회원이 상기 제 조항을 위반했을 경우 즉시 계약해지 및 이용제한을 할 수 있고 이로 인한 손해배상을 청구할 수 있습니다.</li>
                                    </ul>
                                </dd>
                            </dl>
                        </dd>

                        <dt>제 5장 개인정보보호</dt>
                        <dd>
                            <dl>
                                <dt>제 17조 (회원의 개인정보보호)</dt>
                                <dd>
                                    회사는 관련법령이 정하는 바에 따라서 회원 등록정보를 포함한 회원의 개인정보를 보호하기 위하여 노력합니다. 회원의 개인정보보호에 관해서는 관련법령 및 회사가 정하는 "개인정보처리방침"에 정한 바에 의하며, 회원이 상시 확인할 수 있도록 홈페이지를 통해 공지하고 있습니다.
                                </dd>
                                <dt>제 18조 (개인정보의 위탁)</dt>
                                <dd>회사는 수집된 개인정보의 처리 및 관리 등의 업무(이하 "업무")를 스스로 수행함을 원칙으로 하나, 필요한 경우 업무의 일부 또는 전부를 회사가 선정한 자에 위탁할 수 있으며, 개인정보 위탁 현황 등 관련 사항은 “개인정보처리방침”에서 확인하실 수 있습니다.</dd>
                            </dl>
                        </dd>

                        <dt>제 6장 기타</dt>
                        <dd>
                            <dl>
                                <dt>제 19조 (서비스 종료)</dt>
                                <dd>
                                    <ul>
                                        <li>①회사는 서비스를 종료하고자 하는 날로부터 30일 이전에 본 약관 제4조 제1항에 규정된 통지방법을 준용하여 회원에게 알려드립니다.</li>
                                        <li>②본 조 제1항에 따른 서비스 종료 통지가 있은 날("통지일")로부터 30일이 경과하면 서비스는 자동 종료되며, 회원은 회사로부터 SK mySUNI 서비스를 제공받지 못합니다.</li>
                                    </ul>
                                </dd>
                                <dt>제 20조 (면책)</dt>
                                <dd>
                                    <ul>
                                        <li>①회사는 회원이 서비스를 이용하여 기대하는 이익을 얻지 못하였거나 서비스 자료에 대한 이용으로 발생하는 손해에 대해서는 책임을 지지 않습니다.</li>
                                        <li>②회사는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.</li>
                                        <li>③회사는 천재지변 등의 불가항력으로 인해 서비스를 제공할 수 없는 경우에는 서비스 제공에 대한 책임을 지지 않습니다.</li>
                                        <li>④회사는 회원 상호간 또는 회원과 제3자 상호간에 서비스를 매개로 발생한 분쟁에 대해서는 개입할 의무가 없으며 회사의 고의 또는 과실이 없는 한 이로 인한 손해를 배상할 책임도 없습니다. </li>
                                        <li>⑤SK mySUNI 서비스는 무료 서비스로 회사는 모든 서비스의 자료 보관 및 전송에 관한 책임이 없으며, 자료의 손실이 있는 경우에도 책임을 지지 않습니다.</li>
                                        <li>⑥ SK mySUNI 서비스 화면에서 링크, 배너 등을 통하여 연결된 회사와 회원 간에 이루어진 거래에 회사는 개입하지 않으며, 고의 또는 과실이 없는 한 해당 거래에 대하여 책임을 지지 않습니다.</li>  
                                    </ul>
                                </dd>
                                <dt>제 21조 (준거법 및 합의관할)</dt>
                                <dd>
                                    <ul>
                                        <li>①본 약관에서 정하지 않은 사항과 본 약관의 해석에 관하여는 대한민국법 및 상관례에 따릅니다.</li>
                                        <li>②SK mySUNI 서비스 및 본 약관과 관련한 제반 분쟁 및 소송은 서울중앙지방법원을 제1심 관할법원으로 합니다.</li>
                                    </ul>
                                </dd>
                            </dl>
                        </dd>
                    </dl>

                    <p><strong>&lt;부칙&gt;</strong><br/> 본 약관은 2023년 12월 18일부터 시행합니다.</p>
                </div> -->
            </div>
            <!-- //2024-03-29 Edit 약관 영역 iframe으로 수정 -->
            <div class="footer">
              <div class="button-box">
                <CButtons class="big gray" :title="'취소'" />
                <CButtons class="big point" :title="'확인'" />
              </div>
            </div>
          </div>
        </div>

        <!-- 개인정보 처리방침 -->
        <div id="modal-15" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container policy" @click.stop><!-- edit 24-08-20 : 약관관련 모달 넓이 800px 지정 클래스 추가 'policy' -->
            <div class="header">
              <strong class="title">개인정보 처리방침</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-15')">닫기</button>
            </div>
            <div class="content">
              <div class="form-wrap narrow no-border" style="margin-bottom: 30px">
                <article>
                  <div class="dual-flex">
                    <!-- <div class="border-wrap"> 24-08-20 사이트 언어별 자동 언어 선택 기능으로 언어 선택 제거
                      <CSelectBox :coptions="[{ val: 'value', txt: '한국어' }]" :title="'언어선택'" :disabled="false" :changed="false" />
                    </div> -->
                    <div class="border-wrap">
                      <CSelectBox :coptions="[{ val: 'value', txt: '2022년 9월 21일 공고' }]" :title="'공고일자'" :disabled="false" :changed="false" />
                    </div>
                  </div>
                </article>
              </div>

              <!-- Edit 2024-02-06 약관 내용 -->
              <div class="policy_wrap">
                <p>'SK이노베이션'(이하 “회사”)은 정보주체의 자유와 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를 준수하여, 적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다. 이에 「개인정보 보호법」 제30조에 따라 정보주체에게 개인정보 처리에 관한 절차 및 기준을 안내하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.</p>

                <dl>
                    <dt>제1조 (처리하는 개인정보 항목)</dt>
                    <dd>
                        <ul>
                            <li>①	회사는 다음의 개인정보 항목을 처리하고 있습니다.
                                <table>
                                    <thead>
                                        <tr>
                                            <th>서비스</th>
                                            <th>수집 목적</th>
                                            <th>수집 항목</th>
                                            <th>보유 및 이용 기간</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowspan="4">mySUNI ID</td>
                                            <td>회원가입 및 관리<br/> : 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별 및 인증, 회원자격 유지 및 관리, 소속 관리, 서비스 및 정보 부정이용 방지, 고충 처리 및 분쟁 조정을 위한 기록 보존</td>
                                            <td rowspan="4">
                                                <ul>
                                                    <li>1) SK구성원<br/> [필수] ID (회사 이메일), 성명, 회사명, 사번, 직위, 직책, 출생년도, 성별, 휴대폰 번호, 국가, 프로필 이미지, 닉네임</li>
                                                    <li>2) 그 외<br/> [필수] 이메일, 성명, 소속기관, 부서, 직책, 휴대폰 번호, 국가, 프로필 이미지, 닉네임</li>
                                                </ul>
                                            </td>
                                            <td rowspan="4">
                                                <ul>
                                                    <li>1) SK 구성원<br/> 해당 구성원의 퇴직 시까지</li>
                                                    <li>2) 그 외<br/> 회원 탈퇴 시까지 또는 콘텐츠 유효기간 만료 및 외부 연동 서비스 종료 시까지</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>서비스 제공<br/> : 콘텐츠/서비스 제공, 맞춤서비스 제공, 본인인증</td>
                                        </tr>
                                        <tr>
                                            <td>관계사 시스템 및 외부 Contents Providers 회사 시스템 연동<br/> : 관계사 및 외부 Contents Provider 회사의 교육 프로그램 활용 및 서비스 제공</td>
                                        </tr>
                                        <tr>
                                            <td>서비스 이용 통계 분석<br/> : 기존 서비스 제공에 더하여 서비스 방문 및 이용기록의 분석, 조직별 관심사 등에 기반한 맞춤형 서비스 제공 등 신규 서비스 요소 발굴 및 기존 서비스 개선을 위한 통계 분석</td>
                                        </tr>
                                        <tr>
                                            <td rowspan="6">mySUNI Learning Management System</td>
                                            <td>교육 서비스 제공<br/> :  개인별 학습 관리 및 추천 서비스 제공, 학습 이수를 위한 시험/과제 평가, 월 또는 년간 학습 상태 확인, 수강신청 관리, 서비스 부정이용 방지, 문의처리 등의 학습 관리, 외부 콘텐츠 Providers의 교육 시스템 및 관계사 교육 시스템을 연동한 교육 서비스를 제공</td>
                                            <td>[필수] 이메일, 성명, 휴대폰번호, 회사명, 부서, 국가, 닉네임, 강의명, 학습상태, 학습종류, 학습시간, 이수상태, 이수일, 시험결과, 과제결과, 획득한 인증 명, 관심분야, 선호학습유형, 플레이리스트</td>
                                            <td>해당 구성원의 퇴직 시까지</td>
                                        </tr>
                                        <tr>
                                            <td>학습자 데이터 분석 및 추천<br/> : 학습 콘텐츠 품질 향상과 개인별 맞춤 추천을 위하여 학습 및 서비스 사용 이력에 대한 개인정보를 처리합니다.</td>
                                            <td>[필수] 회사명, 부서, 국가, 닉네임, 강의명, 학습상태, 학습종류, 학습시간, 이수상태, 이수일, 시험결과, 과제결과, 획득한 인증 명, 관심분야, 선호학습유형, 플레이리스트</td>
                                            <td>해당 구성원의 퇴직 시까지</td>
                                        </tr>
                                        <tr>
                                            <td>학습자 커리어 관리<br/> : 직무, 직책, 학습현황, 본인 소유 자격증, 학력, 경력을 기반으로 보유 Skill 추출, 직무별 Skill 적합도 탐색, 필요 Skill을 위한 학습 Contents 추천</td>
                                            <td>[필수] mySUNI 교육 학습현황, 자격증(자격증명, 발급기관, 등급, 취득일), 학력(학교명, 졸업일, 전공), 경력(경력기간, 직무, 소속부서)</td>
                                            <td>해당 구성원의 퇴직 시까지</td>
                                        </tr>
                                        <tr>
                                            <td>자격 인증서 발급<br/> : mySUNI의 교육 과정에 대한 자격 인증서 발급을 위한 본인 확인 정보와 개인이 획득한 인증 항목에 대한 개인정보를 처리합니다.</td>
                                            <td>[필수] 성명, 휴대폰번호, 회사명, 강의명, 이수일, 이수상태, 시험결과, 과제결과, 인증명, 인증 취득일, 인증범위</td>
                                            <td>해당 구성원의 퇴직 후 5년까지</td>
                                        </tr>
                                        <tr>
                                            <td>법정 의무교육 증빙<br/> : 관계 법령에 따라 교육 참석 증빙을 위한 개인정보를 처리합니다.</td>
                                            <td>[필수] 이메일, 성명, 회사명, 강의명, 이수일, 이수상태</td>
                                            <td>3년</td>
                                        </tr>
                                        <tr>
                                            <td>이벤트 상품 발송<br/> : 각 과정별 제공하는 이벤트 참여를 통해 당첨된 상품 발송</td>
                                            <td>- 모바일 기프티콘인 경우<br/> [필수] 휴대전화번호<br/> - 실물 상품인 경우<br/> [필수] 휴대전화번호, 수령인 성명, 수령지 주소<br/> ※ 이벤트 상품에 따라 상기 항목 외의 개인정보를 정보주체의 동의에 따라 수집할 수 있습니다.</td>
                                            <td>상품 발송 완료 시까지</td>
                                        </tr>
                                        <tr>
                                            <td>이천포럼, 울산포럼 홈페이지 (SK구성원)</td>
                                            <td>회원가입 및 관리<br/> 	회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별 및 인증, 회원자격 유지 및 관리, 소속 관리, 서비스 및 정보 부정이용 방지, 고충 처리 및 분쟁 조정을 위한 기록 보존 등을 위해 개인정보를 처리합니다.</td>
                                            <td>[필수] 이메일, 성명, 휴대폰번호, 회사명<br/> [선택] 닉네임, 관심주제</td>
                                            <td>해당 구성원의 퇴직 시까지</td>
                                        </tr>
                                        <tr>
                                            <td>이천포럼, 울산포럼 홈페이지 (초청자)</td>
                                            <td>회원가입 및 관리<br/> 	회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별 및 인증, 회원자격 유지 및 관리, 소속 관리, 서비스 및 정보 부정이용 방지, 고충 처리 및 분쟁 조정을 위한 기록 보존 등을 위해 개인정보를 처리합니다.</td>
                                            <td>[필수] 이메일, 성명, 휴대폰번호, 회사명<br/> [선택] 닉네임, 관심주제, 소속</td>
                                            <td>회원 탈퇴 시까지</td>
                                        </tr>
                                        <tr>
                                            <td>문의하기, 고객 지원</td>
                                            <td>당사 서비스 및 제품 기능 관련 문의사항 확인, 당사 제품 및 서비스 관련 불만사항 확인, 문의 및 민원 처리를 위한 연락 및 처리결과 통보 등을 위해 개인정보를 처리합니다.</td>
                                            <td>[필수] 성명, 회사명, 국가, 연락처, 이메일, 비밀번호</td>
                                            <td>3년</td>
                                        </tr>
                                        <tr>
                                            <td>비회원 대상 서비스 제공</td>
                                            <td>비회원 대상 문의 접수 및 답변 통지 등을 위해 개인정보를 처리합니다.</td>
                                            <td>[필수] 성명, 이메일, 연락처, 회사명, 국가, 임시비밀번호</td>
                                            <td>3년</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                            <li>②	다음의 사유에 해당하는 경우에는 해당 기간 종료 시까지 처리합니다.
                                <table>
                                    <thead>
                                        <tr>
                                            <th>근거</th>
                                            <th>내용</th>
                                            <th>기간</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>관계 법령</td>
                                            <td>위반시 수사·조사 등 진행</td>
                                            <td>수사·조사 종료 시까지</td>
                                        </tr>
                                        <tr>
                                            <td rowspan="4">전자상거래법</td>
                                            <td>표시·광고에 관한 기록</td>
                                            <td>6개월</td>
                                        </tr>
                                        <tr>
                                            <td>계약 또는 청약철회, 대금결제, 재화 등의 공급기록</td>
                                            <td>3년</td>
                                        </tr>
                                        <tr>
                                            <td>소비자 불만 또는 분쟁처리에 관한 기록</td>
                                            <td>3년</td>
                                        </tr>
                                        <tr>
                                            <td>컴퓨터통신, 인터넷의 로그기록자료, 접속지 추적자료</td>
                                            <td>3개월</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                        </ul>
                    </dd>

                    <dt>제2조 (개인정보 처리의 위탁)</dt>
                    <dd>
                        <ul>
                            <li>①	회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다. 단, 재위탁사의 경우 계약기간 및 범위 변경에 따라 아래 별도 페이지를 통해 고지를 하고 있습니다.
                                <div class="load_wrap active">
                                    <button class="common-buttons min dark" type="button" @click="openModal('modal-15-1')">개인정보 처리 재위탁사 현황</button>
                                </div>
                            </li>
                            <li>②	회사는 위탁 계약 체결 시 「개인정보 보호법」 제26조에 따라 위탁 업무 수행 목적 외 개인정보 처리 금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등 책임에 관한 사항을 계약서 등의 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.</li>
                            <li>③	위탁 업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.</li>
                        </ul>
                    </dd>

                    <dt>제3조 (개인정보의 제3자 제공)</dt>
                    <dd>
                        <ul>
                            <li>①	회사는 정보주체의 개인정보를 제1조(처리하는 개인정보 항목)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공하고 그 이외에는 정보주체의 개인정보를 제3자에게 제공하지 않습니다.</li>
                            <li>②	회사는 원활한 서비스 제공을 위해 다음의 경우 정보주체의 동의를 얻어 필요 최소한의 범위로만 제공합니다.
                                <div class="load_wrap active">
                                    <button class="common-buttons min dark" onclick="load_policy(event, './개인정보제공현황.html');">개인정보 제공 현황</button>
                                    <!-- 개인정보 제공 현황 -->
                                    <div class="load_policy">
                                        <div class="policy_wrap">
                                            <p><strong>제3조 개인정보의 제3자 제공</strong>에서 고지한 개인정보 제공에 대하여, 제공받는 주체 및 목적, 제공 항목, 보유 및 이용기간에 대해 아래와 같이 안내 드립니다.</p>
                                    
                                            <div>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>제공받는 자</th>
                                                            <th>제공받는 자의 이용 목적</th>
                                                            <th>제공 항목</th>
                                                            <th>보유 및 이용 기간</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>SK 그룹 계열회사 (자세한 내역은 http://sk.co.kr 에서 확인 가능)</td>
                                                            <td>구성원의 교육 신청, 이수 현황 관리</td>
                                                            <td>교육 이수 현황 등</td>
                                                            <td>해당 구성원 퇴직 시까지</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Linked In</td>
                                                            <td>구성원 SSO접속, 학습현황관리, 과정 이수 처리, 안내 메일 발송</td>
                                                            <td>소속, 성명, 이메일</td>
                                                            <td>해당 구성원 퇴직시까지</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Coursera</td>
                                                            <td>구성원 SSO접속, 학습현황관리, 과정 이수 처리, 안내 메일 발송</td>
                                                            <td>소속, 성명, 이메일</td>
                                                            <td>해당 구성원 퇴직시까지</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Elice</td>
                                                            <td>구성원 SSO접속, 학습현황관리, 과정 이수 처리, 안내 메일 발송</td>
                                                            <td>소속, 성명, 이메일</td>
                                                            <td>해당 구성원 퇴직시까지</td>
                                                        </tr>
                                                        <tr>
                                                            <td>SK M&Service</td>
                                                            <td>구성원 SSO접속, 학습현황관리, 과정 이수 처리, 안내 메일 발송</td>
                                                            <td>소속, 성명, 이메일, 휴대전화번호</td>
                                                            <td>해당 구성원 퇴직시까지</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Panopto</td>
                                                            <td>구성원 SSO접속, 학습현황관리, 과정 이수 처리, 안내 메일 발송</td>
                                                            <td>소속, 성명, 이메일</td>
                                                            <td>해당 구성원 퇴직시까지</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Globe Smart(APERIAN Global)</td>
                                                            <td>구성원 SSO접속, 학습현황관리, 과정 이수 처리, 안내 메일 발송</td>
                                                            <td>소속, 성명, 이메일</td>
                                                            <td>해당 구성원 퇴직시까지</td>
                                                        </tr>
                                                        <tr>
                                                            <td>블룸컴퍼니</td>
                                                            <td>구성원 SSO접속, 학습현황관리, 과정 이수 처리, 안내 메일 발송</td>
                                                            <td>소속, 성명, 이메일</td>
                                                            <td>해당 구성원 퇴직시까지</td>
                                                        </tr>
                                                        <tr>
                                                            <td>IDEO</td>
                                                            <td>구성원 SSO접속, 학습현황관리, 과정 이수 처리, 안내 메일 발송</td>
                                                            <td>소속, 성명, 이메일</td>
                                                            <td>해당 구성원 퇴직시까지</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Google</td>
                                                            <td>구성원 SSO접속, 학습현황관리, 과정 이수 처리, 안내 메일 발송</td>
                                                            <td>소속, 성명, 이메일</td>
                                                            <td>해당 구성원 퇴직시까지</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Microsoft</td>
                                                            <td>구성원 SSO접속, 학습현황관리, 과정 이수 처리, 안내 메일 발송</td>
                                                            <td>소속, 성명, 이메일, 휴대전화번호</td>
                                                            <td>해당 구성원 퇴직시까지</td>
                                                        </tr>
                                                        <tr>
                                                            <td>BTS</td>
                                                            <td>구성원 SSO접속, 학습현황관리, 과정 이수 처리, 안내 메일 발송</td>
                                                            <td>소속, 성명, 이메일</td>
                                                            <td>해당 구성원 퇴직시까지</td>
                                                        </tr>
                                                        <tr>
                                                            <td>대학내일</td>
                                                            <td>구성원 SSO접속, 학습현황관리, 과정 이수 처리, 안내 메일 발송</td>
                                                            <td>소속, 성명, 이메일, 휴대전화번호</td>
                                                            <td>해당 구성원 퇴직시까지</td>
                                                        </tr>
                                                        <tr>
                                                            <td>페어플레이</td>
                                                            <td>구성원 SSO접속, 학습현황관리, 과정 이수 처리, 안내 메일 발송</td>
                                                            <td>소속, 성명, 이메일, 휴대전화번호</td>
                                                            <td>해당 구성원 퇴직시까지</td>
                                                        </tr>
                                                        <tr>
                                                            <td>더플레이컴퍼니</td>
                                                            <td>구성원 SSO접속, 학습현황관리, 과정 이수 처리, 안내 메일 발송</td>
                                                            <td>소속, 성명, 이메일</td>
                                                            <td>해당 구성원 퇴직시까지</td>
                                                        </tr>
                                                        <tr>
                                                            <td>멀티캠퍼스</td>
                                                            <td>구성원 SSO접속, 학습현황관리, 과정 이수 처리, 안내 메일 발송</td>
                                                            <td>소속, 성명, 이메일, 휴대전화번호</td>
                                                            <td>해당 구성원 퇴직시까지</td>
                                                        </tr>
                                                        <tr>
                                                            <td>유니티테크놀로지스코리아</td>
                                                            <td>구성원 SSO접속, 학습현황관리, 과정 이수 처리, 안내 메일 발송</td>
                                                            <td>소속, 성명, 이메일</td>
                                                            <td>해당 구성원 퇴직시까지</td>
                                                        </tr>
                                                        <tr>
                                                            <td>MYSC</td>
                                                            <td>과정 과제 채점</td>
                                                            <td>성명, 이메일</td>
                                                            <td>해당 구성원 퇴직시까지</td>
                                                        </tr>
                                                        <tr>
                                                            <td>씨드 앤드 파트너스</td>
                                                            <td>과정 과제 채점</td>
                                                            <td>성명, 이메일</td>
                                                            <td>해당 구성원 퇴직시까지</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Amazon Web Service</td>
                                                            <td>학습현황관리, 과정 이수 처리, 안내 메일 발송</td>
                                                            <td>소속, 성명, 이메일</td>
                                                            <td>해당 구성원 퇴직시까지</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                    
                                        </div>
                                    </div>
                                    <!-- //개인정보 제공 현황 -->
                                </div>
                            </li>
                        </ul>
                    </dd>

                    <dt>제4조 (정보주체와 법정대리인의 권리∙의무 및 행사방법)</dt>
                    <dd>
                        <ul>
                            <li>①	정보주체는 회사에 대해 언제든지 개인정보 열람, 정정·삭제, 처리정지, 동의 철회, 및 자동화된 결정을 거부∙설명을 요구할 수 있는 등의 권리를 행사할 수 있습니다.<br/> ※ 만 14세 미만 아동에 관한 개인정보의 열람등요구는 법정대리인이 직접 해야 하며, 만 14세 이상의 미성년자인 정보주체는 정보주체의 개인정보에 관하여 미성년자 본인이 권리를 행사하거나 법정대리인을 통하여 권리를 행사할 수도 있습니다.
                                <p><button class="common-buttons min dark">개인정보 처리요구서</button></p>
                            </li>
                            <li>②	권리 행사는 회사에 대해 「개인정보 보호법」 시행령 제41조에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며, 회사는 이에 대해 지체없이 조치하겠습니다.</li>
                            <li>③	권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 “개인정보 처리 방법에 관한 고시”에 따른 위임장(별지 제11호 서식)을 제출하셔야 합니다.
                                <p><button class="common-buttons min dark">위임장</button></p>
                            </li>
                            <li>④	개인정보 열람, 처리정지 및 동의철회 요구는 「개인정보 보호법」 제35조제4항, 제37조제2항,제37조제3항에 의하여 정보주체의 권리가 제한될 수 있습니다.</li>
                            <li>⑤	개인정보의 정정·삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다. </li>
                            <li>⑥	회사는 정보주체의 권리에 따른 열람, 정정·삭제, 처리정지, 동의 철회 및 자동화된 결정을 거부∙설명 요구 시 열람등요구를 한 자가 본인이거나 정당한 대리인인지 확인합니다.</li>
                        </ul>
                    </dd>

                    <dt>제5조 (개인정보의 파기)</dt>
                    <dd>
                        <ul>
                            <li>①	회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.</li>
                            <li>②	정보주체로부터 동의 받은 개인정보 보유 기간이 경과하거나 처리 목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 제1조(처리하는 개인정보 항목)에서 정하는 기간동안 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.</li>
                            <li>③	개인정보 파기의 절차 및 방법은 다음과 같습니다.
                                <ul>
                                    <li>1)	파기 절차<br/> 정보주체가 입력한 정보는 보유 기간이 경과했거나 처리 목적이 달성된 후 내부 방침 및 관련 법령에 따라 파기합니다.</li>
                                    <li>2)	파기 방법<br/> 회사는 전자적 파일 형태로 기록∙저장된 개인정보는 기록을 재생할 수 없도록 파기하며, 종이 문서에 기록∙저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.</li>
                                </ul>
                            </li>
                        </ul>
                    </dd>

                    <dt>제6조 (개인정보의 안전성 확보조치)</dt>
                    <dd>
                        <p>회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
                        <ul>
                            <li>1)	관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육, 수탁사 점검 등</li>
                            <li>2)	기술적 조치: 개인정보처리 시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치</li>
                            <li>3)	물리적 조치: 전산실, 자료보관실 등의 접근통제</li>
                        </ul>
                    </dd>

                    <dt>제7조 (개인정보 보호책임자)</dt>
                    <dd>
                        <ul>
                            <li>①	회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만 처리 및 피해 구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                                <table>
                                    <thead>
                                        <tr>
                                            <th>회사</th>
                                            <th>구분</th>
                                            <th>개인(위치)정보<br/>보호책임자</th>
                                            <th>개인정보<br/> 보호 담당자</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowspan="4">SK이노베이션</td>
                                            <td>소속</td>
                                            <td>정보보호담당</td>
                                            <td>LMS</td>
                                        </tr>
                                        <tr>
                                            <td>성명/직급</td>
                                            <td>고흥태/담당</td>
                                            <td>최윤홍/RF</td>
                                        </tr>
                                        <tr>
                                            <td>연락처</td>
                                            <td>02-6323-9002</td>
                                            <td>02-6323-9002</td>
                                        </tr>
                                        <tr>
                                            <td>이메일</td>
                                            <td>museloa@sk.com</td>
                                            <td>museloa@sk.com</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                            <li>②	정보주체는 회사의 서비스(또는 사업)를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 위의 연락처로 문의하실 수 있습니다. 회사는 정보주체의 문의에 대해 지체없이 답변 및 처리해드릴 것입니다.</li>
                            <li>③	정보주체는 「개인정보 보호법」 제35조에 따른 개인정보의 열람 청구를 ①항의 개인정보보호 담당자에 할 수 있습니다. 회사는 정보주체의 개인정보 열람 청구가 신속하게 처리되도록 노력하겠습니다.</li>
                        </ul>
                    </dd>
                    
                    <dt>제8조 (정보주체의 권익침해 구제방법) </dt>
                    <dd>
                        <p>정보주체는 개인정보 침해로 인한 구제를 받기 위하여 개인정보 분쟁 조정 위원회, 한국인터넷진흥원 개인정보 침해 신고센터 등에 분쟁 해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보 침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.</p>
                        <ul>
                            <li>1)	개인정보 분쟁 조정 위원회: (국번없이) 1833-6972 (www.kopico.go.kr)</li>
                            <li>2)	개인정보 침해 신고센터: (국번없이) 118 (privacy.kisa.or.kr)</li>
                            <li>3)	대검찰청 사이버수사과: (국번없이) 1301 (www.spo.go.kr)</li>
                            <li>4)	경찰청 사이버범죄 신고시스템: (국번없이) 182 (ecrm.police.go.kr/minwon/main)</li>
                        </ul>
                    </dd>

                    <dt>제9조 (개인정보를 자동으로 수집하는 장치의 설치∙운영 및 거부)</dt>
                    <dd>
                        <ul>
                            <li>①	회사는 정보주체에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다.</li>
                            <li>②	쿠키는 웹 사이트를 운영하는데 이용되는 서버가 정보주체의 컴퓨터 브라우저에게 보내는 소량의 정보이며 정보주체의 컴퓨터 내 하드디스크에 저장되기도 합니다.
                                <ul>
                                    <li>1)	쿠키의 사용목적: 정보주체가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용 형태, 인기 검색어, 보안 접속 여부 등을 파악하여 정보주체에게 최적화된 정보 제공을 위해 사용됩니다.</li>
                                    <li>2)	쿠키의 설치∙운영 및 거부 방법
                                        <ul>
                                            <li>가. 웹 브라우저
                                                <ul>
                                                    <li>- Internet Explorer: 메뉴 → 도구 → 인터넷 옵션 → 일반 → 검색 기록 → '삭제' 및 '설정'</li>
                                                    <li>- Microsoft Edge: 설정 및 기타 → 개인정보, 검색 및 서비스 → 검색 데이터 지우기 → 지금 검색 데이터 지우기(지울 항목 선택) → 시간 범위 → '쿠키 및 기타 사이트 데이터' → 지금 지우기</li>
                                                    <li>- Chrome: 메뉴 → 방문기록 → 인터넷 사용 기록 삭제 → '쿠키 및 기타 사이트 데이터' 체크</li>
                                                    <li>- Safari: 환경 설정 → '크로스 사이트 추적 방지' 및 '모든 쿠키 차단'</li>
                                                    <li>- 이 외에도 Firefox, Opera 등 주요 인터넷 웹 브라우저들도 쿠키 삭제 기능을 제공하고 있습니다.</li>
                                                </ul>
                                            </li>
                                            <li>나. 모바일
                                                <ul>
                                                    <li>- Android OS: 홈 → 설정 → Google → 광고 → 광고 ID 재설정 또는 광고 ID 삭제</li>
                                                    <li>- iOS: 홈 → 설정 → 개인정보 보호 및 보안 → 추적 → 앱이 추적을 요청하도록 허용 → OFF</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>3)	쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.</li>
                                </ul>
                            </li>
                        </ul>
                    </dd>

                    <dt>제10조 (민감정보 공개 가능성 및 비공개 선택 방법)</dt>
                    <dd>
                        <ul>
                            <li>①	회사는 재화 또는 서비스를 제공하는 과정에서 아래의 정보가 공개될 수 있으며, 정보주체는 아래 정보 중 민감하게 생각하는 정보가 존재하여 사생활 침해의 위험성이 있다고 판단하는 경우 제7조의 개인정보보호 책임자에 문의하여 해당 정보의 비공개를 선택할 수 있습니다.
                                <table>
                                    <thead>
                                        <tr>
                                            <th>서비스</th>
                                            <th>처리 목적</th>
                                            <th>공개될 가능성이 있는 항목</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>MySUNI</td>
                                            <td>MySUNI 교육 서비스 가입 및 이용</td>
                                            <td>커뮤니티 댓글 작성 시 설정한 닉네임, 소속회사</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                            <li>②	단, 정보주체와의 계약 체결 및 서비스 제공을 위해 필요한 경우 민감정보의 비공개 선택이 불가할 수 있습니다. </li>
                        </ul>
                    </dd>

                    <dt>제11조 (미이용자의 개인정보 파기 등에 관한 조치)</dt>
                    <dd>
                        <p>개인정보를 파기하는 경우</p>
                        <ul>
                            <li>①	회사는 1년간 서비스를 이용하지 않은 정보주체의 정보를 파기하고 있습니다. 다만, 다른 법령에서 정한 보존기간이 경과할 때까지 다른 정보주체의 개인정보와 분리하여 별도로 저장·관리할 수 있습니다.</li>
                            <li>②	회사는 개인정보의 파기 30일 전까지 개인정보가 파기되는 사실, 기간 만료일 및 파기되는 개인정보의 항목을 이메일, 문자 등 정보주체에게 통지 가능한 방법으로 알리고 있습니다.<br/> 개인정보의 파기를 원하지 않으시는 경우, 기간 만료 전 서비스 로그인을 하시면 됩니다.</li>
                        </ul>
                    </dd>
                    <dd>
                        <p>개인정보를 분리 보관하는 경우</p>
                        <ul>
                            <li>① 회사는 1년간 서비스를 이용하지 않은 정보주체는 휴면계정으로 전환하고, 개인정보를 별도로 분리하여 보관합니다. 분리 보관된 개인정보는 1년간 보관 후 지체없이 파기합니다.</li>
                            <li>② 회사는 휴면전환 30일 전까지 휴면예정 회원에게 별도 분리 보관되는 사실 및 휴면 예정일, 별도 분리 보관하는 개인정보 항목을 이메일, 문자 등 정보주체에게 통지 가능한 방법으로 알리고 있습니다.</li>
                            <li>③ 휴면계정으로 전환을 원하지 않으시는 경우, 휴면계정 전환 전 서비스 로그인을 하시면 됩니다. 또한, 휴면계정으로 전환되었더라도 로그인을 하는 경우 정보주체의 동의에 따라 휴면계정을 복원하여 정상적인 서비스를 이용할 수 있습니다.</li>
                        </ul>
                    </dd>

                    <dt>제12조 (개인정보 처리방침의 변경)</dt>
                    <dd>①	이 개인정보 처리방침은 2023. 12. 18부터 적용됩니다 </dd>
                </dl>

            </div>
            <!-- //Edit 2024-02-06 약관 내용 -->

            </div>
            <div class="footer">
              <div class="button-box">
                <CButtons class="big gray" :title="'취소'" />
                <CButtons class="big point" :title="'확인'" />
              </div>
            </div>
          </div>
        </div>

        <!-- Add 2024-06-12 playground 추가 -->
        <!-- Add 2024 개인정보 처리 재위탁사 현황 -->
        <div id="modal-15-1" class="modal-overlay" @click="closeModalOverlay($event)">
            <div class="modal-container" @click.stop>
                <div class="header">
                <strong class="title">개인정보 처리 재위탁사 현황</strong>
                <button type="button" class="button" @click.prevent="closeModal('modal-15-1')">닫기</button>
                </div>
                <div class="content">
                    <div class="policy_wrap">
                        <p><strong>제2조 개인정보 처리의 위탁</strong>위탁에서 고지한 위탁사가 개인정보 처리 업무를 재위탁한 경우, 아래와 같이 재위탁사를 안내 드립니다.</p>
                
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>서비스 명</th>
                                        <th>위탁받는 자(수탁자)</th>
                                        <th>위탁하는 업무의 내용</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td rowspan="2">mySUNI ID</td>
                                        <td>SK 플래닛</td>
                                        <td>mySUNI ID 사이트 운영 및 개발 위탁</td>
                                    </tr>
                                    <tr>
                                        <td>SK M&Service</td>
                                        <td>서비스 운영을 위한 메일 안내 및 교육 운영/관리, 결과 Data정리, HelpDesk 운영</td>
                                    </tr>
                                    <tr>
                                        <td rowspan="16">mySUNI Learning Management System</td>
                                        <td>SK 주식회사</td>
                                        <td>mySUNI 사이트 운영 및 개발 위탁</td>
                                    </tr>
                                    <tr>
                                        <td>SK M&Service</td>
                                        <td>서비스 운영을 위한 메일 안내 및 교육 운영/관리, 결과 Data정리, HelpDesk 운영</td>
                                    </tr>
                                    <tr>
                                        <td>NHR Communications</td>
                                        <td>미래반도체 우수학습자 행사 운영</td>
                                    </tr>
                                    <tr>
                                        <td>페어플레이</td>
                                        <td>디지털인사이트, 블록놀이 커뮤니티 운영</td>
                                    </tr>
                                    <tr>
                                        <td>45도컴퍼니</td>
                                        <td>독서 포럼 운영</td>
                                    </tr>
                                    <tr>
                                        <td>고려아카데미</td>
                                        <td>AI manufacturing 전문가 Smart SCM 과정 운영</td>
                                    </tr>
                                    <tr>
                                        <td>더플레이컴퍼니</td>
                                        <td>Logical Thinking 게임 서버 운영 및 유지보수</td>
                                    </tr>
                                    <tr>
                                        <td>레이즈지엘에스</td>
                                        <td>반도체 리더십 세미나 과정 운영</td>
                                    </tr>
                                    <tr>
                                        <td>루트컨설팅</td>
                                        <td>EQ과정 개발 진단 운영</td>
                                    </tr>
                                    <tr>
                                        <td>블룸컴퍼니</td>
                                        <td>긍정 습관 만들기 온라인 과정 운영</td>
                                    </tr>
                                    <tr>
                                        <td>Elice</td>
                                        <td>Guide Project 기초 과정 운영</td>
                                    </tr>
                                    <tr>
                                        <td>채오름</td>
                                        <td>1 on 1 워크샵 운영 및 LCP 과정 운영</td>
                                    </tr>
                                    <tr>
                                        <td>Code it</td>
                                        <td>온라인 과정 제휴</td>
                                    </tr>
                                    <tr>
                                        <td>BTS</td>
                                        <td>고객 중심 Design Thinking Online Practice 과정 운영</td>
                                    </tr>
                                    <tr>
                                        <td>유레카 스페이스</td>
                                        <td>ILP과정 Leadership Potential 진단 운영</td>
                                    </tr>
                                    <tr>
                                        <td>애자일소다</td>
                                        <td>구성원의 학습 현황 분석 및 서비스 개선을 위한 과정이수 현황 및 학습데이터 분석</td>
                                    </tr>
                                    <tr>
                                        <td>이천포럼, 울산포럼</td>
                                        <td>SK M&Service</td>
                                        <td>mySUNI 사이트 운영 및 개발 위탁, 서비스 운영을 위한 메일 안내 및 교육 운영/관리, 결과 Data정리, HelpDesk 운영</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                
                    </div>
                </div>
            </div>
        </div>
        <!-- //Add 2024 개인정보 처리 재위탁사 현황 -->
        <!-- Add 2024-06-12 playground 추가 -->
        
        <!-- E-mail 미수신 안내 -->
        <div id="modal-16" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">E-mail 미수신 안내</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-16')">닫기</button>
            </div>
            <div class="content">
              <p class="paragraph">
                인증번호 E-mail이 정상 발송 되었으나, 수신함에서 확인이 되지 않는 경우 아래와 같은 가능성이 있습니다. <br />
                <br />

                1. E-mail 주소 오류 <br />
                메일 주소 오타의 경우 "com"과 "net", "co.kr"등 뒷부분을 잘못 붙이는 경우와 숫자와 영문자를 잘못 적용하는 경우가 많습니다. <br />
                - 해결방법: 이메일 도메인 확인 후 재발송 <br />
                <br />

                2. 스팸 편지함, 휴지통, 광고성 메일로 분류 <br />
                사용하시는 이메일 서비스에서 스팸 메일로 분류하여, 스팸 편지함이나 휴지통으로 이동되었을 수 있습니다. <br />
                - 해결방법: 스팸메일 또는 휴지통 확인 <br />
                <br />

                3. 차단 또는 별도 관리 메일록 분류 <br />
                이메일 주소가 차단된 경우 해당 이메일 서비스의 설정을 확인하세요. <br />
                - 해결방법: 사용하고 계신 이메일 서비스의 설정 확인 <br />
                <br />

                4. 다른 계정으로 전달됨 <br />
                IMAP 계정을 변경하여 다른 계정으로 전달되었을 수 있습니다. <br />
                - 해결방법: 설정된 다른 계정으로 확인 <br />
                <br />

                5. 네트 워크 오류 <br />
                수신 또는 발신 측 서버의 일시적인 장애로 인하여 메일 수신이 지연된 경우 입니다. <br />
                - 해결방법: 잠시 후 다시 메일 발송 <br />
                <br />

                6. E-mail 공간이 가득참 <br />
                사용하고 계신 이메일 서비스의 수신 용량이 가득 찬 경우입니다. <br />
                - 해결방법: 저장공간 확인 <br />
                <br />

                위에 대한 부분 외 계속적으로 E-mail 발송이 되지 않으시는 경우 Help Desk로 문의하시기 바랍니다.
              </p>
            </div>
            <div class="footer">
              <div class="button-box">
                <CButtons class="big gray" :title="'취소'" />
                <CButtons class="big point" :title="'확인'" />
              </div>
            </div>
          </div>
        </div>

        <!-- SMS 미수신 안내 -->
        <div id="modal-17" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">SMS 미수신 안내</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-17')">닫기</button>
            </div>
            <div class="content">
              <p class="paragraph">
                인증번호 SMS가 정상 발송 되었으나, 수신함에서 확인이 되지 않는 경우 아래와 같은 가능성이 있습니다. <br />
                <br />

                1. 휴대폰 번호 오입력(또는 국제전화번호 코드 오선택) <br />
                가장 흔한 오류로 사용자가 받을 전화번호를 오입력한 경우 입니다. <br />
                - 해결방법: 휴대폰 번호와 국제전화번호 코드 확인 <br />
                <br />

                2. 기본 제공 문자 앱 외 다른 앱 사용 <br />
                - 해결방법: 메시지을 기본 메시지 앱으로 변경 <br />
                <br />

                3. 절전 모드 또는 비행 모드 사용 <br />
                기본 제공 문재 앱이 아닌 다른 앱은 절전 모드 시 미사용 상태로 전환됩니다. 비행 모드 설정 시 통신이 불가 하므로 반드시 해제해야합니다. <br />
                - 해결방법: 절전 모드 및 비행 모드 해제 <br />
                <br />

                4. 차단 설정 <br />
                - 해결방법: 문자 메시지 앱의 설정에서 차단설정이 되어 있는지 확인하세요. <br />
                <br />

                5. 통신사의 부가서비스로 인한 수신불가 <br />
                - 통신사의 부가서비스에서 ‘정보제공사업자번호 차단‘ 여부, ‘스팸차단’ 여부, ‘국제전화 수신차단 서비스‘ 여부 등을 확인하세요. <br />
                <br />

                6. 네트 워크 오류 <br />
                수신 또는 발신 측 서버의 일시적인 장애로 인하여 SMS 발송이 지연된 경우 입니다. <br />
                - 해결방법: 잠시 후 다시 메일 발송 <br />
                <br />

                위에 대한 부분 외에도 계속적으로 SMS수신이 되지 않으시는 경우 Help Desk로 문의하시기 바랍니다.
              </p>
            </div>
            <div class="footer">
              <div class="button-box">
                <CButtons class="big gray" :title="'취소'" />
                <CButtons class="big point" :title="'확인'" />
              </div>
            </div>
          </div>
        </div>

        <!-- 인증번호 재발송 (E-mail) -->
        <div id="modal-18" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">인증번호 재발송</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-18')">닫기</button>
            </div>
            <div class="content">
              <p class="paragraph">
                인증번호를 재발송 합니다.<br />
                계속하여 E-mail 수신이 되지 않으시는 경우 다음 안내를 참고하시기 바랍니다.
              </p>
              <br />
              <br />
              <a href="" class="link">인증 E-mail이 오지 않습니다.</a>
            </div>
            <div class="footer">
              <div class="button-box">
                <CButtons class="big gray" :title="'취소'" />
                <CButtons class="big point" :title="'확인'" />
              </div>
            </div>
          </div>
        </div>

        <!-- 인증번호 재발송 (SMS) -->
        <div id="modal-19" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">인증번호 재발송</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-19')">닫기</button>
            </div>
            <div class="content">
              <p class="paragraph">
                인증번호를 재발송 합니다.<br />
                계속하여 SMS 수신이 되지 않으시는 경우 다음 안내를 참고하시기 바랍니다.
              </p>
              <br />
              <br />
              <a href="" class="link">인증번호가 오지 않습니다.</a>
            </div>
            <div class="footer">
              <div class="button-box">
                <CButtons class="big gray" :title="'취소'" />
                <CButtons class="big point" :title="'확인'" />
              </div>
            </div>
          </div>
        </div>

        <!--2024-02-22 E-mail ID & 휴대폰 번호} 값으로 일치하는 회원 없을 경우 인증관련 모달추가-->
        <!-- {E-mail ID & 휴대폰 번호} 값으로 일치하는 회원 없을 경우-->
        <div id="modal-20" class="modal-overlay" @click="closeModalOverlay($event)">
          <div class="modal-container" @click.stop>
            <div class="header">
              <strong class="title">알림</strong>
              <button type="button" class="button" @click.prevent="closeModal('modal-20')">닫기</button>
            </div>
            <div class="content">
              <p class="paragraph">
                일치하는 회원 정보를 찾을 수 없습니다. <br />
                입력하신 E-mail ID와 휴대폰 번호를 확인해 주세요.
              </p>
            </div>
            <div class="footer">
              <div class="button-box">
                <CButtons class="big point" :title="'확인'" @click.prevent="closeModal('modal-20')" />
              </div>
            </div>
          </div>
        </div>
        <!--//2024-02-22 E-mail ID & 휴대폰 번호} 값으로 일치하는 회원 없을 경우 인증관련 모달추가-->
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
    color: #fff;
    border: none;
    border-radius: 4px;
    background: #ff664d;
  }
  > strong {
    color: #333;
    margin-right: 20px;
  }
}
</style>
