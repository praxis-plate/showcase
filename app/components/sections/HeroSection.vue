<template>
  <section id="hero" class="hero section">
    <div class="container hero__grid">
      <div class="hero__content">
        <h1 class="hero__title">
          Цифровая экосистема для обучения программированию
        </h1>
        <p class="hero__description">
          Praxis объединяет приложение для обучающихся, панель управления
          курсами и серверную часть для работы с учебными материалами,
          интерактивными заданиями и прогрессом.
        </p>

        <div class="hero__actions">
          <BaseButton href="#demo" icon-left="play"> Смотреть демо </BaseButton>
          <BaseButton
            href="#overview"
            variant="secondary"
            icon-right="arrow-right"
          >
            Изучить систему
          </BaseButton>
          <a
            href="https://github.com/praxis-plate"
            class="hero__github"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GitHubMark />
            <span class="hero__github-label">GitHub</span>
          </a>
        </div>
      </div>

      <HeroShowcase :progress="heroProgress" :tasks="heroTasks" />
    </div>
  </section>
</template>

<script setup lang="ts">
import HeroShowcase from "../hero/HeroShowcase.vue";
import GitHubMark from "../ui/GitHubMark.vue";
import BaseButton from "../ui/BaseButton.vue";

const heroProgress = [
  { label: "Введение в Dart", value: "100%" },
  { label: "Асинхронность", value: "60%" },
  { label: "Управление состоянием", value: "0%" },
];

const heroTasks = [
  { label: "Тестовый вопрос", done: true },
  { label: "Дополнение кода", done: true },
  { label: "Свободный ответ", done: false },
];
</script>

<style scoped lang="scss">
@use "~/assets/styles/mixins" as *;

.hero {
  position: relative;
  display: flex;
  align-items: center;
  min-height: calc(100vh - 5rem);
  padding-top: 1rem;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(rgba(48, 54, 61, 0.22) 1px, transparent 1px),
      linear-gradient(90deg, rgba(48, 54, 61, 0.22) 1px, transparent 1px),
      radial-gradient(
        circle at 78% 24%,
        rgba(43, 230, 188, 0.06),
        transparent 26%
      );
    background-size:
      3.75rem 3.75rem,
      3.75rem 3.75rem,
      auto;
    opacity: 0.55;
    pointer-events: none;
  }

  &__grid {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
    gap: 1.5rem;
    align-items: center;
  }

  &__content {
    display: grid;
    gap: 1.5rem;
    align-self: center;
    max-width: 30rem;
  }

  &__title {
    max-width: 9ch;
    font-size: clamp(2.5rem, 4vw, 4.1rem);
    line-height: 1.02;
  }

  &__description {
    max-width: 27rem;
    font-size: 1rem;
    line-height: 1.65;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;
  }

  &__github {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.875rem;
    min-height: 2.875rem;
    padding: 0;
    border: 1px solid var(--color-border);
    border-radius: 0.5rem;
    background: rgba(255, 255, 255, 0.02);
    color: var(--color-text);
    transition:
      border-color var(--transition-base),
      transform var(--transition-base);

    &:hover {
      border-color: var(--color-text-muted);
      transform: translateY(-1px);
    }
  }

  &__github-label {
    display: none;
  }
}

@include laptop {
  .hero {
    &__grid {
      grid-template-columns: 1fr;
    }

    &__content {
      max-width: none;
    }
  }
}

@include mobile {
  .hero {
    min-height: auto;
    padding-top: 1rem;

    :deep(.base-button) {
      width: 100%;
    }

    &__content {
      justify-items: center;
      max-width: none;
      text-align: center;
    }

    &__title {
      max-width: 100%;
      font-size: clamp(1.55rem, 8.4vw, 2.6rem);
      line-height: 1.06;
      overflow-wrap: anywhere;
    }

    &__description {
      font-size: 0.95rem;
      line-height: 1.55;
    }

    &__actions {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      width: 100%;
    }

    &__github {
      gap: 0.625rem;
      width: 100%;
      height: auto;
      min-height: 2.875rem;
      padding: 0.75rem 1.125rem;
      border-radius: 0.5rem;
    }

    &__github-label {
      display: inline;
      font-size: 0.9375rem;
      font-weight: 500;
      line-height: 1;
    }
  }
}
</style>
