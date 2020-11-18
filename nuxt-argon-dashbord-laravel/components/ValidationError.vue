<template>
  <span v-if="errors && errors.length">
    <small class="argon-error" v-text="errors[0]"/>
  </span>
</template>

<script>
  export default {
    props: {
      errors: {
        type: Array,
        default: () => ([])
      }
    }
  }
</script>

<style lang="scss">
    .argon-error {
      position: relative;
      bottom: 25px;
      color: #fb6340;
      }
  
</style>
