<template>
    <div>
        <el-badge :value="totalSalary" class="item">
            <el-button size="small">工资总额</el-button>
        </el-badge>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    fixed
                    prop="id"
                    label="ID"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="salary"
                    label="工资"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="job"
                    label="职业"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="num"
                    label="数量"
                    width="250">
                <template slot-scope="scope">
                    <el-input-number v-model="scope.row.num" @change="handleChange" :min="1" :max="12" label="应发放工资月数"></el-input-number>
                </template>
            </el-table-column>
            <el-table-column
                    prop="total"
                    label="小计"
                    width="200">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

    </div>

</template>

<script>
    import axios from 'axios'
    export default {
        computed:{
           tableData(){
               return this.$store.getters['stuMod/students']
           },
           totalSalary(){
               return this.$store.getters['stuMod/totalSalary']
           }
        },
        methods: {
            handleClick(row) {
                this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {

                    this.$store.commit('stuMod/DELETE_STUDENT',row.id)

                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            handleChange(value){
                console.log(value)
            }
        },
        created(){
            this.$store.dispatch('stuMod/getStudent')
        }
    }
</script>

<style type="text/css" scoped>
    .item{
        margin-bottom: 10px;
        margin-right: 40px;
    }
</style>