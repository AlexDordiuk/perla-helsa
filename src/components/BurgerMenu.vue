<template>
  <img class="pointer icon__menu"
       :src="menuIcon"
       alt="menu"
       @click="toggleActive"
  />
  <div class="backdrop"
       v-if="isActive"
       @click="toggleActive"></div>
  <div class="burger__wrapper"
       v-if="isActive"
  >
    <div class="flex close-wrap">
      <img class="pointer close"
           :src="closeIcon"
           alt="close"
           @click="toggleActive"
      />
    </div>


    <div class="content content-1 flex flex-col justify-between h-full" v-show="!this.old && !this.children">
      <div>
        <div class="order-1" >
          <span class="d-block burger__title">Всі продукти</span>
          <span class="flex burger__link mb-28 align-center"
                @click="oldActive"
          >Продукти для дорослих <img class="to-right" :src="toRightIcon" alt="to right">
        </span>
          <span class="flex burger__link mb-36"
                @click="childrenActive"
          >Продукти для дітей <img class="to-right" :src="toRightIcon" alt="to right">
        </span>

          <div class="divider mb-36"></div>
        </div>


        <div class="flex-col justify-between order-2">
          <div>
            <router-link to="#" class="d-block burger__link mb-32 decoration-none">Про компанію</router-link>
            <router-link to="#" class="d-block burger__link mb-32 decoration-none">Сертифікати</router-link>
            <router-link to="#" class="d-block burger__link mb-32 decoration-none">Питання-Відповідь</router-link>
            <router-link to="#" class="d-block burger__link decoration-none">Блог</router-link>
          </div>


        </div>
      </div>

      <div class="empty"></div>

      <div>
        <div>
          <router-link to="#" class="d-block burger__link mb-32 decoration-none">Доставка та оплата</router-link>
          <router-link to="#" class="d-block burger__link mb-32 decoration-none">Контакти</router-link>
          <router-link to="#" class="d-block burger__link decoration-none">Вакансії</router-link>
        </div>

        <div class="order-3">
          <div class="flex align-center mb-26 burger__call-center">
            <img :src="phoneIcon" alt="phone"/>
            <span class="burger__phone">0 800 330 039</span>
            <span class="burger__work-hours d-block">Call-центр работает<br> с 7:00 до 23:00</span>
          </div>

          <div class="divider"></div>

          <div class="burger__selects flex justify-between">
            <Select label="Доставка" :value="['Україна', 'Світ']"/>
            <Select label="Мова" :value="['Українська', 'Англійська']"/>
            <Select label="Валюта" :value="['Грн', 'Дол']"/>
          </div>
        </div>
      </div>

    </div>

    <div class="content flex flex-col justify-between h-full" v-show="!!this.old">
      <div>
        <router-link to="#" class="flex burger__title decoration-none align-center"
                     @click="returnToMainMenu"
        >
          <img class="to-left" :src="toLeftIcon" alt="to left">Продукти для дорослих
        </router-link>
        <ul>
          <li class="clear-list mb-32" v-for="item of getForOld" :key="item">
            <router-link to="#"
                         class="decoration-none burger__link"
                         :class="{bold: item === 'Всі'}"
            >{{ item }}</router-link>
          </li>
        </ul>
      </div>

      <div>
        <div class="divider"></div>

        <div class="burger__selects flex justify-between">
          <Select label="Доставка" :value="['Україна', 'Світ']"/>
          <Select label="Мова" :value="['Українська', 'Англійська']"/>
          <Select label="Валюта" :value="['Грн', 'Дол']"/>
        </div>
      </div>

    </div>

    <div class="content flex flex-col justify-between h-full" v-show="!!this.children">
      <div>
        <router-link to="#" class="flex burger__title decoration-none align-center"
                     @click="returnToMainMenu"
        >
          <img class="to-left" :src="toLeftIcon" alt="to left">Продукти для дітей
        </router-link>
        <ul>
          <li class="clear-list mb-32" v-for="item of getForChildren" :key="item">
            <router-link to="#"
                         class="decoration-none burger__link"
                         :class="{bold: item === 'Всі'}"
            >{{ item }}</router-link>
          </li>
        </ul>
      </div>


      <div>
        <div class="divider"></div>

        <div class="burger__selects flex justify-between">
          <Select label="Доставка" :value="['Україна', 'Світ']"/>
          <Select label="Мова" :value="['Українська', 'Англійська']"/>
          <Select label="Валюта" :value="['Грн', 'Дол']"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import menuIcon from '@/assets/icons/menu.svg';
import closeIcon from '@/assets/icons/close.svg';
import phoneIcon from '@/assets/icons/phone.svg';
import toRightIcon from '@/assets/icons/toRight.svg';
import toLeftIcon from '@/assets/icons/toLeft.svg';
import Select from "@/components/Select";
import {mapGetters} from "vuex";

export default {
  name: 'BurgerMenu',
  components: {Select},
  data: () => {
    return {
      menuIcon,
      closeIcon,
      phoneIcon,
      toRightIcon,
      toLeftIcon,
      isActive: false,
      old: false,
      children: false
    }
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive
    },
    oldActive() {
      this.old = true;
      this.children = false;
    },
    childrenActive() {
      this.old = false;
      this.children = true;
    },
    returnToMainMenu() {
      this.old = false;
      this.children = false;
    }
  },
  computed: {
    ...mapGetters(['getForOld', 'getForChildren'])
  }
}

</script>

<style scoped lang="scss">
@import "src/styles/imports";

.close-wrap {
  @include small-mobile {
    right: 44px;
  }

  position: absolute;
}

.burger {

  &__wrapper {
    max-width: 432px;
    width: 100%;
    height: 100%;
    background-color: $white-c;
    position: fixed;
    top: 0;
    left: 0;
    padding: 36px 44px 48px;
    color: $dark-c;
    z-index: 11;
  }

  &__title {
    @extend %fs-17;
    font-weight: 700;
    margin-bottom: 36px;
    color: $dark-c;
  }

  &__links-wrap {
    max-height: 320px;
    height: 100%;
  }

  &__link {
    @extend %fs-17;
    cursor: pointer;
    color: $dark-c;

    &:hover {
      font-weight: 700;
    }
  }

  &__call-center {
    margin-top: 70px;
  }

  &__phone {
    @extend %fs-23;
    margin-left: 14px;
    width: 100%;

    @include small-mobile {
      font-size: 20px;
    }
  }

  &__work-hours {
    @extend %fs-12;
    line-height: 1.3;
    color: $grey-03;
    min-width: 121px;
  }

  &__selects {
    padding-top: 32px;
  }
}

.empty {
  max-height: 64px;
  height: 100%;
}

.content {
  padding-top: 90px;
  overflow-y: auto;

  @include small-mobile {
    padding-top: 40px;

  }
}

.to-right {
  margin-left: 20px;
}

.to-left {
  margin-right: 20px;
}

.bold {
  font-weight: 700;
}
</style>