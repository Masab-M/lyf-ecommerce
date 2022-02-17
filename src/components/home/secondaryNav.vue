<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="specificCat">
            <li class="nav-item" v-for="item in items" :key="item.cat">
              {{ item.cat }}
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
        { cat: 'REAL ESTATE' }, 
        { cat: 'ELECTRONICS' },
        { cat: 'PETS' },
        { cat: 'VEHICLES' },
        { cat: 'HOUSEHOLD' },]
  }
}
};
</script>

<style lang="scss" scoped>
</style>