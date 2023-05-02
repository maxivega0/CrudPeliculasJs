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
import { resumenValidaciones, } from "./helpers.js"


// variables globales
  let formularioPeliculas = document.querySelector("#formPelicula"),
  modalEditar =  new bootstrap.Modal(document.querySelector("#ModalEditar"));
  const btnCrearPelicula = document.querySelector("#btnCrearPelicula")
  let listaPelicula = [];
  let codigo = document.querySelector("#codigo"),
  titulo = document.querySelector("#titulo"),
  descripcion = document.querySelector("#descripcion"),
  imagen = document.querySelector("#imagen"),
  pais = document.querySelector("#pais"),
  director = document.querySelector("#director"),
  reparto = document.querySelector("#reparto"),
  anio = document.querySelector("#anio"),
  duracion = document.querySelector("#duracion"),
  alert = document.querySelector("#alerta");



  // manejador de eventos
  formularioPeliculas.addEventListener("submit", prepararFormularioPelicula);
  btnCrearPelicula.addEventListener("click", desplegarModalPelicula)

  //funciones
  function desplegarModalPelicula() {
    modalEditar.show();
  }




  function prepararFormularioPelicula(e) {
    e.preventDefault();
    console.log("si funciona perro");
    crearPelicula();
    
  }

  function crearPelicula() {
    // Validar datos
const resumen = resumenValidaciones(titulo.value, descripcion.value, imagen.value, genero.value);
mostrarMensajeError(resumen);
if (resumen.length === 0) {
      // Si los datos son validos
    // Creo el objeto Pelicula
    const peliculaNueva = new Pelicula(
      undefined,
      titulo.value,
      descripcion.value,
      imagen.value,
      genero.value,
      anio.value,
      duracion.value,
      pais.value,
      reparto.value
    );
    console.log(peliculaNueva);
    //* Agregar el objeto en el array de peliculas
    listaPelicula.push(peliculaNueva);

    // Guardar el array en LocalStorage}
    guardarEnLocalStorage();
    limpiarFormulario();
    // mostrar mensaje intuitivo 
}else{
  console.log("Aqui ocurrieron errores que tengo que mostrar");
  mostrarMensajeError(resumen);
}



      // Mostrar mensaje de error al usuario
  }

  function mostrarMensajeError(resumen) {
    if (resumen.length > 0) {
      alert.className = "alert alert-danger mt-3 ";
      alert.innerHTML = resumen;
    }
  }

  function guardarEnLocalStorage() {
    localStorage.setItem("listaPelicula", JSON.stringify(listaPelicula));
  }
  function limpiarFormulario() {
    formularioPeliculas.reset();
  }