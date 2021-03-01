<template>
  <v-container>
    <v-btn @click="startTestTimer">시작</v-btn>
    <v-btn @click="stopTestTimer">완료</v-btn>
    <span> {{ timerIndicator }}</span>
    <v-stepper v-model="e1" class="mb-5">
      <v-stepper-header>
        <v-stepper-step
          :complete="e1 > 1"
          step="1"
        >
          Step 1
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step
          :complete="e1 > 2"
          step="2"
        >
          Step 2
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3">
          Step 3
        </v-stepper-step>
      </v-stepper-header>
      <v-stepper-items v-show="timerIndicator === '00:00'"> 시작 버튼을 눌러주시오.</v-stepper-items>
      <v-stepper-items v-show="timerIndicator !== '00:00'">
        <v-stepper-content step="1">
          <v-card
            class="mb-12"
            color="white lighten-1"
          >
            <h2>자신에게 더 가깝다고 생각되는 것을 선택하여 표시하십시오.</h2>
            <div v-for="n in range(0, 40)" :key="n">
              {{ n + 1 }}. <span v-if="getQuestion[n].q !== ''"> {{ getQuestion[n].q }}</span>
              <v-radio-group
                v-model="answer[n]"
                column
                class="ma-2"
              >
                <v-radio
                  :label="getQuestion[n].a1"
                  :value="getQuestion[n].p1"
                  color="indigo"
                ></v-radio>
                <v-radio
                  :label="getQuestion[n].a2"
                  :value="getQuestion[n].p2"
                  color="indigo"
                ></v-radio>
              </v-radio-group>
            </div>
          </v-card>

          <v-btn
            color="indigo"
            @click="e1 = 2"
          >
            Continue
          </v-btn>

          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card
            class="mb-12"
            color="white lighten-1"
          >
            <h2>자신에게 더 가깝다고 생각되는 것을 선택하여 표시하십시오.</h2>
            <div v-for="n in range(41, 72)" :key="n">
              {{ n + 1 }}. <span v-if="getQuestion[n].q !== ''"> {{ getQuestion[n].q }}</span>
              <v-radio-group
                v-model="answer[n]"
                column
                class="ma-2"
              >
                <v-radio
                  :label="getQuestion[n].a1"
                  :value="getQuestion[n].p1"
                  color="indigo"
                ></v-radio>
                <v-radio
                  :label="getQuestion[n].a2"
                  :value="getQuestion[n].p2"
                  color="indigo"
                ></v-radio>
              </v-radio-group>
            </div>
          </v-card>

          <v-btn
            color="indigo"
            @click="e1 = 3"
          >
            Continue
          </v-btn>

          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card
            class="mb-12"
            color="white lighten-1"
          >
            <h2>자신에게 더 가깝다고 생각되는 것을 선택하여 표시하십시오.</h2>
            <div v-for="n in range(73, 92)" :key="n">
              {{ n + 1 }}. <span v-if="getQuestion[n].q !== ''"> {{ getQuestion[n].q }}</span>
              <v-radio-group
                v-model="answer[n]"
                column
                class="ma-2"
              >
                <v-radio
                  :label="getQuestion[n].a1"
                  :value="getQuestion[n].p1"
                  color="indigo"
                ></v-radio>
                <v-radio
                  :label="getQuestion[n].a2"
                  :value="getQuestion[n].p2"
                  color="indigo"
                ></v-radio>
              </v-radio-group>
            </div>
          </v-card>

          <v-btn
            color="indigo"
            @click="e1 = 1"
          >
            Continue
          </v-btn>

          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      dark
      fixed
      bottom
      right
      color="indigo"
      @click="toTop"
    >^
      <!-- <v-icon>keyboard_arrow_up</v-icon> -->
    </v-btn>
  </v-container>
</template>
<script>
export default {
  name: 'Test',
  data: () => ({
    e1: 1,
    fab: false,
    answer: [],
    testDuration: 1800,
    // testDuration: 10,
    timerIndicator: '00:00',
    timer: undefined,
  }),
  computed: {
    getQuestion() {
      return this.setRandomArray(this.$store.state.questions);
    },
  },
  beforeDestoy() {
    // 값 초기화 필요.
  },
  created() {
    this.$store.dispatch('getQuestion');
    this.answer.length = 93;
    // Test 리셋
  },
  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
    startTestTimer() {
      let remainingTimeSec = this.testDuration;
      this.updateTimerText(remainingTimeSec);
      this.timer = setInterval(() => {
        if (remainingTimeSec <= 0) {
          clearInterval(this.timer);
          return;
        }
        this.updateTimerText(remainingTimeSec -= 1);
      }, 1000);
    },
    stopTestTimer() {
      const item = {
        E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0,
      };
      Object.values(this.answer).forEach((element) => {
        item[element] += 1;
      });
      // const reducer = (accumulator, currentValue) => accumulator + currentValue;
      // const totalResult = Object.values(item).reduce(reducer);
      // if (totalResult === this.answer.length) {
      //   this.$store.dispatch('showResult', item);
      // } else {
      //   alert('문제를 다 풀지 않으셨습니다.');
      // }
      const payload = {
        tester: 2,
        score: JSON.stringify(item),
      };
      this.$store.dispatch('createResult', payload);
    },
    updateTimerText(time) {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60 === 0 ? '00' : time % 60;
      this.timerIndicator = `${minutes.toString().length < 2 ? `0${minutes}` : minutes}:${seconds.toString().length < 2 ? `0${seconds}` : seconds}`;
    },
    setRandomArray(arr) {
      const newArray = [];
      let i = 0;
      while (arr.length > 0) {
        const x = parseInt(Math.random() * arr.length, 10);
        newArray[i] = arr[x];
        i += 1;
        arr.splice(x, 1);
      }
      return newArray;
    },
    range(start, end) {
      return Array(end - start + 1).fill().map((_, idx) => start + idx);
    },
  },
};
</script>
