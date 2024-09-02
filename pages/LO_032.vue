<script setup></script>

<template>
  <div class="page-layout">
    <div class="title-box">
      <h2 class="title">계정정보 찾기</h2>
    </div>

    <CTabs class="type-01" :index="1" :title="['ID찾기', '비밀번호 재설정']" />

    <div class="form-wrap narrow no-border no-margin">
      <form>
        <article>
          <p>비밀번호를 재설정한 E-mail ID를 입력하세요.</p>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">Email ID</strong>
            <CInputs :id="'name'" :type="'text'" :placeholder="'E-mail을 입력하세요.(example@sk.com)'" :value="''" :disabled="false" :readonly="false" />
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
