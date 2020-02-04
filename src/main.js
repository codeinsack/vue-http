import Vue from 'vue'
import VueResource from 'vue-resource'

import App from './App.vue'

Vue.use(VueResource)

Vue.http.options.root = 'https://vue-http-caaac.firebaseio.com/data.json'

new Vue({
  el: '#app',
  render: h => h(App)
})
