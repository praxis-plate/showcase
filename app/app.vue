<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Praxis Showcase',
  meta: [
    {
      name: 'description',
      content: 'Premium showcase homepage for the Praxis educational ecosystem.'
    }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/showcase/favicon.ico' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
  ]
})
</script>
