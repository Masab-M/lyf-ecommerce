<template>
<NavHome/>
<div class="row container-fluid setting">
<div class="col-md-4">
<ul>
    
        <router-link tag="li" active-class="active"  :to="{ name: 'Profile', params: { id: $route.params.id } }">
        <font-awesome-icon icon="user"/>
        Edit Profile</router-link>
 

         <router-link tag="li" active-class="active"  :to="{ name: 'Password', params: { id: $route.params.id } }">
        <font-awesome-icon icon="unlock-keyhole"/>
        Change Password</router-link>
 

         <router-link tag="li" active-class="active"  :to="{ name: 'Privacy', params: { id: $route.params.id } }">
        <font-awesome-icon icon="bell"/>
        Notification</router-link>
 

   <a href="#">
          <font-awesome-icon icon="arrow-right-from-bracket"/>
       Logout
   </a>
     
 

<a href="#" data-bs-toggle="modal" data-bs-target="#logoutAll">
     <font-awesome-icon icon="circle-info"/>
       Logout From All Devices
</a>
       
 

        <a href="#" data-bs-toggle="modal" data-bs-target="#Disable">
   <font-awesome-icon icon="trash"/>
        Deactivate Account
        </a>
     
 
</ul>
<!-- Modal -->
<div class="modal fade" id="editImageModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">

      <div class="modal-body">
       <h5>Import picture from facebook</h5>
      <p>Import your picture easily from facebook by pressing the upload button</p>
      </div>
      <div class="modal-footer">
          <button type="button" class="btn ">Upload</button>
        <button type="button" class="btn" data-bs-dismiss="modal">Cancel</button>
      </div>
    </div>
  </div>
</div>
<!-- all logout -->
<div class="modal fade" id="logoutAll" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body">
        <h5>Logout from all devices</h5>
        <p>You will be logged out from all browsers and app sessions. Do you want to continue</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn ">Continue</button>
        <button type="button" class="btn" data-bs-dismiss="modal">Cancel</button>

      </div>
    </div>
  </div>
</div>
<!-- Disable -->
<div class="modal fade" id="Disable" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body">
      <h5>Deactivate account and forget me</h5>
      <p>Are you sure you want to deactivate your account? this action cannot be undone</p>
      </div>
      <div class="modal-footer">
               <button type="button" class="btn ">Continue</button>
        <button type="button" class="btn" data-bs-dismiss="modal">Cancel</button>
      </div>
    </div>
  </div>
</div>
</div>
<div class="col-md-8">
    <RouterView/>
</div>
</div>
<Footer/>
</template>

<script>
import Footer from '../components/home/footer.vue'
import NavHome from '../components/home/NavHome.vue'
import { useRoute } from 'vue-router';
const route = useRoute()

export default {
  components: {Footer, NavHome },
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
ul {
    padding: 0;
    display: initial;
    list-style: none;
}


ul a {color: #363636;text-decoration: none;font-size: 17px;}

ul  a.active {
    color: #fff;
    background:#FC6748;
}
.row.container-fluid.setting {
    padding: 42px 55px;
    margin: 0px;
}
ul a {
    display: block;
    padding: 25px 23px;
    background: #F7F7F7;
    margin-bottom: 17px;
    border-radius: 5px;
}
.modal-body h5 {
    color: #002F34;
    margin-bottom: 16px;
    font-weight: bold;
    font-size: 19px;
    text-align: center;
}

.modal-body p {
    opacity: 50%;
    font-size: 14px;
    margin-bottom: 33px;
    color: #002F34;
}

.modal-body {
    padding: 0;
}

.modal-content {
    padding: 22px;
}

.modal-footer {
    border: none;
    justify-content: space-between;
    padding: 0px;
}

.modal-footer button:first-child {color: #fff;padding: 13px 65px;text-align: center;background: #FC6748;border-radius: 5px;}

.modal-footer button:last-child {
    color: #443688;
    padding: 13px 74px;
    border: 2px solid;
    font-weight: 500;
}
@media (min-width:320px)  { 
  .row.container-fluid.setting {
    padding: 42px 10px;
}
  ul {
      display: initial;

}
ul a{
  margin-right: 4px;
  flex: 10%;
}

  
  /* smartphones, iPhone, portrait 480x320 phones */ }
@media (min-width:481px)  { 
    .row.container-fluid.setting {
    padding: 42px 10px;
}
   ul {
    display: initial;
}
ul a{
  margin-right: 4px;
}
  
  /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ }
@media (min-width:641px)  { 
    .row.container-fluid.setting {
    padding: 42px 30px;
}
   ul {
    display: initial;
}
ul a{
  margin-right: 4px;
}
  
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ }
@media (min-width:961px)  { 
    .row.container-fluid.setting {
    padding: 42px 40px;
}
   ul {
    display: initial;
}
ul a{
  margin-right: 4px;
}
  
  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
@media (min-width:1025px) { 
    .row.container-fluid.setting {
    padding: 42px 55px;
}
   ul {
    display: initial;
}
ul a{
  margin-right: 4px;
}
  
  /* big landscape tablets, laptops, and desktops */ }
@media (min-width:1281px) { 
    .row.container-fluid.setting {
    padding: 42px 55px;
}
   ul {
    display: initial;
}
ul a{
  margin-right: 4px;
}
  
  /* hi-res laptops and desktops */ }
</style>