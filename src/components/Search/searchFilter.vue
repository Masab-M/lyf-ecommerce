<template>
<section class="filterSearch">
    <div class="HeadFilter">
        <h5>FILTER YOUR SEARCH</h5>
    </div>
    <div class="singleFilter">
<p>
  <a class="btn" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  <span>Product Name</span>
  <font-awesome-icon icon="caret-down"/>
  </a>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    <div class="form-group">
        <input type="text" placeholder="Iphone 12 Pro Max" name="" id="">
         <font-awesome-icon icon="magnifying-glass"/>
    </div>
  </div>
</div>
    </div>
<div class="decbtn">
    <a href="#" class="btn buy">Buy</a>
    <a href="#" class="btn rent">Rent</a>
</div>
<div class="singleFilter">
<p>
  <a class="btn" data-bs-toggle="collapse" href="#location" role="button" aria-expanded="false" aria-controls="location">
  <span>Location</span>
  <font-awesome-icon icon="caret-down"/>
  </a>
</p>
<div class="collapse" id="location">
  <div class="card card-body">
    <div class="form-group">
        <input type="text" placeholder="Srilanka" name="" id="">
         <font-awesome-icon icon="magnifying-glass"/>
    </div>
    <div class="checkLocation">
        <div class="Location">
        <input type="checkbox" name="" id="">
        <label for="">Colombox</label>
        </div>
        <div class="Location">
        <input type="checkbox" name="" id="">
        <label for="">Colombox</label>
        </div><div class="Location">
        <input type="checkbox" name="" id="">
        <label for="">Colombox</label>
        </div><div class="Location">
        <input type="checkbox" name="" id="">
        <label for="">Colombox</label>
        </div>
    </div>
  </div>
</div>
</div>

<div class="singleFilter">
<p>
  <a class="btn" data-bs-toggle="collapse" href="#date" role="button" aria-expanded="false" aria-controls="date">
  <span>Date</span>
  <font-awesome-icon icon="caret-down"/>
  </a>
</p>
<div class="collapse" id="date">
  <div class="card card-body">
    <div class="form-group">
        <input type="date" name="" id="">
         <font-awseome-icon icon="caret-down"/>
    </div>
   
  </div>
</div>
</div>
<div class="singleFilter priceFilter">
<p>
  <a class="btn" data-bs-toggle="collapse" href="#PriceRange" role="button" aria-expanded="false" aria-controls="PriceRange">
  <span>Price Range</span>
  <font-awesome-icon icon="caret-down"/>
  </a>
</p>
<div class="collapse" id="PriceRange">
  <div class="card card-body">
   <div class="track-container">
      <span class="range-value min">{{ minValue}} </span> <span class="range-value max">{{ maxValue }}</span>
      <div class="track" ref="_vpcTrack"></div>
      <div class="track-highlight" ref="trackHighlight"></div>
      <button class="track-btn track1" ref="track1"></button>
      <button class="track-btn track2" ref="track2"></button>
    </div>
  </div>
</div>
</div>

<div class="applybtn">
    <a href="#" class="btn">Apply</a>
</div>
</section>

</template>

<script>
export default {
  name: "PriceRangeSlider",

  props: {
    trackHeight: {
      type: Number,
      deafult: 1
    }
  },

  data() {
    return {
      min: 10,
      max: 210,
      minValue: 40,
      maxValue: 150,
      step: 5,
      totalSteps: 0,
      percentPerStep: 1,
      trackWidth: null,
      isDragging: false,
      pos: {
        curTrack: null
      }
    
    }
  },

  methods: {
    moveTrack(track, ev){
      
      let percentInPx = this.getPercentInPx();
      
      let trackX = Math.round(this.$refs._vpcTrack.getBoundingClientRect().left);
      let clientX = ev.clientX;
      let moveDiff = clientX-trackX;

      let moveInPct = moveDiff / percentInPx
      // console.log(moveInPct)

      if(moveInPct<1 || moveInPct>100) return;
      let value = ( Math.round(moveInPct / this.percentPerStep) * this.step ) + this.min;
      if(track==='track1'){
        if(value >= (this.maxValue - this.step)) return;
        this.minValue = value;
      }

      if(track==='track2'){
        if(value <= (this.minValue + this.step)) return;
        this.maxValue = value;
      }
      
      this.$refs[track].style.left = moveInPct + '%';
      this.setTrackHightlight()
            
    },
    mousedown(ev, track){

      if(this.isDragging) return;
      this.isDragging = true;
      this.pos.curTrack = track;
    },

    touchstart(ev, track){
      this.mousedown(ev, track)
    },

    mouseup(ev, track){
      if(!this.isDragging) return;
      this.isDragging = false
    },

    touchend(ev, track){
      this.mouseup(ev, track)
    },

    mousemove(ev, track){
      if(!this.isDragging) return;      
      this.moveTrack(track, ev)
    },

    touchmove(ev, track){
      this.mousemove(ev.changedTouches[0], track)
    },

    valueToPercent(value){
      return ((value - this.min) / this.step) * this.percentPerStep
    },

    setTrackHightlight(){
      this.$refs.trackHighlight.style.left = this.valueToPercent(this.minValue) + '%'
      this.$refs.trackHighlight.style.width = (this.valueToPercent(this.maxValue) - this.valueToPercent(this.minValue)) + '%'
    },

    getPercentInPx(){
      let trackWidth = this.$refs._vpcTrack.offsetWidth;
      let oneStepInPx = trackWidth / this.totalSteps;
      // 1 percent in px
      let percentInPx = oneStepInPx / this.percentPerStep;
      
      return percentInPx;
    },

    setClickMove(ev){
      let track1Left = this.$refs.track1.getBoundingClientRect().left;
      let track2Left = this.$refs.track2.getBoundingClientRect().left;
      // console.log('track1Left', track1Left)
      if(ev.clientX < track1Left){
        this.moveTrack('track1', ev)
      }else if((ev.clientX - track1Left) < (track2Left - ev.clientX) ){
        this.moveTrack('track1', ev)
      }else{
        this.moveTrack('track2', ev)
      }
    }
  },

  mounted() {
    // calc per step value
    this.totalSteps = (this.max - this.min) / this.step;

    // percent the track button to be moved on each step
    this.percentPerStep = 100 / this.totalSteps;
    // console.log('percentPerStep', this.percentPerStep)

    // set track1 initilal
    document.querySelector('.track1').style.left = this.valueToPercent(this.minValue) + '%'
    // track2 initial position
    document.querySelector('.track2').style.left = this.valueToPercent(this.maxValue) + '%'
    // set initila track highlight
    this.setTrackHightlight()

    var self = this;

    ['mouseup', 'mousemove'].forEach( type => {
      document.body.addEventListener(type, (ev) => {
        // ev.preventDefault();
        if(self.isDragging && self.pos.curTrack){
          self[type](ev, self.pos.curTrack)
        }
      })
    });

    ['mousedown', 'mouseup', 'mousemove', 'touchstart', 'touchmove', 'touchend'].forEach( type => {
      document.querySelector('.track1').addEventListener(type, (ev) => {
        ev.stopPropagation();
        self[type](ev, 'track1')
      })

      document.querySelector('.track2').addEventListener(type, (ev) => {
        ev.stopPropagation();
        self[type](ev, 'track2')
      })
    })

    // on track clik
    // determine direction based on click proximity
    // determine percent to move based on track.clientX - click.clientX
    document.querySelector('.track').addEventListener('click', function(ev) {
      ev.stopPropagation();
      self.setClickMove(ev)
      
    })

    document.querySelector('.track-highlight').addEventListener('click', function(ev) {
      ev.stopPropagation();
      self.setClickMove(ev)
      
    })
  }
};
</script>

<style scoped>

.range-value{
    position: absolute;
    top:1rem;
  }
  .range-value.min{
    left: 0;
  }

  .range-value.max{
    right: 0;
  }
  .track-container{
    width: 100%;
    position: relative;
    cursor: pointer;
    height: 0.5rem;
  }
  .applybtn a.btn {
  padding: 9px;
    color: #fff;
    font-size: 16px;
    width: 100%;
    margin-bottom: 31px;
    background-color: #fc6748;
}
section.filterSearch {
    border: 1px solid #f7f7f7;
}

.applybtn {
    padding: 0px 9px;
}
.filterSearch .singleFilter {
    padding: 17px 29px;
    border-bottom: 1px solid #f7f7f7;
}
button.track-btn.track1 {
    border: 2px solid #FC6749;
    background: #fff;
}
div#collapseExample .card {
    border: none;
    padding: 0;
}
  .track,
  .track-highlight {
display: block;
    position: absolute;
    width: 100%;
    height: 5px;
  }

  .track{
    background-color: #ddd;
  }

  .track-highlight{
  background-color: #FC6748;
    z-index: 2
  }

  .track-btn{
     -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #FC6749;
    outline: none;
    cursor: pointer;
    display: block;
    position: absolute;
    z-index: 2;
    width: 1rem;
    height: 1rem;
    top: calc(-20% - 0.25rem);
    margin-left: -0.5rem;
    border: none;
    -ms-touch-action: pan-x;
    touch-action: pan-x;
    transition: box-shadow .3s ease-out,background-color .3s ease,-webkit-transform .3s ease-out;
    transition: transform .3s ease-out,box-shadow .3s ease-out,background-color .3s ease;
    transition: transform .3s ease-out,box-shadow .3s ease-out,background-color .3s ease,-webkit-transform .3s ease-out;
    border-radius: 100px;
  }

  .HeadFilter h5 {
    padding: 17px 29px;
    font-size: 18px;
    font-weight: 600;
    color: #363636;
    background: #F7F7F7;
}

section.filterSearch p a {
        display: flex;
    justify-content: space-between;
    padding: 0;
    align-items: center;
}
.form-group input {
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid #d7d7d7;
}

section.filterSearch p a span {
    font-size: 19px;
}

.form-group {
    position: relative;
}

.form-group svg {color: #FC6748;top: 13px;position: absolute;left: 0px;}

.form-group input {
    padding: 10px 10px 10px 25px;
}
.Location label {
    font-size: 16px;
    color: #5B595D;
    padding-left: 8px;
}

.filterSearch .priceFilter {
    border: none;
}
.checkLocation {
    
    margin-top: 30px;
    height: 105px;
    overflow: auto;

}

.checkLocation .Location {
    margin-bottom: 6px;
}
.card.card-body
{
    border: none;
    padding: 0;
}
.decbtn {
    display: flex;
    justify-content: space-around;
    padding: 31px 11px;
}
div#PriceRange {
    margin-bottom: 86px;
}
.decbtn a {
    font-size: 15px;
    padding: 9px 49px;
}

a.btn.buy {
    background: #FC6748;
    color: #fff;
}

a.btn.rent {
    color: #FC6748;
    border: 1px solid;
}

input[type="date"] {
    padding: 10px;
}

</style>