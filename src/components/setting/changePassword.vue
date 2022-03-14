<template>
<section class="setting">
    <div class="headText">
        <h5>Setting</h5>
    </div>
    <div class="showAds">
        <label for="">Show My Phone Number In Ads</label>
           <label class="switch" for="checkboxsetting">
                    <input type="checkbox" id="checkboxsetting" />
                    <div class="slider round"></div>
                  </label>
    </div>
</section>
<section class="chngepass">
    <div class="headText">
        <h5>Change Password</h5>
    </div>

    <form action="" class="changePassword">
 <div class="form-group">
        <input type="Password" name="" placeholder="Current Password" id="">
    </div>
    <div class="form-group">
        <div class="input">
        <input type="Password" name="" placeholder="Current Password" id="">
        <font-awesome-icon icon="eye-slash"/>
        </div>
        <span>Use Minimum 6 Characters, And Atleast One Letter And One Number</span>
    </div>
    <div class="form-group">
        <div class="input">
        <input type="Password" name="" placeholder="Current Password" id="">
        <font-awesome-icon icon="eye-slash"/>
        </div>
        
    </div>
    <div class="btn changebtn">
        <a href="#" class="btn">Change Password</a>
    </div>
    </form>
   
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
  height: 23px;
  position: relative;
  width: 41px;
}

.switch input {
  display: none;
}
form.changePassword {
    padding: 26px 36px;
}

.form-group input {
    background: #F7F7F7;
    border: none;
    padding: 11px 15px;
    border-radius: 5px;
    width: 100%;
}

.form-group {
    margin-bottom: 17px;
}

.input {
    position: relative;
}

.input svg {
    position: absolute;
    right: 10px;
    top: 14px;
    color: #36363669;
}

.input input {
    padding-right: 40px;
}

.form-group span {
    font-size: 11px;
    color: #3636367a;
}

.form-group input {
    outline: none;
}

.btn.changebtn a {
    padding: 14px 22px;
    font-size: 15px;
    font-weight: 500;
    color: #fff;
    background: #fc6748;
    border-radius: 5px;
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
  height: 19px;
  left: 2px;
  position: absolute;
  transition: 0.4s;
  width: 19px;
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

section.setting {
    border-radius: 5px;
    border: 1px solid #70707066;
}

.headText h5 {
    padding: 15px 24px;
    border-bottom: 1px solid #70707066;
    font-size: 21px;
    font-weight: 500;
    margin: 0;
}

.showAds {
    padding: 38px 24px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
section.chngepass {
    margin-top: 27px;
    border-radius: 5px;
    border: 1px solid #70707066;
}
.showAds label:first-child {
    font-size: 18px;
    font-weight: 500;
}
</style>