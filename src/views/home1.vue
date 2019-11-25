<template>
  <div class="container">
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
    </van-dropdown-menu>
    <input v-model="value" placeholder="搜出你想要的好职位！" show-action shape="round" @search="onSearch">
    <div class="search_icon" @click="onSearch"></div>
    <van-swipe :autoplay="5000" indicator-color="white">
      <van-swipe-item>
        <img src="../assets/lunbo1.png">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/lunbo2.png">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/lunbo3.png">
      </van-swipe-item>
    </van-swipe>
    <ul class="kuaijie">
      <li>
        <img src="../assets/yanjing.png" alt="">
        <p>谁看过我</p>
      </li>
      <li>
        <img src="../assets/wendang.png" alt="">
        <p>申请记录</p>
      </li>
      <li>
        <img src="../assets/ditu.png" alt="">
        <p>附近工作</p>
      </li>
      <li>
        <img src="../assets/zhaopin.png" alt="">
        <p>校园招聘</p>
      </li>
      <li>
        <img src="../assets/gonglue.png" alt="">
        <p>求职攻略</p>
      </li>
    </ul>
    <div class="zhichang">
      <p class="zhi1">职场助力</p>
      <p class="zhi2">助你开启职场升级之路</p>
    </div>
    <div class="zhichang2">
      <div class="bixiu"></div>
      <div class="mingqi"></div>
      <div class="lietou"></div>
    </div>
    <ul class="wenzi">
      <li>
        <div class="tishi"></div>
        <p>想进名企，英语很烂怎么办</p>
      </li>
      <li>
        <div class="tishi"></div>
        <p>急招大专本科学历，挑战20w年薪</p>
      </li>
      <li>
        <div class="tishi"></div>
        <p>前程无忧大学生音乐节，免费送票</p>
      </li>
      <li>
        <div class="tishi"></div>
        <p>[知识点]面试中说话之道</p>
      </li>
      <li>
        <div class="tishi"></div>
        <p>降薪两成去BAT，值得吗?</p>
      </li>
    </ul>
    <br><br><br><br><br><br><br><br><br><br>
    <tabbar></tabbar> 
  </div>
</template>
<script>
import tabbar from "../views/tabbar.vue";
export default {
  data() {
    return {
      value: "",
      value1: 0,
      option1: [
        { text: "北京", value: 0 },
        { text: "上海", value: 1 },
        { text: "天津", value: 2 }
      ]
    };
  },
 
  methods: {
    onSearch() {}
  },
   components:{
      tabbar
    } 
};
</script>
<style scoped>
.container {
  background: #aaa;
}
tabbar {
  /* position:fixed; */
}
* {
  margin: 0;
  padding: 0;
}
.van-tabbar-item__icon img {
  width: 28px !important;
  height: 28px !important;
}
.van-dropdown-menu {
  width: 60px;
  height: 20px;
  font-size: 15px;
  padding-right: 6px;
  margin-left: 20px;
  margin-top: 17px;
  position: absolute;
  z-index: 900;
  display: block;
  float: left;
  background-color: #dbdbdd;
  border-right: 1px solid #000;
}
input {
  margin: 10px 19px;
  width: 200px;
  height: 30px;
  position: absolute;
  z-index: 1;
  display: block;
  float: left;
  background-color: #dbdbdd;
  border-radius: 20px;
  border: none;
  padding-left: 140px;
}
.search_icon {
  background-image: url("http://www.ireader.com/static/images/common/icon.png");
  width: 15px;
  height: 15px;
  position: relative;
  z-index: 900;
  top: 18px;
  left: 136px;
}
.van-swipe-item img {
  width: 100%;
}
.van-swipe {
  margin-top: 36px;
}
.kuaijie {
  display: flex;
  justify-content: space-around;
}
.kuaijie li {
  margin-top: 6px;
}
.kuaijie li img {
  width: 50px;
  height: 50px;
}
.kuaijie li p {
  display: block;
  font-size: 10px;
  margin-top: -6px;
}
.zhichang {
  width: 60%;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  margin-top: 30px;
}
.zhichang .zhi1 {
  width: 80px;
  height: 30px;
  font-size: 18px;
  font-weight: 1000;
  margin-left: 6px;
}
.zhichang .zhi2 {
  width: 120px;
  height: 30px;
  font-size: 12px;
  font-weight: 500;
  margin-left: 10px;
  line-height: 30px;
  color: #aaa;
}
.zhichang2 {
  width: 98%;
  height: 143px;
  margin-top: 15px;
}
.zhichang2 .bixiu {
  float: left;
  background-image: url("../assets/bixiu.png");
  background-size: 100% 100%;
  width: 50%;
  height: 143px;
}
.zhichang2 .mingqi {
  float: left;
  background-image: url("../assets/mingqi.png");
  background-size: 100% 100%;
  width: 50%;
  height: 71px;
}
.zhichang2 .lietou {
  float: left;
  background-image: url("../assets/lietou.png");
  background-size: 100% 100%;
  width: 50%;
  height: 72px;
}
.wenzi {
  margin-top: 25px;
}
.wenzi .tishi {
  background-image: url("../assets/tishi.png");
  width: 16px;
  height: 16px;
  float: left;
  margin-left: 8px;
}
.wenzi li {
  width: 100%;
  height: 30px;
  margin: 5px 8px;
  display: block;
  justify-content: center;
}
.wenzi li p {
  font-size: 14px;
  text-align: left;
  float: left;
  margin-left: 8px;
  margin-top: -2px;
}
</style>
