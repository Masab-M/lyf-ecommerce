<template>
<section class="bottomBar">
   <div class="row container-fluid">
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <span class="location">
                Srilanka
            </span>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <div class="copyright">

            <span class="copyright">
                Free Classifieds In Srilanka © 2020-2021 LYF
            </span>
            </div>
        </div>
    </div>
</section>
 
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.row {
    padding: 10px 55px;
    
}
section.bottomBar{
    background-color: var(--primary);
}
span.location {
    color: var(--white);
    font-size: 11px;
}

span.copyright {
       color: var(--white);
    float: right;
    font-size: 11px;
}
.copyright
{
text-align: right;
}
</style>