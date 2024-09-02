<script setup></script>

<template>
  <div class="page-layout middle">
    <!-- middle : 중앙 배치가 필요한 콘텐츠의 경우 클래스 추가 -->
    <div class="title-box">
      <h2 class="title">mySUNI 회원가입</h2>
      <p class="paragraph">회원 유형을 선택하세요.</p>
    </div>
    <div class="member-type-select">
      <a href="/ME_010" class="link">
        <strong class="title member">구성원</strong>
        <p class="context">SK그룹사 임원/직원</p>
      </a>
      <a href="/ME_010" class="link">
        <strong class="title user">일반 사용자</strong>
        <p class="context">파트너사, SK구성원 가족, 사회적 기업, 대학생</p>
      </a>
    </div>
  </div>
</template>
