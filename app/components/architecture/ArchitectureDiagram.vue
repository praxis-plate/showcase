<template>
  <div class="architecture-diagram">
    <div class="architecture-diagram__grid" />

    <div
      v-for="(layer, layerIndex) in layers"
      :key="layer.id"
      class="architecture-diagram__layer"
    >
      <div class="architecture-diagram__layer-head">
        <span
          class="architecture-diagram__layer-mark"
          :style="{ background: layer.color }"
        />
        <span
          class="architecture-diagram__layer-label"
          :style="{ color: layer.color }"
        >
          {{ layer.label }}
        </span>
      </div>

      <div
        class="architecture-diagram__nodes"
        :class="{
          'architecture-diagram__nodes--one': layer.items.length === 1,
          'architecture-diagram__nodes--three': layer.items.length === 3
        }"
      >
        <article
          v-for="item in layer.items"
          :key="item.name"
          class="architecture-diagram__node"
          :style="{ borderColor: layer.borderColor }"
        >
          <h3 class="architecture-diagram__node-title">
            {{ item.name }}
          </h3>
          <p
            class="architecture-diagram__node-subtitle"
          >
            {{ renderEntities(item.sub) }}
          </p>
        </article>
      </div>

      <div
        v-if="layerIndex < layers.length - 1"
        class="architecture-diagram__connector"
      >
        <span class="architecture-diagram__connector-line" />
        <span class="architecture-diagram__connector-arrow" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { renderEntities } from '../../utils/renderEntities'

const layers = [
  {
    id: 'clients',
    label: 'Клиентский слой',
    color: 'var(--color-primary)',
    borderColor: 'rgba(43, 230, 188, 0.22)',
    items: [
      { name: 'Flutter приложение обучающегося', sub: 'Mobile &bull; iOS & Android  Desktop &bull; macOS & Windows' },
      { name: 'Flutter система управления контентом', sub: 'Desktop &bull; macOS & Windows' }
    ]
  },
    {
    id: 'generated-client',
    label: 'Промежуточный слой',
    color: 'var(--color-primary-dark)',
    borderColor: 'rgba(30, 180, 150, 0.24)',
    items: [
      { name: 'Serverpod Client', sub: 'Dart &bull; typed RPC' },
    ]
  },
  {
    id: 'backend',
    label: 'Серверный слой',
    color: 'var(--color-primary-dark)',
    borderColor: 'rgba(30, 180, 150, 0.24)',
    items: [
      { name: 'Serverpod', sub: 'Dart' },
    ]
  },
  {
    id: 'services',
    label: 'Сервисы',
    color: 'var(--color-text-muted)',
    borderColor: 'rgba(139, 148, 158, 0.18)',
    items: [
      { name: 'PostgreSQL', sub: 'Контент и прогресс' },
      { name: 'Redis', sub: 'Сессии и кэш' },
      { name: 'AI Integration', sub: 'Подсказки и пояснения' }
    ]
  }
]
</script>

<style scoped lang="scss">
@use '~/assets/styles/mixins' as *;

.architecture-diagram {
  position: relative;
  overflow: hidden;
  padding: 2.6rem 2.8rem;
  border: 1px solid var(--color-border);
  border-radius: 1.5rem;
  background: var(--color-surface);
  box-shadow: var(--shadow-surface);

  &__grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(48, 54, 61, 0.22) 1px, transparent 1px),
      linear-gradient(90deg, rgba(48, 54, 61, 0.22) 1px, transparent 1px);
    background-size: 2.05rem 2.05rem;
    pointer-events: none;
  }

  &__layer {
    position: relative;
    z-index: 1;
  }

  &__layer + &__layer {
    margin-top: 1.55rem;
  }

  &__layer-head {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    margin-bottom: 1rem;
  }

  &__layer-mark {
    width: 0.2rem;
    height: 1rem;
    border-radius: 999px;
    flex: none;
  }

  &__layer-label {
    font-family: var(--font-mono);
    font-size: 0.95rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  &__nodes {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;

    &--one {
      grid-template-columns: 1fr;
    }

    &--three {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  &__node {
    min-height: 5.9rem;
    padding: 1.15rem 1.3rem;
    border: 1px solid;
    border-radius: 0.85rem;
    background: var(--color-background);
  }

  &__node-title {
    margin-bottom: 0.35rem;
    font-family: var(--font-body);
    font-size: 1.05rem;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -0.02em;
  }

  &__node-subtitle {
    font-size: 0.95rem;
    line-height: 1.45;
  }

  &__connector {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 0.35rem;
  }

  &__connector-line {
    width: 1px;
    height: 1.4rem;
    background:
      repeating-linear-gradient(
        to bottom,
        var(--color-border) 0,
        var(--color-border) 0.22rem,
        transparent 0.22rem,
        transparent 0.45rem
      );
  }

  &__connector-arrow {
    width: 0.7rem;
    height: 0.7rem;
    border-right: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
    transform: rotate(45deg) translateY(-0.05rem);
  }
}

@include laptop {
  .architecture-diagram {
    padding: 1.7rem;

    &__nodes,
    &__nodes--three {
      grid-template-columns: 1fr;
    }
  }
}
</style>
