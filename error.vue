<script setup lang="ts">
const error = useError();
useHead({
  title: '系統錯誤 | API 服務',
})

</script>
<template>
    <NuxtLayout>
      <div>
        <h1 class="errorcodes">錯誤: {{ error.statusCode }}</h1>
        <h3>錯誤訊息: {{ error.message }}</h3>
        <p>管理員/開發者信箱: <a href="mailto:hw@yuanhau.com">hw@yuanhau.com</a></p>
      </div>
    </NuxtLayout>
</template>
<style scoped>
.errorcodes {
  font-size: 2rem;
}
</style>