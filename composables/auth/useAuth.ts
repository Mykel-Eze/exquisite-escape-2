import { ref } from 'vue'
import { defineStore } from 'pinia'
import { authApiFactory } from '../../apiFactory/modules/auth'

export const useAuth = defineStore('auth', () => {
  const user = ref(null)
  const error = ref(null)

  const login = async (email: string, password: string) => {
    try {
      const response = await authApiFactory.$_login({ email, password })
      user.value = response.data.user
      return response
    } catch (err) {
      error.value = err.response?.data?.message || 'An error occurred'
      throw err
    }
  }

  const signup = async (userData: any) => {
    try {
      const response = await authApiFactory.$_signup(userData)
      user.value = response.data.user
      return response
    } catch (err) {
      error.value = err.response?.data?.message || 'An error occurred'
      throw err
    }
  }

  const logout = async () => {
    try {
      await authApiFactory.$_logout()
      user.value = null
    } catch (err) {
      error.value = err.response?.data?.message || 'An error occurred'
      throw err
    }
  }

  const googleOAuth = async (code: string) => {
    try {
      const response = await authApiFactory.$_google_oauth(code)
      user.value = response.data.user
      return response
    } catch (err) {
      error.value = err.response?.data?.message || 'An error occurred'
      throw err
    }
  }

  return {
    user,
    error,
    login,
    signup,
    logout,
    googleOAuth
  }
})