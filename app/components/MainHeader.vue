<template>
  <header class="header">
    <div class="container header__inner">
      <a href="#hero" class="header__brand">
        <img
          :src="publicPath('/images/praxis-org-logo.png')"
          alt=""
          class="header__brand-logo"
        >
        <span>Praxis</span>
      </a>

      <button
        type="button"
        class="header__burger"
        :aria-expanded="isMenuOpen"
        aria-controls="main-navigation"
        aria-label="Открыть меню"
        @click="toggleMenu"
      >
        <span />
        <span />
        <span />
      </button>

      <div
        id="main-navigation"
        :class="['header__menu', { 'is-open': isMenuOpen }]"
      >
        <nav class="header__nav">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="header__link"
            @click="closeMenu"
          >
            {{ item.label }}
          </a>
        </nav>

        <div class="header__actions">
          <BaseButton
            href="#demo"
            variant="primary"
            icon-left="play"
            @click="closeMenu"
          >
            Смотреть демо
          </BaseButton>
          <BaseButton
            href="#architecture"
            variant="secondary"
            icon-right="arrow-right"
            @click="closeMenu"
          >
            О проекте
          </BaseButton>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseButton from "./ui/BaseButton.vue";
import { publicPath } from '~/utils/publicPath';

const navItems = [
  { label: "Обзор", href: "#overview" },
  { label: "Приложение", href: "#learner" },
  { label: "CMS", href: "#cms" },
  { label: "Архитектура", href: "#architecture" },
  { label: "Демо", href: "#demo" },
];

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped lang="scss">
@use "~/assets/styles/mixins" as *;

.header {
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid rgba(48, 54, 61, 0.7);
  background: rgba(13, 17, 23, 0.82);
  backdrop-filter: blur(16px);

  &__inner {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    min-height: 5rem;
  }

  &__brand {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
  }

  &__brand-logo {
    width: 2rem;
    height: 2rem;
    object-fit: cover;
  }

  &__burger {
    display: none;
    width: 2.75rem;
    height: 2.75rem;
    padding: 0;
    border: 1px solid var(--color-border);
    border-radius: 0.75rem;
    background: rgba(255, 255, 255, 0.02);
    color: var(--color-text);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.24rem;

    span {
      display: block;
      width: 1.1rem;
      height: 1.5px;
      margin: 0;
      border-radius: 999px;
      background: currentColor;
    }
  }

  &__menu {
    display: contents;
  }

  &__nav,
  &__actions {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  &__nav {
    flex-wrap: wrap;
    justify-content: center;
  }

  &__actions {
    justify-self: end;
  }

  &__link {
    padding: 0.5rem 0.875rem;
    color: var(--color-text-muted);
    font-size: 0.875rem;
    transition: color var(--transition-base);

    &:hover {
      color: var(--color-text);
    }
  }
}

@include laptop {
  .header {
    &__inner {
      gap: 1rem;
    }

    &__nav {
      gap: 0.125rem;
    }
  }
}

@include mobile {
  .header {
    &__inner {
      grid-template-columns: minmax(0, 1fr) auto;
      min-height: 4.5rem;
      padding: 0.85rem 0;
    }

    &__brand {
      gap: 0.6rem;
      font-size: 1.35rem;
    }

    &__brand-logo {
      width: 1.65rem;
      height: 1.65rem;
    }

    &__burger {
      display: inline-flex;
      justify-self: end;
    }

    &__menu {
      position: absolute;
      top: calc(100% + 0.75rem);
      right: 1rem;
      left: 1rem;
      display: grid;
      gap: 1rem;
      padding: 1rem;
      border: 1px solid var(--color-border);
      border-radius: 1rem;
      background: rgba(22, 27, 34, 0.98);
      box-shadow: var(--shadow-surface);
      opacity: 0;
      pointer-events: none;
      transform: translateY(-0.5rem);
      transition:
        opacity var(--transition-base),
        transform var(--transition-base);

      &.is-open {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);
      }
    }

    &__nav,
    &__actions {
      width: 100%;
    }

    &__nav {
      display: grid;
      gap: 0.25rem;
    }

    &__link {
      padding: 0.7rem 0.2rem;
    }

    &__actions {
      display: grid;
      gap: 0.75rem;
    }
  }
}
</style>
