<template>

</template>

<script>
import { useRoute } from 'vue-router';
import { computed } from "vue";
    export default {
        setup() {
    const route = useRoute();

    const params = computed(() => route.params);
    return {
    params
    };
  }
    }
</script>

<style scoped>

</style>