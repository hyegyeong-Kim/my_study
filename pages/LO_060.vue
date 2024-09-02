<script setup></script>

<template>
  <div class="page-layout">
    <div class="title-box">
      <h2 class="title">추가 이용약관 동의</h2>
      <p class="paragraph">아래 약관이 변경되어 변경된 내용에 대한 동의가 필요합니다. <br />약관 동의 후 서비스 이용하시기 바랍니다.</p>
    </div>

    <div class="form-wrap no-border">
      <form>
        <article>
          <div class="dual-flex row">
            <CMultiple
              :id="['joinAgree01']"
              :type="'checkbox'"
              :title="''"
              :style="'black'"
              :name="''"
              :label="['mySUNI 통합 ID 이용약관 동의(필수)']"
              :checked="[false]"
              :disabled="false"
            />
            <a href="" class="link-new-page">새창열기</a>
          </div>
          <div class="terms-box">
            <SampleTerms />
          </div>
          <p class="terms-date">변경일 2023.09.31</p>
        </article>
        <article>
          <div class="dual-flex row">
            <CMultiple
              :id="['joinAgree02']"
              :type="'checkbox'"
              :title="''"
              :style="'black'"
              :name="''"
              :label="['mySUNI 이용약관 동의(필수)']"
              :checked="[false]"
              :disabled="false"
            />
            <a href="" class="link-new-page">새창열기</a>
          </div>
          <div class="terms-box">
            <SampleTerms />
          </div>
          <p class="terms-date">변경일 2023.09.31</p>
        </article>
        <article>
          <p class="warn-text">필수 동의는 반드시 동의 체크하셔야 서비스 이용이 가능합니다.</p>
        </article>

        <div class="button-box">
          <CButtons class="big dark" :title="'취소'" />
          <CButtons class="big gray" :title="'확인'" disabled />
          <CButtons class="big point" :title="'확인'" />
        </div>
      </form>
    </div>
  </div>
</template>
