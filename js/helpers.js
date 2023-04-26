

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
// (http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png) //! EXPRESION REGULAR

function validarUrlImagen(imagen) {
    
}


//TODO  Exportamos la funcion que necesitados a admin.js
export function resumenValidaciones(titulo, descripcion) {
    let resumen = '';
    if (! validarCantidadCaracteres(titulo,2,100)) {
        // Si no se cumplio la validacion
        resumen = "El titulo debe contener entre 2 y 100 caracteres.<br>"
    }
    if (! validarCantidadCaracteres(descripcion,5,300)) {
        // Si no se cumplio la validacion
        resumen += "El titulo debe contener entre 5 y 300 caracteres.<br>"
    }
    return resumen;
}