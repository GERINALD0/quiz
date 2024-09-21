const form = document.querySelector('form');
const finalResult = document.querySelector('.resultado');
const listCard1 = document.querySelectorAll('.lista1')
const listCard2 = document.querySelectorAll('.lista2')
const listCard3 = document.querySelectorAll('.lista3')
const listCard4 = document.querySelectorAll('.lista4')

const correctaAnswers = ['V', 'V', 'V', 'V']

let score = 0

const getUserAnswers = () => correctaAnswers.map((_, index) => 
    form[`inputQuestao${index + 1}`].value)

const calculateUserScore = userAnswers => {
    userAnswers.forEach((userAnswer, index) => {
        const isUserAnswerCorrect = userAnswer === correctaAnswers[index]

        if (isUserAnswerCorrect) {
            score += 25
        }
    })
}

const showFinalScore = () => {
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
    finalResult.classList.remove('esconder')
}

const animateFinalScore = () => {
    let counter = 0
    
    const timer = setInterval(() => {
        if (counter === score){
            clearInterval(timer)
        }

        finalResult.querySelector('span').textContent = `${counter++}%`
    }, 20)
}

const resetScore = () => {
    score = 0
}

form.addEventListener('submit', event => {
    event.preventDefault()

    const userAnswers = getUserAnswers()

    resetScore()
    calculateUserScore(userAnswers)
    showFinalScore()
    animateFinalScore()
})

const selectedCard = listCards => {
    listCards.forEach(cards => {
        cards.addEventListener('click', () => {
            listCards.forEach(card => {
                card.classList.remove('selecionado')
            })

            cards.classList.add('selecionado')
        })
    })
}

selectedCard(listCard1)
selectedCard(listCard2)
selectedCard(listCard3)
selectedCard(listCard4)