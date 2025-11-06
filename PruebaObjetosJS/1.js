class Persona{
    constructor(nombre, edad, profesion){
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }
    presentar(){
        document.getElementById('texto').innerHTML+=('Mi nombre es '+this.nombre+' tengo '+this.edad+' años y soy '+this.profesion);
    }
    cumplirAnios(){
                document.getElementById('texto2').innerHTML+=('Ahora '+this.nombre+' tiene '+this.edad+1);
    }
}
const persona1 = new Persona('Juan', 18, 'estudiante');
persona1.presentar();
persona1.cumplirAnios();