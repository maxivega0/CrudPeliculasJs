// logica de la pagina administrador
//* Modulos en JS.
//* Se modula con "import" o "export"
//! PASO 1:
//* me voy al script que quiero usar en otro archivo("export default class Pelicula")
//! PASO 2: 
//* en el archivo que quiero usar la "clase pelicula" agrego el import ("import Pelicula from './clasePelicula.js'")
//! PASO 3: 
//* en el html, para que el js pueda dejarnos usar el import, añadi el type modulo en mi archivo que quiero usar
//* ej:   <script src="../js/administrador.js" type="module"></script>


import Pelicula from "./clasePelicula.js";


// variables globales
  let formularioPeliculas = document.querySelector("#formPelicula");
  
  // manejador de eventos
  formularioPeliculas.addEventListener("submit", prepararFormularioPelicula);

  //funciones
  function prepararFormularioPelicula(e) {
    e.preventDefault();
    console.log("si funciona perro");
    crearPelicula();
    
  }

  function crearPelicula() {
    const peliculaEjemplo = new Pelicula(
        "0001",
        "El Padrino",
        "La familia Corleone es una de las más poderosas de Nueva York en los años 40.",
        "https://imagenes.psicologiaymente.com/wp-content/uploads/2021/02/el-padrino-1.png",
        "Drama/Crimen",
        1972,
        "2h 55min",
        "Estados Unidos",
        ["Marlon Brando", "Al Pacino", "James Caan"]
      );
  }