<script setup>
definePageMeta({
  layout: "login"
});

const languages = [
  { val: "value", txt: "한국어" },
  { val: "value", txt: "English" },
  { val: "value", txt: "中文" },
  { val: "value", txt: "日本語" }
];
</script>

<template>
  <div class="login-layout"><!-- left-panel이 없는 경우 [style="background-color:#f5f2eb;"] 요소 추가 필요 (채널별 색상값 별도 지정 가능) -->
    <!-- left -->
    <div class="left-panel"><!-- 이미지가 없는 경우 left-panel 전체가 제거 되어야 합니다. -->
      <!-- Edit 23-12-06 -->
      <div class="visual-wrap">
        <div class="image-wrap">
          <strong>Welcome!</strong>
          <p>구성원의 지속가능한 성장과 행복을 지원하는<br/> <strong>‘mySUNI’</strong>에 오신것을 환영합니다.</p>
          <img src="@/assets/images/main/visual_login.png" alt="" class="image" />
        </div>
      </div>
      <!-- Edit 23-12-06 -->
    </div>
    <!-- //left -->
    <!-- right -->
    <div class="right-panel">
      <!-- Add 23-12-06 -->
      <div class="right-top">
        <!-- logo -->
        <h1 class="h1">
          <a href="/"><img src="@/assets/images/common/logo.png" alt="" /></a>
        </h1>
        <!-- //logo -->
        <!-- language -->
        <div v-if="languages" class="lang">
          <CSelectBox :coptions="languages" />
        </div>
        <!-- //language -->
      </div>
      <!-- Add 23-12-06 -->
      <div class="title-box">
        <h2 class="title"><strong>mySUNI</strong></h2><!--  Edit 23-12-06 -->
      </div>
      <div class="form-wrap narrow no-border">
        <form>
          <article>
            <strong>mySUNI ID 로그인</strong>
            <div class="border-wrap">
              <strong class="title">아이디</strong>
              <CInputs :id="'userId'" :type="'text'" :placeholder="'mysuni2023@sk.com'" />
            </div>
          </article>
          <article>
            <div class="border-wrap">
              <strong class="title">비밀번호</strong>
              <CInputs :id="'userPw'" :type="'password'" :placeholder="'비밀번호를 입력하세요'" />
              <CButtons class="pass-h" :type="'Icon'" />
            </div>
          </article>
          <article>
            <CMultiple :id="['id11', 'id12']" :type="'checkbox'" :name="'네임11'" :label="['아이디 저장', '로그인 유지']" :checked="[true, false]" />
            <p class="error-text">ID 정보와 비밀번호가 일치 하지 않습니다. (1회 오류)<br />5회 오류시 계정이 보호 처리됩니다.</p>
          </article>
          <div class="button-box">
            <CButtons class="big point full-width" :title="'로그인'" />
            <CButtons class="big dark full-width" :title="'mySUNI ID 가입'" />
          </div>
          <div class="text-paragraph justify-center">
            <a href="">아이디 또는 비밀번호를 잊으셨나요?</a>
          </div>
        </form>
      </div>
      <AppFooter />
    </div>
    <!-- //right -->
  </div>
</template>
