import { defineStore } from 'pinia'
import { User } from '@/@types/'

interface State {
  users: User[]
}

const users: User[] = [
  {
    id: 'hfg8957fgjh68',
    email: 'homer@simpsons.com'
  },
  {
    id: 'posugd6iho',
    email: 'bart@simpsons.com'
  }
]

export const useUserStore = defineStore('useStore', {
  state: (): State => {
    return {
      users: users as User[]
    }
  },
  getters: {
    totalUsers: (state) => state.users.length
  },
  actions: {}
})
