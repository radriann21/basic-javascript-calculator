export const calcData = {
  firstNumber: "",
  secondNumber: "",
  isSecondNumber: false,
  currentOperation: null,
  result: 0
}

export const operationsData = {
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