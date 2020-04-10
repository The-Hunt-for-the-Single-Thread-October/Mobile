<template>
    <Page class="page" actionBarHidden="true" @loaded="pageLoaded">
        <WebView ref="webView"/>
    </Page>
</template>

<script>
    const webViewInterfaceModule = require("nativescript-webview-interface");
    import FinPartie from "./FinPartie";

    export default {
        name:"BattleshipGame",
        props:["room"],
        components: {
            FinPartie
        },
        data() {
            return {
                oWebViewInterface: null
            }
        },
        methods: {
            pageLoaded(){
                this.setupWebViewInterface()
            },

            setupWebViewInterface() {
                let webView = this.$refs.webView.nativeView;
                this.oWebViewInterface = new webViewInterfaceModule.WebViewInterface(webView, 'http://51.91.8.97:3000?id='+this.room.id+'&maxClients='+this.room.maxClients+'&clients='+this.room.clients);

                this.oWebViewInterface.on("gameEnded", result => {
                    this.$navigateTo(FinPartie, {props: {Resultat: result}});
                });
            }
        }
    }
</script>


<style scoped lang="scss">
</style>

