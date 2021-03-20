import Vue from 'vue/dist/vue.common';

//console.log(1, Vue);
const app = new Vue({
  el: '#vue',
  data: {
    seen: false,
    list: ['one', 'two', 'three'],
    users: [
      {id: 1, name: 'Ivan'},
      {id: 2, name: 'Koljan'}
    ]
  },
  created: function(){

  },
  methods: {
    nameFunction(){
      alert('nameFunction');
    },
    nameFunction2: function(){
      alert('nameFunction2');
    }
  }
});
console.log(app);

Vue.createApp(app);
