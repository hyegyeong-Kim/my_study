<script setup></script>

<template>
  <div class="page-layout">
    <div class="title-box">
      <h2 class="title">mySUNI 회원가입</h2>
      <p class="paragraph">서비스 이용에 필요한 추가 정보를 입력하세요.</p>
    </div>

    <!-- 2단계 케이스 -->
    <CSteps :index="0" :title="['약관동의', '서비스정보']" />
    <CSteps :index="1" :title="['약관동의', '서비스정보']" />

    <!-- 3단계 케이스 -->
    <CSteps :index="0" :title="['약관동의', '계정정보', '서비스정보']" />
    <CSteps :index="1" :title="['약관동의', '계정정보', '서비스정보']" />
    <CSteps :index="2" :title="['약관동의', '계정정보', '서비스정보']" />

    <div class="form-wrap narrow">
      <form>
        <article>
          <div class="border-wrap">
            <strong class="title">현재직군</strong>
            <CSelectBox
              :coptions="[
                { val: 'default', txt: '선택해주세요' },
                { val: 'val1', txt: 'txt1' },
                { val: 'val2', txt: 'txt2' },
                { val: 'val3', txt: 'txt3' }
              ]"
              :title="'현재직군'"
              :disabled="false"
              :changed="false"
            />
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">현재직무</strong>
            <CSelectBox
              :coptions="[
                { val: 'default', txt: '현재직군을 먼저 선택해주세요' },
                { val: 'val1', txt: 'txt1' },
                { val: 'val2', txt: 'txt2' },
                { val: 'val3', txt: 'txt3' }
              ]"
              :title="'현재직무'"
              :disabled="true"
              :changed="false"
            />
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">희망직군</strong>
            <CSelectBox
              :coptions="[
                { val: 'default', txt: '선택해주세요' },
                { val: 'val1', txt: 'txt1' },
                { val: 'val2', txt: 'txt2' },
                { val: 'val3', txt: 'txt3' }
              ]"
              :title="'희망직군'"
              :disabled="false"
              :changed="false"
            />
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">희망직무</strong>
            <CSelectBox
              :coptions="[
                { val: 'default', txt: '희망직군을 먼저 선택해주세요' },
                { val: 'val1', txt: 'txt1' },
                { val: 'val2', txt: 'txt2' },
                { val: 'val3', txt: 'txt3' }
              ]"
              :title="'희망직무'"
              :disabled="true"
              :changed="false"
            />
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">관심 카테고리</strong>
            <CSelectBox
              :coptions="[
                { val: 'default', txt: '선택해주세요' },
                { val: 'val1', txt: 'txt1' },
                { val: 'val2', txt: 'txt2' },
                { val: 'val3', txt: 'txt3' }
              ]"
              :title="'관심 카테고리'"
              :disabled="false"
              :changed="false"
            />
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">관심 분야</strong>
            <CSelectBox
              :coptions="[
                { val: 'default', txt: '관심 카테고리를 먼저 선택해주세요' },
                { val: 'val1', txt: 'txt1' },
                { val: 'val2', txt: 'txt2' },
                { val: 'val3', txt: 'txt3' }
              ]"
              :title="'관심 분야'"
              :disabled="true"
              :changed="false"
            />
          </div>
        </article>

        <!-- 이천포럼 CASE -->
        <article>
          <div class="border-wrap">
            <strong class="title">%서비스명% 닉네임</strong>
            <CInputs :id="'nickname'" :type="'text'" :placeholder="'닉네임을 입력하세요.'" :label="'닉네임'" :value="''" :disabled="false" :readonly="false" />
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
