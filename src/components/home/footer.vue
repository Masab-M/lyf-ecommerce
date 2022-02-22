<template>
<section class="footer">
<div class="row">
<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
    <div class="logo">
        <img :src="logo[0]" alt="">
        <ul class="link">
            <li>Terms of use</li>
            <li>Privacy  Policy</li>
        </ul>
    </div>
</div>
<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
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
<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
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
<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
    <div class="contactDetail">
        <h5>Contact Us!</h5>
        <form action="">
            <div class="form-group">
                <input type="text" name="" placeholder="Email" id="">
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
@media (min-width:320px)  { 
    section.footer {
    padding: 45px 3.438em;
}
    /* smartphones, iPhone, portrait 480x320 phones */ }
@media (min-width:481px)  {
     section.footer {
    padding: 45px 3.438em;
}
    /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ }
@media (min-width:641px)  {
     section.footer {
    padding: 45px 5.438em;
}
    /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ }
@media (min-width:961px)  { 
     section.footer {
    padding: 45px 45px 5.438em;
}
    /* tablet, landscape iPad, lo-res laptops ands desktops */ }
@media (min-width:1025px) { 
    section.footer {
    padding: 45px 11.438em;
}
    /* big landscape tablets, laptops, and desktops */ }
@media (min-width:1281px) { 
    section.footer {
    padding: 45px 11.438em;
}
    /* hi-res laptops and desktops */ }
section.footer {
    background-color: var(--bg-color);
}

ul.link {
    padding: 0px;
    list-style: none;
}

ul.link li {
    font-size: 13px;
    color: var(--para-color);
    margin-bottom: 12px;
}

.logo ul.link {margin-top: 15px;}

ul.footLinkas li {
    font-size: 13px;
    color: var(--para-color);
    margin-bottom: 12px;
}

ul.footLinkas {
    margin-top: 15px;
    padding: 0px;
    list-style: none;
}
li.linkH{
font-size: 20px !important;
font-weight: 600;
}
.contactDetail {
    margin-top: 15px;
}

.contactDetail h5 {
    font-size: 20px;
}
form .form-group {display: flex;background-color: var(--white);
width: fit-content;
border-radius: 50px;
}

.form-group input {
     background-color:transparent;
    border: none;
    width: 173px;
    outline: none;
    padding: 0px 18px;
}
.form-group a.sendEmail {
    background-color: var(--secondary);
    padding: 7px 20px;
    border-radius: 50px;
    color: var(--white);
    text-decoration: none;
}

ul.socialL {
    list-style: none;
    display: flex;
    margin-top: 30px;
    font-size: 24px;
    justify-content: space-between;
    color: var(--primary);
}
</style>