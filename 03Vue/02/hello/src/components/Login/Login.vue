<template>
  <div class="login-wrap">
    <el-form  status-icon  :model="ruleForm" ref="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm login-from">
      <h2>用户登录</h2>
      <el-form-item label="用户名" prop="username">
        <el-input type="text"  autocomplete="off" v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password"  autocomplete="off" v-model="ruleForm.password"></el-input>
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
                ruleForm:{
                    username:'',
                    password:''
                },
                rules:{
                    username:[
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                    ],
                    password:[
                        { required: true, message: '请输入用密码', trigger: 'blur' },
                        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                    ]
                }
            };
        },
        methods:{
            login(){
               //验证表单信息
              this.$refs.ruleForm.validate(response=>{
                  console.log(response)
                  if(!response){
                      return false;
                  }else{
                      //验证成功
                      this.$axios.post('http://localhost:8888/api/private/v1/login',{username:this.ruleForm.username,password:this.ruleForm.password})
                          .then((response)=>{
                              if(response.data.meta.status==200){
                                  this.$message({
                                      message: '恭喜你，登录成功',
                                      type: 'success'
                                  });
                                  //登录成功，跳转首页
                                  this.$router.push({name:'Home'})
                              }
                          })
                  }
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
