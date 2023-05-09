let listaPelicula = JSON.parse(localStorage.getItem("listaPelicula")) || []; // Si tengo peliculas almacenadas en el array las transformo en tipo Pelicula

//   console.log(listaPelicula);
//! Mostrar Peliculas en INDEX

//* Tomando el indice de listaPelicula, dibujamos las peliculas en el index
listaPelicula.map((pelicula) => mostrarPeliculaIndex(pelicula));

function mostrarPeliculaIndex(pelicula) {
  let indexPelicula = document.getElementById("peliculaContainer");
  indexPelicula.innerHTML += `<div class="col">
    <div class="card h-100">
      <img src=" ${pelicula.imagen} " class="card-img-top h-75 img-fluid" alt=" ${pelicula.titulo}">
      <div class="card-body d-flex flex-column justify-content-between">
        <h5 class="card-title">${pelicula.titulo}</h5>
        <button class="btn btn-outline-primary" onclick="navegarPaginaDetalle('${pelicula.codigo}')">Ver detalle</button>
      </div>
    </div>
  </div>
    `;
}

function navegarPaginaDetalle(codigo) {
  console.log(codigo);
  console.log(window.location);
  // Nombre de dominio/pages/detalle.html
  console.log(window.location+'/pages/detalle.html');
  console.log(window.location.origin+"/pages/detalle.html");
  window.location.href = window.location.origin+'/pages/detalle.html?codigo='+codigo;
}