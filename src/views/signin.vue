<template>
<Nav></Nav>
    <section class="signupSection">
        <div class="row signupSection">
            <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                <RegForm :regHead="'Sign In'"></RegForm>
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button
                            class="nav-link active"
                            id="nav-home-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-home"
                            type="button"
                            role="tab"
                            aria-controls="nav-home"
                            aria-selected="true"
                        >Personal</button>
                        <button
                            class="nav-link"
                            id="nav-profile-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-profile"
                            type="button"
                            role="tab"
                            aria-controls="nav-profile"
                            aria-selected="false"
                        >Corporate</button>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div
                        class="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                    >
                        <form action id="signInForm" class="personalForm">
                            <div class="form-group">
                                <input type="email" name id placeholder="Email" />
                            </div>
                            <div class="form-group passwordView">
                                <input :type="type" name id  placeholder="Password"/>
                                <font-awesome-icon v-if="!show" @click="showPassword" icon="eye-slash"/>
                                <font-awesome-icon v-if="show" @click="showPassword" icon="eye"/>
                            </div>
                            <div class="forget">
                                <a href="#" class="forget">Forget Password ?</a>
                            </div>
                            <div class="regBtn">
                                <a href="#" class="regBtn">Login</a>
                            </div>
                            <div class="otherSignUp">
                                <label for> or login by</label>
                                <ul class="opt">
                                    <li>
                                        <img src="../assets/IMG/facebook.png" alt="">
                                    </li>
                                    <li>
                                        <img src="../assets/IMG/google.png" alt="">
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </div>
                    <div
                        class="tab-pane fade"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                    >
                    <form action class="personalForm">
                            <div class="form-group">
                                <input type="email" name id placeholder="Email" />
                            </div>
                            <div class="form-group">
                                <input type="password" name id placeholder="Password"/>
                            </div>
                            <div class="regBtn">
                                <a href="#" class="regBtn">Login</a>
                            </div>
                            <div class="otherSignUp">
                                <h5>Have an account login here</h5>
                                <label for>or register by</label>
                                <ul class="opt">
                                     <li>
                                        <img src="../assets/IMG/facebook.png" alt="">
                                    </li>
                                    <li>
                                        <img src="../assets/IMG/google.png" alt="">
                                    </li>
                                </ul>
                            </div>
                        </form>
                        </div>
                </div>
            </div>
            <div class="col-xl-8 col-lg-6">
                <div class="sideCarous d-none d-sm-none d-md-none d-lg-block">
                    <SideCarousel></SideCarousel>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
</template>

<script>
import RegForm from "../components/register.vue/regForm.vue";
import SideCarousel from "../components/register.vue/sideCarousel.vue";
import Nav from "../components/home/Nav.vue";
import '/src/assets/base.css';
import Footer from "../components/home/footer.vue";
    export default {
    components: { RegForm, SideCarousel, Nav, Footer },
     data() {
    return {
        type:'password',
     show:false
    }
  },
   
   methods: {
     showPassword() {
       if(this.type ==='password') {
          this.type ='text'
          this.show =true
       } else {
          this.type ='password'
          this.show =false
       }
     }
   }
}
</script>

<style scoped>
section.signupSection{
    background-color: var(--bg-color);
    padding-top:26px;
}
@media (min-width:320px)  { 
    section .signupSection{
    padding: 26px 10px 45px 10px;
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
ul.opt img {
    width: 28px;
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
.form-group.passwordView {
    position: relative;
}

.form-group.passwordView svg {
    position: absolute;
    right: 6px;
    top: 11px;
    font-size: 14px;
    color: rgba(54, 54, 54, 0.45);
}

.form-group.passwordView input {padding-right: 30px !important;}
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
    padding: 0;
    justify-content: center;
    color: var(--primary);
}

.otherSignUp .opt li{
    margin: 0 10px;
    cursor: pointer;
}
.forget {
    text-align: end;
    font-size: 12px;
    color: #a1a1a1;
    text-decoration: none;
}
.otherSignUp label {
    margin: 13px 0px  20px 0px;
}

.otherSignUp label:before {
    content: "";
    right: 0px;
    display: block;
    z-index: 0;
    width: 30%;
    position: absolute;
    height: 1px;
    background: #F4F4F4;
    top: 22px;
}

.otherSignUp {
    position: relative;
}

.otherSignUp label::after {
    content: "";
    left: 0px;
    display: block;
    z-index: 0;
    width: 30%;
    position: absolute;
    height: 1px;
    background: #F4F4F4;
    top: 22px;
}
</style>