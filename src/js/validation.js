const form = document.querySelector('.content__form')
const input = document.querySelector('.form__input')
const error = document.querySelector('.form__error')

const bannedSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']

function errorHandle(message, e) {
    error.textContent = message
    e.preventDefault()
}

function containsBanned(input){
    for (symbol of bannedSymbols) {
        if (input.includes(symbol, 0)) return true
    }
    return false;
}

function validateInput(e) {
    if (input.value === '' || input.value === null) {
        errorHandle('We can not search nothing :/ Enter something', e)
    } else if (containsBanned(input.value)) {
        errorHandle('Can not use ! @ # $ % ^ & * ( )', e)
    } else if (input.value.length < 4) {
        errorHandle('Please, enter at least 4 characters', e)
    }
}

function inputCheck() {
    form.addEventListener('submit', e => {
        validateInput(e)
    })
}

inputCheck()