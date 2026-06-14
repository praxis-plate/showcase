<template>
  <div class="page-shell">
    <MainHeader />
    <main class="content">
      <slot />
    </main>
    <MainFooter />
    <ScrollTopButton />
  </div>
</template>

<script setup lang="ts">
import MainFooter from '../components/MainFooter.vue'
import MainHeader from '../components/MainHeader.vue'
import ScrollTopButton from '../components/ScrollTopButton.vue'
</script>

<style scoped lang="scss">
.page-shell {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.content {
  flex: 1;
}
</style>
