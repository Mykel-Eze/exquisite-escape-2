// import { useAuth } from '@nuxtjs/auth-next'

export const useAuth = () => {
  const auth = useAuth()

  const login = async (provider: string) => {
    try {
      await auth.loginWith(provider)
    } catch (error) {
      console.error(`Error logging in with ${provider}:`, error)
    }
  }

  const logout = async () => {
    try {
      await auth.logout()
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }

  return {
    login,
    logout,
    user: auth.user,
    loggedIn: auth.loggedIn
  }
}
