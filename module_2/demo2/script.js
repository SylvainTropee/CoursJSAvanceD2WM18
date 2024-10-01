
function Wizard(name, skills, age){
    this.number = age;
    this.name = name;
    this.skills = skills;
    this.spell = function (){
        return `Abracadabra ${name}`;
    }
}

let michel = new Wizard('michel', ['machin'], 123)
michel.mount = "Cheval"
let robert = new Wizard('robert', ['machin'], 123)

console.log(michel.spell())
console.log(robert.spell())

console.log(michel)
console.log(robert)
