//importer le dictionnaire
import {dico} from "./dico.js";

let randomWord = getRandomWord();
let nbAttempt = 5;

console.log(randomWord)

//choisir un mot aléatoire du dico
function getRandomWord() {
    //tire un nombre entier compris entre 0 et la taille du dico
    let randomNumber = Math.floor(Math.random() * dico.length)
    return dico[randomNumber];
}

//afficher le mot masqué dans le DOM  + nombre de tentatives
function displayHiddenWordAndAttemptCount() {
    //le mot
    let hiddenWord = randomWord.replace(/[A-Z]/g, "_")
    document.getElementById('hiddenWord').innerText = hiddenWord
    //les tentatives
    document.getElementById('attemptCount').innerText = nbAttempt
}

//afficher le clavier de lettres
function displayAlphabet() {
    //65 = A à Z = 90 afin de d'afficher l'alphabet
    for (let i = 'A'.charCodeAt(0); i <= 90; i++) {
        const button = document.createElement('button');
        const letter = String.fromCharCode(i);

        button.innerText = letter
        button.value = letter

        //ajout de l'évènement sur le bouton qui permet de vérifier la lettre
        button.addEventListener('click', checkLetterAndUpdateGame)

        document.getElementById('alphabetContainer').append(button);
    }
}

//vérification de la lettre/ avec modification du mot caché / décrémenter les tentatives si mauvaise lettre
function checkLetterAndUpdateGame(event) {
    //récupération de l'élément cliqué à partir de l'event
    const letter = event.currentTarget.value;

    let domHiddenWord = document.getElementById('hiddenWord').innerText
    let domHiddenWordTab = domHiddenWord.split("");

    // si lettre correcte
    if (randomWord.includes(letter)) {
        for (let i = 0; i < randomWord.length; i++) {
            if (letter == randomWord[i]) {
                domHiddenWordTab[i] = letter;
                document.getElementById('hiddenWord').innerText = domHiddenWordTab.join("")
            }
        }
    }else{
        //on décrémente le compteurs
        document.getElementById('attemptCount').innerText = --nbAttempt
    }

    checkWin();
}

//vérification de la victoire/défaite / affichage du résultat
function checkWin(){
    let domHiddenWord = document.getElementById('hiddenWord').innerText

    //condition de victoire
    if(nbAttempt >= 0 && domHiddenWord == randomWord){
        alert("Bravo ! T'as winné !")
    }

    //condition de défaite
    if(nbAttempt == 0){
        alert("Dommage ! T'as loosé !")
    }

}

//recommencer le jeu
function restart(){
    document.getElementById('btnRestart').addEventListener('click', function (){
        window.location.reload()
    })
}

function init() {
    displayHiddenWordAndAttemptCount()
    displayAlphabet()
    restart();
}

window.onload = init;

