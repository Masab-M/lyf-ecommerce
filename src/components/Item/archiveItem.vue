<template>
  <div class="col-md-4">
    <div class="item">
      <div class="itemHead">
        <div class="from">
          <label for="">From :</label>
          <span>24 Mar 21</span>
        </div>
        <div class="more">
          <font-awesome-icon icon="ellipsis-vertical" />
        </div>
      </div>
      <div class="itemDetails">
        <div class="itemImg">
          <img src="../../assets/IMG/itemImage.jpg" alt="" />
        </div>
        <div class="mainDetails">
          <h5>Honda Car</h5>
          <p>$ 40,000</p>
          <a href="#" class="btn singleItem">View Ad</a>
        </div>
      </div>
      <div class="statusDetails">
        <div class="status">
          <a href="#" v-if="cat == 'pending'" class="btn pending">Pending</a>
          <a href="#" v-if="cat == 'rejected'" class="btn rejected">Rejected</a>
          <a href="#" v-if="cat == 'live'" class="btn live">Live</a>
          <a href="#" v-if="cat == 'live'" class="btn boast">
            <font-awesome-icon icon="bolt-lightning" /> Boast</a
          >
        </div>
        <div class="statusIns">
          <p v-if="cat == 'pending'">Your Ads Will Be Approve In A While</p>
          <p v-if="cat == 'live'">Your Ads Is Approved By Our Admins</p>
          <p v-if="cat == 'rejected'">Your Ads Is Rejected By Our Admins</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cat", "api"],
  setup() {
    return {};
  },
};
</script>

<style scoped>
@media (min-width: 320px) {
  .itemImg img {
width: 100%;
    height: 140px;
  }
  .itemDetails {
      flex-direction: column;
}

a.btn.boast {
  padding: 7px 19px;
}
a.btn.live {
  padding: 8px 41px;
}

  /* smartphones, iPhone, portrait 480x320 phones */
}
@media (min-width: 481px) {
  .itemImg img {
    width: 158px;
    height: 121px;
  }
  a.btn.boast {
  padding: 7px 19px;
}
  .itemDetails {
      flex-direction: column;
      
}
a.btn.live {
  padding: 8px 41px;
}

  /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
}
@media (min-width: 641px) {
  .itemImg img {width: 100%;
    height: 121px;
  }
  .itemDetails {
      flex-direction: column;
      
}a.btn.boast {
  padding: 7px 14px;
}
a.btn.live {
  padding: 8px 25px;
}

  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
}
@media (min-width: 961px) {
  .itemImg img {
    width: 158px;
    height: 121px;
  }
  .itemDetails {
      flex-direction: row;
      
}
a.btn.boast {
  padding: 7px 19px;
}
a.btn.live {
  padding: 8px 41px;
}

  /* tablet, landscape iPad, lo-res laptops ands desktops */
}
@media (min-width: 1025px) {
  .itemImg img {
    width: 158px;
    height: 121px;
  }
  .itemDetails {
      flex-direction: row;
      
}
a.btn.boast {
  padding: 7px 19px;
}a.btn.live {
  padding: 8px 41px;
}

  /* big landscape tablets, laptops, and desktops */
}
@media (min-width: 1281px) {
  .itemImg img {
    width: 158px;
    height: 121px;
  }
  .itemDetails {
      flex-direction: row;
      
}
a.btn.boast {
  padding: 7px 19px;
}a.btn.live {
  padding: 8px 41px;
}
  /* hi-res laptops and desktops */
}


.archiveItems.itemslive .itemHead {
  background-color: #e8f5e5;
}

.archiveItems.itemsreject .itemHead {
  background-color: #fff0ec;
}

a.btn.boast {
  font-size: 15px;
  background-color: var(--secondary);
  border-radius: 100px;
  margin-left: 10px;
  color: #fff;
}

a.btn.rejected {
  padding: 8px 26px;
  border-radius: 100px;
  font-size: 15px;
  background-color: #fc6748;
  font-weight: 400;
  color: #fff;
}
.archiveItems .itemHead {
  display: flex;
  background-color: #ffb5003d;
  justify-content: space-between;
  padding: 16px 17px;
}

.itemDetails {
  display: flex;
  justify-content: flex-start;
}

.from {
  font-size: 16px;
  color: #363636;
}

.mainDetails {
  padding: 10px 13px;
}

.mainDetails h5 {
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 10px;
}

.mainDetails p {
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 13px;
}

a.btn.singleItem {
  padding: 10px 28px;
  text-transform: capitalize;
  border: 1px solid;
  font-size: 15px;
  color: var(--primary);
}

a.btn.pending {
  padding: 8px 26px;
  border-radius: 100px;
  font-size: 15px;
  background-color: #ffb500;
  font-weight: 400;
  color: #fff;
}

.item {
  box-shadow: 0px 0px 9px 0px #9d9d9d80;
  margin-bottom: 15px;
}

.status {
  padding-left: 16px;
  padding-top: 20px;
}
a.btn.live {
  font-size: 15px;
  border-radius: 100px;
  color: white;
  background-color: #1ca004;
}

.statusIns p {
  color: #363636;
  font-size: 15px;
  padding: 8px 16px 18px 16px;
  margin: 0;
}
</style>