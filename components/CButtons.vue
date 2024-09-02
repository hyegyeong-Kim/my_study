<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "버튼"
  },
  type: {
    type: String,
    default: ""
  }
});
</script>

<template>
  <!-- 아이콘 버튼 : type='Icon'-->
  <button type="button" :class="props.type == 'Icon' ? 'common-icon' : 'common-buttons'">{{ props.title }}</button>
</template>
