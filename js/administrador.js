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
  let altaPelicula = true; // altaPelicula = true, quiero crear una peli, en false para editar
  
  let listaPelicula =  JSON.parse(localStorage.getItem('listaPelicula')) || [];  // Si tengo peliculas almacenadas en el array las transformo en tipo Pelicula
  if (listaPelicula.length > 0) {
    listaPelicula = listaPelicula.map((pelicula)=> new Pelicula(pelicula.codigo, pelicula.titulo, pelicula.descripcion, pelicula.imagen, pelicula.genero, pelicula.anio,pelicula.reparto, pelicula.pais, pelicula.duracion))
  }

  // {...pelicula} = pelicula.codigo, pelicula.titulo...)
  cargaInicial();


  function cargaInicial(){
    if(listaPelicula.length > 0){
      listaPelicula.map((pelicula, posicion)=> crearFila(pelicula, posicion + 1) )
    }
  }
  
  function crearFila(pelicula, fila){
    console.log(pelicula)
    let tablaPelicula = document.getElementById('tablaPelicula');
    tablaPelicula.innerHTML += `<tr>
    <th scope="row">${fila}</th>
    <td>${pelicula.titulo}</td>
    <td class="my-class text-truncate truncateWidth">${pelicula.descripcion}</td>
    <td class="my-class text-truncate truncateWidth">${pelicula.imagen}</td>
    <td>${pelicula.genero}</td>
    <td>
      <button class="btn btn-warning" onclick="prepararPelicula('${pelicula.codigo}')">
        <i class="bi bi-pencil-square"></i>
      </button>
      <button class="btn btn-danger" onclick="borrarPelicula('${pelicula.codigo}')">
        <i class="bi bi-x-square"></i>
      </button>
    </td>
  </tr>`
  }
    
  // manejador de eventos
  formularioPeliculas.addEventListener("submit", prepararFormularioPelicula);
  btnCrearPelicula.addEventListener("click", desplegarModalPelicula)

  //funciones
  function desplegarModalPelicula() {
    limpiarFormulario();
    altaPelicula = true;
    modalEditar.show();
  }


  function prepararFormularioPelicula(e) {
    e.preventDefault();
    console.log("si funciona perro");
    if (altaPelicula) {
      crearPelicula();
    }else{
      editarPelicula();
    }
    
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
    guardarEnLocalstorage();
    console.log(guardarEnLocalstorage);
    // Dibujas la fila en la tabla 
    crearFila(peliculaNueva, listaPelicula.length)
    
    // mostrar mensaje intuitivo 
    Swal.fire(
      '¡Pelicula creada!', // titulo
      '¡La pelicula fue creada exitosamente!', // descripcion rapida
      'success' //icono
    )
    
    limpiarFormulario();
}


      // Mostrar mensaje de error al usuario
  }

  function mostrarMensajeError(resumen) {
    if (resumen.length > 0) {
      alert.className = "alert alert-danger mt-3";
      alert.innerHTML = resumen;
    } else {
      alert.className = "alert alert-danger mt-3 d-none";
    }
  }
  
  function guardarEnLocalstorage(){
    localStorage.setItem('listaPelicula', JSON.stringify(listaPelicula));
  }
  
  function limpiarFormulario(){
    formularioPeliculas.reset();
  }

  window.borrarPelicula = (codigo) => {

    // 5- mostrar un cartel al usuario
    Swal.fire({
      title: '¿Estás seguro que quieres borrar?',
      text: "¡No podremos recuperar los datos!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar.',
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        // codigo cuando borro


        console.log(codigo);
        // 1- buscar del array en que ubicacion esta el elemento que tiene el codigo
        let posicionPelicula = listaPelicula.findIndex((pelicula)=> pelicula.codigo === codigo);
    
        // 2- borrar la pelicula del array (splice)
        listaPelicula.splice(posicionPelicula, 1)
    
        // 3- Actualizar localStorage
        guardarEnLocalstorage();
    
        // 4- Borrar fila de la tabla
        let tablaPelicula = document.getElementById("tablaPelicula")
        tablaPelicula.removeChild(tablaPelicula.children[posicionPelicula])
        // console.log(posicionPelicula);
        // console.log(tablaPelicula.children[posicionPelicula]);
   
        // 5- mostrar un cartel al usuario
        Swal.fire(
          '¡Pelicula Eliminada!',
          'La pelicula fue eliminada correctamente.',
          'success'
        )
        //TODO actualizar elementos array en la tabla
      }
    })

 
  }

  window.prepararPelicula = (codigoPelicula) => {
    console.log(codigoPelicula)
    // Tener los datos de la pelicula y cargarlo en el formulario
    const peliculaBuscada = listaPelicula.find((pelicula)=> pelicula.codigo === codigoPelicula)
    console.log(peliculaBuscada);
    // Mostrar la Ventana Modal
    codigo.value = peliculaBuscada.codigo;
    titulo.value = peliculaBuscada.titulo;
    descripcion.value = peliculaBuscada.descripcion;
    genero.value = peliculaBuscada.genero;
    imagen.value = peliculaBuscada.imagen;
    pais.value = peliculaBuscada.pais;
    anio.value = peliculaBuscada.anio;
    reparto.value = peliculaBuscada.reparto;
    duracion.value = peliculaBuscada.duracion;

    modalEditar.show();
    // Cambiamos el valor de la variable booleana "altaPelicula"
    altaPelicula = false;
  }

  function editarPelicula() {
    console.log("Aqui tengo que editar");
    //* PASO 1: Buscar la posicion de la pelicula en el array
    let posicionPelicula = listaPelicula.findIndex((pelicula)=> pelicula.codigo === codigo.value)
    console.log(posicionPelicula);
    //TODO  validar los datos

    //* PASO 2: Editar los valores de la pelicula dentro del array
    listaPelicula[posicionPelicula].titulo = titulo.value;
    listaPelicula[posicionPelicula].imagen = imagen.value;
    listaPelicula[posicionPelicula].descripcion = descripcion.value;
    listaPelicula[posicionPelicula].genero = genero.value;
    listaPelicula[posicionPelicula].pais = pais.value;
    listaPelicula[posicionPelicula].anio = anio.value;
    listaPelicula[posicionPelicula].reparto = reparto.value;
    listaPelicula[posicionPelicula].duracion = duracion.value;

    //* PASO 3: Actualizar localStorage
    guardarEnLocalstorage();

    //* PASO 4: Actualizar la fila
    let tablaPelicula = document.getElementById('tablaPelicula');
    // Accedemos al td de la posicion 1, de la tabla a actualizar
    console.log(tablaPelicula.children[posicionPelicula].children[1]);
    tablaPelicula.children[posicionPelicula].children[1].innerHTML = titulo.value;
    tablaPelicula.children[posicionPelicula].children[2].innerHTML = descripcion.value;
    tablaPelicula.children[posicionPelicula].children[3].innerHTML = imagen.value;
    tablaPelicula.children[posicionPelicula].children[4].innerHTML = genero.value;

    //* PASO 5: Mostrar un cartel confirmando la edicion al usuario

    Swal.fire(
      '¡Pelicula modificada!', // titulo
      '¡La pelicula fue editada exitosamente!', // descripcion rapida
      'success' //icono
    )

    //* PASO 6: Limpiar el formulario y cerrar el Modal

    limpiarFormulario();
    modalEditar.hide();

  }