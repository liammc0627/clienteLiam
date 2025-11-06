function sumarAsync(a, b){
    return new Promise((resolve, reject) => {
        if(typeof a === 'number' && typeof b === 'number'){
            resolve(a+b)
        }else{
            reject('Ambos tienen que ser numeros')
        }
        });
}
sumarAsync(2,7)
.then((resultado) => {
    console.log(resultado)})
.catch((error) => {
    console.log(error.message)})