const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []
console.log('1999')
let questions = [
    {
        question: "when did liverpool last win the league?",
        choice1: "1999",
        choice2: "2020",
        choice3: "2016",
        choice4: "2012",
        answer: 2,
    },  
    {
        question: "which club has the most European Cup/Champions League victories?",
        choice1: "AC Milan",
        choice2: "Barcelona",
        choice3: "Real Madrid",
        choice4: "Chelsea",
        answer: 3,
    }, 
     {
        question: "How many times has Sergio Ramos been sent off in his career?",
        choice1: "26",
        choice2: "22",
        choice3: "30",
        choice4: "19",
        answer: 1,
    },
    {
        question: "Who has scored the most goals in World Cup tournaments?",
        choice1: "Messi",
        choice2: "Ronaldo",
        choice3: "klose",
        choice4: "Owen",
        answer: 3,
    },
    {
        question: "who is the Premier League's all-time top scorer?",
        choice1: "Alan shearer",
        choice2: "Thiery Henry",
        choice3: "Wayne Rooney",
        choice4: "Aguero",
        answer: 1,
    },
    {
        question: "Which team won the first Premier League title?",
        choice1: "Chelsea",
        choice2: "Liverpool",
        choice3: "Arsenal",
        choice4: "Manchester United",
        answer: 4,
    },
    {
        question: "Which player holds the record for most Champions League winners medals?",
        choice1: "Christiano Ronaldo",
        choice2: "Messi",
        choice3: "Fransisco Gento",
        choice4: "Maradona",
        answer: 3,
    },
    {
        question: "In which year did the European Championship expand from 16 teams to 24 teams?",
        choice1: "2016",
        choice2: "2002",
        choice3: "1998",
        choice4: "2012",
        answer: 1,
    },
    {
        question: "Who is the only player to win the Champions League with three different clubs?",
        choice1: "Christiano Ronaldo",
        choice2: "Clarence Seedorf",
        choice3: "pele",
        choice4: "Del Piero",
        answer: 2,
    },
    {
        question: "which goalkeeper has the best record in the Premier League?",
        choice1: "Petr Cech",
        choice2: "De Gea",
        choice3: "Joe Hart",
        choice4: "David James",
        answer: 1,
    },
]

const SCORE_POINTS = 10
const MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }
    
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 
        'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)

    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()