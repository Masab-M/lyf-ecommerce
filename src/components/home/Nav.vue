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
          <!-- <div class="form-group mb-sm-10 select-Country">
            <select name="">
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
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <router-link to="/search?s=4">
              <button class="btn" type="submit">
                <font-awesome-icon :icon="['fas', 'search']" /></button
            ></router-link>
          </div>
        </form>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="btn login" :to="'/signin'">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn signup" :to="'/signup'"
              >Sign Up</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {};
</script>

<style lang="css" scoped>
@media (min-width: 320px) {
  form.d-flex {
    width: 100%;
    flex-direction: column;
  }
  ul.navbar-nav {
    width: fit-content;
    flex-direction: row;
  }
  .form-group.select-Country {
    width: 100%;
  }
  .form-group.search {
    width: 100%;
  }
  ul.navbar-nav {
    width: fit-content;
  }
  /* smartphones, iPhone, portrait 480x320 phones */
}
@media (min-width: 481px) {
  form.d-flex {
    width: 100%;

    flex-direction: column;
  }
  ul.navbar-nav {
    width: fit-content;
    flex-direction: row;
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
    width: 80%;

    flex-direction: column;
  }
  ul.navbar-nav {
    width: fit-content;
    flex-direction: row;
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
    width: 80%;
    flex-direction: row;
  }
  ul.navbar-nav {
    width: 30%;
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
  ul.navbar-nav {
    width: fit-content;
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
    width:80%;
    flex-direction: row;
  }
  ul.navbar-nav {
    width: fit-content;
    flex-direction: row;

  }
  .form-group.select-Country {
    width: 30%;
  }
  /* hi-res laptops and desktops */
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
  border-radius: 5px;
  background-color: var(--white);
}
.form-group.search input {
  width: 100%;
  background: none;
  border: none;
  outline: none;
}
.form-group.search button svg {
  font-size: 24px;
}
.form-group.search button {
  background-color: var(--primary);
  border-radius: 5px;
  color: var(--white);
  padding: 14px 15px 15px 16px;
  font-size: large;
}

.form-group.select-Country select {
  padding: 1.4em 0.813em;
  margin-right: 0.813em;
  border: none;
  box-shadow: 0px 1px 20px -13px #8989897a;
  border-radius: 5px;
  font-size: 14px;
  outline: none;
  font-weight: 500;
  background-color: var(--white);
  width: 95%;
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
button.navbar-toggler.collapsed {
  outline: none;
}
form.d-flex {
  gap: 10px;
}
ul li a.login {
  font-size: 18px;
  color: var(--black);
  padding: 12px 24px;
}
ul li a.signup {
  font-size: 16px;
  font-weight: normal;
  color: var(--black);
  border: 2px solid var(--secondary);
  border-radius: 50px;
  padding: 12px 24px;
}
select,
option {
  font-family: "Poppins", "fontAwesome";
  font-weight: 900;
  color: #7f7f7f;
}
.form-group.searchDropDown {
    position: relative;
}

.form-group.searchDropDown input {
    padding: 17px;
    width: 100%;
    border: none;
    outline: none;
    padding-left: 35px;
    padding-right: 35px;
}

.form-group.dropdown.searchDropDown svg.fa-magnifying-glass {
    position: absolute;
    left: 10px;
        color: #36363666;
    top: 20px;
}

.form-group.searchDropDown .dropdown-menu {
      width: 100%;
    height: 321px;
    border: none;
    overflow: auto;
}
.form-group.dropdown.searchDropDown svg.fa-angle-down {
    position: absolute;
    right: 10px;
    top: 20px;
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

/* form.d-flex .form-group {
  padding: 1em 0.813em;
  margin-right: 0.813em;
  border: none;
  box-shadow: 0px 1px 20px -13px #8989897a;
  border-radius: 5px;
} */
</style>