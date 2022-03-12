<template>
<div class="chat" v-for="chat in chats" :key="chat">
    <router-link    v-bind:to="'/inbox/'+chat.id">

  <div class="singleChat">
        <div class="left">
      <img src="https://picsum.photos/60/60" alt="" />
      <div class="userDetails">
        <h4>{{ chat.Name }}</h4>
        <p>{{ chat.product }}</p>
        <span> {{ chat.message }}</span>
      </div>
    </div>


    <div class="right">
      <div class="status">
        <div class="light"></div>
        <span>Online</span>
      </div>
      <div class="moreDetails">
        <span>23:43</span>

      </div>
    </div>
  </div>
      </router-link>  
              <font-awesome-icon class="moreOpt" icon="ellipsis-vertical" />
              </div>  
</template>

<script>
export default {
  data() {
    return {
      chats: [
        {
          id: 1,
          Name: "David Jason",
          product: "MacBook pro M1",
          message: "Deal Done bro!!!",
        },
        {
          id: 2,
          Name: "David Jason",
          product: "MacBook pro M1",
          message: "Deal Done bro!!!",
        },
        {
          id: 3,
          Name: "David Jason",
          product: "MacBook pro M1",
          message: "Deal Done bro!!!",
        },
      ],
    };
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.singleChat {
  padding: 0px 10px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
}
.chat {
    position: relative;
}

svg.moreOpt {
    position: absolute;
    top: 34px;
    right: 25px;
}
.left img {
  border-radius: 6px;
  width: 60px;
  height: 60px;
}
.left {
  display: flex;
}

.userDetails h4 {
  font-size: 17px;
  color: #363636;
  font-weight: 600;
  margin-bottom: 4px;
}
.chats a {
    text-decoration: none;
}

.userDetails p {
  font-size: 13px;
  font-weight: 400;
  color: #363636d9;
  margin-bottom: 0px;
}

.userDetails span {
  font-size: 11px;
  color: #363636bd;
}

.userDetails {
  padding-left: 10px;
}
.right {
  display: flex;
}

.status span {
  font-size: 11px;
  color: #363636;
}

.status .light {
  background-color: green;
  width: 9px;
  height: 9px;
  border-radius: 100px;
  margin-top: 3px;
  margin-right: 7px;
}

.status {
  display: flex;
  align-content: center;
  margin-right: 60px;
}

.moreDetails {
  display: grid;
  justify-items: end;
  align-items: start;
}

.moreDetails span {
  font-size: 12px;
  color: #363636;
  font-weight: 400;
}
</style>