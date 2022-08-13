<template>
  <div class="top-menu-wrapper w-full flex justify-center">
    <div class="content-wrapper w-full h-full">
      <div class="content flex justify-between">
        <div class="left-part">
          <MostPopularSearches :popular="getPopularSearches"/>
        </div>
        <div class="right-part">
          <PopularInCategory :popular="getPopularInCategory"/>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {mapGetters} from "vuex";
import MostPopularSearches from "@/components/MostPopularSearches";
import PopularInCategory from "@/components/PopularInCategory";

export default {
  name: 'TopMenu',
  components: {PopularInCategory, MostPopularSearches},
  data: () => {
    return {

    }
  },
  computed: {
    ...mapGetters(['getPopularSearches', 'getPopularInCategory'])
  }
}
</script>

<style scoped lang="scss">
@import 'src/styles/imports';

.top-menu-wrapper {
  padding: 62px 16px 50px;
  background-color: $grey-f9;
}

.content-wrapper {
  max-width: 1438px;
}

.left-part {
  min-width: 230px;
  margin-right: 16px;
  @include tablet {
    display: none;
  }
}

.right-part {
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 0;
  }
}
</style>