<template>
  <div class="row container-fluid itemNav">
    <div class="col-md-12">
      <ul class="itemSections">
        <router-link tag="li" active-class="active"  to="/item">live</router-link>
        <router-link  tag="li" active-class="active"  to="/item/pending">Pending</router-link>
        <router-link  tag="li" active-class="active"  to="/item/rejected">Rejected</router-link>
      </ul>
    </div>
    <div class="col-md-12">
      <div class="row filter">
        <div class="col-md-6">
          <div class="form-group">
            <input type="text" placeholder="Search by Ad Title" name="" id="" />
            <label for="">
              <font-awesome-icon icon="search" />
            </label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="sort">
            <label for="">Sort by</label>
            <select name="" id="">
              <option value="">Date Published</option>
              <option value="">Ascending</option>
              <option value="">Decending</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
@media (min-width:320px)  {
  .row.filter input {
    width: 238px;
}
ul.itemSections a {
  padding: 0px;
}
  /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ }
@media (min-width:480px)  { 
    .row.filter input {
    width: 300px;
}
ul.itemSections a {
  padding: 0px 12px;
}
  /* smartphones, Android phones, landscape iPhone */ }
@media (min-width:600px)  { 
    .row.filter input {
    width: 300px;
}
ul.itemSections a {
  padding: 0px 12px;
}
  /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ }
@media (min-width:801px)  { 
    .row.filter input {
    width: 300px;
}ul.itemSections a {
  padding: 0px 12px;
}
  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
@media (min-width:1025px) { 
    .row.filter input {
    width: 300px;
}ul.itemSections a {
  padding: 0px 12px;
}
  /* big landscape tablets, laptops, and desktops */ }
@media (min-width:1281px) { 
    .row.filter input {
    width: 300px;
}
  /* hi-res laptops and desktops */ }
select {
  -webkit-appearance: none;
  appearance: none;
}
.sort {
  position: relative;
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
.row.filter input {
    font-size: 14px;
    border: 1px solid #d1d1d1;
    padding: 9px 10px 9px 41px;
    outline: none;
}

.form-group label {
    position: absolute;
    left: 13px;
    top: 10px;
    color: #7f7f7f;
}

.form-group {
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
ul.itemSections {
  padding: 0px;
  border-bottom: 1px solid #e5e5e5;
  list-style: none;
  display: flex;
  text-align: center;
  width: fit-content;
}

.row.itemNav {
  padding: 0px 41px 29px 41px;
}

ul.itemSections a {
  margin-right: 36px;
}
ul.itemSections a:last-child {
  margin: 0px;

}
ul.itemSections a {
  text-decoration: none;
  text-transform: uppercase;
  color: var(--black);
  font-weight: 500;
  font-size: 16px;
}
/* ul.itemSections a.router-link-exact-active::after {
  top: 1.5px;
  position: relative;
  margin-top: 6px;
  content: "";
  background-color: #ff1500;
  width: 40px;
  display: block;
  height: 2px;
  border-radius: 100px;
} */
ul.itemSections a.router-link-exact-active {
  color: #ff1500;
  border-bottom: 2px solid;
}
</style>
