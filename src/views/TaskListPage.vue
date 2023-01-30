<template>
    <DialogWindow
    @closeDialog = "dialogVisible = false"
    v-show="dialogVisible"
    >
    <TaskForm @pushTask = "pushTask" />
    </DialogWindow>
    <div class="container">
        <TaskList
            :tasks="$store.state.task.tasks"
        ></TaskList>
        <BaseButton @click = "dialogVisible=true"><i class="fa-solid fa-plus"></i></BaseButton>
    </div>
</template>
<script>
import TaskForm from '@/components/Tasks/TaskForm.vue';
import TaskList from '@/components/Tasks/TaskList.vue'
export default{
    name: "TaskListPage",
    data(){
        return{
            tasks: [],
            dialogVisible: false
        }
    },
    methods: {
        pushTask(_title, _body, _categoryID){
            this.dialogVisible = false;
            let task = {id: Math.random(), title: _title, body: _body, categoryID: _categoryID}
            this.$store.commit('task/pushTask', task)
            this.$store.dispatch('task/saveTasks')
        }
    },
    components:{ TaskList, TaskForm }
}
</script>
<style lang="scss">
    .container{
        border-top: 1px solid #ccc;
    }
</style>