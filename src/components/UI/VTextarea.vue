<template>
  <textarea
      :value="modelValue"
      @input="updateTextarea"
      class="textarea"
  >
  </textarea>
</template>

<script>
  export default {
    name: "v-textarea",
    props: {
      modelValue: {
       type: String,
      }
    },
    methods: {
      updateTextarea(event) {
        this.$emit('update:modelValue', event.target.value);
      }
    }
  }
</script>

<style scoped lang="scss">
  .textarea {
    background: #FFFEFB;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: none;
    padding: 10px 16px;
    font-weight: 400;
    font-size: 14px;
    color: #3F3F3F;
    resize: none;

    &::-webkit-input-placeholder {
      color: #B4B4B4;
    }
  }
</style>