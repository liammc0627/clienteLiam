for (let j = 0; j < 50; j++) {
  let numeros = [];

  while (numeros.length < 6) {
    let numero = Math.floor(Math.random() * 49) + 1;
      numeros.push(numero);
  }
  console.log(numeros.join(' '));
}
