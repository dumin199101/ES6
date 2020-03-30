<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="16"><div class="grid-content bg-purple-light">后台管理系统</div></el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-button type="primary" @click.sp="logOut">退出</el-button>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container class="height100">
      <el-aside width="200px">
        <el-row class="tac">
          <el-col :span="24">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              :router="true"
              @open="handleOpen"
              @close="handleClose">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>用户管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="user"><i class="el-icon-menu"></i>用户列表</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose">
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>权限管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1"><i class="el-icon-menu"></i>权限列表</el-menu-item>
                  <el-menu-item index="2-2"><i class="el-icon-menu"></i>角色列表</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>
          <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
   export default {
       methods: {
           handleOpen(key, keyPath) {
               console.log(key, keyPath);
           },
           handleClose(key, keyPath) {
               console.log(key, keyPath);
           },
           logOut(){
               //清空token
               window.localStorage.removeItem('token');
               this.$router.push({name:'Login'});
           }
       },
       //利用mounted钩子函数渲染之前判断用户登录
       mounted() {
           let token = window.localStorage.getItem('token')
           if(!token){
               this.$message({
                   message: '请登录',
                   type: 'error'
               });
               //跳转登录页
               this.$router.push({name:'Login'})
           }
       }
   }
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .height100{
     height:100%;
     height:500px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
    height: 100%;
  }

  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
  }
</style>
