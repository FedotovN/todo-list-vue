<template>
    <div class="task" @click="showDetails">
        <div class="text">
            <h4>{{ validateText(taskInfo.title) }}</h4>
            <p>{{ validateText(taskInfo.body )}}</p>
        </div>
        <div class="category" :title="findCategoryName(taskInfo.categoryID)">
            <div class="category-color"
                :style="'background-color: ' + findCategoryColor(taskInfo.categoryID)"
            ></div>
        </div>
        <div class="options">
            <div class="option"
            @click="taskDone"
            @click.stop
            title="Done!"
            >
                <i class="fa-solid fa-check"
                ></i>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name: "TaskItem",
    props: {
        taskInfo: {
            type: Object,
            required: true
        }
    },
    methods:{
        taskDone(){
            this.$store.commit('task/removeTask', this.taskInfo.id)
            this.$store.dispatch('task/saveTasks')
        },
        validateText(text){
            return text.length < 22 ? text : text.slice(0, 19) + "..."
        },
        showDetails(){
            let element = {task: this.taskInfo,
                        color: this.findCategoryColor(this.taskInfo.categoryID),
                        categoryName: this.findCategoryName(this.taskInfo.categoryID)}
            this.$emit('showDetails', element)
        },
        findCategoryName(id){
            let storeList = this.$store.state.categories.categories
            for(let i = 0; i < storeList.length; i++){
                if(storeList[i].id == id) return storeList[i].name
            }
            return "No category"
        },
        findCategoryColor(id){
            let storeList = this.$store.state.categories.categories
            for(let i = 0; i < storeList.length; i++){
                console.log(storeList[i].id, id)
                if(storeList[i].id == id){
                    return storeList[i].color
                }
            }
            return "#cccccc"
        }
    }
}
</script>
<style lang="scss">
.task{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-radius: 4px;
    height: $task-height;
    border-bottom: 1px solid #ccc;
    transition: .3s;
    cursor: pointer;
    &:hover{
        background-color: rgb(243, 243, 243);
    }
    .text{
        flex: 1;
        height: $task-height;
        display: flex;
        justify-content: center;
        flex-flow: column nowrap;
        transition: .3s;
        p{
            color: rgb(148, 148, 148);
        }
    }
    span{
        align-self: flex-end;
    }
    .options{
        width: 60px;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        i:hover{
            color: $success-color;
        }
    }
    .category{
        width: 65px;
        display: flex;
        flex-flow: row nowrap;
        gap: 10px;
        .category-color{
            width: 20px;
            height: 20px;
            border-radius: 50%;
            transition: .3s;
            &:hover{
                transform: scale(1.2);
            }
        }
    }
    i{
        padding: 50px;
        font-size: 27.5px;
        transition: .3s;
        cursor: pointer;
    }
}
</style>