<template>
  <div class="cms-preview">
    <img
      v-if="!hasError"
      class="cms-preview__image"
      :src="previewImageSrc"
      alt="Скриншот панели управления курсами"
      @error="hasError = true"
    >

    <div v-else class="cms-preview__fallback">
      <div class="cms-preview__bar">
        <div class="cms-preview__title-row">
          <span class="cms-preview__title">Курсы</span>
          <span class="cms-preview__count">5 всего</span>
        </div>
        <span class="cms-preview__button">+ Новый курс</span>
      </div>

      <div class="cms-preview__search">Поиск по курсам...</div>

      <div class="cms-preview__table">
        <div class="cms-preview__head">
          <span>Курс</span>
          <span>Мод.</span>
          <span>Уроки</span>
          <span>Статус</span>
        </div>

        <div
          v-for="course in courses"
          :key="course.name"
          class="cms-preview__row"
        >
          <span class="cms-preview__course">{{ course.name }}</span>
          <span>{{ course.modules }}</span>
          <span>{{ course.lessons }}</span>
          <span
            :class="[
              'cms-preview__status',
              `cms-preview__status--${course.status}`,
            ]"
          >
            {{ course.label }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { publicPath } from '~/utils/publicPath';

const hasError = ref(false);
const previewImageSrc = publicPath('/images/cms-course-create-dark-ru.png');

const courses = [
  {
    name: "Flutter Fundamentals",
    modules: 8,
    lessons: 42,
    status: "published",
    label: "Published",
  },
  {
    name: "Dart Language Deep Dive",
    modules: 6,
    lessons: 31,
    status: "published",
    label: "Published",
  },
  {
    name: "State Management Patterns",
    modules: 5,
    lessons: 24,
    status: "draft",
    label: "Draft",
  },
  {
    name: "Backend Integration",
    modules: 4,
    lessons: 18,
    status: "draft",
    label: "Draft",
  },
  {
    name: "Advanced Animations",
    modules: 3,
    lessons: 15,
    status: "review",
    label: "In Review",
  },
];
</script>

<style scoped lang="scss">
.cms-preview {
  overflow: hidden;

  &__image {
    display: block;
    width: 100%;
    height: auto;
  }

  &__fallback {
    background: var(--color-surface);
  }

  &__bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1.25rem 1.75rem;
    border-bottom: 1px solid var(--color-border);
  }

  &__title-row {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  &__title {
    color: var(--color-text);
    font-size: 1.1rem;
    font-weight: 600;
  }

  &__count {
    padding: 0.35rem 0.6rem;
    border: 1px solid var(--color-border);
    border-radius: 0.45rem;
    background: var(--color-surface-strong);
    color: var(--color-text-muted);
    font-family: var(--font-mono);
    font-size: 0.8rem;
  }

  &__button {
    padding: 0.7rem 1rem;
    border-radius: 0.6rem;
    background: #6ce0c0;
    color: var(--color-background);
    font-size: 0.95rem;
    font-weight: 600;
  }

  &__search {
    margin: 1rem 1.75rem;
    padding: 0.9rem 1rem;
    border: 1px solid var(--color-border);
    border-radius: 0.75rem;
    background: var(--color-surface-strong);
    color: var(--color-text-subtle);
    font-size: 0.95rem;
  }

  &__table {
    border-top: 1px solid var(--color-border);
  }

  &__head,
  &__row {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 5rem 5rem 8rem;
    gap: 1rem;
    align-items: center;
    padding: 0.9rem 1.75rem;
  }

  &__head {
    color: var(--color-text-subtle);
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    border-bottom: 1px solid var(--color-border);
  }

  &__row {
    color: var(--color-text-muted);
    font-family: var(--font-mono);
    font-size: 0.95rem;

    &:not(:last-child) {
      border-bottom: 1px solid rgba(48, 54, 61, 0.55);
    }
  }

  &__course {
    color: var(--color-text);
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 500;
  }

  &__status {
    display: inline-flex;
    justify-content: center;
    padding: 0.45rem 0.75rem;
    border-radius: 999px;
    font-family: var(--font-body);
    font-size: 0.88rem;
    font-weight: 600;

    &--published {
      background: var(--color-primary-soft);
      color: var(--color-primary);
    }

    &--draft {
      background: rgba(139, 148, 158, 0.12);
      color: var(--color-text-muted);
    }

    &--review {
      background: var(--color-danger-soft);
      color: var(--color-danger);
    }
  }
}
</style>
