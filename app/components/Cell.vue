<template>
    <Label class="cell" :text="x+','+y" :col="x" :row="y" @tap="clicked"/>
</template>

<script>
    export default {
        name: "Cell",
        props: [
            "x",
            "y"
        ],
        methods: {
            clicked() {
                this.$bus.$emit('cellClicked', {x: this.x, y: this.y});
            }
        }
    }
</script>

<style scoped>
    .cell {
        width: 72px;
        height: 72px;
        border-width: 1.5em;
        border-color: cornflowerblue;
        background-color: blue;
        box-sizing: content-box;
    }
</style>
