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
      <el-button type="success"  @click="addUserDialog">添加用户</el-button>
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
            v-model="scope.row.mg_state"
            @change="changeStatus(scope)"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
           <template slot-scope="scope">
             <el-button size="small" type="primary" icon="el-icon-edit"></el-button>
             <el-button size="small" type="danger" icon="el-icon-check"></el-button>
             <el-button size="small" type="warning" icon="el-icon-delete" @click="deleteUser(scope.row.id)"></el-button>
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
<!--    添加用户dialog-->
    <el-dialog title="添加用户" :visible.sync="addUserdialogFormVisible">
      <el-form :model="userForm" ref="userForm" :rules="rules">
        <el-form-item label="名称" prop="username">
          <el-input v-model="userForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="userForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="userForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="userForm.mobile" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addUserdialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                searchValue: '',
                tableData: [],
                currentPage: 1,
                addUserdialogFormVisible:false,
                userForm:{
                   username:'',
                   password:'',
                   email:'',
                   mobile:''
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
            },
            //添加用户弹窗
            addUserDialog(){
                this.addUserdialogFormVisible = true;
            },
            //添加用户
            addUser(){
                this.$refs.userForm.validate(response=>{
                    if(!response){
                        return false;
                    }else{
                        //验证通过
                        this.$axios({
                           url:'users',
                           method:'post',
                           data:{
                               username:this.userForm.username,
                               password:this.userForm.password,
                               email:this.userForm.email,
                               mobile:this.userForm.mobile
                           }
                        }).then(response=>{
                            let {meta,data} = response.data;
                            if(meta.status==201){
                                this.$message({
                                    message: '恭喜你，添加用户成功',
                                    type: 'success'
                                });
                                this.addUserdialogFormVisible = false;
                                this.getUserList();
                            }

                        })
                    }
                });
            },
            //切换状态
            changeStatus(scope){
                this.$axios({
                    url:`users/${scope.row.id}/state/${scope.row.mg_state}`,
                    method:'put'
                }).then(response=>{
                    let {meta,data} = response.data;
                    if(meta.status==200){
                        this.$message({
                            message: '恭喜你，状态修改成功',
                            type: 'success'
                        });
                    }
                });
            },
            //删除用户
            deleteUser(id){
                this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$axios({
                        url:`users/${id}/`,
                        method:'delete'
                    }).then(response=>{
                        let {meta,data} = response.data;
                        if(meta.status==200){
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                            this.getUserList();
                        }
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
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
