import {
    activarSeccion,
    cambiarTestimonial,
    cargarAnimaciones,
    cargarAnimacionesScroll,
    expandirFaq,
    modificarBienvenida
} from "./funciones.js";
import {
    BtnAbout,
    BtnContact,
    BtnFAQ,
    BtnHome,
    BtnPortfolio,
    BtnTop,
    CloseMenuHeader,
    FaqHeaderArticle1,
    FaqHeaderArticle2,
    FaqHeaderArticle3,
    FaqHeaderArticle4,
    NavegadorHeader,
    OpenMenuHeader,
    SelectorArticle1,
    SelectorArticle2,
    SelectorArticle3
} from "./variables.js";

window.addEventListener('DOMContentLoaded', () => {
    cargarAnimaciones('bienvenida');
    // alert('Version: 0.0.1');
});

window.addEventListener('scroll', () => {
    BtnTop.classList.toggle('activo', window.scrollY > 100);
    cargarAnimacionesScroll()
});

//-----------------------------------//

SelectorArticle1.addEventListener('click', () => { cambiarTestimonial('article1') });
SelectorArticle2.addEventListener('click', () => { cambiarTestimonial('article2') });
SelectorArticle3.addEventListener('click', () => { cambiarTestimonial('article3') });

//-----------------------------------//

FaqHeaderArticle1.addEventListener('click', () => { expandirFaq('article1') });
FaqHeaderArticle2.addEventListener('click', () => { expandirFaq('article2') });
FaqHeaderArticle3.addEventListener('click', () => { expandirFaq('article3') });
FaqHeaderArticle4.addEventListener('click', () => { expandirFaq('article4') });


modificarBienvenida();
window.addEventListener('resize', () => { modificarBienvenida() });

OpenMenuHeader.addEventListener('click', () => { NavegadorHeader.classList.add('activo') });
CloseMenuHeader.addEventListener('click', () => { NavegadorHeader.classList.remove('activo') });

BtnHome.addEventListener('click', () => { activarSeccion("home") });
BtnTop.addEventListener('click', () => { activarSeccion("BtnTop") });
BtnAbout.addEventListener('click', () => { activarSeccion("about") });
BtnPortfolio.addEventListener('click', () => { activarSeccion("portfolio") });
BtnFAQ.addEventListener('click', () => { activarSeccion("faq") });
BtnContact.addEventListener('click', () => { activarSeccion("contact") });