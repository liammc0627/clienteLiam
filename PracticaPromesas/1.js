function procesarPago(producto) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (producto !== "") {
        resolve("Pago correcto " + producto);
      } else {
        reject("Error");
      }
    }, 1500);
  });
}
function enviarPedido(direccion) {
  return new Promise((resolve, reject) => {
    if (direccion === "") {
      reject("Error");
      return;
    }

    setTimeout(() => {
      const error = Math.random() < 0.2;
      if (error) {
        reject("Error");
      } else {
        resolve("Pedido enviado a " + direccion);
      }
    }, 2000);
  });
}
document.getElementById("botonCompra").addEventListener("click", () => {
  const producto = document.getElementById("producto").value;
  const direccion = document.getElementById("direccion").value;
  const resultado = document.getElementById("resultado");

  resultado.textContent = "Procesando";

  procesarPago(producto)
    .then((mensajePago) => {
      resultado.textContent = mensajePago + " Enviando pedido";
      return enviarPedido(direccion);
    })
    .then((mensajeEnvio) => {
      resultado.textContent = mensajeEnvio;
    })
    .catch((error) => {
      resultado.textContent = error;
    });
});
