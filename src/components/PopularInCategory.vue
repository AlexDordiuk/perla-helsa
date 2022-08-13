<template>
<div>
  <span class="list-title">Популярне у цій категорії</span>
  <ul class="clear-list popular-list flex">
    <li
        class="popular-item"
        v-for="(popularItem, index) of popular"
        :key="index"
    >
      <TopMenuItem :name="popularItem.name"
                   :amount="popularItem.amount"
                   :description="popularItem.description"
                   :image="popularItem.image"/>
    </li>
    <!-- У цьому випадку нам байдуже на зміну порядку в масиві,
   тому і використав індекс в якості ключа-->
  </ul>
</div>
</template>

<script>


import TopMenuItem from "@/components/TopMenuItem";
export default {
  name: 'PopularInCategory',
  components: {TopMenuItem},
  props: {
    popular: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/styles/imports";

.list-title {
  @extend %fs-15;
  color: $grey-04;
}

.popular-list {
  //overflow-x: auto;
}

.popular-item {
  margin-right: 53px;
}
</style>