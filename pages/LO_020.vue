<script setup></script>

<template>
  <div class="page-layout">
    <div class="title-box">
      <h2 class="title">로그인 계정 선택</h2>
    </div>
    <div class="form-wrap narrow no-border">
      <article>
        <label for="loginRadio01" class="radio-square-box">
          <input id="loginRadio01" type="radio" name="loginRadio" checked />
          <div class="text">
            <strong class="title">mySUNI1</strong>
            <p class="context">mySU**@sk.com</p>
            <span class="date">최근접속 2023.08.15</span>
          </div>
          <div class="suffix">
            <span class="date">최근접속 2023.08.15</span>
            <CButtons class="common-icon trash" />
          </div>
        </label>
      </article>
      <article>
        <label for="loginRadio02" class="radio-square-box">
          <input id="loginRadio02" type="radio" name="loginRadio" />
          <div class="text">
            <strong class="title">mySUNI1</strong>
            <p class="context">longEmailId***************.com</p>
            <span class="date">최근접속 2023.08.15</span>
          </div>
          <div class="suffix">
            <span class="date">최근접속 2023.08.15</span>
            <CButtons class="common-icon trash" />
          </div>
        </label>
      </article>
      <article>
        <label for="loginRadio03" class="radio-square-box">
          <input id="loginRadio03" type="radio" name="loginRadio" />
          <div class="text">
            <strong class="title">mySUNI1</strong>
            <p class="context">mySU**@sk.com</p>
            <span class="date">최근접속 2023.08.15</span>
          </div>
          <div class="suffix">
            <span class="date">최근접속 2023.08.15</span>
            <CButtons class="common-icon trash" />
          </div>
        </label>
      </article>

      <div class="button-box">
        <CButtons class="big point" :title="'다른 계정으로 로그인'" />
      </div>
    </div>
  </div>
</template>
