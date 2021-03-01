<template>
  <div>
    <v-app-bar
      class="indigo lighten-1 white--text text-center"
      dense
      dark
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title class="pl-3">M B T I</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn plain to="/Test">
        검사하기
      </v-btn>

      <v-btn plain to="/Result">
        결과보기
      </v-btn>

      <v-btn plain to="/">
        로그아웃
      </v-btn>

    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: 'Header',
};
</script>
