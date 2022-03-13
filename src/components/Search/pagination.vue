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
    flex-wrap: wrap;
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
@media (min-width:320px)  { 
    .number ul li {
    margin-right: 5px;
}
    span.totalNumber {
    margin-right: 15px;
    margin-left: 30px;
}
.number ul
{
    padding-left:15px;
}
    /* smartphones, iPhone, portrait 480x320 phones */ }
@media (min-width:481px)  { 
     span.totalNumber {
    margin-right: 30px;
    margin-left: 30px;
}
       .number ul li {
    margin-right: 30px;
}
.number ul
{
    padding-left:30px;
}
    /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ }
@media (min-width:641px)  { 
     span.totalNumber {
    margin-right: 30px;
    margin-left: 30px;
}
       .number ul li {
    margin-right: 30px;
    
}
.number ul
{
    padding-left:30px;
}
    /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ }
@media (min-width:961px)  { 
     span.totalNumber {
    margin-right: 30px;
    margin-left: 30px;
}
       .number ul li {
    margin-right: 30px;
}
.number ul
{
    padding-left:30px;
}
    /* tablet, landscape iPad, lo-res laptops ands desktops */ }
@media (min-width:1025px) { 
     span.totalNumber {
    margin-right: 30px;
    margin-left: 30px;
}
   .number ul li {
    margin-right: 30px;
}
    .number ul
{
    padding-left:30px;
}
    /* big landscape tablets, laptops, and desktops */ }
@media (min-width:1281px) { 
     span.totalNumber {
    margin-right: 30px;
    margin-left: 30px;
}
       .number ul li {
    margin-right: 30px;
}
.number ul
{
    padding-left:30px;
}
    /* hi-res laptops and desktops */ }
</style>