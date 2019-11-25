<template>
    <div class="detail" >
        <img :src="product.img" alt="">
        <p>{{product.subtitle}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            product:{}
        }
    },
    created(){
        console.log(this.$route.params.pid)
        this.axios.get("http://127.0.0.1:5000/demo/details",{
            params:{pid:this.$route.params.pid}
        }).then(result=>{
            this.product=result.data[0]
        })
    }
}
</script>
<style scoped>
img{
    width: 300PX;
}
[v-cloak]{display: none}
</style>
