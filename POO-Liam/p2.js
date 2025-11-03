class Ordenador{
    constructor(marca, modelo, memoria=4, capacidad=512, pulgadas=17){
        this.marca=marca;
        this.modelo=modelo;
        this.memoria=memoria;
        this.capacidad=capacidad;
        this.pulgadas=pulgadas;
    }
    toString() {
        return "El ordenador "+this.marca+"-"+this.modelo+" con "+this.memoria+" GB de RAM y "+this.capacidad+" GB de almacenamiento, tiene "+this.pulgadas+" pulgadas";
    }
}
class Autonomia extends Ordenador{
    constructor(marca, modelo, memoria=4, capacidad=512, pulgadas=17,autonomia=4){
        super(marca, modelo, memoria, capacidad, pulgadas);
        this.autonomia=autonomia;
    }
    toString() {
        return "El ordenador "+this.marca+"-"+this.modelo+" con "+this.memoria+" GB de RAM y "+this.capacidad+" GB de almacenamiento, tiene "+this.pulgadas+" pulgadas, y una autonomia de "+this.autonomia+ " horas";
    }
}
Ord1 = new Ordenador('Asus', 'Model23',11);
Ord2 = new Autonomia('Asus', 'Model23',12 ,12,12,10);
document.getElementById("salida").innerHTML +=Ord1.toString();
document.getElementById("salida2").innerHTML +=Ord2.toString();