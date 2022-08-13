<template>
  <div>
    <div class="image-wrapper flex justify-center align-center">
      <img :src="image" alt="popular item">
    </div>
    <router-link to="#" class="decoration-none item__link">
      <span class="item__name">{{ name }}</span>
      <span class="item__description">{{ description }}</span>
      <span class="item__amount">{{ amount }}</span>
    </router-link>


  </div>

</template>

<script>
export default {
  name: 'TopMenuItem',
  props: {
    name: {
      required: true,
      type: String
    },
    description: {
      required: true,
      type: String
    },
    amount: {
      required: true,
      type: String
    },
    image: {
      required: true,
      type: String
    }
  }
}

</script>

<style scoped lang="scss">
@import 'src/styles/imports';

.image-wrapper {
  width: 230px;
  height: 230px;
  background-color: $grey-ef;
  margin: 24px 0;
}

.item {
  &__link {
    margin-top: 24px;
  }

  &__name {
    @extend %fs-17;
    font-weight: 600;
    color: $dark-c;
    display: block;
    margin-bottom: 20px;
  }

  &__description {
    @extend %fs-15;
    line-height: 1;
    display: block;
    color: $dark-c;
    margin-bottom: 12px;
  }

  &__amount {
    @extend %fs-15;
    line-height: 1;
    color: $grey-04;
  }
}



</style>