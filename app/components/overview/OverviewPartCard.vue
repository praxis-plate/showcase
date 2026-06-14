<template>
  <article class="overview-card">
    <div class="overview-card__top">
      <div class="overview-card__icon">
        <BaseIcon :name="icon" />
      </div>
      <span class="overview-card__index">
        {{ index }}
      </span>
    </div>

    <h3 class="overview-card__title">
      {{ title }}
    </h3>

    <p class="overview-card__stack">
      {{ renderEntities(stack) }}
    </p>

    <ul class="overview-card__list">
      <li
        v-for="item in items"
        :key="item"
        class="overview-card__item"
      >
        <BaseIcon
          name="check"
          :size="16"
          class="overview-card__check"
        />
        <span>{{ item }}</span>
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
import BaseIcon from '../ui/BaseIcon.vue'
import { renderEntities } from '../../utils/renderEntities'

defineProps<{
  icon: 'student' | 'cms' | 'server'
  index: string
  items: string[]
  stack: string
  title: string
}>()
</script>

<style scoped lang="scss">
@use '~/assets/styles/mixins' as *;

.overview-card {
  @include panel;

  position: relative;
  display: grid;
  gap: 1rem;
  height: 100%;
  padding: 1.5rem;
  overflow: hidden;
  transition:
    border-color var(--transition-base),
    transform var(--transition-base);

  &:hover {
    border-color: rgba(43, 230, 188, 0.3);
    transform: translateY(-3px);
  }

  &__top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
  }

  &__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    color: var(--color-primary);

    :deep(.base-icon) {
      font-size: 2rem;
    }
  }

  &__index {
    font-family: var(--font-mono);
    color: rgba(43, 230, 188, 0.07);
    font-size: clamp(2.6rem, 3.2vw, 3.5rem);
    font-weight: 700;
    line-height: 1;
  }

  &__title {
    font-size: clamp(1.42rem, 1.6vw, 1.85rem);
    line-height: 1.18;
  }

  &__stack {
    margin-top: -0.35rem;
    font-family: var(--font-mono);
    color: var(--color-primary);
    font-size: 0.625rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  &__list {
    display: grid;
    gap: 0.75rem;
    margin-top: 0.125rem;
  }

  &__item {
    display: flex;
    align-items: flex-start;
    gap: 0.625rem;
    color: var(--color-text-muted);
    font-size: 0.8125rem;
    line-height: 1.45;
  }

  &__check {
    color: var(--color-primary);
    flex: none;
    margin-top: 0.1rem;
  }
}

@include mobile {
  .overview-card {
    padding: 1.15rem;

    &__icon {
      width: 2.6rem;
      height: 2.6rem;

      :deep(.base-icon) {
        font-size: 1.7rem;
      }
    }

    &__title {
      font-size: 1.22rem;
    }

    &__item {
      font-size: 0.78rem;
    }
  }
}
</style>
