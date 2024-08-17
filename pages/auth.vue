<template>
  <div id="signin-view">
    <div class="row">
      <div class="container">
        <div class="page-title-header center">
          <h1 class="page-title-2">Sign in or create an account</h1>
          <p class="page-title-desc-2 text-[18px]">
            Please enter your details to sign in or create a new account
          </p>
        </div>

        <!--=== Auth-Methods Section ===-->
        <AuthMethods />
        <!--=== end of Auth-Methods Section ===-->
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth-layout"
})
</script>

<style src="~/assets/css/auth.css"></style>
