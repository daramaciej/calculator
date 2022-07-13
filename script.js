let firstOperand = ''
let currentOperand = ''
let currentOperation = null

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]');
const display = document.getElementById("display")
const clearButton = document.querySelector('[data-clear]')
const equalsButton = document.querySelector('[data-equals]')

function appendNumber(number) {
    display.textContent += number
    currentOperand = display.textContent
}

function clearDisplay() {
    display.textContent = ''
}

function add(a, b) {
    return a + b
}

function setOperation(operation) {
    if(currentOperation !== null) operate()
    firstOperand = display.textContent
    currentOperation = operation
    clearDisplay()
}


function operate() {    
    a = Number(firstOperand)
    b = Number(currentOperand)
    result = ''

    console.log(currentOperation)
    console.log(firstOperand)
    console.log(currentOperand)
    switch(currentOperation) {
        case '+':
            result = add(a, b)
    }
    display.innerHTML = result
}

numberButtons.forEach(button => 
    button.addEventListener('click', () => appendNumber(button.textContent))
)

operationButtons.forEach(button =>
    button.addEventListener('click', () => setOperation(button.textContent))
)

clearButton.addEventListener('click', () => clearDisplay())

equalsButton.addEventListener('click', () => operate())

/**
 * - wybieramy 2
 * - wybieramy operator (zapisuje 2 w zmiennej i operator w zmiennej)
 * - wybieramy 2
 * - wybieramy operator (sprawdzamy czy jest zapisana jakas liczba w poprzedniej zmiennej
 *      ** jesli jest to wykoujemy operacje
 */





