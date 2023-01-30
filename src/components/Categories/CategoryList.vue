<template>
    <DialogWindow
        @closeDialog="showDialog=false"
        v-show="showDialog">
    </DialogWindow>
    <div class="category_list">
        <div class="content" v-if="categories.length">
            <TransitionGroup
                name="list"
                tag="ul">
                <CategoryItem
                    v-for="c in categories"
                    :key="c.id"
                    :category="c"
                    @removeCategory="removeCategory"
                ></CategoryItem>
            </TransitionGroup>
        </div>
        <div class="handler" v-else>
            <h4>Press the button to create new category</h4>
        </div>
    </div>
</template>

<script>
import CategoryItem from './CategoryItem.vue';
import { TransitionGroup } from 'vue';
export default{
    name: "CategoryList",
    data(){
        return{
            showDialog: false
        }
    },
    props: {
        categories:{
            type: Array,
            required: true
        }
    },
    components: {CategoryItem, TransitionGroup},
    methods: {
        removeCategory(id){
            this.$store.commit('categories/removeCategory', id)
            this.$store.dispatch('categories/saveCategories')
        }
    }

}
</script>
<style lang="scss" scoped>

.category_list{
    border-top: 1px solid #ccc;
    max-height: 500px;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        width: 0;
    }
}
.handler{
    padding: 30px 0;
}
.content{
    display: flex;
    flex-flow: column nowrap;
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