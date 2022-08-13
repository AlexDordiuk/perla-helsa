<template>
  <div>
    <nav class="flex align-center justify-center navigation">
      <ul class="flex nav-ul">
        <li class="clear-list nav-li justify-center"
            v-for="(navItem, index) of navItemsArray"
            :key="navItem.name"
            :class="{delivery: navItem.name === 'Доставка'}"
            @mouseenter="toggleActive(index)"
            @mouseleave="toggleActive(index)"
        >
          <span class="nav-link pointer"
                :class="{active: navItem.isActive}"
          >{{ navItem.name }}</span>
          <div class="wrapper"
               v-if="navItem.isActive"
          >
            <TopMenu />
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import TopMenu from "@/components/TopMenu";

export default {
  components: {TopMenu},
  props: {
    navItemsArray: {
      type: Array,
      required: true
    }
  },
  data: () => {
    return {
      isActive: false
    }
  },
  methods: {
    toggleActive(index) {
      this.$store.commit('toggleActive', index)
    }
  }
}

</script>

<style scoped lang="scss">
@import "src/styles/imports";

.navigation {
  padding-top: 12px;
  background-color: $white-c;
  //position: relative;
}

.nav-ul {
  position: relative;
  //overflow-x: auto;
}

.nav-li {
  padding-bottom: 25px;

}

.nav-link {
  @extend %fs-17;
  color: $dark-c;
  margin: 0 24px;

  &:focus,
  &:active,
  &:hover {
    font-weight: 700;
    margin: 0 21px;
  }

  &.active {
    font-weight: 700;
  }

  @include small-mobile {
    font-size: 15px;
    margin: 0 12px;
  }
}

.delivery {
  @include small-mobile {
    display: none;
  }
}

.wrapper {
  position: fixed;
  top: 141px;
  left: 0;
  right: 0;
  //overflow-x: auto;
  background-color: $white-c;
  width: 100%;

  @include small-mobile {
    top: 122px;
  }
}

</style>