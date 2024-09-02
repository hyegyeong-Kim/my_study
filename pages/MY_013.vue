<script setup></script>

<template>
  <div class="page-layout">
    <div class="title-box">
      <h2 class="title">E-mail ID 변경</h2>
      <p class="paragraph">개인 정보 접근이 필요한 서비스입니다. <br />회원님의 개인정보를 보호하기 위하여, 비밀번호를 확인합니다.</p>
    </div>

    <div class="form-wrap narrow no-border">
      <form>
        <article>
          <div class="border-wrap">
            <strong class="title">비밀번호</strong>
            <CInputs :id="'password'" :type="'password'" :placeholder="'비밀번호를 입력하세요.'" :label="'비밀번호'" :value="''" :disabled="false" :readonly="false" />
            <CButtons class="pass-s" type="Icon" />
            <!-- 눈끄기: pass-h 클래스로 변경 -->
            <span class="validation">적합</span>
            <!-- 부적합 : improper 클래스 추가 -->
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
