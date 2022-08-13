<template>
  <div class="header w-full">
    <div class="flex header__line w-full mx-auto">
      <div class="flex align-center">
        <div class="icon__menu">
          <BurgerMenu/>
        </div>
        <img class="pointer icon__search" :src="searchIcon" alt="search"/>
      </div>
      <img class="icon__logo" :src="logoIcon" alt="logo">
      <div class="flex align-center">
        <img class="pointer icon__person" :src="personIcon" alt="person"/>
        <img class="pointer icon__cart" :src="cartIcon" alt="cart"/>
      </div>
    </div>
  </div>

</template>

<script>
import menuIcon from '@/assets/icons/menu.svg';
import searchIcon from '@/assets/icons/search.svg';
import logoIcon from '@/assets/icons/logo.svg';
import personIcon from '@/assets/icons/person.svg';
import cartIcon from '@/assets/icons/cart-full.svg';
import TopNavMenu from "@/components/TopNav";
import BurgerMenu from "@/components/BurgerMenu";

export default {
  name: 'Header',
  components: {BurgerMenu, TopNavMenu},
  data: () => {
    return {
      menuIcon,
      searchIcon,
      logoIcon,
      personIcon,
      cartIcon
    }

  }
}
</script>

<style scoped lang="scss">
@import "src/styles/imports";
  .header {
    background-color: $white-c;
    padding: 26px 37px;

    &__line {
      max-width: 1438px;
      align-items: center;
      justify-content: space-between;
    }
  }

  .icon {
    &__menu {
      width: 26px;
      height: 18px;
      margin-right: 40px;

      @include small-mobile {
        margin-right: 21px;
        width: 17px;
        height: 12px;
      }
    }

    &__search {
      width: 23px;
      height: 23px;

      @include small-mobile {
        width: 14px;
        height: 14px;
      }
    }

    &__logo {
      @include small-mobile {
        width: 102px;
        height: 17px;
      }
    }

    &__person {
      width: 20px;
      height: 24px;

      @include small-mobile {
        width: 12px;
        height: 15px;
      }
    }

    &__cart {
      width: 27px;
      height: 25px;
      margin-left: 36px;

      @include small-mobile {
        margin-left: 21px;
        width: 19px;
        height: 16px;
      }
    }
  }
</style>