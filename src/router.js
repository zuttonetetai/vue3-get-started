import { createMemoryHistory, createRouter } from 'vue-router'
import App from './App.vue'
import AboutView from './pages/AboutView.vue'
import HomeView from './pages/HomeView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

const router1 = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router1