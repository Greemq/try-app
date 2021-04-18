<template>
    <b-navbar type="dark" variant="dark">
        <div class="container">
            <b-navbar-brand href="/"> Home</b-navbar-brand>
            <b-navbar-nav right>

                <b-nav-item>
<!--                    <router-link class="nav-link " to="/create-user"></router-link>-->
                    <div class="nav-link" @click="showUserForm">Sign up</div>
                </b-nav-item>
                <b-nav-item>
<!--                    <router-link class="nav-link " to="/create-user">Sign in</router-link>-->

                </b-nav-item>

            </b-navbar-nav>
        </div>
        <user-form ref="userForm"></user-form>
    </b-navbar>
</template>

<script>
import UserForm from "../user/Form";
export default {
    name: "Headbar",
    components: {UserForm},
    methods:{
        showUserForm(){
            console.log('showUserForm')
            this.$refs.userForm.showModal()
        }
    }
};
</script>

<style scoped>

</style>