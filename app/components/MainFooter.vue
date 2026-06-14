<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__content">
        <p class="footer__brand">Praxis</p>
        <div class="footer__text">
          <p>Выпускная Квалификационная Работа:</p>
          <p>
            &laquo;Разработка цифровой экосистемы для обучения
            программированию&raquo;
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.footer {
  padding: 2rem 0 3rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    max-width: var(--container-width);
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      #30363d 30%,
      #30363d 70%,
      transparent
    );
    transform: translateX(-50%);
  }

  &__inner {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: end;
    justify-content: space-between;
    gap: 1.5rem;
  }

  &__content {
    min-width: 0;
  }

  &__brand {
    margin-bottom: 0.5rem;
    font-family: var(--font-heading);
    font-size: 1.25rem;
    color: var(--color-text);
  }

  &__text {
    color: var(--color-text-muted);
  }
}

@media (max-width: 768px) {
  .footer {
    &__inner {
      grid-template-columns: 1fr;
      align-items: flex-start;
    }

    &__text {
      display: grid;
    }
  }
}
</style>
