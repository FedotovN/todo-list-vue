<template>
<div class="category">
    <i 
    class="fa-solid fa-xmark"
    :title='"Remove " + category.name'
    @click="removeCategory"
    ></i>
    <p>{{ category.name }}</p>
    <div class="category_color">
        <input type="color" name="" id="" 
            v-model = "category.color"
            @change = "editCategory"
        >
    </div>    
</div>
</template>
<script>
export default{
    name: "CategoryItem",
    props: {
        category: {
            type: Object,
            required: true
        }
    },
    methods: {
        removeCategory(){
            this.$emit("removeCategory", this.category.id)
        },
        editCategory(e){
            this.$store.commit("categories/editCategory", e.target.value, this.category.id)
            this.$store.dispatch('categories/saveCategories')
        }
    }
}
</script>
<style lang="scss" scoped>
.category{
    padding-left: 20px;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 65px;
    border-bottom: 1px solid #ccc;
    i{
        transition: .3s;
        font-size: 30px;
        cursor: pointer;
        &:hover{
            color: $accent-color;
        }
    }
    .category_color{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 20px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        overflow: hidden;
        transition: .3s;
        input{
            cursor: pointer;
            transform: scale(2.5);
        }
        &:hover{
            filter: opacity(0.7);
        }
    }
}
</style>