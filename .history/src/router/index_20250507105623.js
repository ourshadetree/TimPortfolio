// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView    from '../views/HomeView.vue'
import ApiTools    from '../views/ApiTools.vue'
import Widgets     from '../views/Widgets.vue'
import Games       from '../views/Games.vue'
import Contact     from '../views/Contact.vue'

const routes = [
  { path: '/',           name: 'Home',      component: HomeView },
  { path: '/api-tools',   name: 'API Tools', component: ApiTools },
  { path: '/widgets',     name: 'Widgets',   component: Widgets },
  { path: '/games',       name: 'Games',     component: Games },
  { path: '/contact',     name: 'Contact',   component: Contact },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
