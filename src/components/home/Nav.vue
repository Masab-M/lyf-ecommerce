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
            <select name="">
              <option value="fa-map-marker">&#xf041; Srilanka</option>
              <option value="fa-map-marker">&#xf041; Srilanka</option>
              <option value="fa-map-marker">&#xf041; Srilanka</option>
            </select>
          </div>
          <div class="form-group search">
            <input
              class="form-control"
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
            <router-link class="nav-link btn login" :to="'/signin'"
              >Login</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link btn signup" :to="'/signup'"
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
  outline: none;
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
  outline: none;
  font-weight: 500;
  background-color: var(--white);
  width: 95%;
}
button.navbar-toggler.collapsed {
  outline: none;
}
form.d-flex {
  width: 80%;
}
ul li a.login {
  font-size: 18px;
  font-weight: 400;
  color: var(--black);
}
ul li a.signup {
  font-size: 16px;
  font-weight: normal;
  color: var(--black);
  border: 2px solid var(--secondary);
  border-radius: 50px;
  padding: 9px;
}
select {
  font-family: "Poppins", "fontAwesome";
  font-weight: 900;
}
/* form.d-flex .form-group {
  padding: 1em 0.813em;
  margin-right: 0.813em;
  border: none;
  box-shadow: 0px 1px 20px -13px #8989897a;
  border-radius: 5px;
} */
</style>