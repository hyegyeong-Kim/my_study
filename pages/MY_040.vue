<script setup></script>

<template>
  <div class="page-layout">
    <div class="title-box">
      <h2 class="title">내 정보</h2>
      <p class="paragraph"><strong>인공지능 써니</strong>님 안녕하세요.</p>
    </div>

    <CTabs class="type-01" :index="3" :title="['회원정보', '이용약관', '이용내역', '가족계정']" />

    <div class="form-wrap narrow no-border no-margin">
      <article>
        <div class="id-box">
          <div class="row">
            <div class="text">
              <strong class="title">김*희</strong>
              <span class="context">mySU**@sk.com</span>
            </div>
            <div class="suffix">관계 : 모</div>
          </div>
          <div class="row">
            <div class="text">
              <strong class="title">김*희</strong>
              <span class="context">longemailmySU**@sk.com</span>
            </div>
            <div class="suffix">관계 : 자녀</div>
          </div>
          <div class="row">
            <div class="text">
              <strong class="title">김*희</strong>
              <span class="context">veryverylongemailaddressmySU**@sk.com</span>
            </div>
            <div class="suffix">관계 : 배우자</div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>
