// composables/useAuth.ts
import { useNuxtApp } from '#app'
import { signInWithPopup } from 'firebase/auth'

export const useAuth = () => {
  const { $auth, $googleProvider, $facebookProvider, $twitterProvider, $appleProvider } = useNuxtApp()

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup($auth, $googleProvider)
      return result.user
    } catch (error) {
      throw error
    }
  }

  const signInWithFacebook = async () => {
    try {
      const result = await signInWithPopup($auth, $facebookProvider)
      return result.user
    } catch (error) {
      throw error
    }
  }

  const signInWithTwitter = async () => {
    try {
      const result = await signInWithPopup($auth, $twitterProvider)
      return result.user
    } catch (error) {
      throw error
    }
  }

  const signInWithApple = async () => {
    try {
      const result = await signInWithPopup($auth, $appleProvider)
      return result.user
    } catch (error) {
      throw error
    }
  }

  return {
    signInWithGoogle,
    signInWithFacebook,
    signInWithTwitter,
    signInWithApple,
  }
}
