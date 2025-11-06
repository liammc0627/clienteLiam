function ejecutarOpcion() {
  const opcion = document.getElementById("menu").value;
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (opcion === "saludar") {
    resultado.textContent = "hola";
  } 
  else if (opcion === "caja") {
    const caja = document.createElement("div");
    caja.textContent = "nueva caja";
    caja.style.backgroundColor = "red";
    resultado.appendChild(caja);
  } 
  else if (opcion === "aleatorio") {
    const numero = Math.floor(Math.random() * 100) + 1;
    resultado.textContent = "numero random " + numero;
  } 
  else {
    resultado.textContent = "selecciona una opcion valida";
  }
}

function restablecer() {
  document.getElementById("menu").value = "";
  document.getElementById("resultado").innerHTML = "";
}