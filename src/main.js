import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import Store from 'vuex'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  Store,
  render: h => h(App)
}).$mount('#app')
