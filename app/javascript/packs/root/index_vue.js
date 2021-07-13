import Vue from 'vue';
import VueComponent from './components/vue_component.vue';

Vue.component('vue-component', VueComponent);

new Vue({
  el: '#rendered-content'
});
