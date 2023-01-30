<template>
    <div class="input">
        <label for="title"></label>
        <textarea 
            :disabled="disabled"
            id="title"
            :value="modelValue"
            @input="updateInput">
        </textarea>
    </div>
</template>
<script>
export default{
    name: "BaseInput",
    props: {
        modelValue: {
            type: [Number, String]
        },
        disabled: {
            type: Boolean
        }
    },
    methods: {
        updateInput(e){
            this.$emit("update:modelValue", e.target.value)
        }
    }
}
</script>
<style lang="scss">
    textarea{
        width: 300px;
        padding: 0;
        margin: 0;
        appearance: none;
        resize: none;
        outline: none;
        border: 1px solid #ccc;
        border-radius: 4px;
            &::-webkit-scrollbar{
                width: 0;
            }
        }
        textarea{
            font-size: 18px;
            height: 100%;
            transition: .3s;
            &:focus{
                border-color: $accent-color;
            }
        }
        .input{
            margin-top: 20px;
            display: flex;
            flex-flow: column nowrap;
            gap: 10px;
        }
        
</style>