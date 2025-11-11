const nombreGuardado = localStorage.getItem("nombre");
const mensaje = document.getElementById("mensaje");

if (nombreGuardado != null) {
    mensaje.innerHTML = "<h1>Bienvenido" + nombreGuardado + "</h1>";
} else {
    document.getElementById("guardar").onclick = function() {
        const nombre = document.getElementById("nombre").value;
        if (nombre != "") {
            localStorage.setItem("nombre", nombre);
            contenido.innerHTML = "<h1>Bienvenido " + nombre + "</h1>";
            location.reload();
        }
    }
}
