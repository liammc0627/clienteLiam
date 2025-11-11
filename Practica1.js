let escribe = 'escribe algo';
 let parar=true;
 let respuestas =  [];
do {
   let respuesta =prompt('Escribe algo ');
    console.log(respuesta);
    
    if(respuesta === ''){
        parar=false;
        console.log('mal');
    }else{
        respuestas.push(respuesta);
        parar=true; 
        console.log('bien');
        
    }
} while (parar==true);
const nuevaLista=new Set(respuestas);
console.log(nuevaLista);
const nuevoArray=[...nuevaLista]
ordenar(nuevoArray);
document.getElementById('array').innerHTML = nuevoArray;

function ordenar(nuevaLista){
    nuevaLista.sort();
    nuevaLista.reverse();
    return nuevaLista;
}