<template>
  <span
    aria-hidden="true"
    class="base-icon material-symbols-rounded"
    :style="iconStyle"
  >
    {{ materialIcons[name] }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export type IconName =
  | 'play'
  | 'arrow-right'
  | 'arrow-up'
  | 'external'
  | 'student'
  | 'cms'
  | 'server'
  | 'spark'
  | 'check'
  | 'layers'

const materialIcons: Record<IconName, string> = {
  play: 'play_arrow',
  'arrow-right': 'arrow_forward',
  'arrow-up': 'arrow_upward',
  external: 'open_in_new',
  student: 'school',
  cms: 'dashboard',
  server: 'dns',
  spark: 'auto_awesome',
  check: 'done',
  layers: 'stacks'
}

const props = defineProps<{
  name: IconName
  size?: number
}>()

const iconStyle = computed(() => props.size
  ? { '--icon-size': `${props.size}px` }
  : undefined)
</script>

<style scoped lang="scss">
.base-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  font-size: var(--icon-size, 1.5rem);
  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
  line-height: 1;
}
</style>
