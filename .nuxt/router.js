import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _aa50dc24 = () => interopDefault(import('..\\pages\\contato.vue' /* webpackChunkName: "pages_contato" */))
const _e08e2e12 = () => interopDefault(import('..\\pages\\hackathon.vue' /* webpackChunkName: "pages_hackathon" */))
const _4bcfe329 = () => interopDefault(import('..\\pages\\pacotes.vue' /* webpackChunkName: "pages_pacotes" */))
const _3d27e97d = () => interopDefault(import('..\\pages\\sobre.vue' /* webpackChunkName: "pages_sobre" */))
const _4a0ed791 = () => interopDefault(import('..\\pages\\admin\\dashboard\\index.vue' /* webpackChunkName: "pages_admin_dashboard_index" */))
const _4e38eca6 = () => interopDefault(import('..\\pages\\admin\\login.vue' /* webpackChunkName: "pages_admin_login" */))
const _32082baa = () => interopDefault(import('..\\pages\\admin\\usuarios\\index.vue' /* webpackChunkName: "pages_admin_usuarios_index" */))
const _4d9acdb0 = () => interopDefault(import('..\\pages\\admin\\usuarios\\incluir.vue' /* webpackChunkName: "pages_admin_usuarios_incluir" */))
const _37b3e01f = () => interopDefault(import('..\\pages\\admin\\usuarios\\mensagens.vue' /* webpackChunkName: "pages_admin_usuarios_mensagens" */))
const _5f439b96 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contato",
    component: _aa50dc24,
    name: "contato"
  }, {
    path: "/hackathon",
    component: _e08e2e12,
    name: "hackathon"
  }, {
    path: "/pacotes",
    component: _4bcfe329,
    name: "pacotes"
  }, {
    path: "/sobre",
    component: _3d27e97d,
    name: "sobre"
  }, {
    path: "/admin/dashboard",
    component: _4a0ed791,
    name: "admin-dashboard"
  }, {
    path: "/admin/login",
    component: _4e38eca6,
    name: "admin-login"
  }, {
    path: "/admin/usuarios",
    component: _32082baa,
    name: "admin-usuarios"
  }, {
    path: "/admin/usuarios/incluir",
    component: _4d9acdb0,
    name: "admin-usuarios-incluir"
  }, {
    path: "/admin/usuarios/mensagens",
    component: _37b3e01f,
    name: "admin-usuarios-mensagens"
  }, {
    path: "/",
    component: _5f439b96,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
