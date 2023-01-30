<template>
<div class="layer" @click="closeDialog">
    <div class="window" @click.stop>
        <slot></slot>
    </div>
</div>
</template>
<script>
export default{
    name: "dialogWindow",
    methods: {
        closeDialog(){
            this.$emit('closeDialog')
        }
    }
}
</script>
<style lang="scss">
.layer{
    z-index: 11;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background-color: rgba(#000, .8);
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    .window{
        min-height: 200px;
        min-width: 200px;
        background-color: white;
        border-radius: 8px;
        padding: 20px;
    }
}
</style>