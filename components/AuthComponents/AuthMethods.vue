<template>
  <section>
    <div class="auth-methods flex-div flex justify-center items-center flex-col gap-y-6">
      <div class="auth-method">
        <button @click="login('google')" class="auth-method-btn flex-div hover-scale border px-4 py-2.5 rounded-md gap-x-3">
          <img src="~/assets/images/google-icon.svg" alt="google" class="auth-method-icon">
          <span class="auth-method-text">Sign in with Google</span>
        </button>
      </div>
  
      <div class="auth-method">
        <button @click="login('facebook')" class="auth-method-btn flex-div hover-scale border px-4 py-2.5 rounded-md gap-x-3">
          <img src="~/assets/images/facebook-icon.svg" alt="facebook" class="auth-method-icon">
          <span class="auth-method-text">Sign in with Facebook</span>
        </button>
      </div>
  
      <div class="auth-method">
        <button @click="login('apple')" class="auth-method-btn flex-div hover-scale border px-4 py-2.5 rounded-md gap-x-3">
          <img src="~/assets/images/apple-icon.svg" alt="apple" class="auth-method-icon">
          <span class="auth-method-text">Sign in with Apple</span>
        </button>
      </div>
  
      <div class="auth-method">
        <button @click="login('twitter')" class="auth-method-btn flex-div hover-scale border px-4 py-2.5 rounded-md gap-x-3">
          <img src="~/assets/images/twitter-icon.svg" alt="twitter" class="auth-method-icon">
          <span class="auth-method-text">Sign in with Twitter</span>
        </button>
      </div>
  
      <div class="auth-method">
        <button @click="login('email')" class="auth-method-btn flex-div hover-scale border px-4 py-2.5 rounded-md gap-x-3">
          <img src="~/assets/images/email-icon.png" alt="email" class="auth-method-icon">
          <span class="auth-method-text">Sign up with Email</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useSocialSignIn } from '@/composables/auth/login'
const { login } = useSocialSignIn()
definePageMeta({
  name: "AuthMethod"
})
</script>