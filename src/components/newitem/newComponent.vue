<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <section class="offer">
          <div class="row ad">
            <div class="col-md-12">
              <h4>Post Your Ads</h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div class="row">
                <h5>What your Offering</h5>
                <div
                  class="col-md-3 col-sm-3 col-4"
                  v-for="cat in category"
                  :key="cat"
                >
                  <a
                    class="nav-link signup"
                    @click="
                      offer = cat.id;
                      catname = cat.title;
                    "
                    data-bs-toggle="modal"
                    data-bs-target="#subcat"
                  >
                    <div class="singleOffer">
                      <div class="icon">
                        <div
                          class="bgIcon"
                          v-bind:style="'background-color:' + cat.color + ';'"
                        >
                          <font-awesome-icon :icon="['fas', cat.iconName]" />
                        </div>
                      </div>
                      <div class="text">
                        <h5>{{ cat.title }}</h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="subcat"
    tabindex="-1"
    aria-labelledby="subcatLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <section class="subcat">
          <div class="centerDiv">
            <div class="row head">
              <div class="col-md-12">
                <div class="headtext">
                  <h4>post your ads</h4>
                  <a data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <font-awesome-icon icon="arrow-left"
                  /></a>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="prntCat">
                  <h5>{{ catname }}</h5>
                </div>

                <ul class="row subcategories">
                  <li class="col-md-12" v-for="cat in Subcategory" :key="cat">
                    <a
                      class="nav-link signup"
                      :href="`/newItem/itemDetails/${offer}/${cat.id}`"
                    >
                      <div class="singleCat">
                        <font-awesome-icon :icon="cat.iconName" />
                        <span>{{ cat.title }}</span>
                      </div>
                      <div class="forIcon">
                        <font-awesome-icon icon="angle-right" />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offer: 0,
      catname: "",
      Subcategory: [
        {
          id: 1,
          title: "Mobile",
          iconName: "mobile-screen-button",
          iconClass: "",
        },
        {
          id: 2,
          title: "Mobile phone accessories",
          iconName: "microchip",
          iconClass: "",
        },
        { id: 3, title: "Laptop", iconName: "laptop", iconClass: "" },
        { id: 4, title: "Tv", iconName: "tv", iconClass: "" },
        { id: 5, title: "Gaming Consoles", iconName: "gamepad", iconClass: "" },
        { id: 5, title: "Camera", iconName: "camera", iconClass: "" },
      ],
      category: [
        {
          id: 1,
          title: "Electronics",
          iconName: "mobile-screen-button",
          color: "",
        },
        {
          id: 2,
          title: "VEHICLES",
          iconName: "car-side",
          color: "#F60353",
        },
        {
          id: 3,
          title: "REAL ESTATE",
          iconName: "sign-hanging",
          color: "#FF1500",
        },
        {
          id: 4,
          title: "SPORTS",
          iconName: "basketball",
          color: "#51D5C3",
        },
        {
          id: 5,
          title: "PETS",
          iconName: "paw",
          color: "#FFC837",
        },
        {
          id: 5,
          title: "MORE CATEGORIES",
          iconName: "grip",
          color: "#BE0399",
        },
      ],
    };
  },
};
</script>


<style scoped>
section.offer .ad {
  border-radius: 10px;
  background-color: var(--white);
  width: 700px;
  position: relative;
  margin: 0px auto;
  padding: 26px 45px 75px 45px;
}
button.btn-close {
  position: absolute;
  right: 20px;
  top: 35px;
}
.row.ad h4 {
  text-align: center;
  font-size: 29px;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 48px;
}

.row.ad .row > h5 {
  margin-bottom: 45px;
  font-size: 20px;
  font-weight: 500;
}

.singleOffer .icon {
  text-align: center;
}
.headtext svg {
  left: 0px;
  position: absolute;
  top: 10px;
}
.icon svg {
  padding: 18px 0px;
  display: flex;
  border-radius: 100px;
  margin: auto;
  color: var(--white);
  align-items: center;
}
.bgIcon {
  width: 52px;
  text-align: center;
  height: 52px;
  border-radius: 100px;
  display: block;
  margin: auto;
  background: #443688;
}
.text h5 {
  font-size: 11px;
  text-align: center;
  margin-top: 13px;
  color: #000;
}
.modal-content {
  align-items: center;
  background-color: transparent;
}
section.subcat {
  padding: 50px 0px;
}

.centerDiv {
  width: 700px;
  padding: 65px 45px;
  margin: 0px auto;
  border-radius: 10px;
  background-color: var(--white);
}
.headtext {
  position: relative;
  text-align: center;
}
.headtext h4 {
  text-transform: capitalize;
  font-size: 28px;
  font-weight: normal;
}

.row.head {
  margin-bottom: 43px;
}

.prntCat h5 {
  font-size: 23px;
  font-weight: 400;
}

.prntCat {
  margin-bottom: 41px;
}

ul.row.subcategories {
  list-style: none;
  padding: 0px;
}

ul.row.subcategories li a {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  color: #000;
}

.singleCat span {
  margin-left: 29px;
  font-size: 19px;
}
@media (min-width: 320px) {
  section.offer .ad[data-v-15bce2a9] {
    width: 300px;
  }
  /* smartphones, iPhone, portrait 480x320 phones */
}
@media (min-width: 481px) {
  section.offer .ad[data-v-15bce2a9] {
    width: 700px;
  }
  /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
}
@media (min-width: 641px) {
  section.offer .ad[data-v-15bce2a9] {
    width: 700px;
  }
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
}
@media (min-width: 961px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
}
@media (min-width: 1025px) {
  section.offer .ad[data-v-15bce2a9] {
    width: 700px;
  }
  /* big landscape tablets, laptops, and desktops */
}
@media (min-width: 1281px) {
  section.offer .ad[data-v-15bce2a9] {
    width: 700px;
  }
  /* hi-res laptops and desktops */
}
</style>