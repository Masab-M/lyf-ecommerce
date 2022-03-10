<template>
<section>
    <div class="headText">
        Edit Profile
    </div>
    <div class="row profiledetails">
        <div class="col-md-4">
             <div class="profilImg">
                <img src="https://picsum.photos/196/196" alt="">
                <div class="editImg" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <font-awesome-icon icon="pen-to-square"/>
                </div>          
    </div>
        </div>
        <div class="col-md-8">
            <div class="form-group">
                <div class="input">
                <input type="text" placeholder="Kosala H." >
                <span>21 / 30</span>
                </div>
                <label for="">Registering name</label>
            </div>
             <div class="form-group">
                <div class="input">
                <textarea name="" id="" cols="10" rows="4" placeholder="Something about you"></textarea>
                <span>0 / 30</span>
                </div>
                <label for="">Give description about yourself</label>
            </div>
        </div>
    </div>
    <div class="contact row">
        <div class="col-md-12">
            <div class="HeadText">
                Contact Information
            </div>
            <div class="form-group">
                <div class="prefix">
                <input type="text" placeholder="423432432" >
                <span>+91</span>
                </div>
                <label for="">You have verified your phone. It is important to allow us to securely communicate with you.</label>
            </div>
              <div class="form-group">
                <input type="email" placeholder="Xyz@gmail.com" >
               
                <label for="">We won't reveal your email to anyone else nor use it to send you spam</label>
            </div>
             <div class="form-group">
                <div class="prefix">
                <input type="text" placeholder="Location" >
               <font-awesome-icon icon="location-dot"/>
                </div>
                <label for="">Location</label>
            </div>
        </div>
    </div>
    <div class="option row">
        <div class="col-md-12">
            <div class="HeadText">
                Optional Information
            </div>
            <div class="links">
                <label for="">Facebook</label>
                <a href="#" class="btn connect active">Connect</a>
            </div>
             <div class="links">
                <label for="">Google</label>
                <a href="#" class="btn connect">Disconnect</a>
            </div>

        </div>
    </div>
    <div class="submitBtn">
        <a href="#" class="btn secondary">Discard</a>
        <a href="#" class="btn primary">Save Changes</a>
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
.profilImg img {
    max-width: 100%;
    width: 196px;
    border-radius: 100px;
}
.profilImg
{
    position: relative;
text-align: center;
}
.editImg svg {
    font-size: 40px;
    color: #fff;
}
.profilImg .editImg {
border-radius: 0px 0px 100px 100px;
    width: -webkit-fill-available;
    height: 50%;
    display: flex;
    position: absolute;
    bottom: 0px;
    width: 196px;
    left: 9%;
    right: 16%;
    background: #0000005c;
    justify-content: space-around;
    align-items: center;
}
</style>