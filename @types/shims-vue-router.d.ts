import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth: boolean
    title: string
    isAdmin?: boolean
    hideNavBar?: boolean
    icon?: string
    showInNavBar?: boolean
    showInDrawer?: boolean
  }
}
