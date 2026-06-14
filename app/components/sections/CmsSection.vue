<template>
  <BaseSection
    id="cms"
    eyebrow="03 &mdash; Управление контентом"
    title="Создание курса от структуры до публикации"
    description="Авторы и администраторы могут вести курсы, модули, уроки и задания, управлять статусами публикации и готовить материалы к прохождению"
  >
    <div class="cms">
      <div class="cms__content">
        <ul class="cms__features">
          <li
            v-for="feature in features"
            :key="feature.text"
            class="cms__feature"
          >
            <span class="cms__feature-icon">
              <BaseIcon :name="feature.icon" :size="18" />
            </span>
            <span>{{ feature.text }}</span>
          </li>
        </ul>
      </div>

      <div class="cms__visual">
        <CmsPreviewFrame />
      </div>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import CmsPreviewFrame from "../cms/CmsPreviewFrame.vue";
import BaseIcon from "../ui/BaseIcon.vue";
import type { IconName } from "../ui/BaseIcon.vue";
import BaseSection from "../ui/BaseSection.vue";

const features: { icon: IconName; text: string }[] = [
  { icon: "cms", text: "Поиск и фильтрация курсов" },
  { icon: "check", text: "Черновики, проверка и публикация" },
  { icon: "layers", text: "Курсы, модули, уроки и задания" },
  {
    icon: "external",
    text: "Задания разных форматов",
  },
  { icon: "spark", text: "Импорт учебных материалов" },
];
</script>

<style scoped lang="scss">
@use "~/assets/styles/mixins" as *;

.cms {
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
  gap: clamp(2.5rem, 5vw, 5rem);
  align-items: start;

  &__content {
    display: grid;
    gap: 2.25rem;
  }

  &__features {
    display: grid;
    gap: 1.3rem;
  }

  &__feature {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: var(--color-text-muted);
    font-size: 1.125rem;
    line-height: 1.45;
  }

  &__feature-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border: 1px solid var(--color-primary-border);
    border-radius: 0.75rem;
    background: var(--color-primary-soft);
    color: var(--color-primary);
    flex: none;
  }

  &__visual {
    display: grid;
    gap: 0.85rem;
  }

  &__asset-note {
    color: var(--color-text-subtle);
    font-size: 0.8rem;
  }
}

@include laptop {
  .cms {
    grid-template-columns: 1fr;
  }
}

@include mobile {
  .cms {
    &__feature {
      align-items: flex-start;
      font-size: 1rem;
    }
  }
}
</style>
