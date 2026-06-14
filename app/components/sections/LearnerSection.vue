<template>
  <BaseSection
    id="learner"
    eyebrow="02 &mdash; Пользовательский опыт"
    title="Обучение проходит по понятному маршруту"
    description="Praxis выстраивает учебный процесс от выбора курса до выполнения заданий и оценки результата. Обучающийся проходит материалы последовательно, получает помощь по ходу работы и видит собственный прогресс."
  >
    <div class="learner">
      <div class="learner__steps">
        <LearnerFlowStep
          v-for="(step, index) in steps"
          :key="step.index"
          :index="step.index"
          :title="step.title"
          :subtitle="step.subtitle"
          :show-arrow="index < steps.length - 1"
        />
      </div>

      <div class="learner__explorer">
        <aside class="learner__sidebar">
          <p class="learner__sidebar-eyebrow">Типы заданий</p>

          <button
            v-for="item in taskTypes"
            :key="item.id"
            type="button"
            :class="['learner__tab', { 'is-active': item.id === activeTaskId }]"
            @click="activeTaskId = item.id"
          >
            <span class="learner__tab-label">{{ item.label }}</span>
          </button>
        </aside>

        <div class="learner__explorer-content">
          <p class="learner__explorer-description">
            {{ activePreview.description }}
          </p>

          <div class="learner__preview">
            <p class="learner__preview-question">
              {{ activePreview.question }}
            </p>

            <div
              v-if="activePreview.type === 'options'"
              class="learner__options"
            >
              <div
                v-for="option in activePreview.options"
                :key="option.label"
                :class="['learner__option', { 'is-correct': option.correct }]"
              >
                <span class="learner__option-mark">
                  {{ option.correct ? "✓" : "" }}
                </span>
                <span>{{ option.label }}</span>
              </div>
            </div>

            <div
              v-else-if="activePreview.type === 'lines'"
              class="learner__code"
            >
              <p class="learner__code-comment">{{ activePreview.comment }}</p>
              <p
                v-for="line in activePreview.lines"
                :key="line"
                class="learner__code-line"
              >
                {{ line }}
              </p>
            </div>

            <div
              v-else-if="activePreview.type === 'pairs'"
              class="learner__matching"
            >
              <div
                v-for="pair in activePreview.pairs"
                :key="pair.term"
                class="learner__matching-row"
              >
                <div class="learner__matching-term">{{ pair.term }}</div>
                <div class="learner__matching-definition">
                  {{ pair.definition }}
                </div>
              </div>
            </div>

            <div v-else class="learner__free-text">
              <div class="learner__free-text-box">
                {{ activePreview.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import LearnerFlowStep from "../learner/LearnerFlowStep.vue";
import BaseSection from "../ui/BaseSection.vue";

const steps = [
  { index: "01", title: "Выбор курса", subtitle: "Поиск подходящей программы" },
  {
    index: "02",
    title: "Прохождение уроков",
    subtitle: "Последовательный маршрут",
  },
  {
    index: "03",
    title: "Интерактивные задания",
    subtitle: "Практика после теории",
  },
  { index: "04", title: "Подсказки ИИ", subtitle: "Помощь при затруднениях" },
  { index: "05", title: "Оценка курса", subtitle: "Прогресс и обратная связь" },
];

const taskTypes = [
  {
    id: "multiple-choice",
    label: "Выбор ответа",
    description:
      "Выбор правильного варианта из предложенных ответов с немедленной проверкой.",
  },
  {
    id: "code-completion",
    label: "Дополнение кода",
    description:
      "Заполнение пропусков в коде, чтобы решение компилировалось и работало корректно.",
  },
  {
    id: "matching",
    label: "Сопоставление",
    description:
      "Соединение понятий с определениями или соответствующими элементами.",
  },
  {
    id: "free-text",
    label: "Свободный ответ",
    description: "Ответ своими словами.",
  },
] as const;

const activeTaskId = ref<(typeof taskTypes)[number]["id"]>("multiple-choice");

const previewMap = {
  "multiple-choice": {
    type: "options",
    description:
      "Выбор правильного варианта из предложенных ответов с немедленной проверкой.",
    question: "Какое ключевое слово объявляет неизменяемую переменную в Dart?",
    options: [
      { label: "final", correct: true },
      { label: "var", correct: false },
      { label: "dynamic", correct: false },
      { label: "late", correct: false },
    ],
  },
  "code-completion": {
    type: "lines",
    description:
      "Заполнение пропусков в коде, чтобы решение компилировалось и работало корректно.",
    question:
      "Дополните асинхронную функцию, чтобы она корректно вернула результат.",
    comment: "// Дополните асинхронную функцию",
    lines: [
      "Future fetchData(String url) async {",
      "  final response = await http.get(Uri.parse(url));",
      "  return response.body;",
      "}",
    ],
  },
  matching: {
    type: "pairs",
    description:
      "Соединение понятий с определениями или соответствующими элементами.",
    question: "Сопоставьте асинхронные сущности с их назначением.",
    pairs: [
      { term: "Stream", definition: "Асинхронная последовательность данных" },
      { term: "Future", definition: "Одно асинхронное значение" },
      { term: "Isolate", definition: "Отдельный поток выполнения" },
    ],
  },
  "free-text": {
    type: "free-text",
    description: "Ответ своими словами.",
    question: "Объясните разницу между hot reload и hot restart во Flutter.",
    text: "Hot reload сохраняет состояние приложения и обновляет дерево виджетов...",
  },
} as const;

const activePreview = computed(() => previewMap[activeTaskId.value]);
</script>

<style scoped lang="scss">
@use "~/assets/styles/mixins" as *;

.learner {
  display: grid;
  gap: 4rem;

  &__steps {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 0.75rem;
    align-items: stretch;
  }

  &__explorer {
    display: grid;
    grid-template-columns: 25.4% 1fr;
    min-height: 36.5rem;
    overflow: hidden;
    border: 1px solid var(--color-border);
    border-radius: 1.35rem;
    background: var(--color-surface);
  }

  &__sidebar {
    padding: 2rem 0;
    border-right: 1px solid var(--color-border);
  }

  &__sidebar-eyebrow {
    margin-bottom: 1rem;
    padding: 0 2rem;
    color: var(--color-text-subtle);
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  &__tab {
    width: 100%;
    padding: 1rem 2rem;
    border: 0;
    border-left: 2px solid transparent;
    background: transparent;
    color: var(--color-text-muted);
    text-align: left;
    transition:
      background-color var(--transition-base),
      border-color var(--transition-base),
      color var(--transition-base);

    &.is-active {
      border-left-color: var(--color-primary);
      background: var(--color-primary-soft);
      color: var(--color-text);
    }
  }

  &__tab-label {
    display: block;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.3;
  }

  &__explorer-content {
    display: grid;
    grid-template-rows: auto 1fr;
    padding: 2.75rem 3rem 3rem;
  }

  &__explorer-description {
    max-width: 38rem;
    margin-bottom: 2rem;
    font-size: 1.125rem;
    line-height: 1.6;
  }

  &__preview {
    display: flex;
    flex-direction: column;
    min-height: 22.5rem;
    height: 100%;
    padding: 2rem;
    border: 1px solid var(--color-border);
    border-radius: 1rem;
    background: var(--color-background);
  }

  &__preview-question {
    margin-bottom: 1.5rem;
    color: var(--color-text);
    font-size: 1.5rem;
    line-height: 1.35;
  }

  &__options {
    display: grid;
    gap: 0.875rem;
  }

  &__option {
    display: flex;
    align-items: center;
    gap: 0.875rem;
    min-height: 3.25rem;
    padding: 0.875rem 1.125rem;
    border: 1px solid var(--color-border);
    border-radius: 0.75rem;
    color: var(--color-text-muted);
    font-size: 1.125rem;

    &.is-correct {
      border-color: rgba(43, 230, 188, 0.45);
      background: var(--color-primary-soft);
      color: var(--color-primary);
    }
  }

  &__option-mark {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.375rem;
    height: 1.375rem;
    border: 1.5px solid var(--color-border);
    border-radius: 999px;
    flex: none;

    .is-correct & {
      border-color: var(--color-primary);
      background: var(--color-primary);
      color: var(--color-background);
    }
  }

  &__code {
    color: var(--color-text);
    font-family: var(--font-mono);
    font-size: 0.95rem;
    line-height: 1.9;
  }

  &__code-comment {
    margin-bottom: 0.75rem;
    color: var(--color-text-muted);
    font-size: 0.8rem;
  }

  &__matching {
    display: grid;
    gap: 0.75rem;
    align-content: start;
  }

  &__matching-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
  }

  &__matching-term,
  &__matching-definition {
    min-height: 3rem;
    padding: 0.8rem 1rem;
    border-radius: 0.625rem;
  }

  &__matching-term {
    border: 1px solid var(--color-border);
    background: var(--color-surface-strong);
    color: var(--color-text);
    font-family: var(--font-mono);
    font-size: 0.875rem;
  }

  &__matching-definition {
    border: 1px solid var(--color-border);
    background: var(--color-surface-strong);
    color: var(--color-text-muted);
    font-size: 0.875rem;
    line-height: 1.45;
  }

  &__free-text-box {
    min-height: 6rem;
    padding: 0.875rem 1rem;
    border: 1px solid var(--color-border);
    border-radius: 0.75rem;
    background: var(--color-surface-strong);
    color: var(--color-text-muted);
    font-size: 0.95rem;
    line-height: 1.65;

    &::after {
      content: "";
      display: inline-block;
      width: 1px;
      height: 1rem;
      margin-left: 0.15rem;
      vertical-align: middle;
      background: var(--color-primary);
      animation: blink 1s step-end infinite;
    }
  }
}

@media (max-width: 1180px) {
  .learner {
    &__steps {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    &__explorer {
      grid-template-columns: 1fr;
      min-height: auto;
    }

    &__sidebar {
      border-right: 0;
      border-bottom: 1px solid var(--color-border);
    }

    &__explorer-content {
      padding: 1.75rem;
    }
  }
}

@include mobile {
  .learner {
    gap: 2.5rem;

    &__steps {
      grid-template-columns: 1fr;
    }

    &__sidebar-eyebrow {
      padding: 0 1.25rem;
    }

    &__tab {
      padding: 0.85rem 1.25rem;
    }

    &__explorer-description {
      font-size: 1rem;
    }

    &__preview {
      min-height: auto;
      padding: 1.25rem;
    }

    &__preview-question {
      font-size: 1.125rem;
    }

    &__option {
      font-size: 1rem;
    }

    &__matching-row {
      grid-template-columns: 1fr;
    }
  }
}

@media (max-width: 1180px) {
  .learner {
    &__steps {
      row-gap: 1rem;
    }
  }

  :deep(.learner-flow-step__arrow) {
    right: -0.35rem;
  }
}

@media (max-width: 768px) {
  :deep(.learner-flow-step__arrow) {
    display: none;
  }

  :deep(.learner-flow-step__card) {
    min-height: auto;
  }
}
</style>
