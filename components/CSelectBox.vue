<script setup>
const props = defineProps({
  id: {
    type: String,
    default: ""
  },
  coptions: {
    type: Array,
    default: () => {}
  },
  disabled: {
    type: Boolean,
    default: false
  },
  changed: {
    type: Boolean,
    default: false
  }
});

const selectRef = ref();

onMounted(() => {
  changeSelect();
});

function changeSelect() {
  if (selectRef._value.value === "default") {
    selectRef._value.classList.add("default");
  } else {
    selectRef._value.classList.remove("default");
  }
  blurSelect();
}

function blurSelect() {
  selectRef._value.blur();
}
</script>

<template>
  <label class="select-wrap">
    <select :id="props.id" ref="selectRef" :disabled="props.disabled" class="default" @change="changeSelect">
      <option v-for="(select, i) in props.coptions" :key="i" :value="select.val" :selected="select.selected">{{ select.txt }}</option>
    </select>
  </label>
</template>
