import Vue from 'vue';
import VueComponent from './components/vue_component.vue';

Vue.component('vue-component', VueComponent);

class AsyncContent {
  constructor() {
    new Vue({
      el: '#rendered-content'
    });
  }
}

export { AsyncContent as default };
