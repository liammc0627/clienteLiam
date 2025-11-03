class Rectangulo {
    constructor(width, height) {
        if (width <= 0) {
            this.width = 1;
        } else {
            this.width = width;
        }

        if (height <= 0) {
            this.height = 1;
        } else {
            this.height = height;
        }
    }

    cambiarDimensiones(num1, num2) {
        if (num1 <= 0) {
            this.width = 1;
        } else {
            this.width = num1;
        }

        if (num2 <= 0) {
            this.height = 1;
        } else {
            this.height = num2;
        }
    }

    calcularArea() {
        return this.width * this.height;
    }

    copia() {
        return new Rectangulo(this.width, this.height);
    }

    comparar(rectangulo) {
        if (rectangulo.calcularArea() > this.calcularArea()) {
            return 'mayor';
        } else if (rectangulo.calcularArea() == this.calcularArea()) {
            return 'igual';
        } else {
            return 'menor';
        }
    }
}

const Rec1 = new Rectangulo(20, 20);
const Rec2 = new Rectangulo(10, 10);

console.log(Rec1.comparar(Rec2));
console.log(Rec1.copia());
Rec1.cambiarDimensiones(3, 3);

document.getElementById("salida").innerHTML += 
    Rec1.width + " de width " + Rec1.height + " de height " + Rec1.calcularArea();
