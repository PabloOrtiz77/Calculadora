let intentos = 6;
let diccionario = [
  "CORRER",
  "JUGAR",
  "ACTOR",
  "IDEAS",
  "FIJAR",
  "TENER",
  "COMER",
  "ALBAS",
];

const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
console.log(palabra);

const input = document.getElementById("guess-input");
const valor = input.value;

window.addEventListener("load", init);
function init() {
  console.log("Esto se ejecuta solo cuando se carga la pagina web");
}

function intentar() {
  const INTENTO = leerIntento();
  const GRID = document.getElementById("grid");
  const ROW = document.createElement("div");
  ROW.className = "row";
  for (let i in palabra) {
    const SPAN = document.createElement("span");
    SPAN.className = "letter";
    if (INTENTO === palabra) {
      //VERDE
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = "#79b851";
      terminar("<h1>GANASTE!😀</h1>");
    } else if (INTENTO[i] === palabra[i]) {
      //VERDE
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = "#79b851";
    } else if (palabra.includes(INTENTO[i])) {
      //AMARILLO
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = "#f3c237";
    } else {
      //GRIS
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = "#a4aec4";
    }
    ROW.appendChild(SPAN);
  }
  GRID.appendChild(ROW);
  intentos--;
  if (intentos == 0) {
    terminar("<h1>PERDISTE!😖</h1>");
  }
}
function terminar(mensaje) {
  const INPUT = document.getElementById("guess-input");
  const BOTON = document.getElementById("guess-button");
  INPUT.disabled = true;
  BOTON.disabled = true;
  let contenedor = document.getElementById("guesses");
  contenedor.innerHTML = mensaje;
}

function leerIntento() {
  let intento = document.getElementById("guess-input");
  intento = intento.value;
  intento = intento.toUpperCase();
  return intento;
}

const button = document.getElementById("guess-button");

button.addEventListener("click", intentar);
