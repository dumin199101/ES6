<template>
  <!--  面包屑导航-->
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!--  搜索框-->
    <div style="width:80%;float:left;">
      <el-input placeholder="请输入内容" v-model="searchValue" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="fuzzyQuery"></el-button>
      </el-input>
    </div>
    <div style="width:20%;float:right;">
      <el-button type="success">添加用户</el-button>
    </div>
<!--    表格-->
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="username"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="mobile"
        label="手机号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱">
      </el-table-column>
      <el-table-column
        label="状态">
        <template slot-scope="scope">
          <el-switch
            v-model="is_active"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
           <template slot-scope="scope">
             <el-button size="small" type="primary" icon="el-icon-edit"></el-button>
             <el-button size="small" type="danger" icon="el-icon-check"></el-button>
             <el-button size="small" type="warning" icon="el-icon-delete"></el-button>
           </template>
      </el-table-column>
    </el-table>
<!--    分页-->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>

  </div>
</template>
<script>
    export default {
        data() {
            return {
                searchValue: '',
                tableData: [],
                currentPage: 1,
                is_active:true
            }
        },
        methods:{
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            //获取用户列表
            getUserList(query=''){
                let url = '';
                if(query!=''){
                    url = `users?pagenum=1&pagesize=5&query=${query}`
                }else{
                    url = 'users?pagenum=1&pagesize=5'
                }
                this.$axios({
                    url:url,
                }).then((response)=>{
                     let {meta,data} = response.data;
                     if(meta.status == 200){
                         this.tableData = data.users;
                     }
                });
            },
            //模糊查询
            fuzzyQuery(){
               this.getUserList(this.searchValue);
            }
        },
        mounted() {
            //渲染之前得到数据
            this.getUserList();
        }
    }
</script>
<style>

</style>
