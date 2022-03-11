<template>
<p>
  <a class="btn btn-primary" data-bs-toggle="collapse" v-bind:href="'#collapseExample'+id" role="button" aria-expanded="false" aria-controls="collapseExample">
    {{Question}}
  <font-awesome-icon icon="caret-down"/>
    
  </a>
</p>
<div class="collapse" v-bind:id="'collapseExample'+id">
  <div class="card card-body">
   {{Anwsers}}
  </div>
</div>
</template>

<script>
export default {
     props:['Question','Anwsers','id'],
    setup () {
        

        return {}
    }
}
</script>

<style scoped>

</style>