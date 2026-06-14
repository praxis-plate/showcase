<template>
  <component
    :is="tag"
    :class="['base-button', `base-button--${variant}`]"
    v-bind="componentAttrs"
  >
    <BaseIcon
      v-if="iconLeft"
      :name="iconLeft"
      :size="18"
      class="base-button__icon"
    />
    <slot />
    <BaseIcon
      v-if="iconRight"
      :name="iconRight"
      :size="18"
      class="base-button__icon"
    />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseIcon from './BaseIcon.vue'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonIcon = 'play' | 'arrow-right' | 'external'

const props = withDefaults(defineProps<{
  href?: string
  iconLeft?: ButtonIcon
  iconRight?: ButtonIcon
  target?: string
  rel?: string
  type?: 'button' | 'submit' | 'reset'
  variant?: ButtonVariant
}>(), {
  href: undefined,
  iconLeft: undefined,
  iconRight: undefined,
  target: undefined,
  rel: undefined,
  type: 'button',
  variant: 'primary'
})

const tag = computed(() => props.href ? 'a' : 'button')

const componentAttrs = computed(() => props.href
  ? {
      href: props.href,
      target: props.target,
      rel: props.rel
    }
  : {
      type: props.type
    })
</script>

<style scoped lang="scss">
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  min-height: 2.875rem;
  padding: 0.75rem 1.125rem;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  transition:
    background-color var(--transition-base),
    border-color var(--transition-base),
    color var(--transition-base),
    transform var(--transition-base);

  &:hover {
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid rgba(43, 230, 188, 0.45);
    outline-offset: 2px;
  }

  &--primary {
    background: var(--color-primary);
    color: var(--color-background);
  }

  &--secondary {
    border-color: var(--color-border);
    background: rgba(255, 255, 255, 0.02);
    color: var(--color-text);
  }

  &--ghost {
    padding-inline: 0;
    color: var(--color-text-muted);
  }
}

.base-button__icon {
  opacity: 0.92;
}
</style>
