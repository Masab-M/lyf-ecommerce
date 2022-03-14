<template>
  <section class="searchItemsSections pr-0">
    <div class="headSearch">
      <div class="searchTitle">
        <h5>Iphone 12 Pro Max</h5>
        <font-awesome-icon icon="magnifying-glass" />
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
    <div class="row container-fluid searchItem" style="padding: 0px">
      <div
        class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 rightPadding"
        v-for="index in 6"
        :key="index"
      >
        <SingleArchive
          :image="'@/assets/IMG/product.png'"
          :like="0"
          :price="300"
          :pname="'Iphone'"
          :location="'pakistan'"
          :date="'FEB 25'"
        />
      </div>
    </div>
    <div class="related">
        <h5>Most Recent Ads</h5>
    </div>
     <div class="row container-fluid searchItems" style="padding: 0px">
      <div
        class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 rightPadding"
        v-for="index in 3"
        :key="index"
      >
        <SingleArchive
          :image="'@/assets/IMG/product.png'"
          :like="0"
          :price="300"
          :pname="'Iphone'"
          :location="'pakistan'"
          :date="'FEB 25'"
        />
      </div>
    </div>
    <Pagination/>
  </section>
</template>

<script>
import SingleArchive from "../home/SingleArchive.vue";
import Pagination from "./pagination.vue";

export default {
  setup() {
    return {};
  },
  components: { SingleArchive, Pagination },
};
</script>

<style scoped>
select {
  -webkit-appearance: none;
  appearance: none;
}
.sort {
  position: relative;
}
.searchItem a{
  text-decoration: none;
}
.searchTitle {
  display: flex;
}
.searchItems a{
  text-decoration: none;
}
.headSearch {
  display: flex;
  justify-content: space-between;
}
.related h5 {
    font-size: 22px;
    margin-top: 35px;
    margin-bottom: 0;
}
.searchTitle h5 {
  font-size: 25px;
  font-weight: 400;
  margin-right: 30px;
}

.searchTitle svg {
  font-size: 25px;
  color: #fc6748;
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
.searchItemsSections{
  padding: 0px 20px;
}
.searchTitle {
  display: flex;
}

.headSearch {
     display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #bebebe;
    flex-wrap: wrap;
}

.searchTitle h5 {
  font-size: 25px;
  font-weight: 400;
  margin-right: 30px;
}

.searchTitle svg {
  font-size: 25px;
  color: #fc6748;
}
.rightPadding{
  padding-right: 0px;
}
</style>