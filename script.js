let buttons = document.getElementById("buttons")

for (let i = 0; i < 10; i++) {
    let madeButton = document.createElement("button")
    madeButton.innerText = i
    madeButton.classList.add("button")
    madeButton.setAttribute("id", `button${i}`)
    buttons.appendChild(madeButton)
}
let result = 6
let b;
let screen = document.getElementById("screen")
screen.innerText = result

buttons.addEventListener("click", () => {
    screen.innerText = result;
})


let AC = document.getElementById("AC")
AC.addEventListener("click", function () {
    result = 0
})

let c = false

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
    a ? b = 1 : b = null
    console.log(b)
})
button2.addEventListener("click", function () {
    result = 2
    a ? b = 2 : b = null
})
button3.addEventListener("click", function () {
    result = 3
    a ? b = 3 : b = null
})
button4.addEventListener("click", function () {
    result = 4
    a ? b = 4 : b = null
})
button5.addEventListener("click", function () {
    result = 5
    a ? b = 5 : b = null
})
button6.addEventListener("click", function () {
    result = 6
    a ? b = 6 : b = null
})
button7.addEventListener("click", function () {
    result = 7
    a ? b = 7 : b = null
})
button8.addEventListener("click", function () {
    result = 8
    a ? b = 8 : b = null
})
button9.addEventListener("click", function () {
    result = 9
    a ? b = 9 : b = null
})
button0.addEventListener("click", function () {
    result = 0
    a ? b = 0 : b = null
})

function calc() {
    if (b) {
        result = result + b
    }
}

let plus = document.getElementById("plus")
plus.addEventListener("click", () => {
    let a = true
    calc()
})

