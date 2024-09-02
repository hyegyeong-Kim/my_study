<script setup>
const props = defineProps({
  id: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: ""
  },
  label: {
    type: String,
    default: ""
  },
  value: {
    type: String,
    default: ""
  },
  placeholder: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <label :for="props.id" class="input-wrap">
    <input :id="props.id" :type="props.type" :value="props.value" :placeholder="props.placeholder" :disabled="props.disabled" :readonly="props.readonly" />
  </label>
</template>
