const display = document.getElementById('display')
const equal = document.getElementById('equal')
const operations = document.querySelectorAll('.operation')
const numbers = document.querySelectorAll('.btn-number')

const calcData = {
  firstNumber: "",
  secondNumber: "",
  isSecondNumber: false,
  currentOperation: null,
  result: 0
}

const operationsData = {
  'add': function(a,b) {
    return a + b
  },
  'subs': function(a,b) {
    return a - b
  },
  'multi': function(a,b) {
    return a * b
  }, 
  'div': function(a,b) {
    return a / b
  }
}

function operation(firstNumber, secondNumber, operation) {
  const transformedNumber = parseFloat(firstNumber)
  const transformedSecondNumber = parseFloat(secondNumber)
  const result = operationsData[operation](transformedNumber, transformedSecondNumber)
  display.innerText = result
  calcData.firstNumber = result.toString()
  calcData.secondNumber = ""
  calcData.isSecondNumber = true
  calcData.currentOperation = null
}

numbers.forEach(number => {
  number.addEventListener('click', (evt) => {
    const num = evt.target.dataset.number
    if (calcData.isSecondNumber) {
      calcData.secondNumber += num
      display.innerText = calcData.secondNumber
    } else {
      calcData.firstNumber += num
      display.innerText = calcData.firstNumber
    }
  })
})

operations.forEach(operation => {
  operation.addEventListener('click', (evt) => {
    if (calcData.isSecondNumber !== true) calcData.isSecondNumber = true
    if (calcData.currentOperation == null) {
      const oper = evt.target.dataset.operation
      calcData.currentOperation = oper
      display.innerText = 0
    }
  })
})

equal.addEventListener('click', () => {
  if (calcData.currentOperation !== null && calcData.secondNumber !== "") {
    operation(calcData.firstNumber, calcData.secondNumber, calcData.currentOperation)
  }
})