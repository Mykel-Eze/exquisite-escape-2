<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { initializeApp } from 'firebase/app'
const firebaseConfig = {
    apiKey: "AIzaSyC0jeSCXvWa0SdVTEJgRVHRYT0UzF9Ujug",
    authDomain: "exquisite-5c67c.firebaseapp.com",
    projectId: "exquisite-5c67c",
    storageBucket: "exquisite-5c67c.appspot.com",
    messagingSenderId: "663438726979",
    appId: "1:663438726979:web:e7a32083b0e906c53101f6",
    measurementId: "G-MT2J41C61X"
  };
  const firebaseApp = initializeApp(firebaseConfig)
</script>

<style src="@/assets/css/filter-block.css"></style>
<style src="@/assets/css/search-results.css"></style>

<style>
div#wrapper {
  float: left;
  width: 100%;
  overflow-x: hidden;
  position: relative;
  min-height: 100vh;
}
div#main-contents-wrapper {
  padding-top: 90px;
  /* min-height: 100vh; */
}
@media(max-width: 600px) {
  div#main-contents-wrapper {
    padding-top: 70px;
  }
}
</style>