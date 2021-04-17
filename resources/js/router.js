import VueRouter from 'vue-router';
import BaseComponent from "./components/BaseComponent";


export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      name:'BaseComponent',
      path:'/',
      component:BaseComponent
    }
  ]

});