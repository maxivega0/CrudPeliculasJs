let botonThemeLight = document.getElementById("btnThemeLight");
let botonThemeDark = document.getElementById("btnThemeDark");
console.log(botonThemeDark);
console.log(botonThemeLight);

botonThemeDark.addEventListener("click", ()=> cambiarTema("dark"));
botonThemeLight.addEventListener("click", ()=> cambiarTema("Light"));
function cambiarTema(color) {
    // Acceder a los atributos del objeto HTML
    document.querySelector('html').setAttribute("data-bs-theme", color)

    //cambiar atributo data-bs-theme= "light o dark"
    console.log(color);


}
