<template>
  <section :id="id" class="base-section section">
    <div class="container">
      <div v-if="eyebrow || title || description" class="section-heading">
        <p
          v-if="eyebrow"
          class="base-section__eyebrow"
        >
          {{ renderEntities(eyebrow) }}
        </p>
        <h2 v-if="title" class="base-section__title">
          {{ title }}
        </h2>
        <p v-if="description" class="base-section__description">
          {{ description }}
        </p>
      </div>

      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import { renderEntities } from '../../utils/renderEntities'

defineProps<{
  id?: string
  eyebrow?: string
  title?: string
  description?: string
}>()
</script>

<style scoped lang="scss">
.base-section {
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    max-width: var(--container-width);
    height: 1px;
    background: linear-gradient(to right, transparent, #30363d 30%, #30363d 70%, transparent);
    transform: translateX(-50%);
  }

  &__eyebrow {
    color: var(--color-primary);
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  &__title {
    max-width: 40rem;
    font-size: clamp(1.95rem, 3vw, 3rem);
    line-height: 1.15;
  }

  &__description {
    max-width: 42.5rem;
    font-size: 1rem;
    line-height: 1.7;
  }
}
</style>
