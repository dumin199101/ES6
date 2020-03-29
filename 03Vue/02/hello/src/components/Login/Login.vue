<template>
  <div class="login-wrap">
    <el-form  status-icon  ref="ruleForm2" label-width="100px" class="demo-ruleForm login-from">
      <h2>用户登录</h2>
      <el-form-item label="用户名" prop="pass">
        <el-input type="text"  autocomplete="off" v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="checkPass">
        <el-input type="password"  autocomplete="off" v-model="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-btn" @click="login">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                username:'',
                password:''
            };
        },
        methods:{
            login(){
               this.$axios.post('http://localhost:8888/api/private/v1/login',{username:this.username,password:this.password})
                   .then((response)=>{
                     console.log(response)
                   })
            }
        }
    };
</script>

<style>
  .login-wrap {
    background-color: #324152;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-wrap .login-from {
    background-color: #fff;
    width: 400px;
    padding: 30px;
    border-radius: 5px;
  }

  .login-wrap .login-from .login-btn {
    width: 100%;
  }
</style>
