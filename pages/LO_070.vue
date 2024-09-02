<script setup>
function onToggleTooltip(event) {
  event.currentTarget.classList.toggle("active");
}
function onCloseTooltip(event) {
  event.currentTarget.parentNode.previousSibling.classList.toggle("active");
}
</script>

<template>
  <div class="page-layout">
    <div class="title-box">
      <h2 class="title">회원정보 추가 입력</h2>
      <p class="paragraph">mySUNI 계정 생성에 필요한 인증 및 정보를 입력하세요.</p>
    </div>

    <div class="form-wrap narrow no-border">
      <form>
        <article>
          <div class="border-wrap">
            <strong class="title">비밀번호 입력</strong>
            <CInputs :id="'password'" :type="'password'" :placeholder="'비밀번호를 입력하세요.'" :label="'비밀번호'" :value="''" :disabled="false" :readonly="false" />
            <CButtons class="pass-s" type="Icon" />
            <!-- 눈끄기: pass-h 클래스로 변경 -->
            <span class="validation">적합</span>
            <!-- 부적합 : improper 클래스 추가 -->
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">비밀번호 확인</strong>
            <CInputs
              :id="'passwordConfirm'"
              :type="'password'"
              :placeholder="'다시 한번 비밀번호를 입력하세요.'"
              :label="'비밀번호'"
              :value="''"
              :disabled="false"
              :readonly="false"
            />
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
        <article>
          <div class="border-wrap">
            <strong class="title">닉네임</strong>
            <CInputs :id="'nickname'" :type="'text'" :placeholder="'닉네임을 입력하세요.'" :label="'닉네임'" :value="''" :disabled="false" :readonly="false" />
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
            <div class="border-wrap">
              <strong class="title">휴대폰 번호</strong>
              <CInputs :id="'mobile'" :type="'text'" :placeholder="'(-) 없이 숫자를 입력하세요.'" :label="'휴대폰'" :value="'010-1234-5678'" :disabled="false" :readonly="false" />
              <button type="button" class="common-buttons authentication">인증문자 발송</button>
            </div>
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">인증번호</strong>
            <CInputs :id="'certNumberComplete2'" :type="'text'" :placeholder="'123456'" :label="'인증번호'" :value="'712852'" :disabled="true" :readonly="true" />
            <button type="button" class="common-buttons authentication" disabled>인증번호 확인</button>
          </div>
        </article>
        <div class="button-box">
          <CButtons class="big dark" :title="'취소'" />
          <CButtons class="big gray" :title="'다음'" disabled />
          <CButtons class="big point" :title="'다음'" />
        </div>
      </form>
    </div>
  </div>
</template>
