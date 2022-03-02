<template>
<section :class="{ mobileChat: !params.hasOwnProperty('id')}">
<div class="row msgHead">
    <div class="col-md-6">
        <div class="userDetail">
            
            <img src="https://picsum.photos/50/50" alt="">
            <h5>David Jason</h5>
        </div>
    </div>
    <div class="col-md-6">
        <ul class="headIcons">
            <li>
                <font-awesome-icon icon="font-awesome"/>
            </li>
            <li>
                <font-awesome-icon icon="ellipsis-vertical"/>
            </li>
            <li @click="$router.go(-1)" >
                <font-awesome-icon icon="xmark"/>
            </li>
        </ul>
    </div>
</div>
<div class="messageSection">
<div class="messages">
    <div class="send msg">
        <div class="usrimg">
            <img src="https://picsum.photos/50/50" alt="">
        </div>
        <p class="text">Lorem ipsum dolor sit amet</p>
        <span class="time">
            11:40 pm
        </span>
    </div>
     <div class="send msg">
        <div class="usrimg">
            <img src="https://picsum.photos/50/50" alt="">
        </div>
        <p class="text">Lorem ipsum dolor sit amet</p>
        <span class="time">
            11:40 pm
        </span>
    </div>
     <div class="send msg">
        <div class="usrimg">
            <img src="https://picsum.photos/50/50" alt="">
        </div>
        <p class="text">Lorem ipsum dolor sit amet</p>
        <span class="time">
            11:40 pm
        </span>
    </div>
    <div class="recieve msg">
        <div class="usrimg">
            <img src="https://picsum.photos/50/50" alt="">
        </div>
        <p class="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no</p>
        <span class="time">
            11:40 pm
        </span>
    </div>
</div>
<div class="row newmsg">
    <div class="col-md-11">
        <div class="form-group">
            <input type="text" placeholder="Send Message" name="" id="">
        </div>
        <div class="othercontent">
            <font-awesome-icon icon="face-grin-wide"/>
            <font-awesome-icon icon="paperclip"/>
        </div>
    </div>
    <div class="col-md-1">
        <div class="sendBtn">
            <font-awesome-icon icon="paper-plane"/>
        </div>
    </div>
</div>
</div>
</section>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
    
        setup () {
            const route = useRoute();
            
        const params = computed(() => route.params);
        return {
        params,
        };

        }
}
</script>

<style scoped>

@media (min-width:320px)  { 
  .mobileChat{
    display:none;
  }
   .mobileChatback{
    display:block;
  }
  /* smartphones, iPhone, portrait 480x320 phones */ }
@media (min-width:481px)  { 
  
   .mobileChatback{
    display:block;
  }  .mobileChat{
    display:none;
  }/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ }
@media (min-width:641px)  { 
  .mobileChat{
    display:block;
  }
    .mobileChatback{
    display:none;
  }
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ }
@media (min-width:961px)  { 
       .mobileChatback{
    display:none;
  }
  .mobileChat{
    display:block;
  }/* tablet, landscape iPad, lo-res laptops ands desktops */ }
@media (min-width:1025px) { 
   .mobileChatback{
    display:none;
  }  .mobileChat{
    display:block;
  }/* big landscape tablets, laptops, and desktops */ }
@media (min-width:1281px) { 
      .mobileChatback{
    display:none;
  } 
  .mobileChat{
    display:block;
  }/* hi-res laptops and desktops */ }
.userDetail svg {
    margin-right: 12px;
    font-size: 26px;
}
.userDetail {
    display: flex;
    padding: 10px 17px;
    align-items: center;
}

.row.msgHead {border-bottom: 1px solid #70707066;width: 100%;margin: 0;}
.send.msg {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
}

.msg img {
    width: 56px;
    height: 56px;
    border-radius: 100px;
}

.send.msg p {
    color: #fff;
    background-color: #FC6748;
    font-size: 18px;
    text-align: left;
    border-radius: 25px 25px 0px 25px;
    padding: 15px 34px 15px 21px;
    margin: 0;
    width: 50%;
    margin-right: 10px;
    font-family: Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif; 
}

.row.newmsg {
    padding: 13px 12px;
}

.messages {
    overflow: auto;
    padding: 12px;
    height: 300px;
}
.sendBtn {
    color: #fff;
    display: flex;
    width: 45px;
    height: 45px;
    border-radius: 100px;
    align-items: center;
    background-color: #443688;
    justify-content: space-around;
}
.msg {margin-top: 50px;}
span.time {
    color: #3b3b3bc7;
    margin-right: 21px;
    font-size: 10px;
}
.recieve.msg {
    display: flex;
    align-items: center;
}

.recieve.msg p {
    color: #000000;
    background-color: #F7F7F7;
    font-size: 18px;
    text-align: left;
    width: 50%;
    border-radius: 25px 25px 25px 0px;
    padding: 15px 34px 15px 21px;
    margin: 0;
    margin-right: 10px;
    font-family: Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif;
}
ul.headIcons li {
    margin-left: 28px;
    font-size: 20px;
}
.userDetail img {
    width: 50px;
    height: 50px;
    border-radius: 6px;
}
ul.headIcons {
    list-style: none;
    padding: 10px 17px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.userDetail h5 {
    color: #363636;
    font-size: 17px;
    margin-left: 17px;
    font-weight: 600;
}
.form-group {
    padding: 13px 30px;
    position: relative;
    border-radius: 100px;
    border: 1px solid #CECECE;
}

.form-group input {
    width: 100%;
    border: none;
    font-size: 14px;
    padding-right: 27px;
}

.othercontent svg {
    position: absolute;
    bottom: 18px;
}

.othercontent {
    position: relative;
}

.othercontent svg:first-child {
    right: 30px;
}

.othercontent svg:last-child {
    right: 5px;
}
</style>