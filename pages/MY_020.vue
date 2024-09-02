<script setup></script>

<template>
  <div class="page-layout">
    <div class="title-box">
      <h2 class="title">내 정보</h2>
      <p class="paragraph"><strong>인공지능 써니</strong>님 안녕하세요.</p>
    </div>

    <CTabs class="type-01" :index="1" :title="['회원정보', '이용약관', '이용내역', '가족계정']" />

    <div class="service-wrap">
      <article>
        <div class="box">
          <strong class="title">통합 ID</strong>
          <a href="" class="link">이용약관</a>
        </div>
      </article>
      <article>
        <div class="box">
          <strong class="title">mySUNI</strong>
          <a href="" class="link">이용약관</a>
        </div>
      </article>
      <article>
        <div class="box">
          <strong class="title">mySUNI ON</strong>
          <a href="" class="link">이용약관</a>
        </div>
      </article>
      <article>
        <div class="box">
          <strong class="title">이천 포럼</strong>
          <a href="" class="link">이용약관</a>
        </div>
      </article>
      <div class="text-paragraph">통합ID탈퇴를 원하시면&nbsp;<a href="">회원탈퇴</a>를 신청하세요.</div>
    </div>
  </div>
</template>
