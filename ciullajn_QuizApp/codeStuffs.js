const startButton = document.getElementById('startButton')
const nextButton = document.getElementById('nextButton')
const questionContainerHTMElement = document.getElementById('questionContainer')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answerButtons')

let currentQuestion, shuffledQuestions

startButton.addEventListener('click', startTheGame)
nextButton.addEventListener('click', () => {
    currentQuestion++
    setupNextQuestion()
})

function startTheGame() {
    startButton.classList.add('hide')
    currentQuestion = 0
    questionContainerHTMElement.classList.remove('hide')
    setupNextQuestion()
}

function setupNextQuestion() {
    resetEverything()
    showQuestion(questions[currentQuestion])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('button')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    });
}


function resetEverything(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(e) {
    const chosenButton = e.target
    const correct = chosenButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (questions.length > currentQuestion + 1){
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: "Who transforms into the Incredible Hulk?",
        answers: [
            { text: 'Bruce Banner', correct: true },
            { text: 'Tony Stark', correct: false},
            { text: 'Steve Rogers', correct: false},
            { text: 'Wade Wilson', correct: false}
        ]
    },
    {
        question: "Who is Goku fighting against when he turns Super Saiyan for the first time?",
        answers: [
            { text: 'Cell', correct: false},
            { text: 'Majin Buu', correct: false},
            { text: 'Frieza', correct: true},
            { text: 'Beerus', correct: false}
        ]
    },
    {
        question: "What does William Wallace (Braveheart) shout right before he is killed?",
        answers: [
            { text: 'Give Me Liberty or Give Me Death!', correct: false},
            { text: 'Charge!', correct: false},
            { text: 'Attack!', correct: false},
            { text: 'Freedom!', correct: true}
        ]
    },
    {
        question: "What monster is known as the 'Thunder Wolf' in the Monster Hunter games?",
        answers: [
            { text: 'Zinogre', correct: true},
            { text: 'Lagiacrus', correct: false},
            { text: 'Alatreon', correct: false},
            { text: 'Gore Magala', correct: false}
        ]
    },
    {
        question: "What is not a story the Jedi would tell you?",
        answers: [
            { text: 'The Tale of Master Oogway the Knowledgeable', correct: false},
            { text: 'The Tale of Darth Plagueis the Wise', correct: true},
            { text: 'The Tale of Bilbo Baggins the Adventurous', correct: false},
            { text: 'The Tale of Son Goku the Strong', correct: false}
        ]
    }


]