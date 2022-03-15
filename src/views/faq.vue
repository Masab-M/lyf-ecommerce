<template>

<NavHome/>

<section class="faqs">
    <div class="row">
        <div class="col-md-6">
            <div class="illustration d-none d-sm-none d-md-none d-lg-block" >
            <img src="../assets/IMG/FaQ.png" alt="">
            </div>
        </div>
        <div class="col-md-6">
            <h1 class="text-xl-start text-lg-start text-md-start text-sm-center text-center">F.A.Q</h1>
        </div>
    </div>
</section>
<section class="singleFaqs">
    <div class="row container-fluid">
        <div class="col-md-12">
            <SingleFaqs :Question="'What Is This For ?'" :Anwsers="'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet'" :id="1"/>
            <SingleFaqs :Question="'What Is This For ?'" :Anwsers="'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet'" :id="2"/>
        </div>
    </div>
</section>
<Footer/>
</template>

<script>
import NavHome from "../components/home/NavHome.vue"
import SingleFaqs from "../components/Faqs/singleFaqs.vue"
import BottomBar from "../components/home/bottomBar.vue";
import Footer from "../components/home/footer.vue";
export default {
    setup() {
        return {};
    },
    components: { NavHome, SingleFaqs, BottomBar, Footer }
}
</script>

<style scoped>
section.faqs {
    background: #443688;
    padding: 64px;
}
.illustration {
    text-align: center;
}

.faqs h1 {font-size: 74px;/* text-align: center; */color: #fff;font-weight: bold;}

section.faqs .row {
    display: flex;
    align-items: center;
        margin: 0px;
}
section.faqs img {
    width: 319px;
}
section.singleFaqs{
margin-top:55px;
}
</style>