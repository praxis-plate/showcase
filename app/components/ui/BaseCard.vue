<template>
  <article class="base-card">
    <div class="base-card__head">
      <div v-if="icon" class="base-card__icon">
        <BaseIcon :name="icon" :size="18" />
      </div>
      <h3 class="base-card__title">
        {{ title }}
      </h3>
    </div>
    <p v-if="description" class="base-card__description">
      {{ description }}
    </p>
    <slot />
  </article>
</template>

<script setup lang="ts">
import BaseIcon from './BaseIcon.vue'

defineProps<{
  title: string
  icon?: 'student' | 'cms' | 'server' | 'spark' | 'check' | 'layers'
  description?: string
}>()
</script>

<style scoped lang="scss">
@use '~/assets/styles/mixins' as *;

.base-card {
  @include panel;

  display: grid;
  gap: 0.875rem;
  height: 100%;
  padding: 1.5rem;
}

.base-card__head {
  display: flex;
  align-items: center;
  gap: 0.875rem;
}

.base-card__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border: 1px solid rgba(43, 230, 188, 0.22);
  border-radius: 0.75rem;
  background: rgba(43, 230, 188, 0.08);
  color: var(--color-primary);
}

.base-card__title {
  font-size: 1.375rem;
  line-height: 1.2;
}

.base-card__description {
  font-size: 0.95rem;
}
</style>
