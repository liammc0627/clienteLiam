let veces = [];
for (let i = 0; i < 10; i++) {
  veces[i] = 0;
}
for (let i = 0; i < 10000; i++) {
  let numero = Math.floor(Math.random() * 10);
  veces[numero]++;
}
for (let i = 0; i < veces.length; i++) {
  console.log((i + 1) + ":" + veces[i]);
}