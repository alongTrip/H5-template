<template>
  <div class="pageFullScreen" id="xxxFullScreen">
    <div class="static" v-bind:class="{ 'active': isActive, 'text-danger': hasError }"></div>
    <div :class="classObj"></div>
    <div v-bind:class="[{ active: isActive }, 'errorClass']"></div>
  </div>
</template>
<script>
export default {
  name: "PageFullScreen",
  data() {
    return {
      isActive: true,
      hasError: true,
      error: null
    };
  },
  mounted() {},
  computed: {
    classObj() {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error === null
      }
    }
  }
};
</script>
<style>
/* pageFullScreen在index.css */
#xxxFullScreen {
  background-color: #eee;
}
</style>
