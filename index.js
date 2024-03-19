const form = document.querySelector('form');
const finalResult = document.querySelector('.resultado');

const listcard1 = document.querySelectorAll('.lista1')
const listcard2 = document.querySelectorAll('.lista2')
const listcard3 = document.querySelectorAll('.lista3')
const listcard4 = document.querySelectorAll('.lista4')

const respostasCorretas = ['V', 'V', 'V', 'V']

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

selectedCard(listcard1)
selectedCard(listcard2)
selectedCard(listcard3)
selectedCard(listcard4)

form.addEventListener('submit', event => {
    event.preventDefault()

    let score = 0
    const respostaDoUsuario = [
        form.inputQuestao1.value,
        form.inputQuestao2.value,
        form.inputQuestao3.value,
        form.inputQuestao4.value
    ]

    respostaDoUsuario.forEach((resposta, index) => {
        if (resposta === respostasCorretas[index]) {
            score += 25
        }
    })

    scrollTo(0, 0)

    finalResult.classList.remove('esconder')
    
    let counter = 0
    
    const timer = setInterval(() => {
        if (counter === score){
            clearInterval(timer)
        }

        finalResult.querySelector('span').textContent = `${counter}%`
        counter++
    }, 30)
})

