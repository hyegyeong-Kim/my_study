<script setup></script>

<template>
  <div class="page-layout">
    <div class="title-box">
      <h2 class="title">본인 확인</h2>
    </div>

    <!-- 본인확인 선택 -->
    <div class="subtitle-box">
      <strong class="subtitle">본인확인 방식을 선택하세요.</strong>
    </div>
    <div class="form-wrap narrow no-border no-margin">
      <form>
        <article>
          <CMultiple
            :id="['certType01', 'certType02']"
            :type="'radio'"
            :title="''"
            :style="'column'"
            :name="'certType'"
            :label="['본인명의 휴대폰 번호로 확인', '회원정보의 휴대폰 번호로 확인']"
            :checked="[false, false, false]"
            :disabled="false"
          />
        </article>
        <div class="button-box">
          <CButtons class="big dark" :title="'취소'" />
          <CButtons class="big gray" :title="'다음'" disabled />
          <CButtons class="big point" :title="'다음'" />
        </div>
      </form>
    </div>

    <!-- 본인 명의 휴대폰 번호로 인증 -->
    <div class="subtitle-box">
      <strong class="subtitle">본인 명의 휴대폰 번호로 인증</strong>
    </div>
    <div class="form-wrap narrow no-border no-margin">
      <form>
        <article>
          <p>본인명의의 번호로 본인임을 확인합니다.<br />반드시 휴대폰 명의의 주민등록번호가 일치해야합니다.</p>
        </article>
        <div class="button-box">
          <CButtons class="big dark" :title="'취소'" />
          <CButtons class="big gray" :title="'다음'" disabled />
          <CButtons class="big point" :title="'다음'" />
        </div>
      </form>
    </div>

    <!-- 회원정보의 휴대폰 번호로 확인 -->
    <div class="subtitle-box">
      <strong class="subtitle">회원정보의 휴대폰 번호로 확인</strong>
    </div>
    <div class="form-wrap narrow no-border no-margin">
      <form>
        <article>
          <p>회원정보의 이름과 휴대폰 번호로 인증하여 본인임을 확인합니다.</p>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">이름</strong>
            <CInputs :id="'name'" :type="'text'" :placeholder="'이름을 입력하세요.'" :value="''" :disabled="false" :readonly="false" />
            <CButtons class="authentication" :title="'인증메일 발송'" />
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
            <CInputs :id="'certNumber'" :type="'text'" :placeholder="'인증번호를 입력하세요.'" :label="'인증번호'" :value="''" :disabled="false" :readonly="false" />
            <CButtons class="authentication" :title="'인증번호 재발송'" />
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
        <div class="button-box">
          <CButtons class="big dark" :title="'취소'" />
          <CButtons class="big gray" :title="'다음'" disabled />
          <CButtons class="big point" :title="'다음'" />
        </div>
      </form>
    </div>
  </div>
</template>
