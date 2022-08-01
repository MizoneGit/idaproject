<template>
  <label class="label" :class="{'label--required': required }">
    <slot></slot>
  </label>
</template>

<script>
  export default {
    name: "v-label",
    props: {
      required: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="scss">
  .label {
    font-weight: 400;
    font-size: 12px;
    letter-spacing: -0.02em;
    color: #49485E;

    &--required {
      position: relative;

      &::after {
        position: absolute;
        content: '';
        width: 4px;
        height: 4px;
        background: #FF8484;
        border-radius: 100%;
      }
    }
  }
</style>