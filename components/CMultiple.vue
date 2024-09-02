<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "radio"
  },
  style: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: "네임"
  },
  id: {
    type: Array,
    default: () => {}
  },
  label: {
    type: Array,
    default: () => {}
  },
  disabled: {
    type: Boolean,
    default: false
  },
  checked: {
    type: Array,
    default: () => {}
  },
  confirm: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div class="check-wrap" :class="style">
    <label v-for="(item, index) in props.label" :key="index" :for="props.id[index]" class="item">
      <input :id="props.id[index]" :type="props.type" :name="props.name" :disabled="props.disabled" :readonly="props.readonly" :checked="checked[index]" />
      <strong class="label">{{ item }}</strong>
    </label>
  </div>
</template>
