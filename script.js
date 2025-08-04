let buttons = document.getElementById("buttons")

for (let i = 0; i < 10; i++) {
    let madeButton = document.createElement("button")
    madeButton.innerText = i
    madeButton.classList.add("button")
    madeButton.setAttribute("id", `button${i}`)
    buttons.appendChild(madeButton)
}
let result = 6
let screen = document.getElementById("screen")
screen.innerText = result

buttons.addEventListener("click", () => {
    screen.innerText = result;
})


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
