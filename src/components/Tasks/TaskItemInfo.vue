<template>
    <div class="details" @submit.prevent>
        <h2>Your task</h2>
        <div class="category_parameters">
            <h3>Category:
                <span> {{ item.categoryName }}</span>
            </h3>
            <div class="category_color">
                <input 
                :value="item.color"
                type="color"
                disabled
                >
            </div>
        </div>
        <div class="text_details">
           <div class="title">
                <BaseInput v-model="item.task.title" :disabled="true"/>
            </div>
            <div>
                <BaseInput v-model="item.task.body" class="desc" :disabled="true"/>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    name: "TaskItemInfo",
    props: {
        item: {
            type: Object,
            required: false
        }
    }
}
</script>

<style lang="scss">
    .details{
        width: 300px;
        display: flex;
        flex-flow: column nowrap;
        gap: 10px;
    }
    .desc{
        flex: 1;
        height: 300px;
    }
    .category_parameters{
        padding: 10px 0;
        display: flex;
        gap: 45px;
        align-items: center;
        h3{
            span{
                padding-left: 10px;
                font-weight: normal;
            }
        }
        .category_color{
            width: 30px;
            height: 30px;
            border-radius: 50%;
            overflow: hidden;
            input{
                border: none;
                width: 100%;
                height: 100%;
                transform: scale(1.5);
            }
        }
    }
</style>