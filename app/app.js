import Vue from "nativescript-vue";

import Home from "./components/Home";

global.bus = new Vue({});

Vue.registerElement('BarcodeScanner', () => require('nativescript-barcodescanner').BarcodeScannerView);

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
