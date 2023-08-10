import { cambiarTestimonial, cargarAnimaciones, cargarAnimacionesScroll, expandirFaq } from "./funciones.js";
import { FaqHeaderArticle1, FaqHeaderArticle2, FaqHeaderArticle3, FaqHeaderArticle4, SelectorArticle1, SelectorArticle2, SelectorArticle3 } from "./variables.js";

SelectorArticle1.addEventListener('click', () => {
    cambiarTestimonial('article1');
});
SelectorArticle2.addEventListener('click', () => {
    cambiarTestimonial('article2');
});
SelectorArticle3.addEventListener('click', () => {
    cambiarTestimonial('article3');
});

window.addEventListener('DOMContentLoaded', () => {
    cargarAnimaciones('bienvenida');
    alert('Hola')
});

window.addEventListener('scroll', () => cargarAnimacionesScroll());

FaqHeaderArticle1.addEventListener('click', () => {
    expandirFaq('article1');
});
FaqHeaderArticle2.addEventListener('click', () => {
    expandirFaq('article2');
});
FaqHeaderArticle3.addEventListener('click', () => {
    expandirFaq('article3');
});
FaqHeaderArticle4.addEventListener('click', () => {
    expandirFaq('article4');
});