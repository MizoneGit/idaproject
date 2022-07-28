<template>
  <form class="add-form" @submit.prevent>
    <div class="add-form__input">
      <v-label :required="true" for="name">Наименование товара</v-label>
      <v-input v-model="add_form.name" id="name" placeholder="Введите наименование товара" />
    </div>

    <div class="add-form__input">
      <v-label for="description">Описание товара</v-label>
      <v-textarea v-model="add_form.description" id="description" placeholder="Введите описание товара" rows="5"></v-textarea>
    </div>

    <div class="add-form__input">
      <v-label :required="true" for="link">Ссылка на изображение товара</v-label>
      <v-input v-model="add_form.link" id="link" placeholder="Введите ссылку" />
    </div>

    <div class="add-form__input">
      <v-label :required="true" for="price">Цена товара</v-label>
      <v-input v-model="add_form.price" id="price" placeholder="Введите цену" />
    </div>

    <v-button @click="createProduct" type="submit">Добавить товар</v-button>
  </form>
</template>

<script>
  import { ref } from "vue";
  import { useStore } from "vuex";

  export default {
    name: "ProductAddForm",
    setup() {
      const add_form = ref({});
      const store = useStore();

      const createProduct = () => {
        add_form.value.id = Date.now();
        store.dispatch('CREATE_PRODUCT', add_form.value);
      }

      return { add_form, createProduct }
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