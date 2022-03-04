<template>
<NavHome/>
<div class="row container-fluid page">
<div class="col-md-3">
<UserData/>
</div>
<div class="col-md-9">
    <UserItems/>
</div>
</div>
<Footer/>
</template>

<script>
import TopBar from "../components/home/topBar.vue"
import NavHome from "../components/home/NavHome.vue";
import UserItems from "../components/profile/userItems.vue";
import UserData from "../components/profile/userData.vue";
import Footer from '../components/home/footer.vue';
export default {
    setup() {
        return {};
    },
    components: { TopBar, NavHome, UserItems, UserData, Footer }
}
</script>

<style scoped>
.row.page {
    padding: 34px 27px 80px 27px;
}
</style>