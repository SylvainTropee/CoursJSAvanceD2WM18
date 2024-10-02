export class Quiz{

    #questions
    #score
    #index

    constructor() {
        this.#questions = []
        this.#score = 0
        this.#index = 0
    }


    addQuestion(question){
        this.#questions.push(question)
    }

    displayQuestion(question){
        //si j'ai passé la dernière question j'affiche le résultat
        if(this.#index >= this.#questions.length){
            this.showResult()
        }else{
            //sinon j'affiche la question
            document.getElementById('quiz').innerHTML = ""
            document.getElementById('quiz').append(question.getQuestionView())
        }
    }

    checkAnswer() {

        //récupération de la valeur du radio bouton sélectionné
        const selectedRadioValue = document.querySelector('input[type=radio]:checked').value

        if (selectedRadioValue == this.#questions[this.#index].correctAnswerIndex) {
            this.#score++
        }

        this.#index++
        this.displayQuestion(this.#questions[this.#index]);
    }

    showResult(){

        document.getElementById('quiz').innerHTML = ""
        document.getElementById('quiz').innerText = `Score ${this.#score} / ${this.#questions.length}`

    }



}