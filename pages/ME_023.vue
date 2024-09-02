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
        <!-- <article>
          <div class="member-type-radio">
            <label for="memberTypeCircle01" class="label type01">
              <input id="memberTypeCircle01" type="radio" name="memberTypeCircle" />
              <strong class="title">비즈니스 파트너</strong>
              <p class="paragraph">SK와 함께하는 협력회사 구성원</p>
            </label>
            <label for="memberTypeCircle02" class="label type02">
              <input id="memberTypeCircle02" type="radio" name="memberTypeCircle" />
              <strong class="title">사회적 기업</strong>
              <p class="paragraph">SK와 함께하는 사회적 기업 구성원</p>
            </label>
            <label for="memberTypeCircle03" class="label type03">
              <input id="memberTypeCircle03" type="radio" name="memberTypeCircle" />
              <strong class="title">구성원 가족</strong>
              <p class="paragraph">SK 구성원의 가족</p>
            </label>
            <label for="memberTypeCircle04" class="label type04">
              <input id="memberTypeCircle04" type="radio" name="memberTypeCircle" />
              <strong class="title">대학생</strong>
              <p class="paragraph">SK와 함께하는 대학생</p>
            </label>
          </div>
        </article> -->
        <article>
          <div class="member-type-radio icon">
            <label for="memberTypeIcon01" class="label type01">
              <input id="memberTypeIcon01" type="radio" name="memberTypeIcon" />
              <strong class="title">비즈니스 파트너</strong>
              <p class="paragraph">SK와 함께하는 협력회사 구성원</p>
            </label>
            <label for="memberTypeIcon02" class="label type02">
              <input id="memberTypeIcon02" type="radio" name="memberTypeIcon" />
              <strong class="title">사회적 기업</strong>
              <p class="paragraph">SK와 함께하는 사회적 기업 구성원</p>
            </label>
            <label for="memberTypeIcon03" class="label type03">
              <input id="memberTypeIcon03" type="radio" name="memberTypeIcon" />
              <strong class="title">구성원 가족</strong>
              <p class="paragraph">SK 구성원의 가족</p>
            </label>
            <label for="memberTypeIcon04" class="label type04">
              <input id="memberTypeIcon04" type="radio" name="memberTypeIcon" />
              <strong class="title">대학생</strong>
              <p class="paragraph">SK와 함께하는 대학생</p>
            </label>
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">파트너사</strong>
            <CInputs :id="'partner'" :type="'text'" :placeholder="'파트너사를 검색하세요.'" :label="'파트너사'" :value="'(주) 리앙에이지'" :disabled="false" :readonly="false" />
            <CButtons class="search" :type="'Icon'" />
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">직무</strong>
            <CSelectBox
              :coptions="[
                { val: 'default', txt: '선택해주세요' },
                { val: 'val1', txt: 'txt1' },
                { val: 'val2', txt: 'txt2' },
                { val: 'val3', txt: 'txt3' }
              ]"
              :title="'직무'"
              :disabled="false"
              :changed="false"
            />
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">직급</strong>
            <CSelectBox
              :coptions="[
                { val: 'default', txt: '선택해주세요' },
                { val: 'val1', txt: 'txt1', selected: true },
                { val: 'val2', txt: 'txt2' },
                { val: 'val3', txt: 'txt3' }
              ]"
              :title="'직급'"
              :disabled="false"
              :changed="false"
            />
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
