<template>
  <section class="postForm">
    <div class="centerDiv">
      <div class="headText">
        <h5>Post your ads</h5>
      </div>
      <div class="row mainForm">
        <div class="col-md-12">
          <form action="" class="postDetails">
            <div class="formHead">
              <h2>SELECTED CATEGORY</h2>
            </div>
            <div class="slctCat">
              <span class="category"> Mobiles / Tablets </span>
              <a href="#" class="chngeCat">Changes</a>
            </div>
            <div class="inputDetails">
              <div class="detailHead">
                <h5>INCLUDE SOME DETAILS</h5>
              </div>
              <div class="form-group options">
                <label for="">Condition</label>
                <div class="button">
                  <input type="radio" id="a25" name="check-substitution-2" />
                  <label class="btn btn-default" for="a25">Used</label>
                </div>
                <div class="button">
                  <input type="radio" id="a50" name="check-substitution-2" />
                  <label class="btn btn-default" for="a50">New</label>
                </div>
              </div>
              <div class="form-group options">
                <label for="">Type</label>
                <div class="button">
                  <input type="radio" id="type1" name="type" />
                  <label class="btn btn-default" for="type1">Sony</label>
                </div>
                <div class="button">
                  <input type="radio" id="type2" name="type" />
                  <label class="btn btn-default" for="type2">Apple</label>
                </div>
                <div class="button">
                  <input type="radio" id="type3" name="type" />
                  <label class="btn btn-default" for="type3">Samsung</label>
                </div>
              </div>
              <div class="form-group" >
                <label for="">Ad title</label>
                <input type="text" name="" id="" />
                <div class="ins">
                  <span
                    >Mention the key features of your item (e.g. brand, model
                    ,type etc)</span
                  >
                  <span>21 / 30</span>
                </div>
              </div>
              <div class="form-group">
                <label for="">Description</label>
                <textarea name="" id="" cols="30" rows="5"></textarea>
                <div class="ins">
                  <span
                    >Include condition , features and reason for selling</span
                  >
                  <span>0 / 30</span>
                </div>
              </div>
            </div>
            <div class="priceDetails">
              <div class="formSecHead">
                <h5>SET A PRICE</h5>
              </div>
              <div class="form-group">
                <label for="">Price</label>
                <input type="text" name="" id="" />
                <span class="rstag">Rs</span>
              </div>
            </div>
            <div class="uploadDetials">
              <div class="formSecHead">
                <h5>UPLOAD PHOTOS</h5>
              </div>
              <div class="form-group fileUpload">
                <label>
                  <font-awesome-icon :icon="['fas', 'camera']" />
                  <input type="file" size="60" />
                </label>
              </div>
              <div class="formSecHead">
                <h5>UPLOAD PHOTOS</h5>
              </div>
              <div class="form-group locationField">
                <div class="selectField">
 <select name="" id="">
              <option value="fa-map-marker">&#xf041; Srilanka</option>
              <option value="fa-map-marker">&#xf041; Srilanka</option>
              <option value="fa-map-marker">&#xf041; Srilanka</option>
            </select>
                </div>
               
              </div>
              <div class="form-group sameLoc">
                <input type="checkbox" name="" id="" />
                <label for="" class="loc">Same Location</label>
              </div>
            </div>
            <div class="reviewDetials">
              <div class="formSecHead">
                <h5>REVIEW YOUR DETAILS</h5>
              </div>
              <div class="form-group">
                <label for="">Name</label>
                <input type="text" name="" id="" />
              </div>
              <div class="preDetails">
                <span class="title"> Your phone number </span>
                <span class="data"> +9713974927491 </span>
              </div>
              <div class="preDetails">
                <span class="title"> Show my phone number on my ads </span>
                <span class="data">
                  <label class="switch" for="checkboxnewItem">
                    <input type="checkbox" id="checkboxnewItem" />
                    <div class="slider round"></div>
                  </label>
                </span>
              </div>
            </div>
            <div class="submitBtn">
              <a href="#" data-bs-toggle="modal" data-bs-target="#previewAd" class="postNow">Post Now</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- Modal -->
<div class="modal fade" id="previewAd" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
     <section class="adPosted">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
<div class="Content">
<div class="imgicon">
              <img src="../../assets/IMG/Iconawesome-check-circle.png" alt="">
            </div>
            <h5>Congratulations!</h5>
            <p>Your Ad will go live shortly...</p>
            <span>
              <font-awesome-icon icon="circle-exclamation"/>
              LYF allows 3 free ad in 1 day for Mobiles</span>
              <div class="tagImg">
                <img src="../../assets/IMG/Group3.png" alt="" class="img-fluid">
              </div>
              <div class="sellBoast">
                <h5>Reach more buyers and sell faster</h5>
                <p>Upgrade your Ad to a top position</p>
                <div class="sellbtn">
                  <a href="#" class="btn sellFast">Sell Fast</a>
                  <a href="#" class="btn pAd">Preview Ad</a>
                </div>
              </div>
</div>
            
     </section>
    </div>
  </div>
</div>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  setup() {
    const route = useRoute();

    const params = computed(() => route.params);
    return {
      params,
    };
  },
};
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

/* Form CSS */
.centerDiv {
  margin: 0px auto;
  width: 60%;
}

section.postForm {
  padding: 56px 0px;
}

.headText h5 {
  text-align: center;
  font-size: 28px;
  margin-bottom: 20px;
  font-weight: normal;
  text-transform: uppercase;
}
form.postDetails {
  border: 1px solid #bbb;
  border-radius: 5px;
}
section.adPosted {padding: 28px 16px;}

.modal-content {
    width: -webkit-fill-available;
}



section button.btn-close {float: right;}

.imgicon {
    text-align: center;
    margin-bottom: 17px;
}

.imgicon img {
    width: 47px;
}

section.adPosted p {
    font-size: 11px;
    font-weight: 500;
    text-align: center;
    color: #002F34;
}

section.adPosted h5 {
    text-align: center;
    font-size: 15px;
    color: #002F34;
    margin-bottom: 16px;
    font-weight: 500;
}

section.adPosted {
    text-align: center;
}

section.adPosted span {
    font-size: 10px;
    color: #002f3473;
}

.tagImg img {
    width: 121px;
    margin-top: 38px;
}

.sellBoast h5 {
    margin-top: 10px;
}

.sellbtn {
      display: grid;
    margin-top: 30px;
    justify-items: center;
}

a.btn.sellFast {
    width: fit-content;
    padding: 9px 100px;
    background-color: #fc6748;
    font-size: 12px;
    color: #fff;
    margin: auto;
    font-weight: 500;
}

a.btn.pAd {
    border: 2px solid;
    width: fit-content;
    padding: 9px 92px;
    color: #443688;
    font-size: 12px;
    background: #fff;
    margin: auto;
    font-weight: 500;
    margin-top: 8px;
}
.formHead h2 {
  font-weight: 500;
  font-size: 21px;
  padding: 21px 16px 0px 16px;
  margin-bottom: 18px;
}

.slctCat span {
  font-size: 12px;
}

.slctCat a {
  font-size: 12px;
  text-decoration: none;
  margin-left: 14px;
  color: var(--primary);
  border-bottom: 2px solid;
  padding-bottom: 2px;
}
.form-group.locationField {
  margin: 0px;
}
.slctCat {
  margin-bottom: 22px;
  padding: 0px 16px;
}

.inputDetails,
.priceDetails,
.uploadDetials,
.reviewDetials,
.submitBtn {
  border-top: 1px solid #bbb;
  padding: 27px 30px;
}
.detailHead h5,
.formSecHead h5 {
  font-size: 21px;
  font-weight: 500;
}

.detailHead h5 {
  margin-bottom: 27px;
}

.formSecHead h5 {
  margin-bottom: 9px;
}

.form-group label {
  font-size: 12px;
  font-weight: 800;
  display: grid;
  color: #9b9b9b;
}

.form-group input,
.form-group textarea {
  border: 1px solid #9b9b9b;
  padding: 10px 5px;
  border-radius: 5px;
  width: 100%;
  outline: none;
  color: var(--para-color);
}

.form-group .ins span {
      font-size: 11px;
    color: #9b9b9b;
    flex: 1;
}
.form-group .ins span:last-child{
  text-align: right;
}

.form-group {
  margin-bottom: 25px;
}

.ins {
  display: flex;
  justify-content: space-between;
}
span.rstag {
  padding-right: 8px;
  color: #9d9d9d;
  border-right: 1px solid #9d9d9d;
  position: absolute;
  left: 10px;
  top: 27px;
}

.priceDetails .form-group {
  position: relative;
}
.form-group.sameLoc {
        margin-top: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}


select,option {
  font-family: "Poppins", "fontAwesome";
  font-weight: 900;
  color: #7f7f7f;
  }
  
.form-group.sameLoc input {
  width: fit-content;
}

label.loc {
  margin-left: 14px;
  color: #FC6748;
  display: flex;
  align-items: center;
  font-size: 17px;
}

.priceDetails .form-group input {
  padding-left: 47px;
}

.form-group select {
      outline: none;
    padding: 11px;
    border-radius: 5px;
    background: none;
    width: 100%;
    border: 1px solid #70707066;
}
.sameLoc input[type="checkbox"] {
-webkit-appearance: none;
    appearance: none;
    /* background-color: #FC6748; */
    margin: 0;
    font: inherit;
    /* color: currentColor; */
    width: 1.4em;
    height: 1em;
    border: 1px solid #FC6748;
    border-radius: 4px;
    display: grid;
    place-content: center;
}

.sameLoc input[type="checkbox"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  transform: scale(0);
  transform-origin: bottom left;
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--form-control-color);
  /* Windows High Contrast Mode */
  background-color: #fff;
}

.sameLoc input[type="checkbox"]:checked::before {
  transform: scale(1);
}
.sameLoc input[type="checkbox"]:checked {
    background-color: #FC6748;
  
}

.sameLoc input[type="checkbox"]:focus {
  outline: max(2px, 0.15em) solid transparent;
  outline-offset: max(2px, 0.15em);
}

.sameLoc input[type="checkbox"]:disabled {
  --form-control-color: var(--form-control-disabled);
    background-color: #FC6748;
  color: var(--form-control-disabled);
  cursor: not-allowed;
}
.preDetails span {
  font-size: 13px;
  color: #9d9d9d;
  margin-bottom: 5px;
}

.preDetails span.data {
  position: relative;
}

.submitBtn {
  text-align: right;
}

.submitBtn a.postNow {
  font-size: 16px;
  background-color: var(--primary);
  padding: 14px 24px;
  border-radius: 5px;
  color: var(--white);
  text-decoration: none;
}
.fileUpload label {
  padding: 24px 30px;
  font-size: 30px;
  display: table;
  color: #000;
}
.preDetails {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 15px;
}
input[type="file"] {
  display: none;
}
.form-group.fileUpload {
  border-radius: 20px;
  box-shadow: 4px 2px 20px -1px #dfdfdf;
  width: fit-content;
}
.button {
     float: left;
    margin: 0 5px 0 0;
    width: 100px;
    height: 40px;
    margin-bottom: 10px;
    position: relative;;
}

.button label,
.button input {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.button input[type="radio"] {
  opacity: 0.011;
  z-index: 100;
}

.button input[type="radio"]:checked + label {
 background: var(--secondary);
    border-radius: 20px;
    color: var(--white);
}

.button label {
 cursor: pointer;
    z-index: 90;
    border: 1px solid var(--secondary);
    line-height: 1.8em;
    border-radius: 100px;
}
.form-group.options {
    display: flow-root;
}

select {
  -webkit-appearance: none;
  appearance: none;
}
.selectField {
  position: relative;
}

.selectField::after {
     content: "";
    font-size: 1rem;
    font-family: "fontAwesome";
    top: 10px;
    color: #7f7f7f;
    right: 26px;
    position: absolute;
}
@media (min-width:320px)  {
  
  .centerDiv {
  width: 90%;
}
.form-group {width: 95%;}
  /* smartphones, iPhone, portrait 480x320 phones */ }
@media (min-width:481px)  { 
  
  .centerDiv {
  width: 80%;
}
.form-group {width: 60%;}
  /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ }
@media (min-width:641px)  { 
  
  .centerDiv {
  width: 80%;
}
.form-group {width: 60%;}
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ }
@media (min-width:961px)  { 
  
  .centerDiv {
  width: 60%;
}
.form-group {width: 60%;}
  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
@media (min-width:1025px) { 
  
  .centerDiv {
  width: 60%;
}
  /* big landscape tablets, laptops, and desktops */ }
@media (min-width:1281px) { 
  
  .centerDiv {
  width: 60%;
}
.form-group {width: 60%;}
  /* hi-res laptops and desktops */ }
</style>