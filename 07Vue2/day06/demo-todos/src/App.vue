<template>
    <div id="app">
        <a-input placeholder="请输入任务" class="my_ipt" :value="inputItem" @change="changeInputItem"/>
        <a-button type="primary" @click="addItem">添加事项</a-button>

        <a-list bordered :dataSource="itemList" class="dt_list">
            <a-list-item slot="renderItem" slot-scope="item">
                <!-- 复选框 -->
                <a-checkbox :checked="item.done" @change="changeStatus(item.id)">{{item.info}}</a-checkbox>
                <!-- 删除链接 -->
                <a slot="actions" @click="deleteItem(item.id)">删除</a>
            </a-list-item>

            <!-- footer区域 -->
            <div slot="footer" class="footer">
                <!-- 未完成的任务个数 -->
                <span>{{finishedCount}}条剩余</span>
                <!-- 操作按钮 -->
                <a-button-group>
                    <a-button :type="viewKey=='all' ? 'primary' : 'default'" @click="changeList('all')">全部</a-button>
                    <a-button :type="viewKey=='done' ? 'primary' : 'default'" @click="changeList('done')">已完成</a-button>
                    <a-button :type="viewKey=='undone' ? 'primary' : 'default'" @click="changeList('undone')">未完成</a-button>
                </a-button-group>
                <!-- 把已经完成的任务清空 -->
                <a @click="clearAll">清除已完成</a>
            </div>
        </a-list>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import {mapGetters} from 'vuex'

    export default {
        name: 'app',
        created() {
            this.$store.dispatch("initList")
        },
        methods: {
            //监听输入框改变
            changeInputItem(e) {
                this.$store.commit("setInputItem", e.target.value)
            },
            addItem() {
                //判断添加内容是否为空
                if (this.inputItem.trim().length <= 0) {
                    return this.$message.warning("添加事项不能为空")
                }
                this.$store.commit("addItem")
            },
            deleteItem(id) {
                this.$store.commit("deleteItem", id)
            },
            changeStatus(id) {
                this.$store.commit("changeStatus", id)
            },
            clearAll(){
                this.$store.commit("clearAll")
            },
            changeList(key){
                this.$store.commit("changeList",key)
            }
        },
        computed: {
            ... mapState(["list", "inputItem","viewKey"]),
            ...mapGetters(["finishedCount","itemList"])
        }
    }
</script>

<style scoped>
    #app {
        padding: 10px;
    }

    .my_ipt {
        width: 500px;
        margin-right: 10px;
    }

    .dt_list {
        width: 500px;
        margin-top: 10px;
    }

    .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
