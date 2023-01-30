<template>
    <form @submit.prevent @keyup.enter="pushTask">
        <h3>Push new task</h3>
        <div class="inputs">
            <div class="input">
                <label for="title">Task title</label>
                <textarea id="title" class="title" v-model="title"></textarea>
            </div>
            <div class="input">
                <label for="desc">Description</label>
                <textarea id="desc" class="desc" v-model="body"></textarea>
            </div>
        </div>
        <BaseSelect
        class="category_select"
        :options = "$store.state.categories.categories"
        @selected="chooseCategory"
        ></BaseSelect>
        <BaseButton @click="pushTask">Create task</BaseButton>
    </form>
</template>
<script>

    export default{
    name: "TaskForm",
    data() {
        return {
            title: "",
            body: "",
            categoryID: "No category"
        };
    },
    methods: {
        pushTask() {
            if(this.title.trim()){
                this.$emit("pushTask", this.title, this.body, this.categoryID);
                this.title = this.body = this.categoryID = ""
            }
        },
        chooseCategory(e){
            this.categoryID = e
        }
    }
}
</script>
<style lang="scss">
form{
        padding-bottom: 10px;
        height: 600px;
        button{
            width: 100%;
            height: 40px;
            font-size: 16px;
            margin-top: 40px;
        }
        .title{
            text-align: center;
            font-size: 20px;
        }
        .desc{
            font-size: 18px;
        }
        .inputs{
            height: 400px;
            display: flex;
            flex-flow: column nowrap;
            width: 300px;
            .input:last-child{
                flex: 1;
                & textarea{
                    flex: 1;
                }
            }
        }
        .category_select{
            width: 300px;
            padding: 20px 0;
        }
    }
</style>