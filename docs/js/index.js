import {App} from "../../src/js/app";

if ("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then( registration => {
        console.log("SW registered");
        console.log(registration);
    }).catch( error => {
        console.error("SW registration failed");
        console.error(error);
    });
}

window.app = new App();