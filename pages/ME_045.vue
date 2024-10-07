<script setup>
definePageMeta({
  layout: "no-footer"
});
</script>

<template>
  <div class="page-layout">
    <div class="title-box">
      <h2 class="title">%서비스명% 서비스 신청 완료</h2>
      <p class="paragraph">서비스 신청이 완료되었습니다.</p>
    </div>
    <div class="visual-box">
      <img src="@/assets/images/visual/complete_04.png" alt="" />
    </div>
    <p class="explain ac">잠시 후 mySUNI 서비스 화면으로 이동합니다.</p>
    <AppFooter />
  </div>
</template>
