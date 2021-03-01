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
          <h1>회원가입</h1>
          <v-card-text>
            <v-text-field
              v-model="payload.username"
              :rules="[rules.required]"
              label="별명"
            ></v-text-field>
            <v-text-field
              v-model="payload.email"
              :rules="[rules.required]"
              label="아이디"
            ></v-text-field>
            <v-text-field
              v-model="payload.password"
              :rules="[rules.required, rules.counter]"
              type="password"
              label="비밀번호"
            ></v-text-field>
            <v-text-field
              v-model="payload.confirmPassword"
              :rules="[rules.required, rules.counter, passwordConfirmationRule]"
              type="password"
              label="비밀번호 확인"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn to="/">돌아가기</v-btn>
            <v-btn @click="complete()">완료</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Sign',
  data: () => ({
    payload: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    rules: {
      required: (value) => !!value || '입력해주세요.',
      counter: (value) => value.length >= 8 || '8자 이상부탁해요.',
    },
  }),
  computed: {
    passwordConfirmationRule() {
      return () => (this.payload.password === this.payload.confirmPassword) || '패스워드는 일치해야 합니다.';
    },
  },
  methods: {
    complete() {
      // 빈 값 체크
      const isNull = Object.values(this.payload).filter((v) => (v === ''));
      if (isNull.length === 0) {
        this.$store.dispatch('signUp', this.payload);
      } else {
        alert('값을 다 입력해주세요.');
      }
    },
  },
};
</script>
