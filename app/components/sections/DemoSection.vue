<template>
  <BaseSection
    id="demo"
    eyebrow="05 &mdash; Демо"
    title="Платформа в действии"
    description="Короткая демонстрация показывает, как обучающийся проходит курс и задания, а автор готовит материалы через CMS."
  >
    <div class="demo-block">
      <div class="demo-block__stage">
        <div class="demo-block__stage-top">
          <div class="demo-block__stage-label">
            <span class="demo-block__stage-dot" />
            <span>{{ activeChapter.stageLabel }}</span>
          </div>
          <span class="demo-block__stage-time">{{ activeChapter.duration }}</span>
        </div>

        <label class="demo-block__mobile-select">
          <span class="demo-block__mobile-select-label">Сценарий</span>
          <select v-model="activeChapterId" class="demo-block__mobile-select-control">
            <option
              v-for="chapter in chapters"
              :key="chapter.id"
              :value="chapter.id"
            >
              {{ chapter.title }} · {{ chapter.duration }}
            </option>
          </select>
        </label>

        <div class="demo-block__viewport">
          <video
            v-if="activeChapter.video && !failedVideos[activeChapter.id]"
            :src="activeChapter.video"
            :poster="activeChapter.poster"
            class="demo-block__video"
            controls
            playsinline
            preload="metadata"
            @error="markVideoFailed(activeChapter.id)"
          />

          <img
            v-else-if="activeChapter.poster"
            :src="activeChapter.poster"
            :alt="activeChapter.title"
            class="demo-block__image"
          >

          <button
            v-else
            type="button"
            class="demo-block__placeholder"
          >
            <span class="demo-block__play">
              <BaseIcon name="play" :size="20" />
            </span>
            <span class="demo-block__placeholder-title">{{ activeChapter.placeholder }}</span>
          </button>
        </div>
      </div>

      <aside class="demo-block__sidebar">
        <p class="demo-block__sidebar-eyebrow">Сценарии</p>

        <button
          v-for="chapter in chapters"
          :key="chapter.id"
          type="button"
          :class="['demo-block__chapter', { 'is-active': chapter.id === activeChapterId }]"
          @click="activeChapterId = chapter.id"
        >
          <div class="demo-block__chapter-main">
            <span class="demo-block__chapter-title">{{ chapter.title }}</span>
            <span class="demo-block__chapter-description">{{ chapter.sidebarDescription }}</span>
          </div>
          <span class="demo-block__chapter-time">{{ chapter.duration }}</span>
        </button>
      </aside>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import { computed, shallowRef } from 'vue'
import BaseIcon from '../ui/BaseIcon.vue'
import BaseSection from '../ui/BaseSection.vue'

type DemoChapter = {
  id: string
  title: string
  stageLabel: string
  duration: string
  sidebarDescription: string
  placeholder: string
  poster?: string
  video?: string
}

const chapters: [DemoChapter, ...DemoChapter[]] = [
  {
    id: 'learner',
    title: 'Приложение обучающегося',
    stageLabel: 'Приложение обучающегося',
    duration: '0:00',
    sidebarDescription: 'Поиск курса, урок и выполнение заданий',
    placeholder: 'Положите видео обучающегося в public/videos/demo-learner.mp4.',
    video: '/videos/demo-learner.mp4'
  },
  {
    id: 'cms',
    title: 'Рабочий процесс CMS',
    stageLabel: 'Панель управления',
    duration: '3:45',
    sidebarDescription: 'Создание курса, модули и публикация',
    placeholder: 'Положите видео CMS в public/videos/demo-cms.mp4.',
    poster: '/images/cms-course-create-dark-ru.png',
    video: '/videos/demo-cms.mp4'
  },
  {
    id: 'platform',
    title: 'Сквозной сценарий платформы',
    stageLabel: 'Сквозной обзор',
    duration: '7:20',
    sidebarDescription: 'Полный путь с подсказками ИИ и аналитикой',
    placeholder: 'Положите итоговое видео в public/videos/demo-platform.mp4.',
    video: '/videos/demo-platform.mp4'
  }
] 

const activeChapterId = shallowRef(chapters[0].id)
const failedVideos = shallowRef<Record<string, boolean>>({})

const activeChapter = computed(
  () => chapters.find((chapter) => chapter.id === activeChapterId.value) ?? chapters[0]
)

const markVideoFailed = (id: string) => {
  failedVideos.value = {
    ...failedVideos.value,
    [id]: true
  }
}
</script>

<style scoped lang="scss">
@use '~/assets/styles/mixins' as *;

.demo-block {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 22rem;
  gap: 1.5rem;

  &__stage,
  &__sidebar {
    @include panel;

    overflow: hidden;
  }

  &__stage-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 1.1rem 1.4rem;
    border-bottom: 1px solid var(--color-border);
    background: rgba(255, 255, 255, 0.02);
  }

  &__stage-label {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1rem;
    font-weight: 600;
  }

  &__stage-dot {
    width: 0.55rem;
    height: 0.55rem;
    border-radius: 999px;
    background: rgba(43, 230, 188, 0.88);
  }

  &__stage-time {
    color: var(--color-text-subtle);
    font-family: var(--font-mono);
    font-size: 0.9rem;
  }

  &__viewport {
    position: relative;
    min-height: 31rem;
    padding: 1.8rem;
    background:
      linear-gradient(rgba(48, 54, 61, 0.16) 1px, transparent 1px),
      linear-gradient(90deg, rgba(48, 54, 61, 0.16) 1px, transparent 1px),
      radial-gradient(circle at 50% 45%, rgba(43, 230, 188, 0.07), transparent 34%),
      var(--color-background);
    background-size:
      4rem 4rem,
      4rem 4rem,
      auto,
      auto;
  }

  &__mobile-select {
    display: none;
  }

  &__image {
    display: block;
    width: 100%;
    height: auto;
    border: 1px solid rgba(48, 54, 61, 0.65);
    border-radius: 1rem;
    object-fit: cover;
    box-shadow: var(--shadow-surface);
  }

  &__video {
    display: block;
    width: 100%;
    height: auto;
    border: 1px solid rgba(48, 54, 61, 0.65);
    border-radius: 1rem;
    background: var(--color-background);
    box-shadow: var(--shadow-surface);
  }

  &__placeholder {
    position: absolute;
    inset: 0;
    width: 100%;
    min-height: 100%;
    border: 0;
    background: transparent;
    color: inherit;
    cursor: pointer;
  }

  &__play {
    position: absolute;
    top: 50%;
    left: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 4.5rem;
    height: 4.5rem;
    border: 1.5px solid rgba(43, 230, 188, 0.35);
    border-radius: 999px;
    background: rgba(43, 230, 188, 0.1);
    color: var(--color-primary);
    transform: translate(-50%, -50%);
    transition:
      background-color var(--transition-base),
      transform var(--transition-base);
  }

  &__placeholder:hover &__play {
    background: rgba(43, 230, 188, 0.14);
    transform: translate(-50%, -50%) scale(1.02);
  }

  &__placeholder-title {
    position: absolute;
    top: calc(50% + 3.75rem);
    left: 50%;
    transform: translateX(-50%);
    max-width: 28rem;
    color: var(--color-text-muted);
    font-size: 0.95rem;
    line-height: 1.5;
    text-align: center;
  }

  &__sidebar {
    display: grid;
    align-content: start;
  }

  &__sidebar-eyebrow {
    padding: 1.15rem 1.4rem 0.95rem;
    color: var(--color-text-subtle);
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  &__chapter {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 1rem;
    padding: 1.25rem 1.4rem;
    border: 0;
    border-top: 1px solid var(--color-border);
    border-left: 2px solid transparent;
    background: transparent;
    text-align: left;
    transition:
      background-color var(--transition-base),
      border-color var(--transition-base);

    &.is-active {
      border-left-color: var(--color-primary);
      background:
        linear-gradient(90deg, rgba(43, 230, 188, 0.12), rgba(43, 230, 188, 0.03) 42%, transparent 100%),
        rgba(255, 255, 255, 0.02);
    }
  }

  &__chapter-main {
    display: grid;
    gap: 0.45rem;
  }

  &__chapter-title {
    font-size: 1.05rem;
    font-weight: 600;
    line-height: 1.3;
  }

  &__chapter-description {
    color: var(--color-text-muted);
    font-size: 0.95rem;
    line-height: 1.45;
  }

  &__chapter-time {
    color: var(--color-text-subtle);
    font-family: var(--font-mono);
    font-size: 0.88rem;
    white-space: nowrap;
  }
}

@media (max-width: 1180px) {
  .demo-block {
    grid-template-columns: 1fr;

    &__viewport {
      min-height: 24rem;
    }

    &__sidebar {
      order: -1;
    }

    &__chapter {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }
}

@include mobile {
  .demo-block {
    gap: 1rem;

    &__stage-top,
    &__sidebar-eyebrow,
    &__chapter {
      padding-right: 1rem;
      padding-left: 1rem;
    }

    &__sidebar {
      display: none;
    }

    &__mobile-select {
      display: grid;
      gap: 0.45rem;
      padding: 1rem 1rem 0.75rem;
    }

    &__mobile-select-label {
      color: var(--color-text-subtle);
      font-family: var(--font-mono);
      font-size: 0.68rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    &__mobile-select-control {
      width: 100%;
      min-height: 2.875rem;
      padding: 0.75rem 0.95rem;
      border: 1px solid var(--color-border);
      border-radius: 0.75rem;
      background: rgba(255, 255, 255, 0.03);
      color: var(--color-text);
      font: inherit;
    }

    &__viewport {
      min-height: 20rem;
      padding: 1rem;
      background-size:
        2.4rem 2.4rem,
        2.4rem 2.4rem,
        auto,
        auto;
    }

    &__placeholder {
      min-height: 18rem;
    }

    &__play {
      width: 4rem;
      height: 4rem;
    }

    &__placeholder-title {
      top: calc(50% + 3.25rem);
      font-size: 0.875rem;
    }

    &__chapter {
      grid-template-columns: 1fr;
    }
  }
}
</style>
