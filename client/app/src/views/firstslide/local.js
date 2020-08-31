// import './style.scss';
import Vue from 'vue';
import router from './vue/router';
// import store from './store';

import App from './App.vue';
document.addEventListener('DOMContentLoaded', () => {
  console.log('firstslide');
  const $h1 = document.createElement('h1');
  const $text = document.createTextNode('this is theddd the firstslide');
  $h1.appendChild($text);
  document.body.appendChild($h1);
});

console.log('i run vue here');
Vue.config.productionTip = false;

// new Vue({
//   render: (h) => h(App),
// });

new Vue({
  router,
  // store,
  render: (h) => h(App),
}).$mount('#app');
// const data = new Vue({
//   el: '#something',
//   data: {
//     header: 'something',
//   },
// });
