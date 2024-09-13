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
    return round(a/b)
}


const numDisplay = document.querySelector(".display")

const numOne = document.querySelector(".one")
const numTwo = document.querySelector(".two")


numOne.addEventListener("click", () => {
    numDisplay.textContent = numOne.textContent
})

numTwo.addEventListener("click", () => {
    numDisplay.textContent = numTwo.textContent
})


/*function updateDisplay(numClicked){
    if (numDisplay.textContent == 0){
        numDisplay.textContent = numClicked.textContent
    } else {
        numDisplay.textContent + numClicked.textContent
    }
}*/