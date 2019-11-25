<template>
 <div>
 <van-tabbar v-model="active" active-color="#e0620d"
  inactive-color="#707070" route>
   <van-tabbar-item replace to="/home" icon="icon1">
     <span>首页</span>
     <img
       slot="icon"
       slot-scope="props"
       :src="props.active ? icon1.active1 : icon1.inactive1"
     >
   </van-tabbar-item>
   <van-tabbar-item replace to="/message" icon="icon2">
     <span>消息</span>
     <img
       slot="icon"
       slot-scope="props"
       :src="props.active ? icon2.active2 : icon2.inactive2"
     >
   </van-tabbar-item>
   <van-tabbar-item  replace to="/resume" icon="icon3">
     <span>简历</span>
     <img
       slot="icon"
       slot-scope="props"
       :src="props.active ? icon3.active3 : icon3.inactive3"
     >
   </van-tabbar-item>
    <van-tabbar-item  replace to="/me" icon="icon4">
    <span>我的</span>
     <img
       slot="icon"
       slot-scope="props"
       :src="props.active ? icon4.active4 : icon4.inactive4"
     >
   </van-tabbar-item>
 </van-tabbar>
 </div>
 </template>
 <script>
 export default {
   data() {
     return {
       active: 0,
       icon1: {
          active1: require("../assets/home_act.png"),
         inactive1: require("../assets/home.png"),
       },
       icon2: {
         active2: require("../assets/message_act.png"),
         inactive2: require("../assets/message.png"),
       },
       icon3: {
          active3: require("../assets/resume_act.png"),
         inactive3: require("../assets/resume.png"),
       },
        icon4: {
          active4: require("../assets/me_act.png"),
         inactive4: require("../assets/me.png"),
       }
     }
   }
}
 </script>
 <style scoped>
 /* .van-hairline--top-bottom{height: 30px;} */
 </style>
 