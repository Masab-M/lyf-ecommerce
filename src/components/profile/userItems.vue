<template>
  <div class="username">
    <div class="edit">
      <h4>Julia Ann</h4>
      <router-link to="/edit/5">
      <a href="#" v-if="user" class="btn Edit">Edit</a>
      </router-link>
    </div>

    <div class="row" v-if="notitems">
      <div
        class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12"
        v-for="index in 8"
        :key="index"
      >
        <SingleArchive
          :image="'@/assets/IMG/product.png'"
          :like="0"
          :price="300"
          :pname="'Iphone'"
          :location="'pakistan'"
          :date="'FEB 25'"
        ></SingleArchive>
      </div>
      <div class="readmore">
        <a href="#" class="btn more">View More</a>
      </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="notItems">
                <div class="center">
 <img src="../../assets/IMG/SpeechBubble.png" class="img-fluid" alt="">
                <h5>No Ads Posted Yet</h5>
                </div>
               
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import SingleArchive from "../home/SingleArchive.vue";

export default {
    noitems:true,
  setup() {
    return {
      user: true,
    };
  },
  components: { SingleArchive },
};
</script>

<style scoped>
.username h4 {
  padding: 14px 0px 26px 0px;
  font-weight: 500;
  margin: 0;
  font-size: 32px;
  margin-right: 60px;
  color: #363636;
}
.username a {
  text-decoration: none;
}
.readmore a.more {
  font-size: 16px;
  padding: 13px 52px;
  background-color: var(--secondary);
  font-weight: bolder;
  color: #fff;
}
.readmore {
  text-align: center;
  padding: 20px 26px;
}
.edit {
  display: flex;
  align-items: center;
}

.edit a.Edit {
  font-size: 12px;
  padding: 7px 25px;
  border: 1px solid;
  color: #443688;
}
.notItems {
    margin: auto;
    display: grid;
    text-align: center;
    height: 100vh;
    border: 1px solid #0000001f;
}

.center {
    margin: auto;
}

.notItems h5 {
    font-size: 35px;
    margin-top: 50px;
    color: #36363675;
    font-weight: normal;
}
</style>