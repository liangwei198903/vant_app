<template>
  <div class="index">
    <my-header></my-header>
    <div class="content">
      <ul class="nav">
        <li>
          <router-link to="/index">北京</router-link>
        </li>
        <li>
          <router-link to="/index/cs">长沙</router-link>
        </li>
        <li>
          <router-link to="/index/gg">广州</router-link>
        </li>
        <li>
          <router-link to="/index/sh">上海</router-link>
        </li>
        <li>
          <router-link to="/index/tj">天津</router-link>
        </li>
        <li>
          <router-link to="/index/wh">武汉</router-link>
        </li>
      </ul>
      <div class="city">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import myHeader from "../components/header.vue";
export default {
  data() {
    return {
      title: []
    };
  },
  components: {
    myHeader
  }
};
</script>
<style scoped>
.nav {
  height: 100%;
}
.nav li {
  width: 190px;
  height: 40px;
  line-height: 40px;
  background: #999;
  text-align: center;
  border-bottom: 1px solid #f00;
}
.city {
  width: 100%;
  height: 500px;
  box-sizing: border-box;
  border: 1px solid #f00;
  background: #ddd;
}
.content {
  display: flex;
  justify-content: space-between;
}
</style>
