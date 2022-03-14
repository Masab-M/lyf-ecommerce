<template>
  <section class="ProfileHead">
    <div class="headText">Edit Profile</div>
    <section class="profilesetting">
      <div class="row profiledetails">
        <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div class="profilImg">
            <img src="https://picsum.photos/196/196" alt="" />
            <div
              class="editImg"
              data-bs-toggle="modal"
              data-bs-target="#editImageModal"
            >
              <font-awesome-icon icon="pen-to-square" />
            </div>
          </div>
        </div>
        <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
          <div class="form-group">
            <div class="row">
              <div class="col-md-8">
                <div class="input">
                  <input type="text" placeholder="Kosala H." />
                  <span>21 / 30</span>
                </div>
              </div>
              <div class="col-md-4">
                <label for="">Registering name</label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="row">
              <div class="col-md-8">
                <div class="input">
                  <textarea
                    name=""
                    id=""
                    cols="21"
                    rows="4"
                    placeholder="Something about you"
                  ></textarea>
                  <span>0 / 30</span>
                </div>
              </div>
              <div class="col-md-4">
                <label for="">Give description about yourself</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="contactInfo">
      <div class="contact row">
        <div class="col-md-12">
          <div class="HeadText">Contact Information</div>
          <div class="form-group">
            <div class="row">
              <div class="col-md-8">
                <div class="prefix">
                  <input type="text" placeholder="423432432" />
                  <span>+91</span>
                </div>
              </div>
              <div class="col-md-4">
                <label for=""
                  >You have verified your phone. It is important to allow us to
                  securely communicate with you.</label
                >
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="row">
              <div class="col-md-8">
                <input type="email" placeholder="Xyz@gmail.com" />
              </div>
              <div class="col-md-4">
                <label for=""
                  >We won't reveal your email to anyone else nor use it to send
                  you spam</label
                >
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="row">
              <div class="col-md-8">
                <div class="prefix">
                  <input type="text" placeholder="Location" />
                  <font-awesome-icon icon="location-dot" />
                </div>
              </div>
              <div class="col-md-4">
                <label for="">Location</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="optSocial">
      <div class="option row">
        <div class="col-md-12">
          <div class="HeadText">Optional Information</div>
          <div class="row links">
            <div class="col-md-6">
              <label for="">Facebook</label>
            </div>
            <div class="col-md-6">
              <a href="#" class="btn connect active">Connect</a>
            </div>
          </div>
          <div class=""></div>
          <div class="row links">
            <div class="col-md-6">
              <label for="">Google</label>
            </div>
            <div class="col-md-6">
              <a href="#" class="btn connect">Disconnect</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="submitBtn">
      <div class="row">
        <div class="col-md-12">
<div class="saveBtn">
      <a href="#" class="btn secondary">Discard</a>
      <a href="#" class="btn primary">Save Changes</a>
</div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.profilImg img {
  max-width: 100%;
  width: 170px;
  border-radius: 100px;
}
.profilImg {
  display: block;
  margin: auto;
  position: relative;
  width: fit-content;
}
.editImg svg {
  font-size: 40px;
  color: #fff;
}
section.contactInfo {
  padding: 25px 23px;
  border-bottom: 1px solid #70707066;
}
section.optSocial {
      padding: 46px 23px;
    padding-bottom: 8px;
}

.links label {
 font-size: 17px;
    color: #363636;
    margin-bottom: 10px;
}

.links a {
  font-size: 16px;
}

a.btn.connect.active {
  padding: 8px 31px;
  border-radius: 5px;
  color: #fc6748;
  border: 1px solid;
  background: none;
}
.links {
  margin-bottom: 44px;
}
.submitBtn {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-bottom: 40px;
  padding: 0px 21px;
}

.submitBtn .secondary {
     padding: 13px 60px;
    font-size: 16px;
    color: #443688;
    border: 1px solid;
    margin-bottom: 10px;
    font-weight: 500;
    margin-right: 10px;
    border-radius: 5px;
}

.submitBtn .primary {
  font-size: 16px;
    padding: 13px 33px;
    border-radius: 5px;
    background: #443688;
    color: #fff;
    font-weight: 500;
}
a.btn.connect {
  color: #fff;
  padding: 8px 20px;
  background: #fc6748;
}
.HeadText {
  margin-bottom: 22px;
  font-size: 18px;
  font-weight: 500;
  color: #363636;
}

.prefix {
  margin-right: 10px;
  position: relative;
  flex: 50%;
}

.prefix span {
  position: absolute;
  left: 8px;
  top: 13px;
  color: #36363673;
}

.prefix input {
  padding-left: 40px !important;
}

.prefix svg {
  position: absolute;
  left: 10px;
  color: #36363673;
  top: 14px;
}

input[type="email"] {
  flex: 53%;
  margin-right: 10px;
}
.profilImg .editImg {
  border-radius: 0px 0px 100px 100px;
  width: -webkit-fill-available;
  height: 50%;
  display: flex;
  position: absolute;
  bottom: 0px;
  width: 166px;
  left: 0%;
  /* right: 16%; */
  background: #0000005c;
  justify-content: space-around;
  align-items: center;
}
.input textarea {
  background: #f7f7f7;
  border: none;
  outline: none;
  width: 100%;
  padding: 11px 15px;
  border-radius: 5px;
}
section.ProfileHead {
  border-radius: 5px;
  border: 1px solid #70707066;
}

.headText {
  padding: 12px 23px;
  border-bottom: 1px solid #70707066;
  font-size: 21px;
  color: #363636;
  font-weight: 500;
}

section.profilesetting {
  padding: 60px 2px 30px 20px;
  border-bottom: 1px solid #70707066;
}
.form-group input {
  background: #f7f7f7;
  border: none;
  padding: 11px 15px;
  outline: none;
  border-radius: 5px;
  width: 100%;
}

.form-group {
  margin-bottom: 10px;
}

.form-group label {
  font-size: 13px;
  color: #363636ad;
  flex: 50%;
}

.input span {
  font-size: 12px;
  display: flex;
  color: #36363673;
  justify-content: flex-end;
}
.input {
  margin-right: 25px;
}
@media (min-width: 320px) {
  
  .profilImg .editImg {
    width: 170px;
  }
  /* smartphones, iPhone, portrait 480x320 phones */
}
@media (min-width: 481px) {
  .profilImg .editImg {
    width: 170px;
  }
  /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
}
@media (min-width: 641px) {
  .profilImg .editImg {
    width: 155px;
  }
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
}
@media (min-width: 961px) {
  .profilImg .editImg {
    width: 122px;
  }
  /* tablet, landscape iPad, lo-res laptops ands desktops */
}
@media (min-width: 1025px) {
  .profilImg .editImg {
    width: 170px;
  }
  /* big landscape tablets, laptops, and desktops */
}
@media (min-width: 1281px) {
  .profilImg .editImg {
    width: 170px;
  }
  /* hi-res laptops and desktops */
}
</style>
