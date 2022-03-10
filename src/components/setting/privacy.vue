<template>
<section class="setting">
    <div class="headText">
        <h5>Setting</h5>
    </div>
    <div class="showAds">
        <label for="">Show My Phone Number In Ads</label>
           <label class="switch" for="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div class="slider round"></div>
                  </label>
    </div>
</section>
<section class="notification">
    <div class="headText">
        <h5>Notifications</h5>
    </div>
    <div class="notify">
        <div class="data">
            <label for="">Special Communication & Offers</label>
            <span>Receive Updates, Offers And More</span>
        </div>
         <label class="switch" for="checkbox1">
                    <input type="checkbox" id="checkbox1" />
                    <div class="slider round"></div>
                  </label>
    </div>
    <div class="notify">
        <div class="data">
            <label for="">Recommendations</label>
            <span>Receive Recommendations Based On Your Activity</span>
        </div>
         <label class="switch" for="checkbox2">
                    <input type="checkbox" id="checkbox2" />
                    <div class="slider round"></div>
                  </label>
    </div>
</section>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
 /* checkbox slider */
.switch {
  display: inline-block;
  height: 15px;
  position: relative;
  width: 30px;
}

.switch input {
  display: none;
}

.slider {
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;
}

.slider:before {
  background-color: #fff;
  bottom: 2px;
  content: "";
  height: 12px;
  left: 2px;
  position: absolute;
  transition: 0.4s;
  width: 12px;
}

input:checked + .slider {
  background-color: var(--primary);
}

input:checked + .slider:before {
  transform: translateX(18px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>