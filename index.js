const displayBingo = function () {

    let numberContainer = document.getElementById("first-Div")

    for (let bingoNumber = 1; bingoNumber <= 76; bingoNumber++) {
    
        let newNumberBingoNode = document.createElement("span")
        newNumberBingoNode.innerText = bingoNumber
        newNumberBingoNode.classList.add("new-number")

        newNumberBingoNode.onclick = selectNumber
        
        numberContainer.appendChild(newNumberBingoNode)
    }
}

const selectNumber = function(eventData) {
    const currentlySelectedNumber = document.querySelector(".selected")

    if (currentlySelectedNumber !== null) {
        currentlySelectedNumber.classList.remove("selected")
    }
    const clickedNumberNode = eventData.target
    clickedNumberNode.classList.add("selected")
}


const getRandomNumber = function() {
    let randomNumber = Math.floor(Math.random() * 76);
    if (randomNumber == document.querySelector("div").innerHTML) {
        randomNumber.classList.add("new-number")
    }
}
getRandomNumber();

window.onload = function() {
    displayBingo()
}