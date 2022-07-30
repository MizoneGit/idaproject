<template>
  <transition name="alert">
    <div v-if="showAlert" class="alert">
      <div v-if="isSuccess" class="alert__modal success">
        <div class="alert__modal-image"><img src="@/assets/images/success.svg" alt="Успешно"></div>
        <div class="alert__modal-message">Успешно!</div>
      </div>
      <div v-else class="alert__modal error">
        <div class="alert__modal-image"><img src="@/assets/images/error.svg" alt="Ошибка"></div>
        <div class="alert__modal-message">Ошибка!</div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "v-alert",
  computed: {
    ...mapState({
      showAlert: state => state.showAlert,
      isSuccess: state => state.isSuccess
    }),
  }
}
</script>

<style scoped lang="scss">
  .alert {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 16px;

    &__modal {
      display: flex;
      align-items: center;
      column-gap: 8px;
      padding: 10px 16px;
      background: #FFFEFB;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04),
                  0 6px 10px rgba(0, 0, 0, 0.04);
      border-radius: 4px;

      &-image {
        max-width: 24px;
        max-height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 100%;
        }
      }

      &-message {
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
      }

      .success &-message {
        color: #30E0A1;
      }

      .error &-message {
        color: #FA2256;
      }
    }

    &-enter-active {
      transition: transform 0.3s ease-out;
    }

    &-leave-active {
      transition: all 0.3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    &-enter-from, &-leave-to {
      transform: translateY(-16px);
      opacity: 0;
    }
  }
</style>