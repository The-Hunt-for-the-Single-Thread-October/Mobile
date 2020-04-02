<template>
    <Page class="page">
        <GridLayout>
            <Label class="title" text="The hunt for the single thread october" textWrap="true"/>
            <Button text="Jouer" @tap="scan"></Button>
        </GridLayout>
    </Page>
</template>

<script>
    import {isIOS} from "tns-core-modules/platform";
    import {BarcodeScanner} from "nativescript-barcodescanner";
    import BattleshipGame from "./BattleshipGame";

    export default {
        name: "Home",
        data() {
            return {
                isIOS
            }
        },
        mounted(){
            this.$io.connect()
        },
        methods: {
            onScanResult(evt) {
                console.log(`onScanResult: ${evt.text} (${evt.format})`);
            },

            scan() {
                new BarcodeScanner().scan({
                    cancelLabel: "Appuyez ici pour fermer le scanner.", // iOS only, default 'Close'
                    cancelLabelBackgroundColor: "#2684fd", // iOS only, default '#000000' (black)
                    message: "Volume +/- pour modifier la luminosité.", // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
                    preferFrontCamera: false,     // Android only, default false
                    showFlipCameraButton: true,   // default false
                    showTorchButton: true,        // iOS only, default false
                    torchOn: false,               // launch with the flashlight on (default false)
                    resultDisplayDuration: 500,   // Android only, default 1500 (ms), set to 0 to disable echoing the scanned text
                    beepOnScan: true,             // Play or Suppress beep on scan (default true)
                    fullScreen: true,
                    openSettingsIfPermissionWasPreviouslyDenied: true, // On iOS you can send the user to the settings app if access was previously denied
                    closeCallback: () => {
                        console.log("Scanner closed @ " + new Date().getTime());
                    }
                }).then(
                    (result) => {
                        console.log(result.text)
                        this.$navigateTo(BattleshipGame);
                        //this.$io.emit("join",result.text);
                    },
                    (errorMessage) => {
                        console.log("No scan. " + errorMessage);
                    }
                );
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
