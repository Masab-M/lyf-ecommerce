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
          <div class="form-group select-Country">
            <select name="" id="">
              <option value="fa-map-marker">&#xf041; Srilanka</option>
              <option value="fa-map-marker">&#xf041; Srilanka</option>
              <option value="fa-map-marker">&#xf041; Srilanka</option>
            </select>
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
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link  :to="'/wishlist'"
        >  <font-awesome-icon :icon="['far', 'heart']" />
        </router-link>
          
          </li>
          <li class="nav-item">
            <div class="dropdown">
            <font-awesome-icon :icon="['far', 'bell']" id="Notification" data-bs-toggle="dropdown" aria-expanded="false"/>
             <div class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start notify" aria-labelledby="Notification">
               <h5 class="headDropDown">
                 Recent Notification
               </h5>
               <div class="illustration">
                 <p>No Notification</p>
                 <span>Check back here for updates</span>
                 <img src="../../assets/IMG/notify.png" alt="">
               </div>
  </div>
  </div>
          </li>
          <li class="nav-item">
            <div class="dropdown">

            <font-awesome-icon :icon="['far', 'comment']"  id="chatdropDown" data-bs-toggle="dropdown" aria-expanded="false" />
                 <div class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start chat" aria-labelledby="chatdropDown">
               <h5 class="headDropDown">
                 Chat
               </h5>
               <div class="illustration">
                 <p>No Chat</p>
                 <span>Check back here for updates</span>
                 <img src="../../assets/IMG/notify.png" alt="">
               </div>
  </div>
            </div>
          </li>
          <li class="nav-item">
            <div class="dropdown userDetials" style="margin: 10px">
              <img
                src="https://picsum.photos/50/50"
                alt=""
                class="avatar dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
              <div
                class="dropdown-menu userprofile"
                aria-labelledby="dropdownMenuButton1"
              >
              <div class="userdetaill">
                <img src="https://picsum.photos/86/86" alt="" class="user">
                <h5>Keith</h5>
                <p>Keith09@gmail.com</p>
                <span>+912346734564</span>
              </div>
              <label for="">
                <font-awesome-icon icon="list-check"/>
                Manage Ads</label>
                <ul class="useractions">
                  <li>
                <font-awesome-icon icon="user"/>
                    View Profile
                  </li>
                  <li>
                <font-awesome-icon icon="credit-card"/>
                    Membership
                  </li>
                  <li class="flexList">
                    <div>
                                 <font-awesome-icon icon="moon"/>
Dark Mode
                    </div>
      <label class="switch" for="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div class="slider round"></div>
                  </label>
                  </li>
                  <li>
                <font-awesome-icon icon="phone"/>
                    Contact us
                  </li>
                  
                  <li>
                <font-awesome-icon icon="circle-question"/>
                    Faq
                  </li>
                  <li>
                <font-awesome-icon icon="gear"/>
                    Settings
                  </li>
                  <li>
                <font-awesome-icon icon="arrow-right-from-bracket"/>
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <font-awesome-icon icon="globe" />
          </li>
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
nav.navbar {
  background-color: var(--bg-color) !important;
  padding: 0.688em 1.125em;
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
select,
option {
  font-family: "Poppins", "fontAwesome";
  font-weight: 900;
  color: #7f7f7f;
}


/** Drop Down */



.dropdown-menu.notify h5,.dropdown-menu.chat h5 {
    font-size: 17px;
    padding: 24px 19px;
       font-weight: 500;
    border-bottom: 1px solid #0000001c;
    padding: 18px 14px;
    color: #000000;
}




.dropdown-menu.notify {
      left: -150px;
    width: 291px;
}

.dropdown-menu.notify .illustration,.dropdown-menu.chat .illustration {
    text-align: center;
    padding: 14px 24px;
}

.illustration p {
    font-size: 11px;
    font-weight: 500;
    margin-bottom: 8px;
}

.illustration span {
    font-size: 8px;
    color: #36363694;
}






.dropdown-menu.userprofile {
    left: -150px;
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

.dropdown-menu.userprofile>label {
    border-bottom: 1px solid #1d1d1d12;
    font-size: 17px;
    padding: 15px 23px;
    width: 100%;
    color: #363636;
    margin-top: 20px;
    font-weight: 500;
}

.dropdown-menu.userprofile>label svg {color: #FF0000;margin-right: 13px;}

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
    color: #FF0000;
    width: 17px;
    margin-right: 15px;
}

li.flexList {
    display: flex;
    justify-content: space-between;
}
@media (min-width: 320px) {
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
  form.d-flex {
    flex-direction: column;
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
  form.d-flex {
    flex-direction: row;
  }

  .form-group.select-Country {
    width: 30%;
  }
  /* hi-res laptops and desktops */
}
</style>