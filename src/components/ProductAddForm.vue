<template>
  <form class="add-form" @submit.prevent>
    <div class="add-form__input">
      <v-label :required="true" for="name">Наименование товара</v-label>
      <v-input
          v-focus
          v-model="dataForm.name"
          id="name"
          placeholder="Введите наименование товара"
      />
      <v-error-messages :error="errors.name" />
    </div>
    <div class="add-form__input">
      <v-label for="description">Описание товара</v-label>
      <v-textarea v-model="dataForm.description" id="description" placeholder="Введите описание товара" rows="5" />
    </div>
    <div class="add-form__input">
      <v-label :required="true" for="link">Ссылка на изображение товара</v-label>
      <v-input v-model="dataForm.url" id="link" placeholder="Введите ссылку" />
      <v-error-messages :error="errors.url" />
    </div>
    <div class="add-form__input">
      <v-label :required="true" for="price">Цена товара</v-label>
      <v-input v-model="formatPriceInput" id="price" placeholder="Введите цену" />
      <v-error-messages :error="errors.price" />
    </div>
    <v-button
        @click="addProduct"
        :isActive="isActiveButton"
        type="submit"
    >
      Добавить товар
    </v-button>
  </form>
</template>

<script>
  export default {
    name: "ProductAddForm",
    data() {
      return {
        dataForm: {},
        errors: {},
        isActiveButton: false
      }
    },
    computed: {
      formatPriceInput: {
        get() {
          if (!this.dataForm.price) return;
          if (!parseInt(this.dataForm.price)) return this.dataForm.price;
          return Number(this.dataForm.price)?.toLocaleString();
        },
        set(value) {
          this.dataForm.price = value;
          if (parseInt(this.dataForm.price)) {
            this.dataForm.price = +value.replace(/\s/g, "");
          }
        },
      },
    },
    methods: {
      addProduct() {
        if (!this.validateForm()) {
          this.isActiveButton = false;
          return;
        }

        this.$emit('create', this.dataForm);
        this.clearDataForm();
      },
      validateForm() {
        this.clearErrors();

        let result = this.validateName(this.dataForm.name);
        if (result) {
          this.errors.name = result;
        }

        result = this.validateUrl(this.dataForm.url);
        if (result) {
          this.errors.url = result;
        }

        result = this.validatePrice(this.dataForm.price);
        if (result) {
          this.errors.price = result;
        }

        return this.isEmptyObject(this.errors);
      },
      clearErrors() {
        this.errors = {}
      },
      validateName(name) {
        return !name ? 'Поле является обязательным' : false;
      },
      validateUrl(url) {
        const regPatternUrl = '^[a-z]+://';
        const regPatternImage = '\.(gif|jpg|webp|png)'
        let regExpUrl = new RegExp(regPatternUrl, 'i');
        let regExpImage = new RegExp(regPatternImage, 'i');

        if (!url) {
          return 'Поле является обязательным';
        }

        if (!regExpUrl.test(url)) {
          return 'Введенное значение не является ссылкой';
        }

        if (!regExpImage.test(url)) {
          return 'Введенная ссылка не содержит картинку';
        }

        return false;
      },
      validatePrice(price) {
        const regPattern = '^[0-9]+$';
        let regExp = new RegExp(regPattern, 'i');

        if (!price) {
          return 'Поле является обязательным';
        }

        if (!regExp.test(price)) {
          return 'Поле должно быть числовым';
        }

        return false;
      },
      isEmptyObject(obj) {
        for (let i in obj) {
          if (obj.hasOwnProperty(i) && obj[i]) {
            return false;
          }
        }

        return true;
      },
      clearDataForm() {
        this.dataForm = {}
      },
    },
    watch: {
      dataForm: {
        handler(newValue) {
          this.isActiveButton = !this.isEmptyObject(newValue);
        },
        deep: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .add-form {
    padding: 24px;
    background: #FFFEFB;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    row-gap: 16px;

    &__input {
      display: flex;
      flex-direction: column;
      row-gap: 6px;
    }
  }
</style>