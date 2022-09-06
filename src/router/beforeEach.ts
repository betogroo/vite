import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export default (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
): void => {
  document.title = `${to.meta.title} | Vue Vite Project`
  next()
}
