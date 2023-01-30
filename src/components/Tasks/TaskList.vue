<template>
    <DialogWindow
    @closeDialog="showDialog=false"
    v-show="showDialog">
        <TaskItemInfo
        ref="info"
        :item = "chosenItem"
        @closeDialog="showDialog=false"
        />
    </DialogWindow>
<div class="task_list">
    <div class="content" v-if="tasks.length">
        <TransitionGroup
            name="list"
        >
            <TaskItem
            v-for="task in tasks"
            :key="task.id"
            :taskInfo="task"
            @showDetails = "showDetails"
            />
        </TransitionGroup>
    </div>
    <div class="handler" v-else>
        <h4>Press the button below to create new task</h4>
    </div>
</div>
</template>
<script>
import { TransitionGroup } from 'vue';
import TaskForm from './TaskForm.vue';
import TaskItem from './TaskItem.vue';
import TaskItemInfo from './TaskItemInfo.vue';
export default{
    name: "TaskList",
    data(){
        return{
            showDialog: false,
            chosenItem: {task: {title: '', body: '', categoryID: ''},
                         color:"#cccccc", categoryName: "No category"},
            infoWindowOpened: false,
        }
    },
    props: {
        tasks: {
            type: Array,
            required: true
        }
    },
    components: { TaskItem, TransitionGroup, TaskItemInfo, TaskForm },
    methods:{
        showDetails(task){
            this.showDialog = true
            this.chosenItem = task
        }
    }
}
</script>
<style lang="scss">
.task_list{
    display: flex;
    flex-flow: column nowrap;
    max-height: 500px;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        width: 0;
    }
    .handler{
        padding: 30px 0;
    }
}
.list-enter-from, .list-leave-to{
    opacity: 0;
    transform: translateX(300px);
}
.list-enter-active, .list-leave-active{
    transition: .3s cubic-bezier(.37,.71,.26,1.24);
}
.list-enter-to, .list-leave-from{
    opacity: 1;
    transform: translateX(0);
}
.list-move{
    transition: .3s;
}
</style>