<script setup></script>

<template>
  <div class="page-layout">
    <div class="title-box">
      <h2 class="title">mySUNI 회원가입</h2>
      <!-- <p class="paragraph">아래항목에 동의해 주세요.</p> -->
    </div>

    <!-- 2단계 케이스 -->
    <CSteps :index="0" :title="['약관동의', '서비스정보']" />
    <CSteps :index="1" :title="['약관동의', '서비스정보']" />

    <!-- 3단계 케이스 -->
    <CSteps :index="0" :title="['약관동의', '계정정보', '서비스정보']" />
    <CSteps :index="1" :title="['약관동의', '계정정보', '서비스정보']" />
    <CSteps :index="2" :title="['약관동의', '계정정보', '서비스정보']" />

    <div class="form-wrap">
      <form>
        <article>
          <CMultiple
            :id="['joinAgreeAll']"
            :type="'checkbox'"
            :title="''"
            :style="'bold black'"
            :name="'약관동의'"
            :label="['필수 항목에 모두 동의합니다.']"
            :checked="[false]"
            :disabled="false"
          />
        </article>
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
              :disabled="true"
            />
            <a href="" class="link-new-page">새창열기</a>
          </div>

          <!-- 2024-03-29 Edit 약관 영역 iframe으로 수정 -->
          <iframe src="../policy/PRIVACY_STATEMENT_20231214.html" class="terms-box"></iframe>
          <!-- <div class="terms-box">
            <SampleTerms />
          </div> -->
          <!-- //2024-03-29 Edit 약관 영역 iframe으로 수정 -->
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
        </article>
        <article>
          <div class="dual-flex row">
            <CMultiple
              :id="['joinAgree03']"
              :type="'checkbox'"
              :title="''"
              :style="'black'"
              :name="''"
              :label="['개인 정보 수집·이용 동의(필수)']"
              :checked="[false]"
              :disabled="false"
            />
            <a href="" class="link-new-page">새창열기</a>
          </div>
          <div class="terms-box">
            <SampleTerms />
          </div>
        </article>
        <article>
          <div class="dual-flex">
            <CMultiple
              :id="['joinAgree04']"
              :type="'checkbox'"
              :title="''"
              :style="'black'"
              :name="''"
              :label="['광고성 정보 수신 동의(선택)']"
              :checked="[false]"
              :disabled="false"
            />
            <CMultiple
              :id="['commercialAgree01', 'commercialAgree02']"
              :type="'checkbox'"
              :title="''"
              :style="'black flex-end-pc'"
              :name="'commercialAgree'"
              :label="['이메일', 'SMS']"
              :checked="[false, false]"
              :disabled="false"
            />
          </div>
          <div class="text-paragraph">
            mySUNI 서비스 및 광고성 및 이벤트 정보를 SMS, E-mail로 받습니다.<br />이후 추가 가입하는 서비스의 경우, 수신에 대해 별도 안내 및 동의를 구합니다.
          </div>
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
