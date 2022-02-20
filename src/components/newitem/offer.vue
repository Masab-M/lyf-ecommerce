<template>
<section class="offer">
    <div class="row ad">
        <div class="col-md-12">
            <h4>Post Your Ads</h4>
            <div class="row">
                <h5>What your Offering</h5>
                <div class="col-md-2" v-for="cat in category" :key="cat" >
                    <div class="singleOffer" >
                        <div class="icon">
                           <font-awesome-icon :icon="['fas','mobile-screen-button']" />
                        </div>
                        <div class="text">
                            <h5>{{cat.title}}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
    export default {
        data(){
            return{
                category:[
                    {id:1,
                    title:'Electronics',
                    iconName:'mobile-screen-button',
                    iconClass:''
                    },
                     {id:2,
                    title:'Electronics',
                    iconName:'mobile-screen-button',
                    iconClass:''
                    },
                     {id:3,
                    title:'Electronics',
                    iconName:'mobile-screen-button',
                    iconClass:''
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>