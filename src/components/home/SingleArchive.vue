<template>
<div class="archiveProduct">
<div class="pImg">
    <img src="../../assets/IMG/product.png"  alt="">
    <div class="like" @click="active = !active" :aria-pressed="active ? 'true' : 'false'">
          <font-awesome-icon icon="heart" :class="{ red: active }"/>
    </div>
</div>
<div class="details">
    <h4 class="price">
        <span>$</span> {{price}}
    </h4>
    <h5 class="name">
        {{pname}}
    </h5>
    <div class="metaData">
        <span>
           <font-awesome-icon icon="location-dot"/> {{location}}
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
        props:['like','price','pname','location','date','image'],
         data () {
     return {
       active: false
     }
  }
    }
</script>

<style scoped>

.details {
    padding: 11px 9px 9px 13px;
    border-radius: 0px 0px 5px 5px;
}

.details .price {
   font-size: 22px;
    color: var(--black);
    font-weight: bold;
    margin-bottom: 3px;
    text-align: left;
}

.details h5.name {
font-size: 13px;
    font-weight: 500;
    color: #363636ba;
    margin-bottom: 0px;
    text-align: left;
    text-transform: capitalize;

}

.metaData {
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color:#000;
}
.pImg img {
        width: 270px;
    height: 158px;
    border-radius: 5px 5px 0px 0px;
}
.metaData span:first-child {
     text-transform: capitalize;
    font-size: 13px;
    font-weight: 400;
}

.metaData span:last-child {
    font-size: 11px;
    font-weight: 500;
}
.like {
    color: #adadad;
    position: absolute;
    top: 10px;
    right: 10px;
       -webkit-transition: color 1000ms linear;
    -moz-transition: color 1000ms linear;
    -o-transition: color 1000ms linear;
    -ms-transition: color 1000ms linear;
    transition: color 1000ms linear;
    background-color: var(--white);
    border-radius: 100px;
    padding: 3px 7px;
}
.archiveProduct {
    border-radius: 5px;
    box-shadow: 0px 0px 5px #00000047;
    width: fit-content;
    position: relative;
    margin-top: 30px;
    margin-bottom: 10px;
}
.like .red {
    color: red;
    transition: color 0.6 ease;
}
</style>