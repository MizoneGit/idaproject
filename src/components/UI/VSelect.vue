<template>
  <select
      v-model="modelValue"
      @change="changeOption"
      class="select"
  >
    <option value="" disabled>По умолчанию</option>
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "v-select",
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style scoped lang="scss">
.select {
  padding: 10px 32px 10px 16px;
  outline: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: none;
  appearance: none;
  position: relative;
  color: #B4B4B4;
  background: url('@/assets/images/select-arrow.svg') no-repeat right;
  background-position-x: calc(100% - 16px);

  &:after {
    content: "";
    position: absolute;
    right: 8px;
    top: 4px;
    z-index: 1;
    text-align: center;
    width: 5px;
    height: 5px;
  }
}
</style>