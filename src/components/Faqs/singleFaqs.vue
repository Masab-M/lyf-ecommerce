<template>

<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" v-bind:data-bs-target="'#collapseOne'+id" aria-expanded="true" v-bind:aria-controls="'#collapseOne'+id">
        {{Question}}
      </button>
    </h2>
    <div v-bind:id="'collapseOne'+id" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       {{Anwsers}}
      </div>
    </div>
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

h2 button {
    color: #707070 !important;
    padding: 27px 23px !important;
    border: none !important;
    width: 100%;
    outline:none !important;
    box-shadow: 0px 0px 5px 0px #00000029;
    background-color: #fff !important;
    display: flex !important;
    font-size: 19px;
    outline: none;
    justify-content: space-between;
}
h2{
  outline: none;
}
.accordion-button:focus {
    z-index: 3;
    border-color:transparent;
    outline: 0;
    box-shadow: none;
}
.accordion-button:focus{
  border: none !important;
  outline: none !important;
}
.accordion-item{
  border-radius: 5px;
    margin-bottom: 28px;
    outline: none;
}
.accordion-button:not(.collapsed)::after
{
 
  color:#fc6748 !important;
     content: "";
    font-size: 1rem;
    font-family: "fontAwesome";
    top: 18px;
    color: #7f7f7f;
    right: 26px;
    position: absolute;
  background-image:none;
}
.accordion-button::after
{ color:#707070 !important;
  background-image:none;
     content: "";
    font-size: 1rem;
    font-family: "fontAwesome";
    top: 18px;
    color: #7f7f7f;
    right: 26px;
    position: absolute;

}

.accordion-button{
  color:#fc6748 !important;
}
.accordion-button.collapsed{
  color:#707070 !important;
}
.accordion-button:hover
{
    color: #FC6748 !important;
}
</style>