<template>
    <Label class="cell" :text="col+','+row" :row="row" :col="col" @tap="clicked"/>
</template>

<script>
    export default {
        name: "Cell",
        props: [
            "row",
            "col"
        ],
        methods: {
            clicked() {
                this.$bus.$emit('cellClicked', {row: this.row, col: this.col});
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
