import Vue from 'vue';

import Framework7 from 'framework7/framework7.esm.bundle.js';
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';
import Framework7Styles from 'framework7/css/framework7.min.css';
import Framework7Icons from 'framework7-icons';

import app from './app.vue';

Framework7.use(Framework7Vue);

Meteor.startup(() => {
  new Vue({
    el: '#app',
    render: c => c(app)
  });
});
