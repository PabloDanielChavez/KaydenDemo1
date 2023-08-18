import {
    BtnAbout,
    BtnContact,
    BtnFAQ,
    BtnHome,
    BtnPortfolio,
    FaqArticle1,
    FaqArticle2,
    FaqArticle3,
    FaqArticle4,
    FaqHeaderArticle1,
    FaqHeaderArticle2,
    FaqHeaderArticle3,
    FaqHeaderArticle4,
    ImagenBienvenida,
    NavegadorHeader,
    SelectorArticle1,
    SelectorArticle2,
    SelectorArticle3,
    SpanExpand1,
    SpanExpand2,
    SpanExpand3,
    SpanExpand4,
    TituloBienvenida,
    about,
    about__skylls,
    about__stats,
    about__statsH4,
    barra__bar,
    bienvenida,
    contact,
    education,
    faq,
    footer,
    head,
    header,
    portfolio,
    services,
    testimonials,
    testimonials__boxGeneral
} from "./variables.js";

export function cambiarTestimonial(article) {
    if (article === 'article1') {
        SelectorArticle1.classList.add('activo');
        SelectorArticle2.classList.remove('activo');
        SelectorArticle3.classList.remove('activo');
        testimonials__boxGeneral.classList.add('right0');
        testimonials__boxGeneral.classList.remove('right100');
        testimonials__boxGeneral.classList.remove('right200');
    }
    else if (article === 'article2') {
        SelectorArticle1.classList.remove('activo');
        SelectorArticle2.classList.add('activo');
        SelectorArticle3.classList.remove('activo');
        testimonials__boxGeneral.classList.remove('right0');
        testimonials__boxGeneral.classList.add('right100');
        testimonials__boxGeneral.classList.remove('right200');
    }
    else if (article === 'article3') {
        SelectorArticle1.classList.remove('activo');
        SelectorArticle2.classList.remove('activo');
        SelectorArticle3.classList.add('activo');
        testimonials__boxGeneral.classList.remove('right0');
        testimonials__boxGeneral.classList.remove('right100');
        testimonials__boxGeneral.classList.add('right200');
    }
}

export function cargarAnimaciones(tipo) {
    if (tipo === "bienvenida") {
        setTimeout(() => {
            ImagenBienvenida.classList.add('activo');
            setTimeout(() => {
                TituloBienvenida.classList.add('activo');
            }, 250);
        }, 200);
    }
}

var aboutSkylls = "";
var aboutStats = "";

var faqActivo = "article1";

export function cargarAnimacionesScroll() {
    var scrollActual = window.pageYOffset + window.innerHeight;
    if (header.offsetTop <= scrollActual) {

    }
    if (bienvenida.offsetTop <= scrollActual) {

    }
    if (about.offsetTop <= scrollActual) {

        if (about__skylls.offsetTop <= scrollActual && aboutSkylls !== "activo") {
            barra__bar.forEach(cla => {
                cla.classList.add('activo');
                aboutSkylls = "activo";
            });
        }

        if (about__stats.offsetTop <= scrollActual && aboutStats !== "activo") {
            about__statsH4.forEach(val => {
                const val1 = parseInt(val.attributes.value.nodeValue) / 7;
                const val2 = parseInt(val.attributes.value.nodeValue) / 6;
                const val3 = parseInt(val.attributes.value.nodeValue) / 5;
                const val4 = parseInt(val.attributes.value.nodeValue) / 4;
                const val5 = parseInt(val.attributes.value.nodeValue) / 3;
                const val6 = parseInt(val.attributes.value.nodeValue) / 2;
                const val7 = parseInt(val.attributes.value.nodeValue);
                setTimeout(() => {
                    val.textContent = Math.trunc(val1);
                    setTimeout(() => {
                        val.textContent = Math.trunc(val2);
                        setTimeout(() => {
                            val.textContent = Math.trunc(val3);
                            setTimeout(() => {
                                val.textContent = Math.trunc(val4);
                                setTimeout(() => {
                                    val.textContent = Math.trunc(val5);
                                    setTimeout(() => {
                                        val.textContent = Math.trunc(val6);
                                        setTimeout(() => {
                                            val.textContent = Math.trunc(val7);
                                        }, 150);
                                    }, 150);
                                }, 150);
                            }, 150);
                        }, 150);
                    }, 150);
                }, 150);
            });
            aboutStats = "activo";
        }
    }

    if (1000 <= scrollActual) {
        head.classList.add('activo');
    }

    if (1000 >= scrollActual) {
        head.classList.remove('activo');
    }

    if (services.offsetTop <= scrollActual) {

    }
    if (portfolio.offsetTop <= scrollActual) {

    }
    if (education.offsetTop <= scrollActual) {

    }
    if (testimonials.offsetTop <= scrollActual) {

    }
    if (faq.offsetTop <= scrollActual) {

    }
    if (contact.offsetTop <= scrollActual) {

    }
    if (footer.offsetTop <= scrollActual) {

    }
}

export function expandirFaq(tipo) {
    if (tipo === "article1") {
        ocultarFaq();
        FaqArticle1.classList.add('activo');
        if (faqActivo === "article1") {
            ocultarFaq();
            faqActivo = "";
        } else {
            SpanExpand1.classList.add('activo');
            faqActivo = "article1";
        }
    }
    if (tipo === "article2") {
        ocultarFaq();
        FaqArticle2.classList.add('activo');
        if (faqActivo === "article2") {
            ocultarFaq();
            faqActivo = "";
        } else {
            SpanExpand2.classList.add('activo');
            faqActivo = "article2";
        }
    }
    if (tipo === "article3") {
        ocultarFaq();
        FaqArticle3.classList.add('activo');
        if (faqActivo === "article3") {
            ocultarFaq();
            faqActivo = "";
        } else {
            SpanExpand3.classList.add('activo');
            faqActivo = "article3";
        }
    }
    if (tipo === "article4") {
        ocultarFaq();
        FaqArticle4.classList.add('activo');
        if (faqActivo === "article4") {
            ocultarFaq();
            faqActivo = "";
        } else {
            SpanExpand4.classList.add('activo');
            faqActivo = "article4";
        }
    }

}

export function ocultarFaq() {
    FaqArticle1.classList.remove('activo');
    FaqArticle2.classList.remove('activo');
    FaqArticle3.classList.remove('activo');
    FaqArticle4.classList.remove('activo');
    SpanExpand1.classList.remove('activo');
    SpanExpand2.classList.remove('activo');
    SpanExpand3.classList.remove('activo');
    SpanExpand4.classList.remove('activo');
}

export function modificarBienvenida() {
    var tamañoPantalla = window.innerHeight;
    bienvenida.style.height = tamañoPantalla + "px";
}

export function activarSeccion(destino) {
    if (destino === "home" || destino === "BtnTop") {
        desMenuScroll();
        BtnHome.classList.add('activo');
        moverScroll(header.offsetTop);
    } else if (destino === "about") {
        desMenuScroll();
        BtnAbout.classList.add('activo');
        moverScroll(about.offsetTop - 100);

    } else if (destino === "portfolio") {
        desMenuScroll();
        BtnPortfolio.classList.add('activo');
        moverScroll(portfolio.offsetTop - 100);

    } else if (destino === "faq") {
        desMenuScroll();
        BtnFAQ.classList.add('activo');
        moverScroll(faq.offsetTop - 100);

    } else if (destino === "contact") {
        desMenuScroll();
        BtnContact.classList.add('activo');
        moverScroll(contact.offsetTop - 100);

    }
}

export function desMenuScroll() {
    BtnHome.classList.remove('activo');
    BtnAbout.classList.remove('activo');
    BtnPortfolio.classList.remove('activo');
    BtnFAQ.classList.remove('activo');
    BtnContact.classList.remove('activo');
}

export function moverScroll(posicion) {
    window.scroll({
        top: posicion,
        behavior: "smooth",
    })
}
