<template>
<div class="archiveProduct">
<div class="pImg">
    <img v-bind:src="image" alt="">
    <div class="like">
          <font-awesome-icon icon="heart" />
    </div>
</div>
<div class="details">
    <h4 class="price">
        {{price}}
    </h4>
    <h5 class="name">
        {{pname}}
    </h5>
    <div class="metaData">
        <span>
            {{location}}
        </span>
        <span>
            {{date}}
        </span>
    </div>
</div>
</div>
</template>

<script>
    export default {
        props:['like','price','pname','location','date','image']
    }
</script>

<style scoped>

</style>