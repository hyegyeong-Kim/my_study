<script setup>
const props = defineProps({
  index: {
    type: Number,
    default: 0
  },
  title: {
    type: Array,
    default: () => {}
  }
});
</script>

<template>
  <div class="common-tabs">
    <button v-for="(item, idx) in props.title" :key="idx" type="button" :class="{ active: props.index === idx }">{{ props.title[idx] }}</button>
  </div>
</template>
