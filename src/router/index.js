import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import buttonView from '../views/buttonsView.vue'
import inputStatus from '../views/inputSatus.vue'
import bindingView from '../views/bindingView.vue'
import userView from '../views/userView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/button',
      name: 'button',
      component: buttonView
    },
    {
      path: '/inputstatus',
      name: 'inputstatus',
      component: inputStatus
    },
    {
      path: '/inputstatus',
      name: 'inputstatus',
      component: inputStatus
    },
    {
      path: '/binding',
      name: 'binding',
      component: bindingView
    },
    {
      path: '/user/:id', 
      name: 'user',
      component: userView 
    },
    
  ]
})

export default router
