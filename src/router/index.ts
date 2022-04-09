import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '',
    redirect: '/home',
    meta: {
        requireAuth: false
    }
    
  },

  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/categories',
    name: 'categories',
    component: () => import(/* webpac kChunkName: "categories" */ '../views/categories/CategoriesView.vue')
  },
  {
    path: '/cateline',
    name: 'cateline',
    component: () => import(/* webpac kChunkName: "categories" */ '../views/categories/CateLineView.vue')
  },
  {
    path: '/file',
    name: 'file',
    component: () => import(/* webpac kChunkName: "file" */ '../views/file/FileView.vue')
  },
  {
    path: '/tag',
    name: 'tag',
    component: () => import(/* webpac kChunkName: "tag" */ '../views/tag/TagView.vue')
  },
  {
    path: '/tagline',
    name: 'tagline',
    component: () => import(/* webpac kChunkName: "tag" */ '../views/tag/TagLineView.vue')
  },
  {
    path: '/github',
    name: 'github',
    component: () => import(/* webpac kChunkName: "github" */ '../views/github/GithubView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpac kChunkName: "about" */ '../views/about/AboutView.vue')
  },
  {
    path: '/article',
    name: 'article',
    component: () => import(/* webpac kChunkName: "article" */ '../views/article/ArticleView.vue')
  },




]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
