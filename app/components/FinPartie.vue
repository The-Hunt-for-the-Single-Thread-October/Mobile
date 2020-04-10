<template>
    <Page class="page">
        <StackLayout>
            <Label class="Title" :text="Resultat"/>

            <Button class="buttonRejouer" text="Rejouer" @tap="returnHome" />
            <Button class="buttonQuitter" text="Quitter" @tap="returnHome" />
        </StackLayout>
    </Page>
</template>

<script>
    import Home from "./Home";
    export default {
        name:"FinPartie",
        props:["Resultat"],

        computed: {

        },
        components:{
            Home,
        },

        methods: {
            returnHome(){
                this.$navigateTo(Home);
            }
        }
    };
</script>


<style scoped lang="scss">
    .Title{
        color: white;
        font-size: 40em;
        font-weight: bold;
        text-align: center;
        vertical-align: top;
        margin-top: 25%;
        width: 90%;
    }

    .buttonRejouer{
        background-color: #007aff;
        color: white;
        font-size: 25em;
        font-weight: bold;
        vertical-align: bottom;
        margin-bottom: 5%;
        margin-top: 25%;
        width: 60%;
        border-radius: 5%;
    }
    .buttonQuitter{
        background-color: red;
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

