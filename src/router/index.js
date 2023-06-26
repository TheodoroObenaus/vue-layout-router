import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import GamesView from '../views/GamesView.vue'
import VideosView from '../views/VideosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/games',
      name: 'games',
      component: GamesView
    },
    {
      path: '/videos',
      name: 'videos',
      component: VideosView
    }
  ]
})

export default router
