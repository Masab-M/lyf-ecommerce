<template>
<section class="footer">
<div class="row">
<div class="col-md-3">
    <div class="logo">
        <img :src="logo[0]" alt="">
        <ul class="link">
            <li>Terms of use</li>
            <li>Privacy  Policy</li>
        </ul>
    </div>
</div>
<div class="col-md-3">
    <ul class="footLinkas">
        <li class="linkH">
            POPULAR CATEGORIES
        </li>
        <li>Classifieds</li>
        <li>Vehicles</li>
        <li>Real State</li>
        <li>Pets</li>
    </ul>
</div>
<div class="col-md-3">
    <ul class="footLinkas">
        <li class="linkH">
            ABOUT US
        </li>
        <li>About Lyf Group</li>
        <li>Lyf Blog</li>
        <li>Contact Us</li>
        <li>Lyf for Businesses</li>
    </ul>
</div>
<div class="col-md-3">
    <div class="contactDetail">
        <h5>Contact Us!</h5>
        <form action="">
            <div class="form-group">
                <input type="text" name="" id="">
                <a href="#" class="sendEmail">Send</a>
            </div>
        </form>
        <ul class="socialL">
            <li>
                <font-awesome-icon :icon="['fab','facebook-f']" />
            </li>
            <li>
                <font-awesome-icon :icon="['fab','twitter']" />
            </li>
            <li>
                <font-awesome-icon :icon="['fab','instagram']" />
            </li>
            <li>
                <font-awesome-icon :icon="['fab','linkedin']" />
            </li>
        </ul>
    </div>
</div>
</div>
</section>
<app-ad></app-ad>
<bottom-bar></bottom-bar>
</template>

<script>
import AppAd from './AppAd.vue'
import BottomBar from './bottomBar.vue'
import logo1 from '/src/assets/IMG/logo.png'
    export default {
  components: { AppAd ,
    BottomBar},
         data()
        {
          return {
            logo:[logo1]
          }
        }
    }
</script>

<style scoped>

</style>