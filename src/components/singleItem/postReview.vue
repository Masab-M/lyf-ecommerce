<template>
<section class="postReview">
    <div class="postHead">
        <h5>Post Review</h5>
        <form action="">
            <div class="form-group">
                <textarea name="" id="" cols="30" rows="10" placeholder="Write a review"></textarea>
            </div>
            <div class="submitbtn">
                <a href="#" class="btn submitReview">Post</a>
            </div>
        </form>
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

.submitbtn a {
    background: #fc6748;
    font-weight: 500;
    font-size: 17px;
    padding: 12px;
    width: 100%;
    border-radius: 5px;
    color: #fff;
}
section.postReview {
    padding: 24px 17px;
    margin-top: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px #00000029;
}

.form-group textarea {
    width: 100%;
    outline: none;
    padding: 20px 25px;
    border: 1px solid #70707070;
    border-radius: 5px;
    font-size: 14px;
}

.postHead h5 {
    font-size: 18px;
    margin-bottom: 22px;
}
</style>