import {
    cargarPagina
} from "./funciones.js";

(function () {
    if (window.location.href === 'http://127.0.0.1:5500/build/index.html' || window.location.href === 'https://kayden-uno.netlify.app' || window.location.href === 'https://kayden-uno.netlify.app/' || window.location.href === 'https://portafolio-pdc.netlify.app/index.html') {
        window.addEventListener('load', () => {
            cargarPagina();
        });
    }
})();


