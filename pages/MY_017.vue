<script setup></script>

<template>
  <div class="page-layout">
    <!-- edit 23-12-20 -->
    <div class="title-box">
      <h2 class="title">서비스 정보 변경</h2>
      <button class="btn_history_back">뒤로</button>
      <button class="btn_exit">나가기</button>
    </div>
    <!-- //edit 23-12-20 -->

    <div class="form-wrap narrow no-border">
      <form>
        <!-- SK구성원 -->
        <article>
          <div class="border-wrap">
            <strong class="title">현재 직군</strong>
            <CSelectBox
              :coptions="[
                { val: 'default', txt: '선택해주세요' },
                { val: 'val1', txt: 'txt1' },
                { val: 'val2', txt: 'txt2' },
                { val: 'val3', txt: 'txt3' }
              ]"
              :title="'현재 직군'"
              :disabled="false"
              :changed="false"
            />
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">현재 직무</strong>
            <CSelectBox
              :coptions="[
                { val: 'default', txt: '선택해주세요' },
                { val: 'val1', txt: 'txt1' },
                { val: 'val2', txt: 'txt2' },
                { val: 'val3', txt: 'txt3' }
              ]"
              :title="'현재 직무'"
              :disabled="false"
              :changed="false"
            />
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">희망 직군</strong>
            <CSelectBox
              :coptions="[
                { val: 'default', txt: '선택해주세요' },
                { val: 'val1', txt: 'txt1' },
                { val: 'val2', txt: 'txt2' },
                { val: 'val3', txt: 'txt3' }
              ]"
              :title="'희망 직군'"
              :disabled="false"
              :changed="false"
            />
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">희망 직무</strong>
            <CSelectBox
              :coptions="[
                { val: 'default', txt: '선택해주세요' },
                { val: 'val1', txt: 'txt1' },
                { val: 'val2', txt: 'txt2' },
                { val: 'val3', txt: 'txt3' }
              ]"
              :title="'희망 직무'"
              :disabled="false"
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
                { val: 'default', txt: '선택해주세요' },
                { val: 'val1', txt: 'txt1' },
                { val: 'val2', txt: 'txt2' },
                { val: 'val3', txt: 'txt3' }
              ]"
              :title="'관심 분야'"
              :disabled="false"
              :changed="false"
            />
          </div>
        </article>

        <!-- 비즈니스 파트너 -->
        <article>
          <div class="border-wrap">
            <strong class="title">회원유형</strong>
            <CInputs :id="'type'" :type="'text'" :placeholder="''" :label="'회원유형'" :value="'비즈니스 파트너'" :disabled="true" :readonly="true" />
          </div>
          <p class="warn-text">회원유형 변경이 필요하신 경우 Help Desk 02) 6323-9000로 문의하세요.</p>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">파트너사</strong>
            <CInputs :id="'partner'" :type="'text'" :placeholder="'파트너사를 검색하세요.'" :label="'파트너사'" :value="'(주)리앙에이지'" :disabled="false" :readonly="true" />
            <CButtons class="search" :type="'Icon'" />
          </div>
          <p class="solid-text">관련 SK멤버사: SK C&C, SK플래닛</p>
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
                { val: 'val1', txt: 'txt1' },
                { val: 'val2', txt: 'txt2' },
                { val: 'val3', txt: 'txt3' }
              ]"
              :title="'직급'"
              :disabled="false"
              :changed="false"
            />
          </div>
        </article>

        <!-- 사회적 기업 -->
        <article>
          <div class="border-wrap">
            <strong class="title">회원유형</strong>
            <CInputs :id="'type'" :type="'text'" :placeholder="''" :label="'회원유형'" :value="'사회적 기업'" :disabled="true" :readonly="true" />
          </div>
          <p class="warn-text">회원유형 변경이 필요하신 경우 Help Desk 02) 6323-9000로 문의하세요.</p>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">기업명</strong>
            <CInputs :id="'partner'" :type="'text'" :placeholder="'기업명을 검색하세요.'" :label="'기업명'" :value="'(주)리앙에이지'" :disabled="false" :readonly="true" />
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
                { val: 'val1', txt: 'txt1' },
                { val: 'val2', txt: 'txt2' },
                { val: 'val3', txt: 'txt3' }
              ]"
              :title="'직급'"
              :disabled="false"
              :changed="false"
            />
          </div>
        </article>

        <!-- 구성원 가족 -->
        <article>
          <div class="border-wrap">
            <strong class="title">회원유형</strong>
            <CInputs :id="'type'" :type="'text'" :placeholder="''" :label="'회원유형'" :value="'구성원 가족'" :disabled="true" :readonly="true" />
          </div>
          <p class="warn-text">회원유형 변경이 필요하신 경우 Help Desk 02) 6323-9000로 문의하세요.</p>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">추천인 이름</strong>
            <CInputs :id="''" :type="'text'" :placeholder="''" :label="'추천인 이름'" :value="'김*니'" :disabled="true" :readonly="true" />
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">소속사</strong>
            <CInputs :id="''" :type="'text'" :placeholder="''" :label="'소속사'" :value="'SK플래닛'" :disabled="true" :readonly="true" />
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">회사 E-mail</strong>
            <CInputs :id="''" :type="'text'" :placeholder="''" :label="'회사 E-mail'" :value="'SK0001**@sk.com'" :disabled="true" :readonly="true" />
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">추천인과의 관계</strong>
            <CInputs :id="''" :type="'text'" :placeholder="''" :label="'추천인과의 관계'" :value="'부'" :disabled="true" :readonly="true" />
          </div>
        </article>

        <!-- 대학생 -->
        <article>
          <div class="border-wrap">
            <strong class="title">회원유형</strong>
            <CInputs :id="'type'" :type="'text'" :placeholder="''" :label="'회원유형'" :value="'대학생'" :disabled="true" :readonly="true" />
          </div>
          <p class="warn-text">회원유형 변경이 필요하신 경우 Help Desk 02) 6323-9000로 문의하세요.</p>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title required">소속 학교</strong>
            <CInputs :id="'partner'" :type="'text'" :placeholder="'파트너사를 검색하세요.'" :label="'소속 학교'" :value="'서울대학교'" :disabled="false" :readonly="true" />
            <CButtons class="search" :type="'Icon'" />
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">재학증명서</strong>
            <CInputs :id="''" :type="'text'" :placeholder="''" :label="''" :value="'건축과 김선희 2020학번 재학증명서.PDF'" :disabled="false" :readonly="true" />
            <span class="file-upload">
              <label for="fileUpload" class="common-buttons authentication">파일 업로드</label>
              <input id="fileUpload" type="file" class="blind" />
            </span>
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title required">주전공</strong>
            <CInputs :id="''" :type="'text'" :placeholder="''" :label="''" :value="'건축과, 건축공학과, 컴퓨터공학과'" :disabled="false" :readonly="true" />
            <button type="button" class="common-buttons authentication">추가</button>
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">복수전공</strong>
            <CInputs :id="''" :type="'text'" :placeholder="''" :label="''" :value="'건축과, 건축공학과, 컴퓨터공학과'" :disabled="false" :readonly="true" />
            <button type="button" class="common-buttons authentication">추가</button>
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">수료 학기</strong>
            <CSelectBox
              :coptions="[
                { val: 'default', txt: '선택해주세요' },
                { val: 'val1', txt: 'txt1' },
                { val: 'val2', txt: 'txt2' },
                { val: 'val3', txt: 'txt3' }
              ]"
              :title="'수료 학기'"
              :disabled="false"
              :changed="false"
            />
          </div>
        </article>

        <div class="button-box">
          <CButtons class="big dark" :title="'취소'" />
          <CButtons class="big gray" :title="'저장'" disabled />
          <CButtons class="big point" :title="'저장'" />
        </div>
      </form>
    </div>
  </div>
</template>
