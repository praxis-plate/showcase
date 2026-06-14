<template>
  <div class="hero-showcase">
    <button type="button" class="hero-showcase__screen">
      <div class="hero-showcase__screen-glow" />
      <div class="hero-showcase__screen-grid" />
      <div class="hero-showcase__screen-center">
        <span class="hero-showcase__play-ring">
          <BaseIcon name="play" :size="22" />
        </span>
        <span class="hero-showcase__caption">Демонстрация платформы</span>
      </div>
      <span class="hero-showcase__sign">{{ renderEntities('praxis &bull; demo') }}</span>
      <div class="hero-showcase__tags">
        <span>Приложение</span>
        <span>CMS</span>
        <span>Платформа</span>
      </div>
    </button>

    <div class="hero-fragment hero-fragment--progress">
      <p class="hero-fragment__title">Ход занятия</p>
      <div class="hero-progress">
        <div
          v-for="item in progress"
          :key="item.label"
          class="hero-progress__row"
        >
          <span class="hero-progress__label">{{ item.label }}</span>
          <div class="hero-progress__track">
            <span class="hero-progress__value" :style="{ width: item.value }" />
          </div>
          <span class="hero-progress__percent">{{ item.value }}</span>
        </div>
      </div>
    </div>

    <div class="hero-fragment hero-fragment--tasks">
      <p class="hero-fragment__title hero-fragment__title--accent">
        Задание выполнено
      </p>
      <ul class="hero-checklist">
        <li
          v-for="item in tasks"
          :key="item.label"
          :class="['hero-checklist__item', { 'is-done': item.done }]"
        >
          <span>{{ item.done ? "✓" : "○" }}</span>
          <span>{{ item.label }}</span>
        </li>
      </ul>
    </div>

    <div class="hero-fragment hero-fragment--ai">
      <p class="hero-fragment__title">Подсказка ИИ</p>
      <p class="hero-fragment__text">
        Используйте асинхронный шаблон работы с данными для поэтапной загрузки
        состояния.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseIcon from "../ui/BaseIcon.vue";
import { renderEntities } from "../../utils/renderEntities";

defineProps<{
  progress: Array<{ label: string; value: string }>;
  tasks: Array<{ label: string; done: boolean }>;
}>();
</script>

<style scoped lang="scss">
@use "~/assets/styles/mixins" as *;

.hero-showcase {
  position: relative;
  min-height: 35rem;

  &::before {
    content: "";
    position: absolute;
    top: -5rem;
    right: -4rem;
    width: 28rem;
    height: 19rem;
    background:
      radial-gradient(
        circle at 20% 32%,
        rgba(43, 230, 188, 0.1),
        transparent 56%
      ),
      linear-gradient(135deg, rgba(43, 230, 188, 0.1), transparent 34%);
    filter: blur(3px);
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: -1rem;
    right: 1rem;
    width: 20rem;
    height: 14rem;
    background: repeating-linear-gradient(
      138deg,
      rgba(43, 230, 188, 0.08) 0,
      rgba(43, 230, 188, 0.08) 1px,
      transparent 1px,
      transparent 18px
    );
    opacity: 0.55;
    mask-image: linear-gradient(135deg, black 28%, transparent 100%);
    pointer-events: none;
  }
}

.hero-showcase__screen {
  position: relative;
  z-index: 5;
  display: block;
  width: min(100%, 30rem);
  min-height: 17.75rem;
  margin: 6.6rem 2rem 0 auto;
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
  background: #161b22;
  text-align: left;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
}

.hero-showcase__screen-glow,
.hero-showcase__screen-grid {
  position: absolute;
  inset: 0;
}

.hero-showcase__screen-glow {
  background:
    radial-gradient(
      ellipse at 30% 35%,
      rgba(43, 230, 188, 0.08) 0%,
      transparent 58%
    ),
    radial-gradient(
      ellipse at 80% 80%,
      rgba(30, 180, 150, 0.05) 0%,
      transparent 48%
    );
}

.hero-showcase__screen-grid {
  background-image:
    linear-gradient(rgba(48, 54, 61, 0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(48, 54, 61, 0.3) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.92;
}

.hero-showcase__screen-center {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.875rem;
}

.hero-showcase__play-ring {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.8rem;
  height: 3.8rem;
  border: 1.5px solid rgba(43, 230, 188, 0.35);
  border-radius: 999px;
  background: rgba(43, 230, 188, 0.12);
  color: var(--color-primary);
}

.hero-showcase__caption {
  color: var(--color-text-muted);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.02em;
}

.hero-showcase__sign {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  z-index: 1;
  color: var(--color-border);
  font-family: var(--font-mono);
  font-size: 0.625rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-showcase__tags {
  position: absolute;
  right: 0.75rem;
  bottom: 0.75rem;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.375rem;

  span {
    padding: 0.25rem 0.5rem;
    border: 1px solid var(--color-border);
    border-radius: 0.375rem;
    background: var(--color-surface-strong);
    color: var(--color-text-muted);
    font-size: 0.625rem;
  }
}

.hero-fragment {
  position: absolute;
  z-index: 2;
  padding: 0.7rem 0.8rem;
  border: 1px solid var(--color-border);
  border-radius: 0.625rem;
  background: rgba(22, 27, 34, 0.92);
  backdrop-filter: blur(8px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.14);
}

.hero-fragment--progress {
  z-index: 10;
  top: 1.25rem;
  right: 0;
  width: 11.5rem;
}

.hero-fragment--tasks {
  right: 14rem;
  bottom: 2.75rem;
  width: 10.3rem;
}

.hero-fragment--ai {
  right: -0.1rem;
  bottom: 6rem;
  width: 8.6rem;
}

.hero-fragment__title {
  margin-bottom: 0.5rem;
  color: var(--color-text);
  font-size: 0.6875rem;
  font-weight: 500;
}

.hero-fragment__title--accent {
  color: var(--color-primary);
}

.hero-fragment__text {
  font-size: 0.6875rem;
  line-height: 1.45;
}

.hero-progress {
  display: grid;
  gap: 0.5rem;
}

.hero-progress__row {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.375rem 0.5rem;
  align-items: center;
}

.hero-progress__label,
.hero-progress__percent {
  color: var(--color-text-muted);
  font-size: 0.625rem;
}

.hero-progress__track {
  grid-column: 1 / span 1;
  height: 0.1875rem;
  border-radius: 999px;
  background: var(--color-surface-strong);
  overflow: hidden;
}

.hero-progress__value {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--color-primary);
}

.hero-checklist {
  display: grid;
  gap: 0.25rem;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.625rem;
}

.hero-checklist__item {
  display: flex;
  align-items: center;
  gap: 0.375rem;
}

.hero-checklist__item.is-done {
  color: var(--color-primary);
}

@include desktop-wide {
  .hero-fragment--progress {
    right: -3.2rem;
  }

  .hero-fragment--tasks {
    right: 16.8rem;
    bottom: 2rem;
  }

  .hero-fragment--ai {
    right: -2.8rem;
    bottom: 6.9rem;
  }
}

@include laptop {
  .hero-showcase {
    min-height: auto;
    display: grid;
    gap: 1rem;

    &::before,
    &::after {
      display: none;
    }
  }

  .hero-showcase__screen {
    width: 100%;
    margin: 1rem 0 0;
  }

  .hero-fragment {
    position: static;
    width: auto;
  }
}

@include mobile {
  .hero-showcase {
    display: none;
  }

  .hero-fragment {
    display: none;
  }
}
</style>
