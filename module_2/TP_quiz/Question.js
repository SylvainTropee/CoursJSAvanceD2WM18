export class Question{

    #label
    #answers
    #correctAnswerIndex


    constructor(label, answers, correctAnswerIndex) {
        this.#label = label
        this.#answers = answers
        this.#correctAnswerIndex = correctAnswerIndex
    }

    getQuestionView(){
        //création des éléments HTML
        const divQuestion = document.createElement('div');
        const divAnswers = document.createElement('div')
        const pLabel = document.createElement('p')

        //ajout de l'énoncé dans la la div contenante
        pLabel.innerText = this.#label
        divQuestion.append(pLabel)

        for(let i = 0; i < this.#answers.length; i++){
            //création de l'input
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.value = i;
            radio.name = 'answer';
            radio.id = `answer-${i}`;

            //et de son label
            const label = document.createElement('label');
            label.setAttribute('for', `answer-${i}`)
            label.innerText = this.#answers[i];

            divAnswers.append(radio);
            divAnswers.append(label)
        }

        divQuestion.append(divAnswers);

        return divQuestion;
    }


    get correctAnswerIndex() {
        return this.#correctAnswerIndex;
    }
}