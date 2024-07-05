const heroIcons = document.getElementById("heroIcons");
const tours = document.getElementById("tours");

const iconsTours = [
  {
    img: "icon-todo-incluido",
    alt: "Todo Incluido",
    texto: "Todo incluido",
    class: "iconIncluido"
  },
  {
    img: "icon-tours",
    alt: "Mas de 5700 tours",
    texto: "Más de 5700 tours",
    class: "iconTours"
  },
  {
    img: "icon-tour-aereo",
    alt: "Tour + Aereo",
    texto: "Tour + Aéreo",
    class: "iconTourAereo"
  },
  {
    img: "icon-flexibilidad",
    alt: "Flexibilidad y seguridad",
    texto: "Flexibilidad y seguridad",
    class: "iconFlexibilidad"
  },
];
const toursMundo = [
  {
    fondo: "suenos-europa",
    titulo: "Sueños de Europa",
    diasNoches: "14 días / 13 noches",
    precioAntiguo: "USD 2.430",
    precio: "2.022"
  },
  {
    fondo: "japon-china-express",
    titulo: "Japón y China Express",
    diasNoches: "12 días / 11 noches",
    precioAntiguo: "USD 3.980",
    precio: "3.640"
  },
  {
    fondo: "amsterdam-frankfurt-paris",
    titulo: "Amsterdam, Frankfurt y Paris",
    diasNoches: "7 días / 6 noches",
    precioAntiguo: "USD 1.842",
    precio: "1.085"
  },
  {
    fondo: "europa-mediterranea",
    titulo: "Europa Mediterránea",
    diasNoches: "10 días / 9 noches",
    precioAntiguo: "USD 2.060",
    precio: "1.763"
  },
];

for (let i = 0; i < iconsTours.length; i++) {
  heroIcons.innerHTML += `
    <div>
      <div class="iconHero ${iconsTours[i].class}"></div>
      <p>${iconsTours[i].texto}</p>
    </div>
  `;
}

for (let j = 0; j < toursMundo.length; j++) {
  tours.innerHTML += `
    <div class="tour">
      <div class="tourImagen">
        <p>${toursMundo[j].titulo}</p>
        <p>${toursMundo[j].diasNoches}</p>
      </div>
      <div class="tourPrecio">
        <p>Todo incluído desde <span class="precioAntiguo">${toursMundo[j].precioAntiguo}</span></p>
        <p>USD <span class="precio">${toursMundo[j].precio}</span> por persona</p>
      </div>
    </div>
  `;
}

$("#ofertas").slick({
  infinite: 0,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: !1,
  centerMode: !1,
  arrows: !1,
  dots: !0
})

$("#review-items").slick({
  infinite: !0,
  slidesToShow: 2,
  slidesToScroll: 2,
  variableWidth: !1,
  centerMode: !1,
  arrows: !1,
  dots: !0,
  prevArrow: "<div class='prev-reviews arrows-ofertas slick-prev'></div>",
  nextArrow: "<div class='next-reviews arrows-ofertas slick-next'></div>",
  responsive: [
    {
      breakpoint: 660,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: !1,
        variableWidth: !1,
      }
    }
  ]
})