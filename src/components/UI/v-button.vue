<template>
  <button class="btn" :class="{'btn--no-active': !isActive }">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "v-button",
    props: {
      isActive: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="scss">
  .btn {
    background: #7BAE73;
    color: #FFFFFF;
    border-radius: 10px;
    transition: all 0.3s linear;
    padding: 10px 16px;
    border: none;
    font-weight: 600;
    font-size: 14px;
    text-align: center;

    &--active {
      background: #7BAE73;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    &--no-active {
      background: #EEEEEE;
      color: #B4B4B4;
      pointer-events: none;
      cursor: default;
    }

    &:hover {
      background: #90CC86;
    }
  }
</style>