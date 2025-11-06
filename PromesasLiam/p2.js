function primeraTarea(){
    return new Promise((resolve,reject)=>{
        resolve(10)
    });
}

function segundaTarea(primeraTarea){
    return new Promise((resolve, reject) => {
        resolve(primeraTarea*2)
    })
}

function terceraTarea(segundaTarea){
    return new Promise((resolve,reject)=>{
        resolve(segundaTarea+5)
    });
}
primeraTarea()
.then((respuesta)=>{
    console.log(respuesta);
    return segundaTarea(respuesta);
})
.then((respuesta2)=>{
    console.log(respuesta2);
    return terceraTarea(respuesta2);
})
.then((respuesta3)=>{
    console.log(respuesta3);
})
.catch((error)=>{
    console.error(error);
});