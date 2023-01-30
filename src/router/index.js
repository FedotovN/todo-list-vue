import { createRouter, createWebHistory } from 'vue-router'
import CategoriesListPage from '@/views/CategoriesListPage'
import TaskListPage from '@/views/TaskListPage'
const routes = []

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: TaskListPage
    },
    {
      path: '/categories',
      component: CategoriesListPage
    },
  ]
})

export default router
