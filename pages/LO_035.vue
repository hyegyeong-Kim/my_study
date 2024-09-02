<script setup></script>

<template>
  <div class="page-layout">
    <div class="title-box">
      <h2 class="title">ID찾기 완료</h2>
      <p class="paragraph">입력 정보로 찾은 E-mail ID입니다.</p>
    </div>
    <div class="form-wrap narrow no-border">
      <div class="id-box">
        <p>mySUNI@sk.com</p>
        <p>mySUNI@naver.com</p>
        <p>mySUNI@gmail.com</p>
      </div>
      <div class="button-box">
        <CButtons class="big dark" :title="'비밀번호 재설정'" />
        <CButtons class="big point" :title="'로그인'" />
      </div>
    </div>
  </div>
</template>
