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
.logo img {
    width: 80px;
    margin-top: 65px;
    margin-bottom: 24px;
}

.signHead h3 {
    font-size: 31px;
    font-weight: bold;
    margin-bottom: 28px;
}
</style>