<template>
<Nav1/>
<section class="signupSection">
        <div class="row signupSection">
            <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                <RegForm1 :regHead="''"></RegForm1>
                <div class="headDesc">
                    <h5>Verification Code</h5>
                    <p>Please enter your mobile number For verification process</p>
                </div>
                <div class="form-group phoneNo">
                    <input type="text"  name="" placeholder="+12927471720371209" id="">
                    <a href="#" class="btn">Request code</a>
                </div>
                <div class="otp">
                    <input type="text" class="singleNumber" name="" maxlength="1" id="">
                    <input type="text" class="singleNumber" name="" maxlength="1" id="">
                    <input type="text" class="singleNumber" name="" maxlength="1" id="">
                    <input type="text" class="singleNumber" name="" maxlength="1" id="">
                    <input type="text" class="singleNumber" name="" maxlength="1" id="">
                </div>
                <div class="timeRemain">
                    <p>Remaining time 1:02s</p>
                    <a href="#" class="sendOpt">Resend again</a>
                </div>
                <div class="submitBtn">
                    <a href="#" class="btn confirm">Confirms</a>
                </div>
            </div>
            <div class="col-xl-8 col-lg-6">
                    <SideCarousel class="sideCarous d-none d-sm-none d-md-none d-lg-block"></SideCarousel>
            </div>
        </div>
        
    </section>
    <Footer1/>
</template>

<script>
import RegForm1 from "../components/register.vue/regForm.vue";
import SideCarousel from "../components/register.vue/sideCarousel.vue";
import Nav1 from "../components/home/Nav.vue";
import Footer1 from "../components/home/footer.vue";


export default {
    components: { RegForm1, SideCarousel, Nav1, Footer1 },

    setup () {
        

        return {}
    }
}
</script>

<style scoped>

@media (min-width:320px)  { 
    section .signupSection{
    padding: 26px 28px 45px 10px;
    }
    /* smartphones, iPhone, portrait 480x320 phones */ }
@media (min-width:481px)  { 
     section .signupSection{
    padding: 26px 28px 45px 10px;
    }
    /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ }
@media (min-width:641px)  { 
     section .signupSection{
    padding: 26px 28px 45px 70px;
    }
    /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ }
@media (min-width:961px)  { 
     section .signupSection{
    padding: 26px 28px 45px 70px;
    }
    /* tablet, landscape iPad, lo-res laptops ands desktops */ }
@media (min-width:1025px) { 
     section .signupSection{
    padding: 26px 28px 45px 70px;
    }
    /* big landscape tablets, laptops, and desktops */ }
@media (min-width:1281px) { 
     section .signupSection{
    padding: 26px 28px 45px 70px;
    }
    /* hi-res laptops and desktops */ }
    .headDesc h5 {
    margin-bottom: 23px;
    font-size: 18px;
    font-weight: 600;
}
section.signupSection{
    background-color: var(--bg-color);
    padding-top:26px;
}
section .signupSection{
 
    margin: 0px auto;
    background-color: var(--white);
    width: 75%;
    border-radius: 20px;
    

}
div#nav-tab {
    margin-bottom: 27px;
    justify-content: space-around;
}

.nav-tabs button#nav-profile-tab {
    border: none;
}

button#nav-home-tab {
    border: none ;
}
.headDesc p {
    margin-bottom: 32px;
    font-size: 13px;
    color: #3B3B3B;
}

.form-group.phoneNo {
    position: relative;
    margin-bottom: 23px;
}

.form-group.phoneNo input {
    width: 100%;
    padding: 16px;
    border: none;
    padding-right: 85px;
    outline: none;
    border-bottom: 1px solid #0000003d;
}


.form-group.phoneNo a.btn {
    font-size: 8px;
    color: #FC6748;
    display: flex;
    position: absolute;
    top: 12px;
    font-weight: 500;
    padding: 6px 8px;
    border: 1px solid;
    border-radius: 100px;
    right: 0px;
}

.otp {
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
}

.otp input {
    border-radius: 4px;
    outline: none;
    font-size: 19px;
    font-weight: 500;
    width: 33px;
    border: 2px solid #FF1500;
    padding: 3px 8px;
}

.timeRemain {
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.timeRemain p {
    font-size: 14px;
    margin: 0px;
    color: #0000008c;
}

a.sendOpt {
    font-size: 13px;
    font-weight: 500;
    color: #FC6748;
}

.submitBtn a.btn {
    font-weight: 500;
    font-size: 13px;
    color: #fff;
    width: 100%;
    border-radius: 50px;
    padding: 10px;
    background: #FC6748;
}
.nav-tabs .nav-link{
    font-size: 15px;
    color: var(--black) !important;
    font-weight: 500;
    width:50%;
    border-bottom: 1px solid transparent !important;
}

.nav-tabs .nav-link.active {
    color: var(--secondary) !important;
    border-bottom: 2px solid var(--secondary) !important;
}
form .form-group input {
    padding: 0px 6px 16px 0px;
    font-size: 12px;
    color:#292929;
    outline: none;
    border: none;
    width:100%;
    border-bottom: 1px solid #c5c5c5;
    margin-bottom: 10px;
}
.regBtn {
    background-color: var(--secondary);
    text-align: center;
    border-radius: 50px;
    padding: 12px;
    text-decoration: none;
    color: var(--white);
    text-transform: uppercase;
    margin-top: 20px;
}

.otherSignUp h5 {
    font-size: 13px;
    text-align: center;
    text-transform: capitalize;
    margin-top: 30px;
    font-weight: 400;
}

.otherSignUp {
    text-align: center;
    text-transform: capitalize;
    font-weight: 300;
}

.otherSignUp label {font-size: 12px;}
.otherSignUp .opt {
       margin-top: 17px;
    display: flex;

    list-style: none;
    justify-content: center;
    padding: 0;
    color: var(--primary);
}
.otherSignUp .opt li{
    margin:  0px 10px;
}
</style>