<template>
  <form class="add-form">
    <div class="add-form__input">
      <v-label :required="true" for="name">Наименование товара</v-label>
      <v-input id="name" placeholder="Введите наименование товара" />
    </div>

    <div class="add-form__input">
      <v-label for="description">Описание товара</v-label>
      <v-textarea id="description" placeholder="Введите описание товара" rows="5"></v-textarea>
    </div>

    <div class="add-form__input">
      <v-label for="link">Ссылка на изображение товара</v-label>
      <v-input id="link" placeholder="Введите ссылку" />
    </div>

    <div class="add-form__input">
      <v-label for="price">Цена товара</v-label>
      <v-input id="price" placeholder="Введите цену" />
    </div>

    <v-button type="submit">Добавить товар</v-button>
  </form>
</template>

<script>
  export default {
    name: "ProductAddForm"
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
    row-gap: 16px;

    &__input {
      display: flex;
      flex-direction: column;
      row-gap: 6px;
    }
  }
</style>