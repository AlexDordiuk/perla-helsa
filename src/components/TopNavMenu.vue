<template>
  <nav class="flex align-center justify-center navigation">
    <ul class="flex">
      <li class="clear-list nav-li justify-center"
          v-for="navItem of getNav"
          :key="navItem.link">
        <span class="nav-link pointer">{{ navItem.name }}</span>
      </li>
    </ul>

  </nav>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters(['getNav'])
  }
}

</script>

<style scoped lang="scss">
@import "src/styles/imports";

.navigation {
  margin-top: 40px;
background-color: $white-c;
}

.nav-li {
  margin: 0 20px;
  padding-bottom: 25px;
}

.nav-link {
  @extend %fs-17;
  color: $dark-c;

  &:focus,
  &:active,
  &:hover {
    font-weight: 700;
  }
}

</style>