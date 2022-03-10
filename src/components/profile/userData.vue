<template>
  <div class="profilImg">
                <img src="https://picsum.photos/196/196" alt="">
                <div class="editImg">
                <font-awesome-icon v-if="userView" icon="pen-to-square"/>
                </div>
                <div v-if="!userView" class="status">

                </div>            
    </div>
<div class="usertag">
    <p>Passionate World Exist In Hearts !!! Smash Hit World</p>
</div>
<div class="cntctBtn">
    <a href="#" class="btn contact">Chat with seller</a>
</div>
<div class="metadata">
    <metaDetails/>
    <Link/>
</div>
</template>

<script>
import metaDetails from "../company/meta_Details.vue"
import Link from "../company/link.vue";
export default {
    setup() {
        return {
            userView:true
        };
    },
    components: { metaDetails, Link }
}
</script>

<style scoped>
a.contact {
    font-weight: 500;
    background-color: #FC6748;
    color: var(--white);
    padding: 10px;
    font-size: 14px;
    width: 100%;
    margin-bottom: 15px;
}
.metadata {
    height: 100%;
}
.usertag p {
    padding: 17px 0px;
    font-size: 13px;
    font-weight: 500;
    color: #363636;
}

.usertag {
    text-align: center;
}
.profilImg img {
    max-width: 100%;
    width: 196px;
    border-radius: 100px;
}
.profilImg
{
    position: relative;
text-align: center;
}
.status {
    width: 40px;
    height: 40px;
    bottom: 5px;
    position: absolute;
    background-color: #00CF15;
    border-radius: 50px;
    border: 5px solid #fff;
    right: 42px;
}
.profilImg .editImg {
border-radius: 0px 0px 100px 100px;
    width: -webkit-fill-available;
    height: 50%;
    display: flex;
    position: absolute;
    bottom: 0px;
    width: 196px;
    left: 16%;
    right: 16%;
    background: #0000005c;
    justify-content: space-around;
    align-items: center;
}
.editImg svg {
    font-size: 40px;
    color: #fff;
}
</style>