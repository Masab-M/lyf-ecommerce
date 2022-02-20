<template>
  <div class="logo">
    <img src="../../assets/IMG/logo.png" alt="" />
  </div>
  <div class="signHead">
      <h3>
        {{regHead}}
      </h3>
  </div>
</template>

<script>
export default {
    props: ["regHead"],
  setup() {
    return {};
  },
};
</script>

<style scoped>
</style>