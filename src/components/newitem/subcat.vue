<template>
<section class="subcat">
    <div class="centerDiv">
 <div class="row head">
        <div class="col-md-6">
            <font-awesome-icon icon="arrow-left"/>
        </div>
        <div class="col-md-6">
            <div class="headtext">
                <h4>
                post your ads</h4>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="prntCat">
                <h5>
                    Electronics
                </h5>
            </div>
            
            <ul class="row subcategories">
                <li class="col-md-12" v-for="cat in Subcategory" :key="cat" >
                    <router-link class="nav-link signup" :to="`/newItem/itemDetails/${id}/${cat.id}`">
                    <div class="singleCat">
                        <font-awesome-icon icon="mobile"/>
                        <span>{{cat.title}}</span>
                    </div>
                    <div class="forIcon">
                        <font-awesome-icon icon="angle-right"/>
                    </div>
                    </router-link>
                    
                </li>
            </ul>
        </div>
    </div>
    </div>
</section>
</template>

<script>
import { useRoute } from 'vue-router';
import { computed } from "vue";
    export default {
        data()
        {
            return{
                Subcategory:[
                    {id:1,
                    title:'Mobile',
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
        },
       setup() {
    const route = useRoute();

    const id = computed(() => route.params.id);
    return {
      id,
    };
  },
    }
</script>

<style scoped>
section.subcat {
    background-color: #363636;
    padding: 50px 0px;
}

.centerDiv {
    width: 700px;
    padding: 65px 45px;
    margin: 0px auto;
    border-radius: 10px;
    background-color: var(--white);
}

.headtext h4 {
    text-transform: capitalize;
    font-size: 28px;
    font-weight: normal;
}


.row.head {
    margin-bottom: 43px;
}

.prntCat h5 {
    font-size: 23px;
    font-weight: 400;
}

.prntCat {
    margin-bottom: 41px;
}

ul.row.subcategories {
    list-style: none;
    padding: 0px;
}


ul.row.subcategories li a {
    display: flex;
    justify-content: space-between;
    margin-bottom:20px;
    color: #000;
}

.singleCat span {
    margin-left: 29px;
    font-size: 19px;
}
</style>