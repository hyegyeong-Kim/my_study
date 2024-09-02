<script setup></script>

<template>
  <div class="page-layout">
    <div class="title-box">
      <h2 class="title">개인정보 유지 동의ss</h2>
    </div>
    <div class="form-wrap narrow no-border">
      <article>
        <div class="id-box">
          <div class="row">
            <div class="text">
              <strong class="title">이름</strong>
              <span class="context">김*갈길</span>
            </div>
          </div>
          <div class="row">
            <div class="text">
              <strong class="title">E-mail ID</strong>
              <span class="context">mysuni12**@sk.com</span>
            </div>
          </div>
          <div class="row">
            <div class="text">
              <strong class="title">소속</strong>d
              <span class="context">SK 이노베이션</span>
            </div>
          </div>
          <div class="row">
            <div class="text">
              <strong class="title">사번</strong>
              <span class="context">SK00010</span>
            </div>
          </div>
        </div>
      </article>
      <article>
        <div class="keep-agree-box">
          <p>
            SK 사내 정책에 따라 mySUNI의 SK구성원 계정의 탈퇴 처리가 진행되며, 회원님의 개인정보 보호를 위하여 개인정보가 삭제 처리될 예정입니다. 향후 mySUNI의 교육 정보 또는 기타
            서비스 정보를 계속 유지하시려면 서비스 유지 동의 후 실명인증 절차를 진행하시기 바랍니다.
          </p>
          <strong class="title">왜 서비스 유지 동의를 해야하나요?</strong>
          <div class="bullet-list">
            <ul>
              <li>mySUNI 일반 서비스 이용시 기존 교육 이수 정보를 확인할 수 있습니다.</li>
            </ul>
          </div>

          <strong class="title">미동의시 유의사항</strong>
          <div class="bullet-list">
            <ul>
              <li>SK 재입사가 내정된 경우 인사이동 처리가 14일이상 소요되는 경우 기존 사용 내역에 접근 할 수 없습니다.</li>
              <li>위와 같은 경우 서비스 유지 미동의시 법정 필수 교육을 재이수해야 합니다.</li>
            </ul>
          </div>
        </div>
      </article>
      <article>
        <p class="error-text">이 링크는 2023-07-26까지 유효합니다.</p>
      </article>
      <article>
        <CMultiple
          :id="['agree']"
          :type="'checkbox'"
          :title="''"
          :style="'black'"
          :name="'약관동의'"
          :label="['서비스 유지 동의에 대한 내용을 읽고 확인함']"
          :checked="[false]"
          :disabled="false"
        />
      </article>

      <div class="button-box">
        <CButtons class="big point" :title="'다른 계정으로 로그인'" />
      </div>
    </div>
  </div>
</template>
