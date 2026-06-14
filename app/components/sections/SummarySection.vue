<template>
  <BaseSection id="summary" eyebrow="06 &mdash; Summary" class="summary">
    <div class="summary__inner">
      <h2 class="summary__title">
        Цифровая экосистема Praxis для обучения программированию
      </h2>

      <p class="summary__description">
        Платформа объединяет обучение, подготовку курсов и серверную часть в одну
        систему. Платформа поддерживает интерактивные задания, управление
        учебными материалами, сохранение прогресса и дальнейшее расширение
        образовательных сценариев.
      </p>

      <div class="summary__pills">
        <span v-for="item in summaryPills" :key="item" class="summary__pill">
          {{ item }}
        </span>
      </div>

      <div class="summary__actions">
        <BaseButton href="#demo"> Смотреть демо </BaseButton>
        <BaseButton href="#architecture" variant="secondary">
          Изучить архитектуру
        </BaseButton>
        <a
          href="https://github.com/praxis-plate"
          class="summary__github"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <GitHubMark />
          <span class="summary__github-label">GitHub</span>
        </a>
      </div>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import GitHubMark from "../ui/GitHubMark.vue";
import BaseButton from "../ui/BaseButton.vue";
import BaseSection from "../ui/BaseSection.vue";

const summaryPills = [
  "Интерактивные задания",
  "Управление курсами через CMS",
  "Прогресс обучающихся",
  "Подсказки ИИ",
  "Flutter 💙 Serverpod",
];
</script>

<style scoped lang="scss">
@use "~/assets/styles/mixins" as *;

.summary {
  text-align: center;

  :deep(.base-section__eyebrow) {
    display: block;
    justify-self: center;
    text-align: center;
  }

  &__inner {
    position: relative;
    max-width: 42.5rem;
    margin: 0 auto;
    padding: 0 0 0.5rem;

    &::before {
      content: "";
      position: absolute;
      top: 18%;
      left: 50%;
      width: 40rem;
      height: 20rem;
      background: radial-gradient(
        ellipse,
        rgba(43, 230, 188, 0.05) 0%,
        transparent 70%
      );
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: -1;
    }
  }

  &__title {
    max-width: 12ch;
    margin: 0 auto 1.5rem;
    font-size: clamp(2.4rem, 4.2vw, 4rem);
    line-height: 1.03;
  }

  &__description {
    max-width: 40rem;
    margin: 0 auto 2.5rem;
    color: var(--color-text-muted);
    font-size: 1.02rem;
    line-height: 1.75;
  }

  &__pills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.7rem;
    margin-bottom: 2.75rem;
  }

  &__pill {
    display: inline-flex;
    align-items: center;
    min-height: 2rem;
    padding: 0.45rem 1rem;
    border: 1px solid var(--color-border);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.02);
    color: var(--color-text-muted);
    font-size: 0.875rem;
    line-height: 1.2;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
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

@include mobile {
  .summary {
    :deep(.base-button) {
      width: 100%;
    }

    &__title {
      max-width: 11ch;
    }

    &__description {
      margin-bottom: 2rem;
      font-size: 0.95rem;
    }

    &__pills {
      gap: 0.55rem;
      margin-bottom: 2.2rem;
    }

    &__pill {
      font-size: 0.8rem;
    }

    &__actions {
      display: flex;
      flex-direction: column;
      align-items: stretch;
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
