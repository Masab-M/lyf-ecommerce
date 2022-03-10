<template>
<div class="itemSeller">
    <div class="sectionHead">
        <h5>Seller Information</h5>
        <div class="status">
            <div class="light">

            </div>
            <span>Online</span>
        </div>
    </div>
    <div class="sellerInfo">
        <div class="details">
            <img src="https://picsum.photos/70/70" alt="" class="sellerprofile">
            <div class="name">
                <h5>Apple incor.</h5>
                <span>Member since jan 2021</span>
            </div>
        </div>
        <div class="btnIcon">
            <font-awesome-icon icon="angle-right"/>
        </div>
    </div>
    <div class="cntctBtn">
        <a href="#" class="btn">Chat with seller</a>
    </div>
    <div class="cntctNo">
        <div class="nmbr">
            <font-awesome-icon icon="phone"/>
            <span class="cntctNmbr">
                ******45
            </span>
        </div>
        <div class="shwNo">
            <span>Show number</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style scoped>

.sectionHead {
    display: flex;
    justify-content: space-between;
}
.itemSeller {
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px #00000029;
    padding: 18px 23px;
    margin-bottom: 22px;
}

.sectionHead h5 {
    font-size: 18px;
    color: #363636;
}

.status span {
    color: #363636;
    font-weight: 400;
    font-size: 15px;
}

.sellerInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.details {
    display: flex;
    justify-content: flex-start;
}

.name h5 {
    color: #363636;
    font-size: 18px;
    margin-bottom: 5px;
}

.name span {
    font-size: 15px;
    color: #363636a6;
}

.details img {
    width: 70px;
    height: 70px;
    border-radius: 100px;
    margin-right: 13px;
}

.cntctBtn a.btn {
    margin-bottom: 26px;
    padding: 12px;
    border-radius: 5px;
    font-size: 17px;
    width: 100%;
    background: #FC6748;
    margin-top: 21px;
    color: #fff;
}


.cntctNo {
    display: flex;
    justify-content: space-between;
}



.nmbr {
    color: #363636ad;
    font-size: 13px;
}

.nmbr svg {
    color: #fc6748;
}

.shwNo span {
    font-size: 14px;
    color: #363636;
}
</style>