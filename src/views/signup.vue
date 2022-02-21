<template>
<Nav></Nav>
    <section class="signupSection">
        <div class="centerDiv">
            <div class="row signupSection">
            <div class="col-md-4">
                <RegForm1 :regHead="'SignUp'"></RegForm1>
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
                        <form action class="personalForm">
                            <div class="form-group">
                                <input type="text" name id placeholder="First Name" />
                            </div>
                            <div class="form-group">
                                <input type="email" name id placeholder="Email"/>
                            </div>
                            <div class="form-group">
                                <input type="password" name id placeholder="Password"/>
                            </div>
                            <div class="regBtn">
                                <a href="#" class="regBtn">register</a>
                            </div>
                            <div class="otherSignUp">
                                <h5>Have an account login here</h5>
                                <label for>or register by</label>
                                <ul class="opt">
                                    <li>
                                        <font-awesome-icon :icon="['fab', 'facebook-f']" />
                                    </li>
                                    <li>
                                        <font-awesome-icon :icon="['fab', 'google']" />
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
                                <input type="text" name id placeholder="First Name"/>
                            </div>
                            <div class="form-group">
                                <input type="email" name id placeholder="Email"/>
                            </div>
                            <div class="form-group">
                                <input type="password" name id placeholder="Password"/>
                            </div>
                            <div class="regBtn">
                                <a href="#" class="regBtn">register</a>
                            </div>
                            <div class="otherSignUp">
                                <h5>Have an account login here</h5>
                                <label for>or register by</label>
                                <ul class="opt">
                                    <li>
                                        <font-awesome-icon :icon="['fab', 'facebook-f']" />
                                    </li>
                                    <li>
                                        <font-awesome-icon :icon="['fab', 'google']" />
                                    </li>
                                </ul>
                            </div>
                        </form>
                        </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="sideCarous">
                    <SideCarousel></SideCarousel>
                </div>
            </div>
        </div>
        </div>
        
    </section>
</template>

<script>
import RegForm from "../components/register.vue/regForm.vue";
import RegForm1 from "../components/register.vue/regForm.vue";
import SideCarousel from "../components/register.vue/sideCarousel.vue";
import Nav from "../components/home/Nav.vue";
import '/src/assets/base.css';
export default {
    components: { RegForm, RegForm1, SideCarousel, Nav },
};
</script>

<style scoped>
section
{
    background-color: var(--bg-color);
}
section .centerDiv {
    margin: 0px auto;
    background-color: var(--white);
    width: 75%;
    padding: 26px 28px 45px 70px;
    border-radius: 20px;
}
div#nav-tab {
    border-bottom: none !important;
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
    justify-content: space-evenly;
    color: var(--primary);
}
</style>