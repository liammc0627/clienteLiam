let parar=true;
const respuestas = new Map();
do {
   let respuesta =prompt('Escribe algo ');
    console.log(respuesta);
    
    if(respuesta === ''){
        parar=false;
        console.log('mal');
    }else{
        parar=true; 
        console.log('bien');
        numeroRespuestas(respuesta);
    }
} while (parar==true);
let resultado="";
respuestas.forEach((cantidad, palabra) => {
  resultado += palabra + ":" + cantidad;
});
document.getElementById('map').innerHTML =  resultado; 
function numeroRespuestas(respuesta){
    if(respuestas.has(respuesta)){
    respuestas.set(respuesta, respuestas.get(respuesta) + 1);
} else {
    respuestas.set(respuesta, 1);
}
    
}