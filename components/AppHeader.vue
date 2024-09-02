<script setup>
const languages = [
  { val: "value", txt: "한국어" },
  { val: "value", txt: "English" },
  { val: "value", txt: "中文" },
  { val: "value", txt: "日本語" }
];
</script>

<template>
  <header id="header">
    <h1 class="h1">
      <a href="/"><img src="@/assets/images/common/logo.png" alt="" /></a>
    </h1>
    <div v-if="languages" class="lang">
      <CSelectBox :coptions="languages" />
    </div>
  </header>
</template>
