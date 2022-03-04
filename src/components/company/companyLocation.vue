<template>
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
p.head {
    color: #443688;
    margin-bottom: 10px;
    font-size: 11px;
    background-color: #F7F7F7;
    font-weight: 600;
    padding: 6px 10px;
}
.location {
    margin-bottom: 30px;
}
.vue-map {
    border-radius: 5px;
}

.vue-map {
    border-radius: 5px;
}
</style>