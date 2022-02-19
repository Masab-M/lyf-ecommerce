<template>
<div class="archiveProduct">
<div class="pImg">
    <img :src="image" alt="">
    <div class="like">
          <font-awesome-icon icon="heart" />
    </div>
</div>
<div class="details">
    <h4 class="price">
        {{price}}
    </h4>
    <h5 class="name">
        {{pname}}
    </h5>
    <div class="metaData">
        <span>
            {{location}}
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
        props:['like','price','pname','location','date','image']
    }
</script>

<style scoped>

.details {
    padding: 11px 9px 9px 13px;
}

.details .price {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 3px;
}

.details h5.name {
    font-size: 16px;
    font-weight: normal;
    color: #363636;
    margin-bottom: 0px;
    text-transform: capitalize;
}

.metaData {
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.metaData span:first-child {
    text-transform: capitalize;
    font-size: 13px;
    font-weight: 500;
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
    background-color: var(--white);
    border-radius: 100px;
    padding: 3px 7px;
}
.archiveProduct {
    border-radius: 5px;
    box-shadow: 0px 0px 5px #00000047;
    width: fit-content;
    position:relative;
}
</style>