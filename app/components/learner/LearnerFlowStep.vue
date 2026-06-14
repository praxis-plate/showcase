<template>
  <div class="learner-flow-step">
    <article class="learner-flow-step__card">
      <span class="learner-flow-step__index">{{ index }}</span>
      <h3 class="learner-flow-step__title">{{ title }}</h3>
      <p class="learner-flow-step__subtitle">{{ subtitle }}</p>
    </article>

    <BaseIcon
      v-if="showArrow"
      name="arrow-right"
      :size="16"
      class="learner-flow-step__arrow"
    />
  </div>
</template>

<script setup lang="ts">
import BaseIcon from '../ui/BaseIcon.vue'

defineProps<{
  index: string
  showArrow?: boolean
  subtitle: string
  title: string
}>()
</script>

<style scoped lang="scss">
.learner-flow-step {
  position: relative;
  height: 100%;

  &__card {
    height: 100%;
    min-height: 7.9rem;
    padding: 1.25rem 1.5rem;
    border: 1px solid var(--color-border);
    border-radius: 0.875rem;
    background: var(--color-surface);
  }

  &__index {
    display: inline-block;
    margin-bottom: 0.75rem;
    color: var(--color-primary);
    font-family: var(--font-mono);
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 0.08em;
  }

  &__title {
    margin-bottom: 0.35rem;
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -0.02em;
  }

  &__subtitle {
    font-size: 0.875rem;
    line-height: 1.45;
  }

  &__arrow {
    position: absolute;
    top: 50%;
    right: -0.5rem;
    transform: translate(100%, -50%);
    color: var(--color-border);
  }
}
</style>
