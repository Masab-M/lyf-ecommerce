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
                <select name="" id="">
                  <option value="">&#xf3c5; Srilanka</option>
                  <option value="">Srilanka</option>
                  <option value="">Srilanka</option>
                  <option value="">Srilanka</option>
                </select>
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
                  <label class="switch" for="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div class="slider round"></div>
                  </label>
                </span>
              </div>
            </div>
            <div class="submitBtn">
              <a href="#" class="postNow">Post Now</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
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
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.form-group.sameLoc input {
  width: fit-content;
}

label.loc {
  margin-left: 32px;
}

.priceDetails .form-group input {
  padding-left: 47px;
}

.form-group select {
  padding: 11px;
  width: 60%;
}

.preDetails span {
  font-size: 13px;
  color: #9d9d9d;
}

.preDetails span.data {
  position: relative;
  left: 100px;
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
  position: relative;
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
</style>