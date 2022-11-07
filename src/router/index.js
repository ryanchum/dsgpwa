import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginPage from '../views/LoginPage.vue'
import HomePage from '../views/HomePage.vue'
import SessionHistory from '../views/SessionHistory.vue'
import SessionDetail from '../views/SessionDetail.vue'
import ClientPage from '../views/ClientPage.vue'
import ClientDetail from '../views/ClientDetail.vue'
import AnnouncementPage from '../views/AnnouncementPage.vue'
import ReminderPage from '../views/ReminderPage.vue'
import LiveChat from '../views/LiveChat.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/client'},
  {path: '/login',name: 'login',component: LoginPage},
  {path: '/home',name: 'home', component: HomePage},
  {path: '/session',name: 'session',component: SessionHistory},
  {path: '/session/:sessionId',name: 'sessiondetail',component: SessionDetail},
  {path: '/client',name: 'client',component: ClientPage},
  {path: '/client/:clientId',name: 'clientdetail',component: ClientDetail},
  {path: '/announcement',name: 'announcement',component: AnnouncementPage},
  {path: '/reminder',name: 'reminder',component: ReminderPage},
  {path: '/livechat',name: 'livechat',component: LiveChat},
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
