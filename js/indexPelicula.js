import Pelicula from "./clasePelicula.js";

let listaPelicula =  JSON.parse(localStorage.getItem('listaPelicula')) || [];  // Si tengo peliculas almacenadas en el array las transformo en tipo Pelicula

cargaInicial();

  
if (listaPelicula.length > 0) {
  listaPelicula = listaPelicula.map((pelicula)=> new Pelicula(pelicula.codigo, pelicula.titulo, pelicula.descripcion, pelicula.imagen, pelicula.genero, pelicula.anio,pelicula.reparto, pelicula.pais, pelicula.duracion))
}

function cargaInicial(){
//   console.log(listaPelicula);
  
  if(listaPelicula.length > 0){
    listaPelicula.map((pelicula)=> mostrarPeliculaIndex(pelicula) )
  }
}

function mostrarPeliculaIndex(pelicula){
    let indexPelicula = document.getElementById("peliculaContainer");
    indexPelicula.innerHTML += `<div class="col">
    <div class="card">
      <img src=" ${pelicula.imagen} " class="card-img-top" alt=" ${pelicula.titulo} ">
      <div class="card-body">
        <h5 class="card-title">${pelicula.titulo} </h5>
        <a href="./pages/detalle.html" class="btn btn-primary">Ver detalle</a>
      </div>
    </div>
  </div>
    `
  }
