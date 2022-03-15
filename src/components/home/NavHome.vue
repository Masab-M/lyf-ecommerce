<template>
  <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    rel="stylesheet"
  />
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="'/'"
        ><img src="../../assets/IMG/logo.png" alt=""
      /></router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon">
          <font-awesome-icon icon="align-right" />
        </span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="d-flex me-auto mb-2 mb-lg-0">
          <!-- <div class="form-group select-Country">
            <select name="" id="">
              <option value="fa-map-marker">&#xf041; Srilanka</option>
              <option value="fa-map-marker">&#xf041; Srilanka</option>
              <option value="fa-map-marker">&#xf041; Srilanka</option>
            </select>
          </div> -->
          <div class="form-group dropdown searchDropDown">
            
            <input
              type="text"
              name=""
              placeholder="Search"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            />
            <font-awesome-icon icon="magnifying-glass"/>
            <font-awesome-icon icon="angle-down"/>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <label for="">RECENT LOCATIONS</label>
              <ul class="recentLocation">
                <li>
                  <font-awesome-icon icon="location-dot"/>
                  Colombo</li>
              </ul>
              <label for="" class="popularHead">POPULAR LOCATIONS</label>
              <ul class="locations">
                <li>
                  <font-awesome-icon icon="location-dot"/>
                  Galle</li>
                  <li>
                  <font-awesome-icon icon="location-dot"/>
                  Jaffna</li>  
              </ul>
            </div>
          </div>
          <div class="form-group search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn" type="submit">
              <font-awesome-icon :icon="['fas', 'search']" />
            </button>
          </div>
        </form>
        <ul class="navbar-nav  navaction">
          <li class="nav-item">
            <router-link class="fav" :to="'/wishlist'">
              <font-awesome-icon :icon="['far', 'heart']" />
            </router-link>
          </li>
          <li class="nav-item">
            <div class="dropdown">
              <font-awesome-icon
                :icon="['far', 'bell']"
                id="Notification"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
              <span class="light">0</span>
              <div
                class="
                  dropdown-menu dropdown-menu-end dropdown-menu-lg-start
                  notify
                "
                aria-labelledby="Notification"
              >
                <h5 class="headDropDown">Recent Notification</h5>
                <!-- <div class="illustration">
                 <p>No Notification</p>
                 <span>Check back here for updates</span>
                 <img src="../../assets/IMG/notify.png" alt="">
               </div> -->
                <div class="recent">
                  <div class="singleNotify">
                    <div class="img">
                      <img src="https://picsum.photos/50/50" alt="" />
                      <div class="recentDet">
                        <label>House updates</label>
                        <p>Florida</p>
                        <span>21 Nov 2020</span>
                      </div>
                    </div>

                    <div class="notifyActioiin">
                      <font-awesome-icon icon="trash-can" />
                      <span class="time">23 : 54</span>
                    </div>
                  </div>
                  <div class="singleNotify">
                    <div class="img">
                      <img src="https://picsum.photos/50/50" alt="" />
                      <div class="recentDet">
                        <label>House updates</label>
                        <p>Florida</p>
                        <span>21 Nov 2020</span>
                      </div>
                    </div>

                    <div class="notifyActioiin">
                      <font-awesome-icon icon="trash-can" />
                      <span class="time">23 : 54</span>
                    </div>
                  </div>
                  <div class="singleNotify">
                    <div class="img">
                      <img src="https://picsum.photos/50/50" alt="" />
                      <div class="recentDet">
                        <label>House updates</label>
                        <p>Florida</p>
                        <span>21 Nov 2020</span>
                      </div>
                    </div>

                    <div class="notifyActioiin">
                      <font-awesome-icon icon="trash-can" />
                      <span class="time">23 : 54</span>
                    </div>
                  </div>
                  <div class="singleNotify">
                    <div class="img">
                      <img src="https://picsum.photos/50/50" alt="" />
                      <div class="recentDet">
                        <label>House updates</label>
                        <p>Florida</p>
                        <span>21 Nov 2020</span>
                      </div>
                    </div>

                    <div class="notifyActioiin">
                      <font-awesome-icon icon="trash-can" />
                      <span class="time">23 : 54</span>
                    </div>
                  </div>
                  <div class="singleNotify">
                    <div class="img">
                      <img src="https://picsum.photos/50/50" alt="" />
                      <div class="recentDet">
                        <label>House updates</label>
                        <p>Florida</p>
                        <span>21 Nov 2020</span>
                      </div>
                    </div>

                    <div class="notifyActioiin">
                      <font-awesome-icon icon="trash-can" />
                      <span class="time">23 : 54</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <div class="dropdown">
              <font-awesome-icon
                :icon="['far', 'comment']"
                id="chatdropDown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
              <span class="light">0</span>
              <div
                class="
                  dropdown-menu dropdown-menu-end dropdown-menu-lg-start
                  chat
                "
                aria-labelledby="chatdropDown"
              >
                <h5 class="headDropDown">Chat</h5>
                <!-- <div class="illustration">
                 <p>No Chat</p>
                 <span>Check back here for updates</span>
                 <img src="../../assets/IMG/notify.png" alt="">
               </div> -->
                <div class="chat">
                  <router-link to="/inbox">
                    <div class="singlechat">
                      <div class="img">
                        <img src="https://picsum.photos/50/50" alt="" />
                        <div class="recentchat">
                          <label>House updates</label>
                          <p>Florida</p>
                        </div>
                      </div>

                      <div class="notifyActioiin">
                        <font-awesome-icon icon="circle-exclamation" />
                        <span class="time">23 : 54</span>
                      </div>
                    </div></router-link
                  >
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <div class="dropdown userDetials" style="margin: 10px">
              <div
                class="dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="https://picsum.photos/50/50" alt="" class="avatar" />
              </div>

              <div
                class="dropdown-menu userprofile"
                aria-labelledby="dropdownMenuButton1"
              >
                <div class="userdetaill">
                  <img src="https://picsum.photos/86/86" alt="" class="user" />
                  <h5>Keith</h5>
                  <p>Keith09@gmail.com</p>
                  <span>+912346734564</span>
                </div>
                <label for="">
                  <router-link to="/item">
                    <font-awesome-icon icon="list-check" />
                    Manage Ads
                  </router-link>
                </label>
                <ul class="useractions">
                  <li>
                    <router-link to="/user/5">
                      <font-awesome-icon icon="user" />
                      View Profile</router-link
                    >
                  </li>
                  <li>
                    <font-awesome-icon icon="credit-card" />
                    Membership
                  </li>
                  <li class="flexList">
                    <div><font-awesome-icon icon="moon" />Dark Mode</div>
                    <label class="switch" for="checkbox">
                      <input type="checkbox" id="checkbox" />
                      <div class="slider round"></div>
                    </label>
                  </li>
                  <li>
                    <font-awesome-icon icon="phone" />
                    Contact us
                  </li>

                  <li>
                    <router-link to="/faqs">
                      <font-awesome-icon icon="circle-question" />
                      Faq</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/edit/5">
                      <font-awesome-icon icon="gear" />
                      Settings
                    </router-link>
                  </li>
                  <li>
                    <font-awesome-icon icon="arrow-right-from-bracket" />
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <div class="dropdown">
              <font-awesome-icon
                icon="globe"
                id="language"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
              <div
                class="
                  dropdown-menu dropdown-menu-end dropdown-menu-lg-start
                  lang
                "
                aria-labelledby="language"
              >
                <div class="preferedLang">
                  <p>
                    <font-awesome-icon icon="globe" />
                    <span>Language</span>
                  </p>
                </div>
                <div class="otherlang">
                  <h5>OTHER LANGUAGES</h5>
                  <ul class="other">
                    <li class="lang">
                      <font-awesome-icon icon="globe" />
                      <span>Urdu</span>
                    </li>
                    <li class="lang">
                      <font-awesome-icon icon="globe" />
                      <span>Espanol</span>
                    </li>
                    <li class="lang">
                      <font-awesome-icon icon="globe" />
                      <span>Spanish</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        
        </ul>
        <ul class="navbar-nav sellBtn">
  <li class="nav-item">
            <a
              class="sell signup"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <font-awesome-icon :icon="['fas', 'add']" />
              Sell
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <new-component />
</template>
<script>
import newComponent from "../newitem/newComponent.vue";
export default {
  components: { newComponent },
};
</script>

<style lang="css" scoped>
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
.form-group.dropdown.searchDropDown svg.fa-angle-down {
    position: absolute;
    right: 10px;
        color: #36363666;
    top: 20px;
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
.form-group.searchDropDown {
    position: relative;
}

.form-group.searchDropDown input {
    padding: 17px;
    width: 100%;
    border: none;
    outline:none;
    padding-left: 35px;
    padding-right: 35px;
}

.form-group.dropdown.searchDropDown svg.fa-magnifying-glass {
       position: absolute;
    left: 10px;
    top: 20px;
    color: #00000061;
    font-size: 17px;
}

.form-group.searchDropDown .dropdown-menu {
      width: 100%;
    height: 321px;
    border: none;
    overflow: auto;
}

.form-group.searchDropDown .dropdown-menu label {
    padding: 25px 15px;
    font-size: 13px;
    font-weight: 400;
    color: #36363678;
}

ul.recentLocation {
    list-style: none;
    padding: 12px 15px;
    border-bottom: 1px solid #3636362b;
}

ul.recentLocation li {
    font-size: 17px;
    font-weight: normal;
}

ul.recentLocation li svg {color: #443688;margin-right: 16px;}

ul.locations {
    list-style: none;
    padding: 12px 15px;
}

ul.locations li {
    padding: 15px;
    font-size: 17px;
    font-weight: normal;
}

ul.locations li svg {
    color: #443688;
    margin-right: 16px;
}

s {}
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
nav.navbar {
  background-color: var(--bg-color) !important;
  padding: 0.688em 1.125em;
}
.sellBtn{
  display: flex;
    align-items: flex-start;
}
li.nav-item > a.fav {
  font-size: 22px;
  color: #000;
}
a.navbar-brand img {
  width: 100px;
}

.form-group.search {
  display: flex;
  width: 70%;
  border-radius: 5px;
  background-color: var(--white);
}
.form-group.search input {
  width: 100%;
  background: none;
  border: none;
  outline: transparent;
}
.form-group.search button {
  background-color: var(--primary);
  border-radius: 5px;
  color: var(--white);
  padding: 0.875em 0.9em;
  font-size: large;
}
.form-group.select-Country {
  width: 30%;
}
.form-group.select-Country select {
  padding: 1.4em 0.813em;
  margin-right: 0.813em;
  border: none;
  box-shadow: 0px 1px 20px -13px #8989897a;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  background-color: var(--white);
  width: 95%;
}
form.d-flex {
  width: 70%;
  gap: 10px;
}
.sell {
  background-color: #fff;
}
ul li a.signup {
  font-size: 17px;
  color: var(--black);
  border: 2px solid var(--secondary);
  border-radius: 50px;
  padding: 14px 27px;
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
}
ul li a.signup svg {
  margin-right: 6px;
}
/* form.d-flex .form-group {
  padding: 1em 0.813em;
  margin-right: 0.813em;
  border: none;
  box-shadow: 0px 1px 20px -13px #8989897a;
  border-radius: 5px;
} */
ul.navbar-nav li > svg {
  font-size: 25px;
}
ul.navbar-nav.sellBtn{
      align-items: flex-start;
}
ul.navbar-nav {
  display: flex;
  align-items: center;
}

ul.navbar-nav li {
  margin-left: 20px;
}
.dropdown.userDetials img {
  border-radius: 100px;
}
select {
  -webkit-appearance: none;
  appearance: none;
}
.select-Country {
  position: relative;
}

.select-Country::after {
  content: "";
  font-size: 1rem;
  font-family: "fontAwesome";
  top: 18px;
  color: #7f7f7f;
  right: 26px;
  position: absolute;
}
.dropdown-menu.lang {
  width: 297px;
  position: absolute;
  left: -250px;
  top: 45px;
}

.otherlang {
  padding: 14px;
}

.otherlang h5 {
  font-size: 12px;
  color: #36363678;
  margin: 10px 0px 30px 0px;
}

ul.other {
  list-style: none;
  padding: 0px;
}

ul.other li.lang {
  margin-left: 0px;
  margin-bottom: 28px;
  display: flex;
  align-items: center;
}

ul.other li.lang svg {
  font-size: 20px;
  margin-right: 20px;
}

ul.other li.lang span {
  font-size: 15px;
  color: #363636;
  font-weight: normal;
}
select,
option {
  font-family: "Poppins", "fontAwesome";
  font-weight: 900;
  color: #7f7f7f;
}

/** Drop Down */
span.light {
  border-radius: 100px;
  left: 10px;
  position: absolute;
  padding: 5px 8px;
  font-size: 8px;
  color: #fff;
  top: -16px;
  background: #ff4d4d;
}
.chat a {
  text-decoration: none;
}

.singleNotify .img,
.singlechat .img {
  display: flex;
  align-items: center;
}
.singleNotify,
.singlechat {
  display: flex;
  justify-content: space-between;
  padding: 20px 14px;
}

ul.useractions li a,
.dropdown-menu.userprofile > label a {
  text-decoration: none;
  color: #363636;
}
.singleNotify .img img,
.singlechat .img img {
  border-radius: 100px;
  width: 50px;
  margin-right: 19px;
  height: 50px;
}
.singlechat .img img {
  margin-right: 5px;
}
.notifyActioiin {
  display: grid;
  justify-items: end;
  align-content: space-between;
}
.navbar-toggler:focus {
    text-decoration: none;
    outline: 0;
    box-shadow:none !important;
}

.notifyActioiin svg {
  color: #fc6748;
}

.notifyActioiin span.time {
  color: #36363682;
  font-size: 8px;
}

.recentDet label,
.recentchat label {
  font-size: 11px;
  font-weight: 500;
  color: #363636;
}

.recentDet p,
.recentchat p {
  color: #36363682;
  margin-bottom: 4px;
  font-size: 8px;
}

.recentDet span,
.recentchat span {
  font-size: 8px;
  color: #36363678;
}
.dropdown-menu.lang {
  width: 297px;
  left: -250px;
  position: absolute;
  top: 45px;
}

.otherlang {
  padding: 14px;
}

.otherlang h5 {
  font-size: 12px;
  color: #36363678;
  margin: 10px 0px 30px 0px;
}

ul.other {
  list-style: none;
  padding: 0px;
}

ul.other li.lang {
  margin-left: 0px;
  margin-bottom: 28px;
  display: flex;
  align-items: center;
}

ul.other li.lang svg {
  font-size: 20px;
  margin-right: 20px;
}

ul.other li.lang span {
  font-size: 15px;
  color: #363636;
  font-weight: normal;
}
.preferedLang {
  border-bottom: 1px solid #36363624;
  padding: 24px 16px;
}

.preferedLang p {
  display: flex;
  margin: 0px;
  font-weight: 500;
  color: #443688;
  font-size: 15px;
  align-items: center;
}

.preferedLang p svg {
  margin-right: 26px;
  font-size: 20px;
}

.dropdown-toggle::after {
  border: none !important;
  font: normal normal normal 14px/1 FontAwesome;
  content: "\f107" !important; /* the desired FontAwesome icon */
  vertical-align: 0; /* to center vertically */
}
.dropdown-menu::before {
  position: absolute;
  content: "";
  width: 20px;
  height: 20px;
  background-color: white;
  right: 15px;
  top: -10px;
  transform: rotate(45deg);
  box-shadow: 0 -5px 5px -5px rgb(156 156 156), -5px 0 5px -5px rgb(156 156 156);
  z-index: 1;
}

.dropdown-menu.notify h5,
.dropdown-menu.chat h5 {
  font-size: 17px;
  padding: 24px 19px;
  font-weight: 500;
  border-bottom: 1px solid #0000001c;
  padding: 18px 14px;
  color: #000000;
}

.dropdown-menu.notify {
  overflow: auto;
  position:absolute;
  left: -255px;
  width: 291px;
  height: 290px;
  top: 38px;
}
.dropdown-menu.chat {
  left: -240px;
  position: absolute;
  top: 40px;
  width: 266px;
  overflow: auto;
  height: 383px;
}

.dropdown-menu.notify .illustration,
.dropdown-menu.chat .illustration {
  text-align: center;
  padding: 14px 24px;
}

.illustration p {
  font-size: 11px;
  font-weight: 500;
  margin-bottom: 8px;
}
.dropdown > svg {
  font-size: 21px;
}

.illustration span {
  font-size: 8px;
  color: #36363694;
}

.dropdown-menu.userprofile {
  top: 63px;
  left: -210px;
  position: absolute;
}
.dropdown-menu.userprofile {
  width: 290px;
  position: absolute;
}

.userdetaill {
  text-align: center;
}

.userdetaill img {
  margin-bottom: 24px;
  outline: none;
  width: 86px;
  height: 86px;
  padding: 2px;
  border-radius: 100px;
  border: 3px solid #fc6748;
}

.userdetaill h5 {
  margin-bottom: 12px;
  font-size: 21px;
  font-weight: 500;
}

.userdetaill p {
  font-size: 14px;
  color: #1d1d1d7a;
  margin-bottom: 13px;
}

.userdetaill span {
  font-size: 14px;
  color: #1d1d1d57;
}

.dropdown-menu.userprofile > label {
  border-bottom: 1px solid #1d1d1d12;
  font-size: 17px;
  padding: 15px 23px;
  width: 100%;
  color: #363636;
  margin-top: 20px;
  font-weight: 500;
}

.dropdown-menu.userprofile > label svg {
  color: #ff0000;
  margin-right: 13px;
}

ul.useractions {
  padding: 24px;
  list-style: none;
}

ul.useractions li {
  margin-bottom: 32px;
  font-size: 17px;
  padding: 0;
  margin-left: 0 !important;
}

ul.useractions li svg {
  color: #ff0000;
  width: 17px;
  margin-right: 15px;
}

li.flexList {
  display: flex;
  justify-content: space-between;
}
.sellBtn
{
      align-items: flex-start;
}
@media (min-width: 320px) {
.dropdown-menu.userprofile{

    left: -170px;

}
  .dropdown-menu.notify
  {
    left: -80px;
  }
  .dropdown-menu.chat{
    left:-118px;
  }
  .navaction{
    flex-direction: row;
        justify-content: space-between;
  }
  form.d-flex {
    flex-direction: column;
  }

  .form-group.select-Country {
    width: 100%;
  }
  .form-group.search {
    width: 100%;
  }

  /* smartphones, iPhone, portrait 480x320 phones */
}
@media (min-width: 481px) {
.dropdown-menu.userprofile{

    left: -210px;

}
  .dropdown-menu.notify
  {
    left: -255px;
  }
 .dropdown-menu.chat{
    left: -240px;
  }
  .navaction{
    flex-direction: row;
        justify-content: space-between;
  }
form.d-flex {
    flex-direction: column;
  }
   .dropdown-menu.chat{
    left: -240px;
  }
  .form-group.select-Country {
    width: 100%;
  }
  .form-group.search {
    width: 100%;
  }
  /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
}
@media (min-width: 641px) {
.dropdown-menu.userprofile{

    left: -210px;

}
  .dropdown-menu.notify
  {
    left: -255px;
  }
   .dropdown-menu.chat{
    left: -240px;
  }
    .navaction{
    flex-direction: row;
        justify-content: space-between;
  }
  form.d-flex {
    flex-direction: column;
  }
  .form-group.select-Country {
    width: 100%;
  }
  .form-group.search {
    width: 100%;
  }
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
}
@media (min-width: 961px) {
.dropdown-menu.userprofile{

    left: -210px;

}
  .dropdown-menu.notify
  {
    left: -255px;
  }
 .dropdown-menu.chat{
    left: -240px;
  }
form.d-flex {
    flex-direction: row;
  }
  .form-group.search {
    width: 60%;
  }
  .form-group.select-Country {
    width: 30%;
  }
  /* tablet, landscape iPad, lo-res laptops ands desktops */
}
@media (min-width: 1025px) {
.dropdown-menu.userprofile{

    left: -210px;

}
  .dropdown-menu.notify
  {
    left: -255px;
  }
 .dropdown-menu.chat{
    left: -240px;
  }
form.d-flex {
    flex-direction: row;
  }
  .form-group.search {
    width: 70%;
  }
  .form-group.select-Country {
    width: 30%;
  }
  /* big landscape tablets, laptops, and desktops */
}
@media (min-width: 1281px) {
.dropdown-menu.userprofile{

    left: -210px;

}
  .dropdown-menu.notify
  {
    left: -255px;
  }

   .dropdown-menu.chat{
    left: -240px;
  }
  form.d-flex {
    flex-direction: row;
  }

  .form-group.select-Country {
    width: 30%;
  }
  /* hi-res laptops and desktops */
}
</style>