<template>
<div class="chatArchive">
    <div class="quickFilter">
        <h5>QUICK FILTERS</h5>
    </div>
    <ul class="filters">
        <li>
           <router-link to="/inbox/all">All</router-link>
        </li>
        <li>
           <router-link to="/inbox/tag">Important</router-link>
        </li>
        <li>
           <router-link to="/inbox/unread">Unread</router-link>
        </li>
    </ul>
    <router-view name="chat"/>
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

</style>