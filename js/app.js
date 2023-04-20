// Lectura del localStorage, pasando de json al tipo de valor anterior, o usar el valor x defecto "dark"
let temaConfigurado = JSON.parse(localStorage.getItem("theme")) || "dark";
cambiarTema(temaConfigurado);

let botonThemeLight = document.getElementById("btnThemeLight");
let botonThemeDark = document.getElementById("btnThemeDark");

botonThemeDark.addEventListener("click", ()=> cambiarTema("dark"));
botonThemeLight.addEventListener("click", ()=> cambiarTema("Light"));
function cambiarTema(color) {
    // Acceder a los atributos del objeto HTML
    document.querySelector('html').setAttribute("data-bs-theme", color)

    //cambiar atributo data-bs-theme= "light o dark"
    console.log(color);
    // guardar en LocalStorage
    localStorage.setItem("theme",JSON.stringify(color));

}
