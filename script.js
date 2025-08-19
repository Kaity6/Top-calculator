let buttons = document.getElementById("buttons")

for (let i = 0; i < 10; i++) {
    let madeButton = document.createElement("button")
    madeButton.innerText = i
    madeButton.classList.add("button")
    madeButton.setAttribute("id", `button${i}`)
    buttons.appendChild(madeButton)
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

plus.addEventListener("click", () => {
    operation = "+"
    storeCondition = true;
    console.log("meow")
})

buttons.addEventListener("click", () => {
    previousResult = result;
    screen.innerText = result;
})

if (storeCondition) {
    buttons.addEventListener("click", () => {
        newResult = result
        result = `${previousResult} ${operator} ${newResult}`
        console.log(result)
        storeCondition = false
    })
} else {
    
    previousResult = result;
    screen.innerText = result;
    
}