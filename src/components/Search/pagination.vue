<template>
<section class="itemPagination">
    <div class="results">
        <h5>1,277 Result Found</h5>
    </div>
    <div class="pages">
        <div class="number">
            <font-awesome-icon icon="chevron-left"/>
            <ul>
                <li class="active">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
            <span>...</span>
            <span class="totalNumber">
                10
            </span>
            <font-awesome-icon icon="chevron-right"/>
        </div>
        <div class="numberRange">
            <p>Showing 1 - 25</p>
        </div>
    </div>
</section>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style  scoped>

li.active {
    color: #fff;
    border-radius: 10px;
    background: #fc6748;
}
.results h5 {
    font-size: 22px;
    font-weight: normal;
    color: #363636;
}

.pages {
    display: flex;
    justify-content: space-between;
}

.number ul {
    display: flex;
    padding: 0px;
    margin: 0;
    padding-left: 30px;
    list-style: none;
}

.number {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.number ul li {
    margin-right: 30px;
    font-size: 22px;
    padding: 2px 14px;
}

span.totalNumber {
    margin-right: 30px;
    font-size: 22px;
    margin-left: 30px;
}

.numberRange p {
    margin: 0;
    color: #707070;
    font-size: 20px;
}
</style>