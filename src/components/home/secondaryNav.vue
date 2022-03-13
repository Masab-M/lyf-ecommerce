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
              class="nav-link dropbtn"
              href="#"
            >
              All Categories
            </a>
            <div class="dropdown-content">
            <a class="" href="#">
               <img src="../../assets/IMG/Classifiedicon.png" alt="">
               CLASSIFIEDS</a>
            <a class="" href="#">
               <img src="../../assets/IMG/Iconawesome-car-side.png" alt="">
               Vehicles</a>
            <a class="" href="#">
               <img src="../../assets/IMG/RealState icon.png" alt="">
               Real Estate</a>
            </div>
          </li>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="specificCat">
            <li class="nav-item dropdown" v-for="item in items" :key="item.cat">
              <a class="nav-link dropbtn" href="#"> {{ item.cat }}</a>
              <div class="dropdown-content">
                <a v-for="sub in item.subcat" :key="sub.title" href="#">
                  <font-awesome-icon :icon="sub.icon" />
                  {{ sub.title }}</a
                >
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
            { title: "Bare lands", icon: "mountain" },
            { title: "Houses", icon: "house" },
            { title: "Estate", icon: "sign-hanging" },
            { title: "Appartments", icon: "sign-hanging" },
            { title: "Commercial", icon: "city" },
          ],
        },
        {
          cat: "ELECTRONICS",
          subcat: [
            {
              title: "Mobile",
              icon: "mobile-screen-button",
            },
            {
              title: "Mobile phone accessories",
              icon: "microchip",
            },
            {
              title: "Laptop",
              icon: "laptop",
            },
            {
              title: "Tv",
              icon: "tv",
            },
            {
              title: "Gaming Consoles",
              icon: "gamepad",
            },
            {
              title: "Camera",
              icon: "camera",
            },
          ],
        },
        {
          cat: "PETS",
          subcat: [
            { title: "Dogs", icon: "dog" },
            { title: "Cats", icon: "cat" },
            { title: "Birds", icon: "crow" },
            { title: "Fish", icon: "fish" },
            { title: "Other", icon: "circle-notch" },
          ],
        },
        {
          cat: "VEHICLES",
          subcat: [
            { title: "Cars" ,icon:"car"},
            { title: "SUV", icon: "truck-monster" },
            { title: "Trucks", icon: "truck" },
            { title: "Bikes", icon: "person-biking" },
            { title: "Spares", icon: "screwdriver-wrench" },
            { title: "Other", icon: "circle-notch" },
          ],
        
        },
        {
          cat: "HOUSEHOLD",
            subcat: [
            { title: "Living room", icon: "chair" },
            { title: "Bed room", icon: "bed" },
            { title: "Dining", icon: "utensils" },
            { title: "Plastic products", icon: "wine-bottle" },
            { title: "Appliances", icon: "lightbulb" },
            { title: "Office furniture", icon: "couch" },
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
    width: 237px;
    background-color: #fff;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);
    z-index: 99999;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
color: black;
    padding: 12px 16px;
    text-decoration: none;
    border-bottom:2px solid transparent;
    font-size: 12px;
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    align-items: center;
}

/* Change color of dropdown links on hover */


/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}
.nav-link.dropbtn{
  transition: 0.6s ease;
}
.nav-link.dropbtn:after {
    content: "";
    display: block;
    bottom: 0px;
    width: 0px;
    /* position: absolute; */
    height: 3px;
    border-radius: 100px;
    background: #fc6748;
}
.nav-link.dropbtn:hover::after{

   width: inherit;
} 
.dropdown-content a:hover {
    border-bottom: 2px solid;
    color: #fc6748;
}
</style>