function validarCantidadCaracteres(texto,min,max) {
    if (texto.length >= min && texto.length <= max) {
        console.log("la palabra es valida");
        return true;
    }else{
        console.log("la palabra es incorrecta");
        return false;
    }
}

function resumenValidaciones(titulo) {
    let resumen = '';
    if (! validarCantidadCaracteres(titulo,2,100)) {
        // Si no se cumplio la validacion
        resumen = "El titulo debe contener entre 2 y 100 caracteres"
    }
    return resumen;
}