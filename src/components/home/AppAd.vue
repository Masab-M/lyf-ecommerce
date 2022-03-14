<template>
<section :class="{ lessadd: active }">
<div class="row container-fluid">
       <div class="col-md-2">
           <span class="more btn" @click="active = !active" :aria-pressed="active ? 'true' : 'false'" >More <font-awesome-icon icon="angle-up"/></span>
       </div>
       <div class="col-md-5" >
           <h4 >
               Official Lyf App is now available!
           </h4>
       </div>
       <div class="col-md-5">
           <div class="storeImg">
               <img src="../../assets/IMG/appstore.png" alt="">
               <img src="../../assets/IMG/googleplay.png" alt="">
           </div>
       </div>
   </div>
</section>
<section :class="{ lessadd: !active }" id="moreData">
    <div class="row">
        <div class="col-md-">
            <span class="hide" @click="active = !active" :aria-pressed="active ? 'true' : 'false'" >
                hide <font-awesome-icon icon="angle-down"/>
            </span>
        </div>
        <div class="col-md-6">
            <div class="interFaceImg">
                <img src="../../assets/IMG/appinterface.png" class="img-fluid" alt="">
            </div>
        </div>
        <div class="col-md-3">
            <div class="adtext">
                <h3>TRY THE LYF APP</h3>
                <p>Classified Advertisements Are At Ease With Lyf App On Your Mobile.</p>
                <img src="../../assets/IMG/qrcode.png" alt="">
            </div>
        </div>
        <div class="col-md-3">
            <div class="storelink">
                <h5>GET YOUR APP TODAY</h5>
                <div class="img">
                                  <img src="../../assets/IMG/appstore.png" alt="">
               <img src="../../assets/IMG/googleplay.png" alt="">
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
    export default {
           data () {
     return {
       active: false
     }
  }
    }
</script>

<style scoped>
.moread{
    display: block;
}
.lessadd{
    display: none;
}
.row {
    padding: 21px 54px;
}
.hideBtn {
    text-align: right;
}

a.more.btn {
    color: var(--secondary);
}
.storeImg {
    display: flex;
    flex-wrap: wrap;
}

.storeImg img {
   width: 140px;
    margin: 0px;
    margin-bottom: 10px;
    margin-right: 10px;

}
span.more.btn {
      font-size: 18px;
    display: flex;
    color: var(--secondary);
    padding: 0px;
    align-items: center;

}

span.more.btn svg {
    margin-left: 6px;
}

span.hide {    font-size: 18px;
    float: right;
    color: var(--secondary);
    cursor: pointer;
    text-transform: capitalize;
}

span.hide svg {
    margin-left: 6px;
}
.adtext h3 {
    font-size: 27px;
    margin-top: 10px;
    font-weight: 600;
    margin-bottom: 13px;
}

.adtext p {
    font-size: 14px;
}

.storelink h5 {
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 13px;
}

.storelink img {
    width: 200px;
    margin: 10px 0px;
    display: inline;
}

.storelink {
    text-align: center;
    margin-top: 55px;
}
section#moreData
{
    background-color: var(--bg-color);
}
</style>