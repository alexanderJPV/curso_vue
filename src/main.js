// import { createApp } from 'vue'
// import App from './App.vue'

//import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);
var vuetify=new Vuetify({});

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

// esto ya no lo pongas => createApp(App).mount('#app')
