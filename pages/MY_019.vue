<script setup></script>

<template>
  <div class="page-layout">
    <div class="title-box">
      <h2 class="title">휴대폰 번호 변경</h2>
    </div>

    <div class="form-wrap narrow no-border">
      <form>
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
            <strong class="title">인증번호</strong>
            <CInputs :id="'certNumber'" :type="'text'" :placeholder="'123456'" :label="'인증번호'" :value="'712852'" :disabled="true" :readonly="true" />
            <span class="validation">인증완료</span>
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
