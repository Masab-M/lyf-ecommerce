<template>
  <nav class="navbar navbar-expand-lg 	d-none d-sm-none d-md-none d-lg-block">
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
            <li class="nav-item" v-for="item in items" :key="item.cat">
              <a class="nav-link" href="#"> {{ item.cat }}</a>
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
        { cat: "REAL ESTATE" },
        { cat: "ELECTRONICS" },
        { cat: "PETS" },
        { cat: "VEHICLES" },
        { cat: "HOUSEHOLD" },
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
</style>