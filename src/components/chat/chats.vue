<template>
  <div class="row srchChat">
    <div class="col-md-12 rightpad">
      <div :class="{ lessadd: active }">
        <div class="srchOption">
          <div class="headtext">
            <h5>Inbox</h5>
          </div>
          <div class="srchIcon">
            <font-awesome-icon
              @click="active = !active"
              :aria-pressed="active ? 'true' : 'false'"
              icon="search"
            />
          </div>
        </div>
      </div>

      <div :class="{ lessadd: !active }">
        <div class="searchField">
          <div class="form-group">
            <input type="text" placeholder="Search in Chat" name="" id="" />
          </div>
          <div class="crossIcon">
            <font-awesome-icon
              @click="active = !active"
              :aria-pressed="active ? 'true' : 'false'"
              icon="xmark"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <ChatArchive />
</template>

<script>
import ChatArchive from "./chatArchive.vue";
export default {
  data() {
    return {
      active: false,
    };
  },
  setup() {
    return {};
  },
  components: { ChatArchive },
};
</script>

<style scoped>

.lessadd {
  display: none;
}
.headtext h5 {
  font-weight: 600;
  font-size: 18px;
  color: #363636;
}

.srchOption,
.searchField {
  padding: 21px 14px;
  background-color: #f7f7f7;
}

.srchOption {
  display: flex;
  justify-content: space-between;
}
.searchField {
  display: flex;
  justify-content: space-between;
}

.searchField input {
  background: none;
  font-size: 18px;
  border: none;
  outline: none;
  color: #363636;
}

.crossIcon {
  color: #363636;
  font-size: 20px;
}
@media (min-width:320px)  { 
  
  .rightpad{
    padding-right: auto;
  }
  /* smartphones, iPhone, portrait 480x320 phones */ }
@media (min-width:481px)  { 
  
  .rightpad{
    padding-right: auto;
  }
  
  /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ }
@media (min-width:641px)  { 
  .rightpad{
    padding-right: 0px;
  }
  
  
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ }
@media (min-width:961px)  { 
  
  .rightpad{
    padding-right: 0px;
  }
  
  
  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
@media (min-width:1025px) { 
  .rightpad{
    padding-right: 0px;
  }
  
  
  /* big landscape tablets, laptops, and desktops */ }
@media (min-width:1281px) { 
  .rightpad{
    padding-right: 0px;
  }
  
  
  /* hi-res laptops and desktops */ }
</style>