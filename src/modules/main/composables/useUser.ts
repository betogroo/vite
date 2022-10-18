import { useUserStore } from '../store/userStore'

const userStore = useUserStore()
const useUser = () => {
  return { userStore }
}

export default useUser
