<template>
<section class="offer">
    <div class="row ad">
        <div class="col-md-12">
            <h4>Post Your Ads</h4>
            <div class="row">
                <h5>What your Offering</h5>
                <div class="col-md-3" v-for="cat in category" :key="cat" >
                    <router-link class="nav-link signup" :to="`/newItem/itemCategory/${cat.id}`"> 
                    <div class="singleOffer" >
                        <div class="icon">
                           <font-awesome-icon :icon="['fas','mobile-screen-button']" />
                        </div>
                        <div class="text">
                            <h5>{{cat.title}}</h5>
                        </div>
                    </div>
                    </router-link>
                    
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
                    ,{id:4,
                    title:'Electronics',
                    iconName:'mobile-screen-button',
                    iconClass:''
                    },
                    {id:5,
                    title:'Electronics',
                    iconName:'mobile-screen-button',
                    iconClass:''
                    },
                    {id:5,
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
section.offer {
    background-color: #363636;
    padding: 55px 0px;
}

section.offer .ad {
    border-radius: 10px;
    background-color: var(--white);
    width: 700px;
    margin: 0px auto;
    padding: 26px 45px 75px 45px;
}

.row.ad h4 {
    text-align: center;
    font-size: 29px;
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 48px;
}

.row.ad .row>h5 {
    margin-bottom: 45px;
    font-size: 20px;
    font-weight: 500;
}

.singleOffer .icon {
    text-align: center;
}

.icon svg {
    background-color: var(--primary);
    padding: 13px 15px;
    border-radius: 100px;
    color: var(--white);
}

.text h5 {
    font-size: 11px;
    text-align: center;
    margin-top: 13px;
    color:#000; 
}
</style>