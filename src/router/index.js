import Vue from 'vue'
import Router from 'vue-router'
import assemble from './assemble';
import classification from './classification';
import homepage from './homepage';
import mine from './mine'
import shoppingcart from './shoppingcart/index'


Vue.use(Router)
mode : "history"
export default new Router({
  routes: [
    //我们按着ES6的简写形式可以直接写了
    assemble,
    classification,
    homepage,
    mine,
    shoppingcart,
    
  ]
})
