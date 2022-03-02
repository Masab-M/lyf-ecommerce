<template>
<div class="chatArchive">
    <div class="quickFilter">
        <h5>QUICK FILTERS</h5>
    </div>
    <ul class="filters">
        <li>
           <router-link active-class="active"  to="/inbox/all">All</router-link>
        </li>
        <li>
           <router-link active-class="active" to="/inbox/tag">Important</router-link>
        </li>
        <li>
           <router-link active-class="active" to="/inbox/unread">Unread</router-link>
        </li>
    </ul>
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
.chatArchive {
    padding: 37px 17px 43px 17px;
}

.quickFilter h5 {
    font-size: 12px;
    color: #000000;
    margin-bottom: 15px;
    font-weight: 500;
}

ul.filters {
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: flex-start;
}
ul.filters li a.router-link-exact-active {background: #FF0000;color: #fff;border-color: #ff0000;}
ul.filters li a {
    font-size: 13px;
    padding: 4px 18px;
    font-weight: 500;
    margin-right: 10px;
    border: 1.9px solid;
    color: #363636;
    background-color: #fff;
    text-decoration: none;
    border-radius: 20px;
}
</style>