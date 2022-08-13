<template>
  <div>
    <span class="list-title">Найпопулярніші пошукові запити</span>
    <ul class="clear-list popular-list">
      <li
          class="popular-item"
          v-for="(popularItem, index) of popular"
          :key="index"
      >
        <span class="pointer">{{ popularItem }}</span>
      </li>
      <!-- У цьому випадку нам байдуже на зміну порядку в масиві,
     тому і використав індекс в якості ключа-->
    </ul>
  </div>
</template>

<script>

export default {
  name: 'MostPopularSearches',
  props: {
    popular: {
      required: true,
      type: Array
    }
  }
}
</script>

<style scoped lang="scss">
@import 'src/styles/imports';

.list-title {
  @extend %fs-15;
  color: $grey-04;
}

.popular-list {
  margin-top: 28px;
}

.popular-item {
  @extend %fs-17;
  color: $dark-c;
  margin-bottom: 28px;

  span:hover {
    font-weight: 700;
  }
}
</style>