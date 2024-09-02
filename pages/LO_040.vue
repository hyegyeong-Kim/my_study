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
      <p class="paragraph">안전한 비밀번호를 사용하여, 개인정보를 더 강력하게 보호하세요.</p>
    </div>

    <div class="form-wrap narrow no-border">
      <form>
        <article>
          <div class="gray-box">
            <div class="bullet-list">
              <ul>
                <li>회원님의 소중한 개인정보를 보호하고 개인정보 도용으로 인한 피해를 예방하기 위하여, <strong>%6개월% 주기 비밀번호 변경을 권고</strong>드립니다.</li>
                <li>지금 비밀번호를 변경하시거나 %6개월% 후 다시 묻기를 선택하시면 기간 경과 후 다시 안내를 드립니다.</li>
              </ul>
            </div>
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">신규 비밀번호</strong>
            <CInputs :id="'password'" :type="'password'" :placeholder="'비밀번호를 입력하세요.'" :label="'비밀번호'" :value="''" :disabled="false" :readonly="false" />
            <CButtons class="pass-s" type="Icon" />
            <!-- 눈끄기: pass-h 클래스로 변경 -->
            <span class="validation">적합</span>
            <!-- 부적합 : improper 클래스 추가 -->
          </div>
        </article>
        <article>
          <div class="border-wrap">
            <strong class="title">신규 비밀번호 확인</strong>
            <CInputs
              :id="'passwordConfirm'"
              :type="'password'"
              :placeholder="'다시 한번 비밀번호를 입력하세요.'"
              :label="'비밀번호'"
              :value="''"
              :disabled="false"
              :readonly="false"
            />
            <CButtons class="pass-s" type="Icon" />
            <!-- 눈끄기: pass-h 클래스로 변경 -->
            <span class="validation">적합</span>
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
          <CButtons class="big dark" :title="'%6개월% 후 다시 묻기'" />
          <CButtons class="big gray" :title="'비밀번호 변경'" disabled />
          <CButtons class="big point" :title="'비밀번호 변경'" />
        </div>
      </form>
    </div>
  </div>
</template>
