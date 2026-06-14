<template>
  <BaseSection
    id="overview"
    eyebrow="01 &mdash; обзор системы"
    title="Три части, одна учебная платформа"
    description="Praxis задуман как связанная система: обучающийся работает в клиентском приложении, автор ведет курс в панели управления, а сервер координирует контент, проверку ответов, аналитику и подсказки."
  >
    <div class="overview__grid">
      <OverviewPartCard
        icon="student"
        index="01"
        :items="learnerItems"
        stack="Flutter &bull; Desktop &bull; Mobile"
        title="Приложение обучающегося"
      />
      <OverviewPartCard
        icon="cms"
        index="02"
        :items="cmsItems"
        stack="Flutter • Desktop"
        title="Панель управления (CMS)"
      />
      <OverviewPartCard
        icon="server"
        index="03"
        :items="backendItems"
        stack="Serverpod &bull; Dart"
        title="Серверная часть"
      />
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import OverviewPartCard from "../overview/OverviewPartCard.vue";
import BaseSection from "../ui/BaseSection.vue";

const learnerItems = [
  "Выбор и запись на курсы",
  "Прохождение уроков и интерактивных заданий",
  "Отслеживание прогресса",
  "Доступ к ИИ-подсказкам",
];

const cmsItems = [
  "Создание и редактирование курсов, модулей, уроков и заданий",
  "Управление структурой, контентом и публикацией",
  "Поддержка нескольких форматов заданий",
  "Инструменты для авторов и администраторов",
];

const backendItems = [
  "Хранение контента и прогресса пользователей",
  "Проверка ответов через типизированные контракты",
  "Подсказки ИИ и контекстные пояснения",
  "Типизированные API для обоих клиентов",
];
</script>

<style scoped lang="scss">
.overview {
  &__grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }
}

@media (min-width: 600px) and (max-width: 900px) {
  .overview {
    &__grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    &__grid > :last-child {
      grid-column: 1 / -1;
    }
  }
}

@media (max-width: 599px) {
  .overview {
    &__grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>
