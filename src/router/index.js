import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import TrailerPage from '@/views/TrailerPage.vue'
import SearchPage from '@/views/SearchPage.vue'
import AllGenres from '@/views/AllGenres.vue'
import GenrePage from '@/views/GenrePage.vue'
import AllActors from '@/views/AllActors.vue'
import ActorPage from '@/views/ActorPage.vue'
import AllDirectors from '@/views/AllDirectors.vue'
import DirectorPage from '@/views/DirectorPage.vue'

import PageNotFound from '@/views/PageNotFound.vue'

const routes = [
  {
    // main home page
  
    path: '/',
    component: Home
  },
  { 
    // Error/404 page

    path: '/:pathMatch(.*)*', 
    component: PageNotFound 
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/TrailerPage/:id',
    name: 'TrailerPage',
    component: TrailerPage
  },  
  {
    path: '/AllGenres',
    name: 'AllGenres',
    component: AllGenres
  }, 
  {
    path: '/SearchPage/:searchValue',
    name: 'SearchPage',
    component: SearchPage,
  }, 
  {
    path: '/GenrePage/:name',
    name: 'GenrePage',
    component: GenrePage
  }, 
  {
    path: '/AllActors',
    name: 'AllActors',
    component: AllActors
  },
  {
    path: '/ActorPage:name',
    name: 'ActorPage',
    component: ActorPage
  },
  {
    path: '/AllDirectors',
    name: 'AllDirectors',
    component: AllDirectors
  },
  {
    path: '/DirectorPage:name',
    name: 'DirectorPage',
    component: DirectorPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router