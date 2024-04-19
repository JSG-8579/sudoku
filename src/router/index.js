import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SudokuGameView from '../views/SudokuGameView.vue'
import GameRanking from '../views/GameRanking.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: HomeView
  },
  {
    path: '/Game',
    name: 'sudokuGameView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SudokuGameView
  },
  {
    path: '/Ranking',
    name: 'GameRanking',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: GameRanking
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
