<template>
  <BaseSection
    id="architecture"
    eyebrow="04 &mdash; Архитектура"
    title="Система состоит из приложения, CMS и серверной части"
    description="Praxis объединяет клиентские приложения на Flutter, серверную часть на Serverpod, хранилище данных на PostgreSQL и сервисы для работы с прогрессом, заданиями и подсказками."
  >
    <div class="architecture">
      <ArchitectureDiagram />

      <div class="architecture__features">
        <ArchitectureFeatureCard
          v-for="feature in features"
          :key="feature.title"
          :icon="feature.icon"
          :title="feature.title"
          :text="feature.text"
        />
      </div>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import ArchitectureDiagram from "../architecture/ArchitectureDiagram.vue";
import ArchitectureFeatureCard from "../architecture/ArchitectureFeatureCard.vue";
import BaseSection from "../ui/BaseSection.vue";

const features: {
  icon: "cms" | "server" | "spark" | "check";
  title: string;
  text: string;
}[] = [
  {
    icon: "cms",
    title: "Генерация клиентского кода",
    text: "Serverpod генерирует Dart-клиенты из серверного описания, поэтому приложения работают с теми же моделями и методами, что и серверная часть.",
  },
  {
    icon: "server",
    title: "Хранение прогресса",
    text: "PostgreSQL хранит курсы, уроки, выполненные задания, достижения и прогресс обучающегося между сессиями.",
  },
  {
    icon: "spark",
    title: "Проверка заданий",
    text: "Для разных типов заданий используются отдельные способы проверки: выбор ответа, дополнение кода, сопоставление и свободный ответ.",
  },
];
</script>

<style scoped lang="scss">
@use "~/assets/styles/mixins" as *;

.architecture {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.02fr);
  gap: 2.5rem;
  align-items: start;

  &__features {
    display: grid;
    gap: 1.5rem;
  }
}

@include laptop {
  .architecture {
    grid-template-columns: 1fr;
  }
}

@include mobile {
  .architecture {
    gap: 1.5rem;

    &__features {
      gap: 1rem;
    }
  }
}
</style>
