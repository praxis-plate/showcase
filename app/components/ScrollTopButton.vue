<template>
  <a
    v-show="isVisible"
    href="#hero"
    class="scroll-top-button"
    aria-label="Наверх"
  >
    <BaseIcon name="arrow-up" :size="18" />
  </a>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import BaseIcon from './ui/BaseIcon.vue'

const isVisible = ref(false)

const syncVisibility = () => {
  isVisible.value = window.scrollY > 480
}

onMounted(() => {
  syncVisibility()
  window.addEventListener('scroll', syncVisibility, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', syncVisibility)
})
</script>

<style scoped lang="scss">
.scroll-top-button {
  position: fixed;
  right: 1.5rem;
  bottom: 1.5rem;
  z-index: 25;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.8rem;
  height: 2.8rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: rgba(22, 27, 34, 0.92);
  color: var(--color-text);
  box-shadow: var(--shadow-surface);
  backdrop-filter: blur(10px);
  transition:
    border-color var(--transition-base),
    transform var(--transition-base),
    opacity var(--transition-base);

  &:hover {
    border-color: var(--color-text-muted);
    transform: translateY(-1px);
  }
}

@media (max-width: 768px) {
  .scroll-top-button {
    right: 1rem;
    bottom: 1rem;
  }
}
</style>
