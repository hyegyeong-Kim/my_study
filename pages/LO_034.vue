<script setup>
function onToggleTooltip(event) {
  event.currentTarget.classList.toggle("active");
}
function onCloseTooltip(event) {
  event.currentTarget.parentNode.previousSibling.classList.toggle("active");
}
</script>

<template>
  <div class="page-layout">
    <div class="title-box">
      <h2 class="title">비밀번호 재설정</h2>
      <p class="paragraph">본인 확인이 완료되었습니다. 비밀번호를 다시 설정하세요.</p>
    </div>

    <div class="form-wrap narrow no-border">
      <form>
        <article>
          <div class="border-wrap">
            <strong class="title required">비밀번호 입력</strong>
            <CInputs :id="'password'" :type="'password'" :placeholder="'비밀번호를 입력하세요.'" :label="'비밀번호'" :value="''" :disabled="false" :readonly="false" />
            <CButtons class="pass-s" type="Icon" />
            <!-- 눈끄기: pass-h 클래스로 변경 -->
            <span class="validation">적합</span>
            <!-- 부적합 : improper 클래스 추가 -->
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title required">비밀번호 입력 확인</strong>
            <CInputs
              :id="'passwordConfirm'"
              :type="'password'"
              :placeholder="'다시 한번 비밀번호를 입력하세요.'"
              :label="'비밀번호'"
              :value="''"
              :disabled="false"
              :readonly="false"
            />
            <CButtons class="pass-h" type="Icon" />
            <!-- 눈끄기: pass-h 클래스로 변경 -->
            <span class="validation improper">부적합</span>
            <!-- 부적합 : improper 클래스 추가 -->
          </div>
          <div class="tooltip-box">
            <button type="button" class="title" @click.prevent="onToggleTooltip($event)">비밀번호 생성 규칙</button>
            <div class="popper">
              <div class="bullet-list">
                <strong>비밀번호 생성 규칙</strong>
                <ul>
                  <li>영문자·숫자·특수문자 2개 이상 조합 10자리 이상 입력</li>
                  <li>영문자·숫자·특수문자 3개 이상 조합 8자리 이상 입력</li>
                </ul>
                <strong>사용 불가한 비밀번호</strong>
                <ul>
                  <li>동일한 숫자를 3개 이상 사용</li>
                  <li>키보드에서 문자·숫자를 연속으로 3자 이상 사용</li>
                  <li>최근 3회 내 사용한 비밀번호와 동일한 비밀번호 사용</li>
                </ul>
              </div>
              <button type="button" class="close" @click.prevent="onCloseTooltip($event)">닫기</button>
            </div>
          </div>
        </article>

        <div class="button-box">
          <CButtons class="big dark" :title="'취소'" />
          <CButtons class="big gray" :title="'비밀번호 재설정'" disabled />
          <CButtons class="big point" :title="'비밀번호 재설정'" />
        </div>
      </form>
    </div>
  </div>
</template>
