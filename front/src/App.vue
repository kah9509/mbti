<template>
  <v-app>
    <router-view name="header"></router-view>
    <router-view name="footer"></router-view>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
* {
  /* border: solid !important; */
}
</style>
