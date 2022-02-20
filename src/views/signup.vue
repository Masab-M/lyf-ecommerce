<template>
<Nav></Nav>
    <section class="signupSection">
        <div class="row signupSection">
            <div class="col-md-6">
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
                                <input type="text" name id />
                            </div>
                            <div class="form-group">
                                <input type="email" name id />
                            </div>
                            <div class="form-group">
                                <input type="password" name id />
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
                                <input type="text" name id />
                            </div>
                            <div class="form-group">
                                <input type="email" name id />
                            </div>
                            <div class="form-group">
                                <input type="password" name id />
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
            <div class="col-md-6">
                <div class="sideCarous">
                    <SideCarousel></SideCarousel>
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
export default {
    components: { RegForm, RegForm1, SideCarousel, Nav },
};
</script>

<style scoped>
</style>