<script setup>
definePageMeta({
  layout: "login"
});
</script>

<template>
  <div class="login-layout">
    <!-- left -->
    <div class="left-panel">
      <h1 class="h1">
        <a href="/"><img src="@/assets/images/common/logo.png" alt="" /></a>
      </h1>
      <div class="visual-wrap">
        <img src="@/assets/images/main/visual_login_01.png" alt="" class="image" />
      </div>
    </div>
    <!-- //left -->
    <!-- right -->
    <div class="right-panel">
      <div class="title-box">
        <h2 class="title"><strong>통합 ID Admin</strong> <span>로그인</span></h2><!--  Edit 23-12-06 -->
      </div>
      <div class="form-wrap narrow no-border">
        <form>
          <article>
            <div class="dual-flex">
              <div class="border-wrap">
                <strong class="title required">국가</strong>
                <label class="select-wrap">
                  <select class="default">
                    <option value="82">한국</option>
                    <option value="1">미국</option>
                    <option value="86">중국</option>
                  </select>
                </label>
              </div>
              <div class="border-wrap">
                <strong class="title required">휴대폰 번호</strong>
                <label for="mobile" class="input-wrap">
                  <input type="text" id="mobile" placeholder="휴대폰 번호를 입력하세요." autocomplete="false" maxlength="256">
                </label>
                <button type="button" class="common-buttons authentication">인증문자 발송</button>
              </div>
            </div>
          </article>
          <article>
            <div class="border-wrap">
              <strong class="title">인증번호</strong>
              <label for="certNumber" class="input-wrap" label="숫자 6자리를 입력하세요.">
                <input type="text" id="certNumber" placeholder="숫자 6자리를 입력하세요." disabled="" autocomplete="false" maxlength="6">
              </label>
              <button type="button" class="common-buttons authentication" disabled="">인증번호 확인</button>
            </div>
            <div class="timer-wrap">
              <p class="text"></p>
            </div>
          </article>
        </form>
      </div>
      <AppFooter />
    </div>
    <!-- //right -->
  </div>
</template>


<!-- <style lang="scss">
@import url("/assets/css/common.scss");
</style> -->