<template>
<div class="itemdetails">
    <h5>Details</h5>
    <div class="details">
        <div class="singleDetail">
            <span>Type</span>
            <span>Mobile</span>
        </div>
                <div class="singleDetail">
            <span>Condition</span>
            <span>New</span>
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
.itemdetails {
    padding: 24px 17px;
    margin-top: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px #00000029;
}

.itemdetails h5 {
    color: #363636;
    font-size: 18px;
    font-weight: 400;
}

.details {
    display: flex;
    justify-content: space-between;
}

.details .singleDetail {display: flex;flex: 1 1 auto;justify-content: flex-start;}

.singleDetail span:first-child {
    margin-right: 100px;
    font-size: 13px;
    color: #36363694;
}

.singleDetail span:last-child {
    font-size: 13px;
    color: #363636;
}
</style>