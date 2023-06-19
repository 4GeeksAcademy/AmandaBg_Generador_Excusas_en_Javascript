/* eslint-disable */
//Importar bibliotecas

import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Array, arreglo, es una estructura de datos que se utiliza para almacenar una colección de elementos del mismo tipo.
//Es una forma de organizar y acceder a los datos de manera secuencial,
//donde cada elemento tiene una posición o índice único dentro del array.
let who = ["El perro", "Mi abuela", "Su tortuga", "Mi pájaro"];
let action = ["se comió", "orinó", "aplastó", "rompió"];
let what = ["mi tarea", "las llaves", "el coche"];
let when = [
  "antes de la clase",
  "justo a tiempo",
  "cuando terminé",
  "durante mi almuerzo",
  "mientras rezaba"
];

function excuseGenerator(who, action, what, when) {
  // Función para generar una excusa
  let numWho = Math.floor(Math.random() * who.length); // Obtener un índice aleatorio para 'who'
  let numAction = Math.floor(Math.random() * action.length); // Obtener un índice aleatorio para 'action'
  let numWhat = Math.floor(Math.random() * what.length); // Obtener un índice aleatorio para 'what'
  let numWhen = Math.floor(Math.random() * when.length); // Obtener un índice aleatorio para 'when'
  return (
    who[numWho] +
    " " +
    action[numAction] +
    " " +
    what[numWhat] +
    " " +
    when[numWhen]
  ); // Devolver una excusa generada combinando los elementos aleatorios de cada array
}

function onLoad() {
  var excusa = document.getElementById("excuse"); // Obtener el elemento con el ID 'excuse'
  excusa.innerHTML = excuseGenerator(who, action, what, when); // Generar una excusa y asignarla al contenido del elemento
}

window.onload = onLoad; // Asignar la función onLoad para que se ejecute cuando se cargue la ventana
