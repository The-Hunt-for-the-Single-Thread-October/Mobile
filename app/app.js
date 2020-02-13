import Vue from "nativescript-vue";

import Home from "./components/Home";
import { SocketIO } from 'nativescript-socketio';

Vue.prototype.$io = new SocketIO("http://51.91.8.97:4002/");
Vue.prototype.$bus = new Vue();

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
