<template>

    <div class="metadata">
        <div class="contactBtn">
            <a href="#" class="btn follow" >Follow</a>
            <router-link to="/inbox" class="btn contact">Chat with Company</router-link>
        </div>
<MetaDetails/>
       <CompanyLocation/>
      <Link/>
    </div>
</template>

<script>
import CompanyLocation from "./companyLocation.vue"
import Link from "./link.vue";
import MetaDetails from "./meta_Details.vue";
export default {
    setup() {
        return {};
    },
    components: { CompanyLocation, Link, MetaDetails }
}
</script>

<style scoped>

.metadata {
    padding: 29px 36px;
    background-color: var(--white);
    border-radius: 9px;
    border: 1px solid #70707066;
    height: 100%;
}

.contactBtn a {
    display: block;
    width: 100%;
}

a.follow {
    font-weight: 500;
    background-color: #FC6748;
    color: var(--white);
    padding: 10px;
    font-size: 14px;
    margin-bottom: 15px;
}


a.contact {
    font-weight: 500;
    border: 2px solid #FC6748;
    color: #FC6748;
    padding: 10px;
    margin-bottom: 22px;
    font-size: 14px;
}
.metadata ul,.location {
    border-radius: 5px;
    list-style: none;
    font-size: 12px;
    margin-bottom: 14px;
    padding: 0;
    border: 1px solid #70707066;
}

.metadata ul li:first-child{
    color: #443688;
    margin-bottom: 10px;
    font-size: 11px;
    background-color: #F7F7F7;
    font-weight: 600;
    padding: 6px 10px;
}

.metadata ul li {padding: 6px 10px;color: #363636;}


 
</style>