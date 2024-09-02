<script setup></script>

<template>
  <div class="page-layout">
    <div class="title-box">
      <h2 class="title">통합 ID 회원탈퇴</h2>
      <p class="paragraph">탈퇴자 본인 확인을 위하여 다음 정보를 입력하세요.</p>
    </div>

    <div class="form-wrap narrow no-border">
      <form>
        <article>
          <div class="border-wrap">
            <strong class="title">E-mail ID</strong>
            <CInputs :id="'emailId'" :type="'text'" :placeholder="''" :label="'Email ID'" :value="'mysunu@sk.com'" />
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">비밀번호</strong>
            <CInputs :id="'password'" :type="'password'" :placeholder="'비밀번호를 입력하세요.'" :label="'비밀번호'" :value="''" :disabled="false" :readonly="false" />
          </div>
        </article>

        <div class="button-box">
          <CButtons class="big dark" :title="'취소'" />
          <CButtons class="big gray" :title="'회원 탈퇴'" disabled />
          <CButtons class="big point" :title="'회원 탈퇴'" />
        </div>
      </form>
    </div>
  </div>
</template>
