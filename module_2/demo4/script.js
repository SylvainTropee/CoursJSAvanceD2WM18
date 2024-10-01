class Wizard{

    #name
    #skills
    #age
    _color

    constructor(name, skills, age = 123) {
        this.#name = name;
        this.#skills = skills;
        this.#age = age;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get skills() {
        return this.#skills;
    }

    set skills(value) {
        this.#skills = value;
    }

    get age() {
        return this.#age;
    }

    set age(value) {
        this.#age = value;
    }


}

let michel = new Wizard('michel', ['feu'], 456)
let robert = new Wizard('robert', ['feu'])

console.log(michel.age)
console.log(robert.age)

//Fonctionnalités ES6
// _ séprateur numérique
const billion = 1_000_000_000;
console.log(billion)

let user = {
    name : 'Michel',
    adress : null
}

//?. teste la nullité pour éviter le nullPOinterException
//?? si null donne une valeur par défaut
console.log(user.adress?.street ?? 'rue des acacias')

let tab = [1,2,3];
let tab2 = [4,5,6];

//... permet d'étaler un tableau
tab.push(...tab2);

console.log(tab)








