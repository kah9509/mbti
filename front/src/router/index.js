import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login.vue';
import SignUp from '../components/SignUp.vue';
import Test from '../components/Test.vue';
import Header from '../components/Layout/Header.vue';
import Footer from '../components/Layout/Footer.vue';
import Result from '../components/Result.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    components: {
      default: Login,
    },
  },
  {
    path: '/signup',
    name: 'SignUp',
    components: {
      default: SignUp,
    },
  },
  {
    path: '/test',
    name: 'Test',
    components: {
      header: Header,
      footer: Footer,
      default: Test,
    },
  },
  {
    path: '/result',
    name: 'Result',
    components: {
      header: Header,
      footer: Footer,
      default: Result,
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
