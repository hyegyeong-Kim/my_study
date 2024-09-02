<script setup>
/* LNB 3depth 메뉴 활성화 기능 Add 23.11.13 */
onMounted(() => {
  var active_chk = document.querySelectorAll('.depth3 a');
  active_chk.forEach(function(o){
    o.addEventListener('click', function(){
      if(!o.classList.contains('active')){
        for(var i=0; i<active_chk.length; i++){
          active_chk[i].classList.remove('active');
        }
        o.classList.add('active');
      }
    });
  });
});
/* //LNB 3depth 메뉴 활성화 기능 Add 23.11.13 */

function onToggleCategory(event) {
  event.currentTarget.classList.toggle("active");
}

function onToggleFavorite(event) {
  event.stopPropagation(); // 23.11.13 추가
  event.currentTarget.classList.toggle("active");
  if (event.currentTarget.classList.contains("active")) {
    event.currentTarget.innerHTML = "즐겨찾기 제거";
  } else {
    event.currentTarget.innerHTML = "즐겨찾기 추가";
  }
}

function onToggleSidebar(event) {
  event.currentTarget.classList.toggle("hide");
  if (event.currentTarget.classList.contains("hide")) {
    event.currentTarget.innerHTML = "sidebar 열기";
  } else {
    event.currentTarget.innerHTML = "sidebar 닫기";
  }
}
</script>

<template>
  <section class="sidebar">
    <div class="top">
      <h1 class="h1">
        <a href="#none" class="logo">MY SUNI</a>
      </h1>
      <div class="user">
        <div class="greetings">
          <p><strong>관리자</strong>님 안녕하세요!</p>
          <button type="button" class="logout">로그아웃</button>
        </div>
        <div class="date">최근 접속일 : 2023-06-27</div>
      </div>
    </div>
    <div class="lnb-wrap">
      <div class="lnb">
        <ul class="depth1">
          <li>
            <a href="#none" @click.prevent="onToggleCategory($event)">즐겨찾기</a>
            <ul class="depth3">
              <li>
                <a href="#none">회원 조회<button type="button" @click.prevent="onToggleFavorite($event)">즐겨찾기 추가</button></a>
              </li>
              <li>
                <a href="#none">LRS 관리자 권한<button type="button" @click.prevent="onToggleFavorite($event)">즐겨찾기 추가</button></a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="depth1">
          <li>
            <a href="#none" @click.prevent="onToggleCategory($event)">전체메뉴</a>
            <ul class="depth2">
              <li>
                <a href="#none" @click.prevent="onToggleCategory($event)">회원</a>
                <ul class="depth3">
                  <li>
                    <a href="#none" class="active">회원 조회<button type="button" @click.prevent="onToggleFavorite($event)">즐겨찾기 추가</button></a><!-- 선택된 메뉴에 active 클래스 추가 23-11-03 -->
                  </li>
                  <li>
                    <a href="#none">회원 등록(통합ID)<button type="button" @click.prevent="onToggleFavorite($event)">즐겨찾기 추가</button></a>
                  </li>
                  <li>
                    <a href="#none">SK구성원 조회<button type="button" @click.prevent="onToggleFavorite($event)">즐겨찾기 추가</button></a>
                  </li>
                  <li>
                    <a href="#none">SK구성원 등록<button type="button" @click.prevent="onToggleFavorite($event)">즐겨찾기 추가</button></a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none" @click.prevent="onToggleCategory($event)">관리자 권한</a>
                <ul class="depth3">
                  <li>
                    <a href="#none">mySUNI 관리자 권한<button type="button" @click.prevent="onToggleFavorite($event)">즐겨찾기 추가</button></a>
                  </li>
                  <li>
                    <a href="#none">LMS 관리자 권한<button type="button" @click.prevent="onToggleFavorite($event)">즐겨찾기 추가</button></a>
                  </li>
                  <li>
                    <a href="#none">LRS 관리자 권한<button type="button" @click.prevent="onToggleFavorite($event)">즐겨찾기 추가</button></a>
                  </li>
                  <li>
                    <a href="#none">이천포럼 관리자 권한<button type="button" @click.prevent="onToggleFavorite($event)">즐겨찾기 추가</button></a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none" @click.prevent="onToggleCategory($event)">약관</a>
                <ul class="depth3">
                  <li>
                    <a href="#none">mySUNI 통합 약관<button type="button" @click.prevent="onToggleFavorite($event)">즐겨찾기 추가</button></a>
                  </li>
                  <li>
                    <a href="#none">LMS 약관<button type="button" @click.prevent="onToggleFavorite($event)">즐겨찾기 추가</button></a>
                  </li>
                  <li>
                    <a href="#none">LRS 약관<button type="button" @click.prevent="onToggleFavorite($event)">즐겨찾기 추가</button></a>
                  </li>
                  <li>
                    <a href="#none">이천포럼 약관<button type="button" @click.prevent="onToggleFavorite($event)">즐겨찾기 추가</button></a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none" @click.prevent="onToggleCategory($event)">채널</a>
                <ul class="depth3">
                  <li>
                    <a href="#none">채널 조회<button type="button" @click.prevent="onToggleFavorite($event)">즐겨찾기 추가</button></a>
                  </li>
                  <li>
                    <a href="#none">채널 등록<button type="button" @click.prevent="onToggleFavorite($event)">즐겨찾기 추가</button></a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none" @click.prevent="onToggleCategory($event)">컨텐츠</a>
                <ul class="depth3">
                  <li>
                    <a href="#none">공지사항<button type="button" @click.prevent="onToggleFavorite($event)">즐겨찾기 추가</button></a>
                  </li>
                  <li>
                    <a href="#none">문의사항<button type="button" @click.prevent="onToggleFavorite($event)">즐겨찾기 추가</button></a>
                  </li>
                  <li>
                    <a href="#none">FAQ<button type="button" @click.prevent="onToggleFavorite($event)">즐겨찾기 추가</button></a>
                  </li>
                  <li>
                    <a href="#none">매뉴얼<button type="button" @click.prevent="onToggleFavorite($event)">즐겨찾기 추가</button></a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none" @click.prevent="onToggleCategory($event)">시스템발송</a>
                <ul class="depth3">
                  <li>
                    <a href="#none">E-Mail 발송<button type="button" @click.prevent="onToggleFavorite($event)">즐겨찾기 추가</button></a>
                  </li>
                  <li>
                    <a href="#none">E-Mail 발송 이력<button type="button" @click.prevent="onToggleFavorite($event)">즐겨찾기 추가</button></a>
                  </li>
                  <li>
                    <a href="#none">SMS 발송<button type="button" @click.prevent="onToggleFavorite($event)">즐겨찾기 추가</button></a>
                  </li>
                  <li>
                    <a href="#none">SMS 발송 이력<button type="button" @click.prevent="onToggleFavorite($event)">즐겨찾기 추가</button></a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none" @click.prevent="onToggleCategory($event)">공통코드</a>
                <ul class="depth3">
                  <li>
                    <a href="#none">공통코드 조회<button type="button" @click.prevent="onToggleFavorite($event)">즐겨찾기 추가</button></a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none" @click.prevent="onToggleCategory($event)">배치</a>
                <ul class="depth3">
                  <li>
                    <a href="#none">배치 관리<button type="button" @click.prevent="onToggleFavorite($event)">즐겨찾기 추가</button></a>
                  </li>
                  <li>
                    <a href="#none">배치 이력<button type="button" @click.prevent="onToggleFavorite($event)">즐겨찾기 추가</button></a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none" @click.prevent="onToggleCategory($event)">시스템 이력</a>
                <ul class="depth3">
                  <li>
                    <a href="#none">개인정보열람 이력<button type="button" @click.prevent="onToggleFavorite($event)">즐겨찾기 추가</button></a>
                  </li>
                  <li>
                    <a href="#none">시스템 오류 이력<button type="button" @click.prevent="onToggleFavorite($event)">즐겨찾기 추가</button></a>
                  </li>
                  <li>
                    <a href="#none">관리자 오류 이력<button type="button" @click.prevent="onToggleFavorite($event)">즐겨찾기 추가</button></a>
                  </li>
                  <li>
                    <a href="#none">API 사용 이력<button type="button" @click.prevent="onToggleFavorite($event)">즐겨찾기 추가</button></a>
                  </li>
                  <li>
                    <a href="#none">API 오류 이력<button type="button" @click.prevent="onToggleFavorite($event)">즐겨찾기 추가</button></a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none" @click.prevent="onToggleCategory($event)">기타</a>
                <ul class="depth3">
                  <li>
                    <a href="#none">인증 SSO 관리<button type="button" @click.prevent="onToggleFavorite($event)">즐겨찾기 추가</button></a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <button type="button" class="toggle-sidebar" @click.prevent="onToggleSidebar($event)">sidebar 닫기</button>
  </section>
</template>
