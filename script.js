let buttons = document.getElementById("buttons")
let numbers = document.getElementById("numbers")
for (let i = 0; i < 10; i++) {
    let madeButton = document.createElement("button")
    madeButton.innerText = i
    madeButton.classList.add("button")
    madeButton.setAttribute("id", `button${i}`)
    numbers.appendChild(madeButton)
}

let result = 6;
let storeCondition = false;
let screen = document.getElementById("screen")
screen.innerText = result


// buttons.addEventListener("click", () => {
//     screen.innerText = result;
//     storeCondition = false;
// })


let AC = document.getElementById("AC")
AC.addEventListener("click", function () {
    result = 0
    screen.innerText = result
})


let button0 = document.getElementById("button0")
let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")
let button3 = document.getElementById("button3")
let button4 = document.getElementById("button4")
let button5 = document.getElementById("button5")
let button6 = document.getElementById("button6")
let button7 = document.getElementById("button7")
let button8 = document.getElementById("button8")
let button9 = document.getElementById("button9")

button1.addEventListener("click", function () {
    result = 1
})
button2.addEventListener("click", function () {
   
   result = 2 
   
})
button3.addEventListener("click", function () {
   
   result = 3
})
button4.addEventListener("click", function () {
    result = 4
})
button5.addEventListener("click", function () {
    result = 5
})
button6.addEventListener("click", function () {
  result =  6
})
button7.addEventListener("click", function () {
   result = 7
})
button8.addEventListener("click", function () {
   result = 8
})
button9.addEventListener("click", function () {
    result = 9
})
button0.addEventListener("click", function () {
   result = 0
})

let previousResult;
let operator;
let newResult;
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let multiply = document.getElementById("multiply")
let divide = document.getElementById("divide")


plus.addEventListener("click", () => {
    storeCondition = true;
    previousResult = result;
    operator = "+"
})

minus.addEventListener("click", () => {
    storeCondition = true;
    previousResult = result;
    operator = "-"
})


multiply.addEventListener("click", () => {
    storeCondition = true;
    previousResult = result;
    operator = "*"
})

divide.addEventListener("click", () => {
    storeCondition = true;
    previousResult = result;
    operator = "/"
})



numbers.addEventListener("click", () => {if (storeCondition) {

        newResult = result
        
            if (operator === "+") {
                result = previousResult + newResult
            } else if (operator === "-") {
                result = previousResult - newResult
            } else if (operator === "*") {
                result = previousResult * newResult
            } else {
                result = previousResult / newResult
            }

        storeCondition = false
        screen.innerText = result
} else {
    
    previousResult = result;
    screen.innerText = result;
    
}
})

console.log(storeCondition)

