<template>
    <div class="watch">
        <h4>使用wacth完成密码强度的案例</h4>
       输入密码： <input type="text" v-model="pwd">
       <span ref="span"></span>
       <br>
       <hr>
       <br>
       <h4>使用computed完成总价计算</h4>
        输入单价：<input type="text" v-model="price"><br>
        输入数量：<input type="text" v-model="count"><br>
        一共收:{{total}}
    </div>
</template>
<script>   
export default {
    data(){
        return {
            pwd:"",
            price:"",
            count:"",
            level:""
        }
    },
    watch:{
        pwd(){
          if(this.pwd.length <=6){
              this.$refs.span.style.width=`100px`
          }else if(this.pwd.length>6&&this.pwd.length<=9){
              this.$refs.span.style.width=`200px`
          } else{
             this.$refs.span.style.width=`300px`
          }
        }
    },
    computed:{
        total(){
            return this.price*this.count; 
        }
    }
}
</script>
<style scoped>
    span{
        margin-top:10px;
        display:block;
        height:10px;
        background: #f00;
        width:0px;
        border-radius:5px;
    }
</style>
