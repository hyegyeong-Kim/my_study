<script setup></script>

<template>
  <div class="page-layout">
    <div class="title-box">
      <h2 class="title">E-mail ID 변경</h2>
      <p class="paragraph">변경을 원하는 E-mail을 입력하신 후 인증하세요.</p>
    </div>

    <div class="form-wrap narrow no-border">
      <form>
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

        <div class="button-box">
          <CButtons class="big dark" :title="'취소'" />
          <CButtons class="big gray" :title="'저장'" disabled />
          <CButtons class="big point" :title="'저장'" />
        </div>
      </form>
    </div>
  </div>
</template>
