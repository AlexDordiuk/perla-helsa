<template>
  <Header/>
  <TopNav :navItemsArray="getNav"/>
  <router-view/>
</template>

<script>
import Header from "@/components/Header";
import TopNav from "@/components/TopNav";
import {mapGetters} from "vuex";
export default {
  name: 'App',
  components: {
    Header,
    TopNav
  },
  computed: {
    ...mapGetters(['getNav'])
  }
}
</script>

<style lang="scss">
@import "src/styles/imports";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

body {
  background-color: $grey-f2;
  //max-height: 100vh;
}
</style>
