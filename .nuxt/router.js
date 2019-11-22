import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _41727b52 = () => interopDefault(import('..\\pages\\contato.vue' /* webpackChunkName: "pages_contato" */))
const _2981ed4a = () => interopDefault(import('..\\pages\\hackathon.vue' /* webpackChunkName: "pages_hackathon" */))
const _3b2a66e6 = () => interopDefault(import('..\\pages\\pacotes.vue' /* webpackChunkName: "pages_pacotes" */))
const _2f75dbe1 = () => interopDefault(import('..\\pages\\sobre.vue' /* webpackChunkName: "pages_sobre" */))
const _ebdb0e16 = () => interopDefault(import('..\\pages\\admin\\dashboard\\index.vue' /* webpackChunkName: "pages_admin_dashboard_index" */))
const _0bac41c2 = () => interopDefault(import('..\\pages\\admin\\login.vue' /* webpackChunkName: "pages_admin_login" */))
const _3418cdc6 = () => interopDefault(import('..\\pages\\admin\\usuarios\\index.vue' /* webpackChunkName: "pages_admin_usuarios_index" */))
const _ccb9b778 = () => interopDefault(import('..\\pages\\admin\\usuarios\\incluir.vue' /* webpackChunkName: "pages_admin_usuarios_incluir" */))
const _c3a3d78a = () => interopDefault(import('..\\pages\\admin\\usuarios\\mensagens.vue' /* webpackChunkName: "pages_admin_usuarios_mensagens" */))
const _51918dfa = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contato",
    component: _41727b52,
    name: "contato"
  }, {
    path: "/hackathon",
    component: _2981ed4a,
    name: "hackathon"
  }, {
    path: "/pacotes",
    component: _3b2a66e6,
    name: "pacotes"
  }, {
    path: "/sobre",
    component: _2f75dbe1,
    name: "sobre"
  }, {
    path: "/admin/dashboard",
    component: _ebdb0e16,
    name: "admin-dashboard"
  }, {
    path: "/admin/login",
    component: _0bac41c2,
    name: "admin-login"
  }, {
    path: "/admin/usuarios",
    component: _3418cdc6,
    name: "admin-usuarios"
  }, {
    path: "/admin/usuarios/incluir",
    component: _ccb9b778,
    name: "admin-usuarios-incluir"
  }, {
    path: "/admin/usuarios/mensagens",
    component: _c3a3d78a,
    name: "admin-usuarios-mensagens"
  }, {
    path: "/",
    component: _51918dfa,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
