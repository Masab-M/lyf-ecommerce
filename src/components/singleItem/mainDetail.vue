<template>
<div class="itemDetail">
    <div class="head">
        <h4>Iphone Xs Max 256GB</h4>
        <div class="actionBtn">
            <font-awesome-icon icon="share-nodes"/>
            <font-awesome-icon icon="heart"/>
        </div>
    </div>
    <p class="price">$ 1100</p>
    <div class="metadata">
        <span class="location">
            <font-awesome-icon icon="location-dot"/>
            Rio De Janeiro
        </span>
        <span>Today</span>
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
.itemDetail {
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px #00000029;
    padding: 18px 23px;
    margin-bottom: 22px;
}

.itemDetail .head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
}

.itemDetail .head h4 {
    margin-bottom: 0px;
    font-size: 23px;
    color: #363636;
}

.actionBtn {
    color: #36363652;
}

.actionBtn svg:first-child {
    margin-right: 20px;
}

p.price {
    font-size: 23px;
    font-weight: normal;
    margin: 0;
    color: #363636a8;
}

.metadata {
    display: flex;
    margin-top: 15px;
    justify-content: space-between;
}

.metadata span.location {
    font-weight: 500;
    color: #FF0000;
    font-size: 13px;
}

.metadata span {
    font-size: 12px;
    color: #363636;
}


</style>