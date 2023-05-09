console.log(window.location.search);

const parametroURL = new URLSearchParams(window.location.search);
console.log(parametroURL);
console.log(parametroURL.get('codigo'));

//TODO Hacer el read de la peli 

let listaPelicula = JSON.parse(localStorage.getItem("listaPelicula")) || []; // Si tengo peliculas almacenadas en el array las transformo en tipo Pelicula

//* Buscar la pelicula que necesito

const peliculaBuscada = listaPelicula.find((pelicula)=> pelicula.codigo === parametroURL.get("codigo"));

// Dibujar la card 

let seccion = document.querySelector("#seccionDetalle");
seccion.innerHTML = `<article class="row border rounded-4">
<aside class="col-12 col-md-3 my-3 text-center text-md-start">
  <img src="${peliculaBuscada.imagen}" alt="${peliculaBuscada.titulo}" class="img-fluid">
</aside>
<aside class="col-12 col-md-9 my-3">
  <h3> ${peliculaBuscada.titulo} </h3>
  <p>${peliculaBuscada.descripcion}</p>
  <h6>Genero:${peliculaBuscada.genero}</h6>
  <h6>Año: ${peliculaBuscada.anio}</h6>
  <h6>Duracion: ${peliculaBuscada.duracion}</h6>
  <h6>Pais: ${peliculaBuscada.pais}</h6>
  <h6>Reparto:${peliculaBuscada.reparto}</h6>
</aside>
</article>

`