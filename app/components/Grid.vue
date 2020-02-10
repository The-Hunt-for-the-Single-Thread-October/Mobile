<template>
    <Page>
        <StackLayout>
            <GridLayout columns="auto, auto, auto, auto, auto, auto, auto, auto, auto, auto, auto" rows="auto, auto, auto, auto, auto, auto, auto, auto, auto, auto, auto">
                <Cell v-for="index in col" :row="index" :col="1"/>
                <Cell v-for="index in col" :row="index" :col="2"/>
                <Cell v-for="index in col" :row="index" :col="3"/>
                <Cell v-for="index in col" :row="index" :col="4"/>
                <Cell v-for="index in col" :row="index" :col="5"/>
                <Cell v-for="index in col" :row="index" :col="6"/>
                <Cell v-for="index in col" :row="index" :col="7"/>
                <Cell v-for="index in col" :row="index" :col="8"/>
                <Cell v-for="index in col" :row="index" :col="9"/>
                <Cell v-for="index in col" :row="index" :col="10"/>
            </GridLayout>

            <Label :text="'You clicked on: '+message" />
        </StackLayout>
    </Page>
</template>

<script>
    import Cell from "./Cell";

    export default {
        name: "Grid",
        components: {
            Cell
        },
        data() {
            return {
                col: 10,
                row: 10,
                message: ""
            }
        },
        mounted() {
            this.$bus.$on('cellClicked', cellInfo => {
                this.message = cellInfo.col+','+cellInfo.row;
            });
        }
    }
</script>

<style scoped>
    .border {
        border-width: 1.5em;
        border-color: red;
    }
</style>
