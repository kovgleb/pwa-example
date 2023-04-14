import {App} from './app.js';

if ("serviceWorker" in navigator){
  navigator.serviceWorker.register("sw.js").then( registration => {
    console.log("SW registered");
    console.log(registration);
  }).catch( error => {
    console.error("SW registration failed");
    console.error(error);
  });
}

const timeoutId = setTimeout(init, 4000)

document.addEventListener("DOMContentLoaded", function () {
  clearTimeout(timeoutId)
  init()
});

function init() {
  window.app = new App();
}
