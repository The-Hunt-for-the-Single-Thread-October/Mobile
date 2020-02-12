<template>
    <Page>
        <StackLayout>
            <GridLayout columns="auto, auto, auto, auto, auto, auto, auto, auto, auto, auto, auto" rows="auto, auto, auto, auto, auto, auto, auto, auto, auto, auto, auto">
                <Cell v-for="index in col" :x="index" :y="1"/>
                <Cell v-for="index in col" :x="index" :y="2"/>
                <Cell v-for="index in col" :x="index" :y="3"/>
                <Cell v-for="index in col" :x="index" :y="4"/>
                <Cell v-for="index in col" :x="index" :y="5"/>
                <Cell v-for="index in col" :x="index" :y="6"/>
                <Cell v-for="index in col" :x="index" :y="7"/>
                <Cell v-for="index in col" :x="index" :y="8"/>
                <Cell v-for="index in col" :x="index" :y="9"/>
                <Cell v-for="index in col" :x="index" :y="10"/>
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
                this.message = cellInfo.x+','+cellInfo.y;
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
