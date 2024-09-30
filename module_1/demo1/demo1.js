//équivalent du println pour la console
console.log("Hello World !")


let sayan = "Goku";
console.log(sayan)

//tableaux
let sayans = ["Gohan", "Vegeta", "Broly", "Trunks"];
let badGuy = "Freezer";
let nbDragonBall = 7;

//changement de type
nbDragonBall = "Coucou";
console.log(sayans)

//vérification du type
console.log(typeof badGuy)
console.log(typeof nbDragonBall)

displaySeparator()

//for
for (let i = 0; i < sayans.length; i++) {
    console.log(sayans[i]);
}

displaySeparator('123')

//for each
for (let sayan of sayans) {
    console.log(sayan);
}


nbDragonBall = '7';
//condition === pour tester valeur et type
if (nbDragonBall === 7) {

    console.log("Shenron !")
}

//fonction de séparation
function displaySeparator(nb = 1) {
    for (let i = 1; i <= nb; i++) {
        console.log("---------------------")
    }
}

displaySeparator()

//fonction anonyme
const kamehameha = function () {
    console.log("Goku gagne le combat !");
}

kamehameha()

//fonction fléchée
const goToFly = () => {
    return "Je vole !";
}
console.log(goToFly())

displaySeparator();
//Ne pas oublier le ; avant ce type d'appel
//fonction auto-appelante
(function (name) {
    // console.log(name + " gagne le combat !");
    console.log(`${name} gagne le combat !`);
})("Sylvain")



