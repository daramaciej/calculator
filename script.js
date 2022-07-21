let firstOperand = ''
let currentOperand = ''
let currentOperation = null
let result = 0

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]');
const display = document.getElementById("display")
const clearButton = document.querySelector('[data-clear]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')

function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return
    currentOperand = currentOperand.toString() + number.toString()
}

function updateDisplay () {
    display.textContent = currentOperand
}

function clearDisplay() {
    display.textContent = ''
}

function deleteNumber () {
    currentOperand = currentOperand.slice(0, currentOperand.length -1)
    updateDisplay()
}

function clear() {
    clearDisplay()
    firstOperand = ''
    currentOperand = ''
    currentOperation = null
}

function setOperation(operation) {
    if (currentOperand === '') {
        currentOperation = operation
        return
    }
    if (firstOperand !== null) {
        operate() 
    }
    currentOperation = operation
    firstOperand = currentOperand
    currentOperand = ''
}


function operate() {    
    a = Number(firstOperand)
    b = Number(currentOperand)
    if (isNaN(a) || isNaN(b)) return
    switch(currentOperation) {
        case '+':
            result = a + b
            break
        case '-':
            result = a - b
            break
        case '*':
            result = a * b
            break
        case '/':
            result = a / b
            break
        default:
            return
    }   
    currentOperand = Math.round(result * 100) / 100
    firstOperand = ''
    currentOperation = undefined
    updateDisplay()
}

numberButtons.forEach(button => 
    button.addEventListener('click', () => {
        appendNumber(button.textContent)
        updateDisplay()
    })
)

operationButtons.forEach(button =>
    button.addEventListener('click', () => {
        setOperation(button.textContent)
    })
)

clearButton.addEventListener('click', () => clear())

deleteButton.addEventListener('click', () => deleteNumber())

equalsButton.addEventListener('click', () => operate())



/**
 * - wybieramy 2
 * - wybieramy operator (zapisuje 2 w zmiennej i operator w zmiennej)
 * - wybieramy 2
 * - wybieramy operator (sprawdzamy czy jest zapisana jakas liczba w poprzedniej zmiennej
 *      ** jesli jest to wykoujemy operacje
 */





