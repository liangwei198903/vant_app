<template>
    <div class="list">
        <ul>
            <li v-for="(item,i) in proList" :key="i" 
                @click="jumpToDetail(item.pid)">
                <!--标签式跳转-->
                <!-- <router-link :to="'/detail/'+item.pid"> -->
                    {{item.title}}----{{item.pid}}
                <!-- </router-link> -->
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    data(){
        return {  proList:[] }    
    },
   created(){
        this.axios.get("http://127.0.0.1:5000/demo/list").then(result=>{
            this.proList=result.data
        }) 
    },
    /***编程式跳转 */
    methods:{
        jumpToDetail(arg){
            this.$router.push("/detail/"+arg)
        }
    }
}
</script>
<style scoped>
*{margin:0;padding:0}
.list{
    width: 300px;
    margin:0 auto;
}
li{
    width: 300px;
    height: 60px;
    border:1px solid #f00;
}
</style>
