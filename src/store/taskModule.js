export const taskModule = {
    state: ()=> ({
        tasks: []
    }),
    mutations: {
        pushTask(state, task){
            state.tasks.unshift(task)
        },
        removeTask(state, id){
            state.tasks = state.tasks.filter(el => el.id !== id)
        },
        setTasks(state, tasks){
            state.tasks = tasks
        },
        editTask(state, task){
            state.tasks.forEach(element => {
                if(element.id === task.id){
                    element === task
                    return
                }
            });
        }
    },
    actions: {
        saveTasks({state}){
            localStorage.setItem("tasks", JSON.stringify(state.tasks))
        },
        loadTasks({state}){
            let tasks = JSON.parse(localStorage.getItem("tasks"))
            if(tasks) state.tasks = tasks
            else state.tasks = []
        }
    },
    namespaced: true
}