<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    default: ""
  }
});
</script>

<template>
  <div class="common-textarea">
    <textarea :placeholder="props.placeholder"></textarea>
  </div>
</template>
