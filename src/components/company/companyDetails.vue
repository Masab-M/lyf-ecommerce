<template>
<section class="sideDetails">
        <div class="maindetails">
            <div class="profilImg">
                <img src="https://picsum.photos/196/196" alt="">
                <div class="status">

                </div>
            </div>
            <div class="headDetails">
                <div class="name">
                    <h3>Bohemia Corp.</h3>
                    <img src="../../assets/IMG/Iconmaterial-verified-user.png" alt="">
                </div>
                <div class="ratingReview">
                    
                    <span>
                        5.0
                    </span>
                    <span class="text">
                        Overall Rating
                    </span>
                    <fieldset class="rating">
    <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
    <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
    <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
    <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>
    <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
    <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
    <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
    <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>
    <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
    <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
</fieldset>
                </div>
            </div>
        </div>
        <div class="companyDesc">
            <p class="display-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus estLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam </p>
        </div>
</section>

</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style scoped>

fieldset, label { margin: 0; padding: 0; }
body{ margin: 20px; }
h1 { font-size: 1.5em; margin: 10px; }

/****** Style Star Rating Widget *****/

.rating { 
  border: none;
}

.rating > input { display: none; } 
.rating > label:before { 
  margin: 5px;
  font-size: 1.25em;
  font-family: FontAwesome;
  display: inline-block;
  content: "\f005";
}

.rating > .half:before { 
  content: "\f089";
  position: absolute;
}

.rating > label { 
  color: #ddd; 
 float: right; 
}

/***** CSS Magic to Highlight Stars on Hover *****/

.rating > input:checked ~ label, /* show gold star when clicked */
.rating:not(:checked) > label:hover, /* hover current star */
.rating:not(:checked) > label:hover ~ label { color: #FFD700;  } /* hover previous stars in list */

.rating > input:checked + label:hover, /* hover current star when changing rating */
.rating > input:checked ~ label:hover,
.rating > label:hover ~ input:checked ~ label, /* lighten current selection */
.rating > input:checked ~ label:hover ~ label { color: #FFED85;  } 
section.sideDetails {
padding: 28px 10%;
    background-color: var(--white);
    border-radius: 9px;
    border: 1px solid #70707066;
    margin-bottom: 20px;
}

.profilImg img {
    max-width: 100%;
    width: 196px;
    border-radius: 100px;
}

.maindetails {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
}

.profilImg
{
    position: relative;
    padding-right: 30px;

}
.status {
    width: 40px;
    height: 40px;
    bottom: 5px;
    position: absolute;
    background-color: #00CF15;
    border-radius: 50px;
    border: 5px solid #fff;
    right: 42px;
}
.name h3 {
    font-size: 32px;
    font-weight: 500;
    color: #363636;
}

.name { 
    display: flex;
    align-items: center;
    margin-bottom: 10%;

}

.name img {
    width: 24px;
    height: 100%;
    margin-left: 20px;
}

.ratingReview span {
    font-size: 23px;
    color: #45454596;
}
.ratingReview {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

}

.ratingReview span.text {margin-right: 23px;}
.ratingReview span:first-child
{
    margin-right: 12px;
}
.companyDesc p {
    font-weight: 400;
    margin-top: 38px;
    font-size: 16px;
    color: #363636;
    line-height: 3;
}
@media (min-width:320px)  { 
    .companyDesc p {
        font-size: 12px;
    line-height: 2;
}
    /* smartphones, iPhone, portrait 480x320 phones */ }
@media (min-width:481px)  { 
    
    .companyDesc p {
        font-size: 12px;
    line-height: 2;
}
    /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ }
@media (min-width:641px)  { 
    
    .companyDesc p {
        font-size: 12px;
    line-height: 2;
}
    /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ }
@media (min-width:961px)  { 
    
    .companyDesc p {
        font-size: 14px;
    line-height: 2;
}
    
    /* tablet, landscape iPad, lo-res laptops ands desktops */ }
@media (min-width:1025px) { 
    
    .companyDesc p {
        font-size: 16px;
    line-height: 3;
}
    /* big landscape tablets, laptops, and desktops */ }
@media (min-width:1281px) { 
    
    .companyDesc p {
        font-size: 16px;
    line-height: 3;
}
    /* hi-res laptops and desktops */ }
</style>