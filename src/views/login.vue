<template>
<div class="login"> 
    <h1>用户登录</h1>
    <el-form label-width="80px" >
        <el-form-item label="用户名称">
            <el-input v-model="user_name"></el-input>
        </el-form-item>
        <el-form-item label="用户密码">
            <el-input v-model="user_pwd" type="password"></el-input>
        </el-form-item>
    </el-form>
    <el-button @click="doLogin">点击登录</el-button>
</div>

</template>
<script>
export default {
    data(){
        return {
            user_name:"",
            user_pwd:""
        }
    },
    methods:{
        doLogin(){
             console.log(this.user_name,this.user_pwd) 
            localStorage.setItem("uname",this.user_name)
            localStorage.setItem("upwd",this.user_pwd)
            this.$alert('登录成功', {
            confirmButtonText: '确定',
            callback: () => {
                this.$router.push("/index")
            }
            })
        }
    }
}
</script>

<style>
    .el-input__inner{
        width:300px !important;
    }
    .el-button{
        margin:0 auto !important;
        display: block !important;
    }
</style>
