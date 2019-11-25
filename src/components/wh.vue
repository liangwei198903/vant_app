<template>
  <div class="wh">
    <div class="lunbo">
      <mt-swipe :auto="2000">
        <mt-swipe-item v-for="(item,i) in list" :key="i">
          <img :src="item.pics" :alt="i">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="cities">
      <ul class="scroll" @touchmove="move">
        <li>武汉</li>
        <li>襄阳</li>
        <li>随州</li>
        <li>天门</li>
        <li>荆门</li>
        <li>十堰</li>
        <li>恩施</li>
      </ul>
    </div>
    <select name="ct" id="ct" v-model='selected'>
      <option :value="c.val" v-for="(c,i) in cityList" :key="i">
        {{c.city}}
      </option>
    </select>
    选择的城市：{{selected}}
  </div>
</template>
<script>
import { Swipe, SwipeItem } from "mint-ui";
export default {
  data() {
    return {
      list: [
        { iid: 1, pics: require("../img/1.png") },
        { iid: 2, pics: require("../img/2.png") },
        { iid: 3, pics: require("../img/3.png") }
      ],
      cityList:[{val:"wh",city:"武汉"},
            {val:"gz",city:"广州"},
            {val:"sz",city:"深圳"},
            {val:"bj",city:"北京"},
            {val:"sh",city:"上海"},
            {val:"nj",city:"南京"},
            {val:"hz",city:"杭州"}
           ],
      selected:""
    };
  },
  methods:{
    move(){
      console.log(4444)
    }
  }
};
</script>
<style scoped>
.lunbo {
  height: 150px !important;
  margin-top:5px
}
.lunbo img {
  width: 100%;
}
.cities{
  height: 40px;
  width:100%;
  overflow-x: scroll;
  /* overflow:hidden */
}
.cities::-webkit-scrollbar {
  /* display: none; */
}
.scroll{
  width: 645px;
  height: 40px;
}
.cities li{
  width: 90px;
  background: #999;
  margin-left:2px;
  float: left;
}
</style>
