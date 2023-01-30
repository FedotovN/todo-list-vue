<template>
    <div class="select">
        <label for="">Choose task category</label>
        <select @change="selected">
            <option value="no_category" selected disabled>No category</option>
            <option 
            v-for="option in options"
            :value="option.id"
            >{{ option.name }}</option>
        </select>
    </div>
</template>
<script>
export default{
    name: "BaseSelect",
    props: {
        options:{
            type: Array,
            required: true,
            default: []
        }
    },
    methods: {
        selected(option){
            this.$emit('selected', option.target.value)
        }
    }
}
</script>
<style lang='scss'>
    .select{
        width: 100%;
        height: 60px;
        select{
            margin-top: 10px;
            font-size: 18px;
            width: 100%;
            height: 40px;
            outline: none;
            border: 1px solid #ccc;
            border-radius: 4px;
            cursor: pointer;
            &:active{
                box-shadow: none;
            }
            &:hover{
                border-color: $accent-color;
            }
            option{
                height: 30px;
                padding: 5px 0;
            }
        }
    }
</style>