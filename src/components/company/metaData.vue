<template>

    <div class="metadata">
        <div class="contactBtn">
            <a href="#" class="btn follow" >Follow</a>
            <a href="#" class="btn contact">Chat with Company</a>
        </div>
        <div class="usrInfo">
            <ul class="info">
                <li>USER INFORMATION</li>
                <li>Xyz@Gmail.Com</li>
                <li>+9717312897319</li>
            </ul>
        </div>
        <div class="accounts">
            <ul class="acc">
                <li>LINKED ACCOUNTS</li>
                <li>
                    <span>Google</span>
                    <font-awesome-icon icon="check" class="active"/>
                </li>
                <li>
                    <span>Phone Number</span>
                    <font-awesome-icon icon="check" class="active"/>
                </li>
                <li>
                    <span>Email</span>
                    <font-awesome-icon icon="check" />
                </li>
            </ul>
        </div>
          <div class="following">
            <ul class="acc">
                <li>FRIENDS</li>
                <li>
                    <span>Followers</span>
                    <span>0</span>
                </li>
                <li>
                    <span>Following</span>
                    <span>0</span>
                </li>
            </ul>
        </div>
        <div class="location">
            <p class="head">
                LOCATION
            </p>
            <div class="map">
                <span class="area">
                    Colombo , srilanka
                </span>
                   <GMapMap
      :center="{lat: 51.093048, lng: 6.842120}"
      :zoom="7"
      map-type-id="terrain"
      style="width: 100vw; height: 900px"
  >
  </GMapMap>
            </div>

        </div>
                    <div class="link">
                <span class="time">Member Since August 2020</span>
                <a href="#" class="btn">Share Profile Link</a>
            </div>
    </div>
</template>

<script>
export default {
 data() {
    return {
      center: { lat: 51.093048, lng: 6.84212 },
      markers: [
        {
          position: {
            lat: 51.093048,
            lng: 6.84212,
          },
        },
        {
          position: {
            lat: 51.198429,
            lng: 6.69529,
          },
        },
        {
          position: {
            lat: 51.165218,
            lng: 7.067116,
          },
        },
        {
          position: {
            lat: 51.09256,
            lng: 6.84074,
          },
        },
      ],
    };
  },
    setup () {
        

        return {}
    }
}
</script>

<style scoped>

.metadata {
    padding: 29px 36px;
    background-color: var(--white);
    border-radius: 9px;
    border: 1px solid #70707066;
    height: 100%;
}

.contactBtn a {
    display: block;
    width: 100%;
}

a.follow {
    font-weight: 500;
    background-color: #FC6748;
    color: var(--white);
    padding: 10px;
    font-size: 14px;
    margin-bottom: 15px;
}
p.head {
    color: #443688;
    margin-bottom: 10px;
    font-size: 11px;
    background-color: #F7F7F7;
    font-weight: 600;
    padding: 6px 10px;
}

.map span {
    font-size: 11px;
    color: #363636;
    margin-bottom: 5px;
}

.map {
    padding: 6px 12px;
}

.vue-map-container {
    width: 100%;
    margin: 10px 0px;
    height: 135px;
}
a.contact {
    font-weight: 500;
    border: 2px solid #FC6748;
    color: #FC6748;
    padding: 10px;
    margin-bottom: 22px;
    font-size: 14px;
}
.metadata ul,.location {
    border-radius: 5px;
    list-style: none;
    font-size: 12px;
    margin-bottom: 14px;
    padding: 0;
    border: 1px solid #70707066;
}

.metadata ul li:first-child{
    color: #443688;
    margin-bottom: 10px;
    font-size: 11px;
    background-color: #F7F7F7;
    font-weight: 600;
    padding: 6px 10px;
}

.metadata ul li {padding: 6px 10px;color: #363636;}

.accounts ul li {
    display: flex;
    align-content: center;
    justify-content: space-between;
}
.link span {
    margin-bottom: 30px;
    font-size: 10px;
    display: block;
    text-align: center;
}
.location {
    margin-bottom: 30px;
}
.link a {
    margin-bottom: 20px;
    color: #6C63FF;
    font-size: 10px;
}

.link {
    text-align: center;
}
ul.acc li svg {
    border-radius: 50px;
    background-color: red;
    color: var(--white);
    text-align: center;
    padding: 3px 3px;
}

.vue-map {
    border-radius: 5px;
}
.following ul.acc li {
    display: flex;
    justify-content: space-between;
}
ul.acc li svg.active {
    background-color: #00D17D;
}

.vue-map {
    border-radius: 5px;
}
</style>