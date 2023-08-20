import {
    BtnAbout,
    BtnContact,
    BtnFAQ,
    BtnHome,
    BtnPortfolio,
    BtnTop,
    CloseMenuHeader,
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
    OcupacionBox,
    OcupacionParrafo,
    OpenMenuHeader,
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
    body,
    contact,
    education,
    faq,
    footer,
    head,
    header,
    myPortfolio,
    pantallaCarga,
    portfolio,
    services,
    testimonials,
    testimonials__boxGeneral
} from "./variables.js";

export function cargarPagina() {
    aPantallaCarga("activo");
    //----------------/Inicio/-------------------//
    modificarBienvenida();
    window.addEventListener('resize', () => { modificarBienvenida() });

    //----------------/NavHeader/-------------------//
    OpenMenuHeader.addEventListener('click', () => { NavegadorHeader.classList.add('activo') });
    CloseMenuHeader.addEventListener('click', () => { NavegadorHeader.classList.remove('activo') });
    BtnHome.addEventListener('click', () => { activarSeccion("home") });
    BtnTop.addEventListener('click', () => { activarSeccion("BtnTop") });
    BtnAbout.addEventListener('click', () => { activarSeccion("about") });
    BtnPortfolio.addEventListener('click', () => { activarSeccion("portfolio") });
    BtnFAQ.addEventListener('click', () => { activarSeccion("faq") });
    BtnContact.addEventListener('click', () => { activarSeccion("contact") });

    //----------------/Testimonial/-------------------//
    SelectorArticle1.addEventListener('click', () => { cambiarTestimonial('article1') });
    SelectorArticle2.addEventListener('click', () => { cambiarTestimonial('article2') });
    SelectorArticle3.addEventListener('click', () => { cambiarTestimonial('article3') });

    //----------------/FAQ/-------------------//
    FaqHeaderArticle1.addEventListener('click', () => { expandirFaq('article1') });
    FaqHeaderArticle2.addEventListener('click', () => { expandirFaq('article2') });
    FaqHeaderArticle3.addEventListener('click', () => { expandirFaq('article3') });
    FaqHeaderArticle4.addEventListener('click', () => { expandirFaq('article4') });

    //----------------/Bienvenida/-------------------//
    myPortfolio.addEventListener('click', () => { activarSeccion("portfolio") });

    //----------------/Animaciones/-------------------//
    window.addEventListener('scroll', () => {
        BtnTop.classList.toggle('activo', window.scrollY > 100);
        cargarAnimacionesScroll()
    });
}

function cambiarTestimonial(article) {
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

function cargarAnimaciones(tipo) {
    if (tipo === "bienvenida") {
        setTimeout(() => {
            ImagenBienvenida.classList.add('activo');
            setTimeout(() => {
                animacionOcupacion();
                TituloBienvenida.classList.add('activo');
            }, 250);
        }, 200);
    }
}

var aboutSkylls = "";
var aboutStats = "";

var faqActivo = "article1";

function cargarAnimacionesScroll() {
    var scrollActual = window.pageYOffset + window.innerHeight;
    if (header.offsetTop <= scrollActual) {
    }
    if (bienvenida.offsetTop < scrollActual) {
        desMenuScroll();
        BtnHome.classList.add('activo');
    }
    if (about.offsetTop <= scrollActual) {

        desMenuScroll();
        BtnAbout.classList.add('activo');

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
        desMenuScroll();
        BtnPortfolio.classList.add('activo');

    }
    if (education.offsetTop <= scrollActual) {

    }
    if (testimonials.offsetTop <= scrollActual) {

    }
    if (faq.offsetTop <= scrollActual) {
        desMenuScroll();
        BtnFAQ.classList.add('activo');
    }
    if (contact.offsetTop <= scrollActual) {
        desMenuScroll();
        BtnContact.classList.add('activo');
    }
    if (footer.offsetTop <= scrollActual) {

    }
}

function expandirFaq(tipo) {
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

function ocultarFaq() {
    FaqArticle1.classList.remove('activo');
    FaqArticle2.classList.remove('activo');
    FaqArticle3.classList.remove('activo');
    FaqArticle4.classList.remove('activo');
    SpanExpand1.classList.remove('activo');
    SpanExpand2.classList.remove('activo');
    SpanExpand3.classList.remove('activo');
    SpanExpand4.classList.remove('activo');
}

function modificarBienvenida() {
    var tamañoPantalla = window.innerHeight;
    bienvenida.style.height = tamañoPantalla + 10 + "px";
    faq.style.height = tamañoPantalla + 10 + "px";
}

function activarSeccion(destino) {
    if (destino === "home" || destino === "BtnTop") {
        // desMenuScroll();
        // BtnHome.classList.add('activo');
        moverScroll(header.offsetTop);
    } else if (destino === "about") {
        // desMenuScroll();
        // BtnAbout.classList.add('activo');
        moverScroll(about.offsetTop - 40);

    } else if (destino === "portfolio") {
        // desMenuScroll();
        // BtnPortfolio.classList.add('activo');
        moverScroll(portfolio.offsetTop - 40);

    } else if (destino === "faq") {
        // desMenuScroll();
        // BtnFAQ.classList.add('activo');
        moverScroll(faq.offsetTop - 40);

    } else if (destino === "contact") {
        // desMenuScroll();
        // BtnContact.classList.add('activo');
        moverScroll(contact.offsetTop - 40);

    }
}

function desMenuScroll() {
    BtnHome.classList.remove('activo');
    BtnAbout.classList.remove('activo');
    BtnPortfolio.classList.remove('activo');
    BtnFAQ.classList.remove('activo');
    BtnContact.classList.remove('activo');
}

function moverScroll(posicion) {
    window.scroll({
        top: posicion,
        behavior: "smooth",
    })
}

function aPantallaCarga(estado) {
    if (estado === "activo") {
        cargarAnimaciones('bienvenida');
        pantallaCarga.style.opacity = "0";
        pantallaCarga.style.zIndex = "0";
        body.classList.add('activo');
    } else {
        pantallaCarga.style.opacity = "1";
        pantallaCarga.style.zIndex = "4";
        body.classList.remove('activo');
    }
}

function animacionOcupacion() {
    console.log('Animacion');
    OcupacionBox.classList.remove('part2');
    OcupacionBox.classList.add('part1');
    setTimeout(() => {
        OcupacionBox.classList.remove('part1');
        OcupacionBox.classList.add('part2');
        setTimeout(() => {
            OcupacionParrafo.textContent = "Web design"
        }, 1100);
        setTimeout(() => {
            setTimeout(() => {
                OcupacionParrafo.textContent = "Web developer"
                setTimeout(() => {
                    OcupacionBox.classList.remove('part2');
                    OcupacionBox.classList.add('part1');
                    setTimeout(() => {
                        animacionOcupacion();
                    }, 2000);
                }, 900);
            }, 1000);
        }, 2000);
    }, 2000);
}