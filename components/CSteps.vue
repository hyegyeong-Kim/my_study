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
  <ol class="common-steps">
    <li v-for="(item, idx) in props.title" :key="idx" :class="{ active: props.index === idx }">
      <span class="bullet">{{ idx+1 }}</span>
      <strong class="title">{{ item }}</strong>
    </li>
  </ol>
</template>
