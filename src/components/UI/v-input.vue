<template>
  <input :value="modelValue" @input="updateInput" class="input" />
</template>

<script>
  export default {
    name: "v-input",
    props: {
      modelValue: [String, Number]
    },
    methods: {
      updateInput(event) {
        this.$emit('update:modelValue', event.target.value);
      }
    }
  }
</script>

<style scoped lang="scss">
  .input {
    background: #FFFEFB;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: none;
    color: #3F3F3F;
    padding: 10px 16px;
    font-weight: 400;
    font-size: 14px;

    &::-webkit-input-placeholder {
      color: #B4B4B4;
    }
  }
</style>