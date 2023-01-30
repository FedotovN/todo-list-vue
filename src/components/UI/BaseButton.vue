<template>
    <button><slot></slot></button>
</template>

<script>
export default{
    name: "BaseButton"
}
</script>

<style lang="scss">
button{
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    font-size: 18px;
    margin: 10px 0;
    background-color: white;
    border: 1px solid #ccc;
    cursor: pointer;
    width: 100%;
    height: 70px;
    transition: .3s;
        i{
            font-size: 30px;
        }
        &:hover{
            border-color: $accent-color;
            color: $accent-color;
            letter-spacing: 1.05px;
        }
    }
</style>