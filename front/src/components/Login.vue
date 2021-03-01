<template>
  <v-container fill-height>
    <v-row
      align="center"
      no-gutters
      class="justify-center text-center"
    >

      <v-col
        cols="12"
        md="6"
        xs="4">
        <v-card class="pa-3">
          <h1>MBTI</h1>
          <v-card-text>
            <v-text-field
              label="아이디"
              v-model="payload.email"
            ></v-text-field>
            <v-text-field
              v-model="payload.password"
              type="password"
              label="비밀번호"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="login()">로그인</v-btn>
            <v-btn to="/SignUp">회원가입</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'Login',
  data: () => ({
    payload: {
      email: '',
      password: '',
    },
  }),
  methods: {
    login() {
      const isNull = Object.values(this.payload).filter((v) => (v === ''));
      if (isNull.length === 0) {
        this.$store.dispatch('login', this.payload);
      } else {
        alert('값을 다 입력해주세요.');
      }
    },
  },
};
</script>
