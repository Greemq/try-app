<template>
    <b-modal ref="modal" hide-footer hide-header>
        <div class="form-group">
            <br>
            <b-row v-for="item in userForm" style="margin-bottom: 10px">
                <b-col sm="2">
                    <label>{{ item.name }}</label>
                </b-col>
                <b-col sm="7">
                    <b-input v-model="form[item.name]" :type="item.type" size="sm"></b-input>
                </b-col>
            </b-row>
            <br>
            <button class="btn btn-primary btn-" @click="$refs.modal.hide()">cancel</button>
            <button class="btn btn-primary float-right" @click="sendForm()">send form</button>
        </div>
    </b-modal>
</template>

<script>
import {post} from "../helper/requests";

export default {
    name: "Form",
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: '',
            },
        };
    },
    computed: {
        userForm() {
            return [
                {
                    type: 'text',
                    name: 'name',
                },
                {
                    type: 'text',
                    name: 'email',
                },
                {
                    type: 'text',
                    name: 'password',
                },
            ];
        }
    },
    methods: {
        sendForm() {
            let _this = this;
            post(_this, '/api/create-user', this.form, res => {
                console.log('success');
            }, err => {
                console.log('err');
            });
        },
        showModal(){
            this.$refs.modal.show()
        }
    }
};
</script>

<style scoped>

</style>