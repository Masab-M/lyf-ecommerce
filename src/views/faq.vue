<template>
<NavHome/>
<section class="faqs">
    <div class="row container-fluid">
        <div class="col-md-6">
            <img src="../assets/IMG/FaQ.png" alt="">
        </div>
        <div class="col-md-6">
            <h1>F .A .Q</h1>
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
</template>

<script>
import NavHome from "../components/home/NavHome.vue"
import SingleFaqs from "../components/Faqs/singleFaqs.vue"
export default {
    setup() {
        return {};
    },
    components: { NavHome, SingleFaqs }
}
</script>

<style scoped>

</style>