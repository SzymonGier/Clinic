import Vue from 'vue'
import App from './App.vue'
import store from './store';
import router from "./router";
import {ValidationObserver, ValidationProvider} from "vee-validate";
import {extend} from "vee-validate";
import {required, confirmed} from "vee-validate/dist/rules";
import {CHECK_AUTH} from "./store/actions.type";
import axios from 'axios';
import {API_URL} from "./common/config";
import {NOTIFICATIONS_PUSH} from "./store/mutations.type";
import Datepicker from "vuejs-datepicker";
import VueTimepicker from 'vue2-timepicker'
import 'vue2-timepicker/dist/VueTimepicker.css'

extend('required', {...required, message: "Pole wymagane"});
extend('confirmed', {...confirmed, message: "Hasła muszą się zgadzać"});

Vue.config.productionTip = false

axios.defaults.baseURL = API_URL;

Vue.component('validation-observer', ValidationObserver);
Vue.component('validation-provider', ValidationProvider);
Vue.component('vue-timepicker', VueTimepicker);
Vue.component('datepicker', Datepicker);

axios.interceptors.request.use(function (config) {
  config.headers = {
    ...config.headers, ...{
      'X-Requested-With': 'XMLHttpRequest',
      'X-XSRF-TOKEN': `${document.cookie}`.replace('XSRF-TOKEN=', '')
    }
  };
  config.withCredentials = true;
  return config;
});

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (500 === error.response.status) {
    store.commit(NOTIFICATIONS_PUSH, {type: 'danger', message: 'Coś poszło nie tak. Skontaktuj się z obsługą'});
  }

  if (403 === error.response.status) {
    store.commit(NOTIFICATIONS_PUSH, {type: 'danger', message: 'Nie posiadasz uprawnien do tego zasobu'});
  }

  if (404 === error.response.status) {
    store.commit(NOTIFICATIONS_PUSH, {type: 'danger', message: 'Nie znaleziono zasobu'});
  }

  return Promise.reject(error);
});

router.beforeEach((to, from, next) =>
    store.dispatch(CHECK_AUTH).then(next).catch(() => {
      router.push({name: 'auth.login'})
    })
);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')