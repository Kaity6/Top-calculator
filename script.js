let buttons = document.getElementById("buttons")

for (let i = 0; i < 10; i++) {
    let madeButton = document.createElement("button")
    madeButton.innerText = i
    madeButton.classList.add("button")
    buttons.appendChild(madeButton)
}