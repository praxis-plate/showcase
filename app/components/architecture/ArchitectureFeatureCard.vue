<template>
  <article class="architecture-feature-card">
    <div class="architecture-feature-card__icon">
      <BaseIcon :name="icon" :size="20" />
    </div>

    <div class="architecture-feature-card__body">
      <h3 class="architecture-feature-card__title">
        {{ title }}
      </h3>
      <p class="architecture-feature-card__text">
        {{ text }}
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">
import BaseIcon from '../ui/BaseIcon.vue'

defineProps<{
  icon: 'cms' | 'server' | 'spark' | 'check'
  text: string
  title: string
}>()
</script>

<style scoped lang="scss">
@use '~/assets/styles/mixins' as *;

.architecture-feature-card {
  display: flex;
  gap: 1rem;
  padding: 1.65rem 1.75rem;
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  background: var(--color-surface);
  transition:
    border-color var(--transition-base),
    transform var(--transition-base);

  &:hover {
    border-color: rgba(43, 230, 188, 0.24);
    transform: translateY(-2px);
  }

  &__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border: 1px solid var(--color-primary-border);
    border-radius: 0.75rem;
    background: var(--color-primary-soft);
    color: var(--color-primary);
    flex: none;
  }

  &__body {
    display: grid;
    gap: 0.45rem;
  }

  &__title {
    font-family: var(--font-body);
    font-size: 1.05rem;
    font-weight: 600;
    line-height: 1.35;
    letter-spacing: -0.02em;
  }

  &__text {
    font-size: 1rem;
    line-height: 1.6;
  }
}

@include mobile {
  .architecture-feature-card {
    padding: 1.2rem;

    &__icon {
      width: 2.6rem;
      height: 2.6rem;
    }

    &__title {
      font-size: 0.98rem;
    }

    &__text {
      font-size: 0.92rem;
      line-height: 1.5;
    }
  }
}
</style>
