import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: 'AIzaSyDvQPrr4ShRhT888Nmxa12i7h9l8r21amI',
  authDomain: 'vue-calendar-e2e12.firebaseapp.com',
  databaseURL: 'https://vue-calendar-e2e12.firebaseio.com',
  projectId: 'vue-calendar-e2e12',
  storageBucket: 'vue-calendar-e2e12.appspot.com',
  messagingSenderId: '280388580915',
  appId: '1:280388580915:web:7350adabf80eea0cca5546',
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
