import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.filter('htmlEscape', function(value) {
  return value.replace(/amp;/g, '&');
});
Vue.filter('dateTime', function(val) {
  return new Date(val).toGMTString().slice(0, -13);
});
new Vue({
  render: h => h(App),
}).$mount('#app')
