<template>
  <nav class="navbar navbar-expand-lg d-none d-sm-none d-md-none d-lg-block">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navBarSecondary"
        aria-controls="navBarSecondary"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navBarSecondary">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              All Categories
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Category</a></li>
              <li><a class="dropdown-item" href="#">Category</a></li>
              <li><a class="dropdown-item" href="#">Category</a></li>
              <li><a class="dropdown-item" href="#">Category</a></li>
              <li><a class="dropdown-item" href="#">Category</a></li>
            </ul>
          </li>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="specificCat">
            <li class="nav-item dropdown" v-for="item in items" :key="item.cat">
              <a class="nav-link dropbtn" href="#"> {{ item.cat }}</a>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  setup() {
    return {};
  },
  data() {
    return {
      items: [
        {
          cat: "REAL ESTATE",
          subcat: [
            { title: "Bare lands", icon: "" },
            { title: "Houses", icon: "" },
            { title: "Estate", icon: "" },
            { title: "Appartments", icon: "" },
            { title: "Commercial", icon: "" },
          ],
        },
        {
          cat: "ELECTRONICS",
          subcat: [
            { title: "Bare lands", icon: "" },
            { title: "Houses", icon: "" },
            { title: "Estate", icon: "" },
            { title: "Appartments", icon: "" },
            { title: "Commercial", icon: "" },
          ],
        },
        {
          cat: "PETS",
          subcat: [
            { title: "Bare lands", icon: "" },
            { title: "Houses", icon: "" },
            { title: "Estate", icon: "" },
            { title: "Appartments", icon: "" },
            { title: "Commercial", icon: "" },
          ],
        },
        {
          cat: "VEHICLES",
          subcat: [
            { title: "Bare lands", icon: "" },
            { title: "Houses", icon: "" },
            { title: "Estate", icon: "" },
            { title: "Appartments", icon: "" },
            { title: "Commercial", icon: "" },
          ],
        },
        {
          cat: "HOUSEHOLD",
          subcat: [
            { title: "Bare lands" },
            { title: "Houses", icon: "" },
            { title: "Estate", icon: "" },
            { title: "Appartments", icon: "" },
            { title: "Commercial", icon: "" },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
a#navbarDropdown {
  color: var(--black);
  font-size: 17px;
  font-weight: 400;
  text-transform: uppercase;
}

nav.navbar.navbar-expand-lg {
  padding: 9px 16px;
}

ul li a.nav-link {
  font-size: 14px;
  font-weight: normal;
  color: var(--black);
  padding: 0;
  margin-right: 32px;
}

/** Drop Down */
/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}
</style>