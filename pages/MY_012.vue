<script setup></script>

<template>
  <div class="page-layout">
    <div class="title-box">
      <h2 class="title">회원정보 변경</h2>
      <p class="paragraph">개인 정보 접근이 필요한 서비스입니다. <br />회원님의 개인정보를 보호하기 위하여, 비밀번호를 확인합니다.</p>
    </div>

    <div class="form-wrap narrow no-border">
      <form>
        <article>
          <div class="gray-box">
            회원 님은 실명인증이 되지 않은 상태입니다. <br />
            교육 이수, 자격증 정보를 관리하기 위하여 본인 인증이 필요합니다. <br />
            <br />
            <div class="bullet-list">
              <ul>
                <li>
                  <a href="" class="link">본인인증하기</a>
                </li>
              </ul>
            </div>
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">이름</strong>
            <CInputs :id="'name'" :type="'text'" :placeholder="'이름을 입력하세요.'" :value="'홍길동'" :disabled="true" :readonly="true" />
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">생년월일</strong>
            <CInputs :id="'birth'" :type="'text'" :placeholder="'생년월일을 입력하세요.'" :label="'생년월일'" :value="'2000-01-01'" :disabled="true" :readonly="true" />
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">성별</strong>
            <CInputs :id="'sex'" :type="'text'" :placeholder="''" :label="'성별'" :value="'여성'" :disabled="true" :readonly="true" />
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">휴대폰 번호</strong>
            <CInputs :id="'mobile'" :type="'text'" :placeholder="'(-) 없이 숫자를 입력하세요.'" :label="'휴대폰'" :value="'010-1234-5678'" :disabled="true" :readonly="true" />
            <button type="button" class="common-buttons authentication">변경</button>
          </div>
        </article>

        <article>
          <div class="border-wrap">
            <strong class="title">이름</strong>
            <CInputs :id="'name'" :type="'text'" :placeholder="'이름을 입력하세요.'" :value="'홍길동'" :disabled="false" :readonly="false" />
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">생년월일</strong>
            <CInputs :id="'birth'" :type="'text'" :placeholder="'생년월일을 입력하세요.'" :label="'생년월일'" :value="'2000-01-01'" :disabled="false" :readonly="false" />
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">성별</strong>
            <CMultiple
              :id="['sex']"
              :type="'radio'"
              :title="'성별'"
              :style="'border black'"
              :name="'sex'"
              :label="['남자', '여자']"
              :checked="[true, false]"
              :disabled="false"
              :confirm="false"
            />
          </div>
        </article>
        <article>
          <div class="dual-flex">
            <div class="border-wrap">
              <strong class="title">국가번호</strong>
              <CSelectBox :coptions="[{ val: 'value', txt: '대한민국' }]" :title="'국가번호'" :disabled="true" :changed="false" />
            </div>
            <div class="border-wrap">
              <strong class="title">휴대폰 번호</strong>
              <CInputs :id="'mobile'" :type="'text'" :placeholder="'(-) 없이 숫자를 입력하세요.'" :label="'휴대폰'" :value="'010-1234-5678'" :disabled="false" :readonly="false" />
              <button type="button" class="common-buttons authentication">인증문자 발송</button>
            </div>
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">인증번호</strong>
            <CInputs :id="'certNumberComplete2'" :type="'text'" :placeholder="'123456'" :label="'인증번호'" :value="'712852'" :disabled="false" :readonly="false" />
            <button type="button" class="common-buttons authentication">인증번호 확인</button>
          </div>
        </article>

        <article>
          <div class="border-wrap">
            <strong class="title">회원유형</strong>
            <CInputs :id="'type'" :type="'text'" :placeholder="''" :label="'회원유형'" :value="'대학생'" :disabled="true" :readonly="true" />
          </div>
          <p class="warn-text">회원유형 변경이 필요하신 경우 Help Desk 02) 6323-9000로 문의하세요.</p>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">소속 학교</strong>
            <CInputs :id="'partner'" :type="'text'" :placeholder="'파트너사를 검색하세요.'" :label="'소속 학교'" :value="'서울대학교'" :disabled="false" :readonly="true" />
            <CButtons class="search" :type="'Icon'" />
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">재학증명서</strong>
            <CInputs :id="''" :type="'text'" :placeholder="''" :label="''" :value="'건축과 김선희 2020학번 재학증명서.PDF'" :disabled="false" :readonly="true" />
            <!-- <button type="button" class="common-buttons authentication">파일 업로드</button> -->
            <span class="file-upload">
              <label for="fileUpload" class="common-buttons authentication">파일 업로드</label>
              <input id="fileUpload" type="file" class="blind" />
            </span>
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">주전공</strong>
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
