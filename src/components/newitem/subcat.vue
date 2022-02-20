<template>
<section class="subcat">
    <div class="row head">
        <div class="col-md-6">
            <font-awesome-icon icon="arrow-left"/>
        </div>
        <div class="col-md-6">
            <div class="headtext">
                <h4>
                post your ads</h4>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="prntCat">
                <h5>
                    Electronics
                </h5>
            </div>
            <ul class="row subcategories">
                <li class="col-md-12">
                    <div class="singleCat">
                        <font-awesome-icon icon="mobile"/>
                        <span>Mobile</span>
                    </div>
                    <div class="forIcon">
                        <font-awesome-icon icon="angle-right"/>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</section>
</template>

<script>
import { useRoute } from 'vue-router';
import { computed } from "vue";
    export default {
       setup() {
    const route = useRoute();

    const id = computed(() => route.params.id);
    return {
      id,
    };
  },
    }
</script>

<style scoped>

</style>