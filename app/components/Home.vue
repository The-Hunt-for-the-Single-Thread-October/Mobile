<template>
    <Page class="page">
        <GridLayout>
            <Label class="title" text="The hunt for the single thread october" textWrap="true"/>
            <Button text="Jouer" @tap="onPlayButtonTap"></Button>
        </GridLayout>
    </Page>
</template>

<script>
    import Grid from "./Grid";

    export default {
        name: "Home",
        methods: {
            onPlayButtonTap() {
                this.$navigateTo(Grid);
            }
        }
    };
</script>

<style scoped lang="scss">
    .title{
        color: white;
        font-size: 40em;
        font-weight: bold;
        text-align: center;
        vertical-align: top;
        margin-top: 2%;
        width: 90%;
    }

    button{
        background-color: #007aff;
        color: white;
        font-size: 25em;
        font-weight: bold;
        vertical-align: bottom;
        margin-bottom: 25%;
        width: 60%;
        border-radius: 5%;
    }

    .page{
        background-image: url("~/assets/img/main_background.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center top;
    }

</style>
