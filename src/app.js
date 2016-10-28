import 'font-awesome/css/font-awesome.css';

import Vue from 'vue';
import VueRouter from 'vue-router';
import { webFrame } from 'electron';

import App from './App.vue';

Vue.use(VueRouter);

// electron disable pinch zooming
webFrame.setZoomFactor(1);
webFrame.setZoomLevelLimits(1, 1);

const router = new VueRouter({
  routes: [
    { path: '/', component: App }
  ]
});

new Vue({
  router,
  el: '#app',
});
