 let precio = 100;
    const mostrar = document.getElementById("precio");

    mostrar.innerHTML = "precio " + precio;

    const cambio = setInterval(function() {
      let variacion = Math.floor(Math.random() * 2); 
      if (variacion === 0) {
        precio = precio + 5;
      } else {
        precio = precio - 5;
      }

      mostrar.innerHTML = "precio " + precio;

      if (precio >= 120) {
        mostrar.innerHTML = "precio maximo " + precio;
        clearInterval(cambio);
      } else if (precio <= 80) {
        mostrar.innerHTML = "precio minimo " + precio;
        clearInterval(cambio);
      }
    }, 1000);