<script setup>
function onToggleTooltip(event) {
  event.currentTarget.classList.toggle("active");
}
function onCloseTooltip(event) {
  event.currentTarget.parentNode.previousSibling.classList.toggle("active");
}
/*<!--2024-02-22 E-mail ID & 휴대폰 번호} 값으로 일치하는 회원 없을 경우 인증관련 모달추가-->*/
function openModal(id) {
  document.getElementById(id).classList.add("active");
}
function closeModal(id) {
  document.getElementById(id).classList.remove("active");
}
function closeModalOverlay(e) {
  e.target.classList.remove("active");
}
/*<!--//2024-02-22 E-mail ID & 휴대폰 번호} 값으로 일치하는 회원 없을 경우 인증관련 모달추가-->*/
</script>

<template>
  <div class="page-layout">
    <div class="title-box">
      <h2 class="title">mySUNI 회원가입</h2>
      <p class="paragraph">서비스 이용에 필요한 인증 및 정보를 입력하여 주세요.</p>
    </div>

    <!-- 2단계 케이스 -->
    <CSteps :index="0" :title="['약관동의', '서비스정보']" />
    <CSteps :index="1" :title="['약관동의', '서비스정보']" />

    <!-- 3단계 케이스 -->
    <CSteps :index="0" :title="['약관동의', '계정정보', '서비스정보']" />
    <CSteps :index="1" :title="['약관동의', '계정정보', '서비스정보']" />
    <CSteps :index="2" :title="['약관동의', '계정정보', '서비스정보']" />

    <div class="form-wrap narrow">
      <form>
        <!-- 비밀번호 입력 -->
        <article>
          <p class="paragraph mb10">마지막으로 비밀번호를 변경한 지 3개월이 지났습니다.<br/> 소중한 개인정보 보호를 위해 비밀번호를 새로 설정해 주세요.</p>
          <div class="border-wrap">
            <strong class="title">비밀번호</strong>
            <CInputs :id="'password'" :type="'password'" :placeholder="'비밀번호를 입력하세요.'" :label="'비밀번호'" :value="''" :disabled="false" :readonly="false" />
            <CButtons class="pass-s" type="Icon" />
            <!-- 눈끄기: pass-h 클래스로 변경 -->
            <span class="validation">적합</span>
            <!-- 부적합 : improper 클래스 추가 -->
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">비밀번호</strong>
            <CInputs :id="'password'" :type="'password'" :placeholder="'입력한 비밀번호와 동일하게 입력하세요.'" :label="'비밀번호'" :value="''" :disabled="false" :readonly="false" />
            <CButtons class="pass-s" type="Icon" />
            <!-- 눈끄기: pass-h 클래스로 변경 -->
            <span class="validation">적합</span>
            <!-- 부적합 : improper 클래스 추가 -->
          </div>
          <div class="tooltip-box">
            <button type="button" class="title" @click.prevent="onToggleTooltip($event)">비밀번호 생성 규칙</button>
            <div class="popper">
              <div class="bullet-list">
                <strong>비밀번호 생성 규칙</strong>
                <ul>
                  <li>영문자·숫자·특수문자 2개 이상 조합 10자리 이상 입력</li>
                  <li>영문자·숫자·특수문자 3개 이상 조합 8자리 이상 입력</li>
                </ul>
                <strong>사용 불가한 비밀번호</strong>
                <ul>
                  <li>동일한 숫자를 3개 이상 사용</li>
                  <li>키보드에서 문자·숫자를 연속으로 3자 이상 사용</li>
                  <li>최근 3회 내 사용한 비밀번호와 동일한 비밀번호 사용</li>
                </ul>
              </div>
              <button type="button" class="close" @click.prevent="onCloseTooltip($event)">닫기</button>
            </div>
          </div>
        </article>
        <!-- //비밀번호 입력 -->

        <article>
          <p class="paragraph mb10">새로운 비밀번호 설정을 위해 인증이 필요합니다.</p>
          <div class="border-wrap">
            <strong class="title required">E-mail ID</strong>
            <!-- 필수일 경우 .title에 required 클래스 추가 -->
            <!--2024-02-22 인증완료시 input =  :disabled="true", button = disabled 추가-->
            <CInputs :id="'emailId'" :type="'text'" :placeholder="''" :label="'Email ID'" :value="'mysunu@sk.com'" :disabled="true"/>
            <CButtons class="authentication" :title="'인증메일 발송'" disabled/>
            <span class="validation">인증완료</span>
          </div>
          <!--2024-02-19 인증메일 재발송 border-wrap 추가 -->
          <div class="border-wrap">
            <strong class="title required">E-mail ID</strong>
            <!-- 필수일 경우 .title에 required 클래스 추가 -->
            <CInputs :id="'emailId'" :type="'text'" :placeholder="''" :label="'Email ID'" :value="'mysunu@sk.com'" :disabled="true"/>
            <CButtons class="authentication" :title="'인증메일 재발송'" disabled/>
            <span class="validation">인증완료</span>
          </div>
          <!--//2024-02-19 인증번호 발송 완료 시 disabled -->
          <!--//2024-02-22 인증완료시 input =  :disabled="true", button = disabled 추가-->
          <!--2024-02-19 휴대폰인증, 이메일인증 버튼 추가-->
          <!--2024-02-22 인증완료시 button = disabled 추가 추가-->
          <div class="certification-wrap">
            <a href="#none" class="disabled">휴대폰으로 인증</a>
          </div>
          <div class="certification-wrap">
            <a href="#none">E-mail로 인증</a>
          </div>
          <!--//22024-02-22 인증완료시 button = disabled 추가-->
          <!--//2024-02-19 휴대폰인증, 이메일인증 버튼 추가-->
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">인증번호</strong>
            <!--2024-02-22 인증완료시 input =  :disabled="true", button = disabled 추가-->
            <CInputs :id="'certNumber'" :type="'text'" :placeholder="'인증번호를 입력하세요.'" :label="'인증번호'" :value="''" :readonly="false" :disabled="true"/>
            <CButtons class="authentication" :title="'인증번호 확인'" disabled/>
            <!--//2024-02-22 인증완료시 input =  :disabled="true", button = disabled 추가-->
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
        <article>
          <div class="border-wrap">
            <strong class="title">닉네임</strong>
            <CInputs :id="'nickname'" :type="'text'" :placeholder="'닉네임을 입력하세요.'" :label="'닉네임'" :value="''" :disabled="false" :readonly="false" />
          </div>
          <p class="error-text">이미 사용중인 닉네임입니다.</p>
        </article>
        <article>
          <div class="border-wrap">
            <CMultiple
              :id="['certification']"
              :type="'checkbox'"
              :title="''"
              :style="'border black'"
              :name="'certification'"
              :label="['실명 아이디 사용']"
              :checked="[true]"
              :disabled="false"
              :confirm="false"
            />
          </div>
        </article>

        <div class="button-box">
          <CButtons class="big point" :title="'본인 인증하기'" />
        </div>

        <article>
          <div class="bullet-list align-center">
            <ul>
              <li>본인인증이 어려운 외국인 또는 해외 거주 고객은 <a href="" class="link">여기</a>를 눌러주세요</li>
            </ul>
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">이름</strong>
            <CInputs :id="'name'" :type="'text'" :placeholder="'이름을 입력하세요.'" :value="'홍길동'" :disabled="false" :readonly="false" />
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">생년월일</strong>
            <CInputs :id="'birth'" :type="'text'" :placeholder="'생년월일을 입력하세요.'" :label="'생년월일'" :value="'2000-01-01'" :disabled="false" :readonly="false" />
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">성별</strong>
            <CMultiple
              :id="['sex']"
              :type="'radio'"
              :title="'성별'"
              :style="'border black'"
              :name="'sex'"
              :label="['남자', '여자']"
              :checked="[true, false]"
              :disabled="false"
              :confirm="false"
            />
          </div>
        </article>
        <article>
          <div class="dual-flex">
            <div class="border-wrap">
              <strong class="title">국가번호</strong>
              <CSelectBox :coptions="[{ val: 'value', txt: '대한민국' }]" :title="'국가번호'" :disabled="true" :changed="false" />
            </div>
            <!--2024-02-19 인증완료 text 추가-->
            <div class="border-wrap">
              <strong class="title">휴대폰 번호</strong>
            <!--2024-02-22 인증완료시 input =  :disabled="true", button = disabled 추가, 인증버튼 클릭 시, 모달 오픈 추가-->
              <CInputs :id="'mobile'" :type="'text'" :placeholder="'(-) 없이 숫자를 입력하세요.'" :label="'휴대폰'" :value="'010-1234-5678'" disabled :readonly="false" />
              <button type="button" class="common-buttons authentication" @click="openModal('modal-20')">인증문자 발송</button>
            <!--//2024-02-22 인증완료시 input =  :disabled="true", button = disabled 추가 인증버튼 클릭 시, 모달 오픈 추가-->  
              <span class="validation">인증완료</span>
            </div>
          </div>
         
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">인증번호</strong>
            <CInputs :id="'certNumberComplete2'" :type="'text'" :placeholder="'123456'" :label="'인증번호'" :value="'712852'" :disabled="true" :readonly="true" />
            <span class="validation">인증완료</span>
          </div>
        </article>
        <div class="button-box">
          <CButtons class="big dark" :title="'취소'" />
          <CButtons class="big gray" :title="'다음'" disabled />
          <CButtons class="big point" :title="'다음'" />
        </div>
      </form>

        <!--2024-02-22 {E-mail ID & 휴대폰 번호} 값으로 일치하는 회원 없을 경우 관련 모달 내용추가-->
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
        <!--//2024-02-22 {E-mail ID & 휴대폰 번호} 값으로 일치하는 회원 없을 경우 관련 모달 내용추가-->
    </div>
  </div>
</template>
