<script setup lang="ts">
useHead({
  title: 'API Lander',
})

</script>
<template>
    <NuxtLayout>
      <div>
        <h1 class="errorcodes">API 服務</h1>
        <h2>關於此平台： <a href="https://mdviewer.yuanhau.com/?u=https://api.yuanhau.com/files/about-api.md"></a></h2>
        <p>管理員/開發者信箱: <a href="mailto:hw@yuanhau.com">hw@yuanhau.com</a></p>
        <h3>Powered by Nuxt + Typescript</h3>
      </div>
    </NuxtLayout>
</template>
<style scoped>
.errorcodes {
  font-size: 2rem;
}
</style>