<template>
  <div class="home">
    <my-header></my-header>
    <!--1:复制图片 assets-->
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="tab1">
        <h3>生鲜</h3>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab2">
        <wh></wh>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab3">
        <h3>美食</h3>
      </mt-tab-container-item>
    </mt-tab-container>
    <!--父元素 -->
    <mt-tabbar fixed v-model="active">
      <!--按钮一-->
      <mt-tab-item id="tab1">
        <!--图片-->
        <img slot="icon" src="./../assets/logo.png" />
        <!--文字-->
        生鲜
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <img slot="icon" src="./../assets/logo.png" /> 
        化妆品
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <img slot="icon" src="./../assets/logo.png" /> 美食
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import { Tabbar, TabItem } from "mint-ui";
import myHeader from '../components/header.vue'
import wh from "../components/wh.vue"
export default {
  data() {
    return {
      active: "tab1",
      isShow: false
    };
  },
  components: {
    Tabbar,
    TabItem,
    myHeader,
    wh
  },
  methods: {
    show() {
      if (this.isShow == false) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    }
  }
};
</script>
<style scoped>
#tab1,
#tab2,
#tab3 {
  border: 1px solid #f00;
}
</style>
