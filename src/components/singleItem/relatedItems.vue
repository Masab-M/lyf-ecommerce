<template>
<router-link v-bind:to="'/item/'+pname">
<div class="archiveProduct">
<div class="pImg">
    <img src="../../assets/IMG/product.png"  alt="">
  
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
    </div>
</div>
</div>
</router-link>

</template>

<script>

    export default {
        props:['like','price','pname','location','image'],
         data () {
     return {
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
   font-size: 17px;
    color: var(--black);
    font-weight: bold;
    margin-bottom: 0;
    text-align: left;
}

.details h5.name {
font-size: 17px;
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
.metaData span {
    font-size: 13px;
    display: flex;
    align-items: center;
    
}
.pImg img {
    width:178px;
    height: 128px;
    border-radius: 5px 5px 0px 0px;
}

.archiveProduct {
 border-radius: 5px;
    box-shadow: 0px 0px 5px #00000047;
    width: fit-content;
    position: relative;
    margin-top: 30px;
    margin-bottom: 10px;
}

</style>