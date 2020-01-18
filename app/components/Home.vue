<template>
    <Page class="page">

        <GridLayout>
            <Label class="title" text="The hunt for the single thread october" textWrap="true"/>
            <Button text="Jouer" @tap="onButtonTap" />
        </GridLayout>
    </Page>
</template>

<script>
    export default {
        computed: {
            message() {
                return "Blank {N}-Vue appp";
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
        font-size: 20em;
        font-weight: bold;
        vertical-align: bottom;
        margin-bottom: 25%;
        width: 40%;
        border-radius: 5%;
    }

    .page{
        background-image: url("~/assets/img/Sans titre.png");
        background-size: cover;
        background-repeat: no-repeat;
        /* background-attachment: fixed; */ /* not supported in {N} yet */
        background-position: center top; /* instead set ypos to top to avoid scroll-up */
    }

</style>
