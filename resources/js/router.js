import VueRouter from 'vue-router';
import BaseComponent from "./components/BaseComponent";
import UserForm from "./user/Form"

export default new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
        {
            name: 'BaseComponent',
            path: '/',
            component: BaseComponent
        },
        {
            name: 'UserForm',
            path: '/create-user',
            component: UserForm
        }
    ]

});