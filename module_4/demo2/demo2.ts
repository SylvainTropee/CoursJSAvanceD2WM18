class Car {
    public nbWheel : number = 4;

    constructor(private brand: string, private color: string) {
    }

    public display() {
        console.log(`La voiture est de la marque ${this.brand} et est ${this.color}`);
    }
}

class Ford extends Car{

    constructor(color : string, private model : string) {
        super("Ford", color);
    }

    display() {
        super.display();
        console.log(`Le modele est ${this.model}`);
    }
}

let c = new Car("Dacia", "Blanche");
c.display();

let f = new Ford("Bleue", "Fiesta")
f.display()