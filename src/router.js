import Vue from 'vue'
import Router from 'vue-router'
import Home1 from './views/home1.vue'
import Login from './views/login.vue'
import Watch from './views/watch.vue'
import Observe from './views/observe.vue'
import  List from './views/list.vue'
import  Detail from './views/detail.vue'

import Index from './views/index.vue';
import tabbar from './views/vant_tabbar.vue';
import WH from './components/wh.vue';
import CS from './components/cs.vue';
import TJ from './components/tj.vue';
import SH from './components/sh.vue';
import GG from './components/gg.vue';
import BJ from './components/bj.vue';
import LeftScroll from './views/leftScoll.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",redirect:"/observe"},
     {path:"/login",component:Login},
     {path:"/left",component:LeftScroll},
    {path:"/home1",component:Home1},
    {path:"/vant",component:tabbar},
    {path:"/observe",component:Observe},
    {path:"/wh",component:WH},
    {path:"/index",component:Index,
     children:[
      {path:"wh",name:"wh",component:WH,
      beforeEnter:(to,from,next)=>{
         console.log(to)
        var  uname=localStorage.getItem("uname")
        var  upwd=localStorage.getItem("upwd")
          if(uname&&upwd){
            next()
          }else{
            alert("没有登录")
            next({path:"/login"})
          }
      }},
      {path:"cs",component:CS},
      {path:"",component:BJ},
      {path:"tj",component:TJ},
      {path:"sh",component:SH},
      {path:"gg",component:GG}
    ]}
  ]
})
