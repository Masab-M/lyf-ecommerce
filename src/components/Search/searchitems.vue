<template>
<section>
    <div class="headSearch">
        <div class="searchTitle">
        <h5>Iphone 12 Pro Max</h5>
        <font-awesome-icon icon="magnifying-glass"/>
        </div>
        <div class="sort">
            <label for="">Sort by</label>
            <select name="" id="">
              <option value="">Date Published</option>
              <option value="">Ascending</option>
              <option value="">Decending</option>
            </select>
          </div>
    </div>
     <div class="row">
    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" v-for="index in 8" :key="index">
         <SingleArchive :image="'@/assets/IMG/product.png'" :like="0" :price="300" :pname="'Iphone'" :location="'pakistan'" :date="'FEB 25'" />
    </div>
</div>
</section>

</template>

<script>
import SingleArchive from "../home/SingleArchive.vue"


export default {
    setup() {
        return {};
    },
    components: { SingleArchive }
}
</script>

<style scoped>
select {
  -webkit-appearance: none;
  appearance: none;
}
.sort {
  position: relative;
}
.sort select {
    background: none;
    border: none;
    color: #7f7f7f;
    font-size: 13px;
    outline: none;
    padding: 10px 20px 10px 10px;
}
.sort::after {
  content: "";
    font-size: 1rem;
    font-family: "fontAwesome";
    top: 7px;
    color: #7f7f7f;
    right: 0px;
    position: absolute;
}

.sort {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.sort label {
    font-size: 17px;
    text-transform: uppercase;
}
</style>