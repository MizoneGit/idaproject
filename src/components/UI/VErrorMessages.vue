<template>
  <div v-if="error" class="errors">{{ error }}</div>
</template>

<script>
export default {
  name: "v-error-messages",
  props: {
    error: [ String, Boolean ]
  }
}
</script>

<style scoped>
  .errors {
    font-weight: 400;
    font-size: 12px;
    letter-spacing: -0.02em;
    color: #FF8484;
  }
</style>