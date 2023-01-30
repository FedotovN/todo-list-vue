<template>  
    <DialogWindow
    @closeDialog = "dialogVisible = false"
    v-show="dialogVisible"
    >
    <form @submit.prevent @keyup.enter="pushCategory">
        <BaseInput v-model="name"></BaseInput>
        <BaseButton @click="pushCategory">Push new category</BaseButton>
    </form>
    </DialogWindow>
    <CategoryList
        :categories="$store.state.categories.categories"
    ></CategoryList>
    <BaseButton @click="this.dialogVisible = true"><i class="fa-solid fa-plus"></i></BaseButton>
</template>
<script>
import CategoryList from '@/components/Categories/CategoryList.vue';
export default{
    name: "CategoriesListPage",
    data(){
        return {
            dialogVisible: false,
            name: ""
        }
    },
    components: { CategoryList },
    methods: {
        pushCategory(){
            let newCategory = {id: Math.random(), name: this.name, color: '#cccccc'}
            this.$store.commit('categories/pushCategory', newCategory)
            this.dialogVisible = false;
            this.name = ""
            this.$store.dispatch('categories/saveCategories')
        }
    },
    actions: {

    }
}
</script>
<style scoped>
form{
    height: auto;
}
</style>