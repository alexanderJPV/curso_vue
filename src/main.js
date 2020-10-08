// import { createApp } from 'vue'
// import App from './App.vue'

//import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './node_modules/vuetify';

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

//createApp(App).mount('#app')

createApp(App).mount('#app')
