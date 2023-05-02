

function validarCantidadCaracteres(texto,min,max) {
    if (texto.length >= min && texto.length <= max) {
        console.log("la palabra es valida");
        return true;
    }else{
        console.log("la palabra es incorrecta");
        return false;
    }
}

// url de ejemplo https://pics.filmaffinity.com/maybe_i_do-982667296-large.jpg
// ^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$ //! EXPRESION REGULAR

function validarURLImagen(imagen) {
    const patron = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$/;
    if (patron.test(imagen)) {
        console.log("La url de imagen es correcta");
        return true;
    }else{
        console.log("La url de imagen es erronea");
        return false;
    }
}

function validarGenero(genero) {
    if (genero.length > 0 && (genero === "accion" || genero === "aventura" || genero === "comedia" || genero === "ciencia ficcion" || genero === "drama" || genero === "terror")) {
        return true;
    }else{
        return false;
    }
}


//TODO Agregar validaciones de: desc, pais, reparto, anio y duracion

//TODO  Exportamos la funcion que necesitados a admin.js
export function resumenValidaciones(titulo, descripcion, imagen, genero) {
    let resumen = '';
    if (! validarCantidadCaracteres(titulo,2,100)) {
        // Si no se cumplio la validacion
        resumen = "El titulo debe contener entre 2 y 100 caracteres.<br>"
    }
    if (! validarCantidadCaracteres(descripcion,5,300)) {
        // Si no se cumplio la validacion
        resumen += "La descripcion debe contener entre 5 y 300 caracteres.<br>"
    }
    if (! validarURLImagen(imagen)) {
        // Si no se cumplio la validacion
        resumen += "La url debe ser valida y contener una expresion(.jpg, .png, .gif).<br>"
    }
    if (! validarGenero(genero)) {
        // Si no se cumplio la validacion
        resumen += "Debe seleccionar un genero de la lista. <br>"
    }
    return resumen; 
}