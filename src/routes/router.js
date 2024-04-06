
import { createRouter, createWebHistory } from 'vue-router';
import profilecomponent from '../components/profilecomponent.vue';
import Navcomponent from '../components/navcomonent.vue';
import products from "../components/products.vue";
import wishlist from "../components/wishlist.vue";

const routes = [
  {
    path: '/',
    component:profilecomponent,
    children: [
      { path: 'navcomponent',
       component: Navcomponent,
        children: [
        { path: 'product', component: products},
        { path: 'wish', component: wishlist},
      ]}
    ]
  }
 
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;




