function sumNums(a,b){
    return a+b
}

function subtractNums(a,b){
    return a-b
}

function multiplyNums(a,b){
    return a*b
}

function divideNums(a,b){
    return Math.round(a/b)
}

function percentOf(a,b){
    return Math.round(a%b)
}


const numDisplay = document.querySelector(".display")

const buttons = document.querySelectorAll(".num")

const operands = document.querySelectorAll(".operand")

const equals = document.querySelector(".equals")

const clear = document.querySelector(".clear")

const del = document.querySelector(".delete")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        numDisplay.textContent = numDisplay.textContent + button.textContent
    })
})

let operandArr = ["+", "-", "*", "/", "%"]

let operandVar = ""

operands.forEach(operand => {
    operand.addEventListener("click", () => {
        displayArrSplitted = numDisplay.textContent.split("")
        if (operandArr.includes(displayArrSplitted[displayArrSplitted.length - 1])){
            return
        }else{
            numDisplay.textContent = numDisplay.textContent + operand.textContent
            operandVar = ""
            operandVar = operand.textContent
        }
    })
})

equals.addEventListener("click", () => {
    displayArrSplitted = numDisplay.textContent.split("")
    let firstPart = displayArrSplitted.slice(0, displayArrSplitted.indexOf(operandVar))
    let lastPart = displayArrSplitted.slice(displayArrSplitted.indexOf(operandVar) + 1, displayArrSplitted.length)
    let numOne = parseInt(firstPart.map(Number).join(""))
    let numTwo = parseInt(lastPart.map(Number).join(""))

    if (operandVar == "+"){
        numDisplay.textContent = sumNums(numOne, numTwo)
    }else if (operandVar == "-"){
        numDisplay.textContent = subtractNums(numOne, numTwo)
    }else if (operandVar == "*"){
        numDisplay.textContent = multiplyNums(numOne, numTwo)
    }else if (operandVar == "/"){
        numDisplay.textContent = divideNums(numOne, numTwo)
    }else if (operandVar == "%"){
        numDisplay.textContent = percentOf(numOne, numTwo)
    }
    
})

clear.addEventListener("click", ()=> {
    numDisplay.textContent = ""
})

del.addEventListener("click", () => {
    displayArrSplitted = numDisplay.textContent.split("")
    displayArrSplitted.pop()
    numDisplay.textContent = displayArrSplitted.join("")
})