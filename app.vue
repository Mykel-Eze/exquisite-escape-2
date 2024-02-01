<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script></script>

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