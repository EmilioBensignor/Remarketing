const heroIcons = document.getElementById("heroIcons");
const tours = document.getElementById("tours");

const iconsTours = [
  {
    img: "icon-todo-incluido",
    alt: "Todo Incluido",
    texto: "Todo incluido",
  },
  {
    img: "icon-tours",
    alt: "Mas de 5700 tours",
    texto: "Más de 5700 tours",
  },
  {
    img: "icon-tour-aereo",
    alt: "Tour + Aereo",
    texto: "Tour + Aéreo",
  },
  {
    img: "icon-flexibilidad",
    alt: "Flexibilidad y seguridad",
    texto: "Flexibilidad y seguridad",
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
      <img src="/content/images/${iconsTours[i].img}.png" alt="${iconsTours[i].alt}" />
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