let winArray = [];
let loseArray = [];
let commanArray = [];
let roundResult = [];


function below7() {

    let h1 = document.querySelector(".resultParent")

    let below7Value = [1, 2, 3, 4, 5, 6]
    let randomNumber = Math.ceil(Math.random() * 12)

    h1.innerHTML = `<h1 class="result"> Computer Number: ${randomNumber}</h1>`

    for (let i = 0; i < below7Value.length; i++) {
        if (below7Value[i] === randomNumber) {
            win(below7Value[i])
            break;
        }
        if (randomNumber > 6) {
            lose(below7Value[i])
            break;
        }
    }

    commanArray.push(1)
    roundCountProgram()
}

function lucky7() {

    let h1 = document.querySelector(".resultParent")

    let lucky7 = 7
    let randomNumber = Math.ceil(Math.random() * 12)

    h1.innerHTML = `<h1 class="result"> Computer Number: ${randomNumber}</h1>`

    if (lucky7 === randomNumber) {
        win(lucky7)
    } else {
        lose(lucky7)
    }
    commanArray.push(1)
    roundCountProgram()
}

function Above7() {

    let h1 = document.querySelector(".resultParent")

    let below7Value = [8, 9, 10, 11, 12]
    let randomNumber = Math.ceil(Math.random() * 12)

    h1.innerHTML = `<h1 class="result"> Computer Number: ${randomNumber}</h1>`

    for (let i = 0; i < below7Value.length; i++) {
        if (below7Value[i] === randomNumber) {
            win(below7Value[i])
            break;
        }
        if (randomNumber < 8) {
            lose(below7Value[i])
            break;
        }
    }
    commanArray.push(1)
    roundCountProgram()
}

function win(value) {

    roundResult.push(`You Win  Your Number: ${value}`)


    winArray.push(1)
    console.log(winArray)
    round()
    roundResultWork()
}

function lose(value) {

    roundResult.push(`You Lose  Your Number: ${value}`)

    loseArray.push(2)
    console.log(loseArray)
    round()
    roundResultWork()
}

function round() {

    let child = document.querySelector(".child")
    let childWork = document.querySelector(".module")
    let booo = document.querySelector(".booo")


    if (winArray.length == 2) {

        child.className = "hello"

        booo.className = "check"

        childWork.innerHTML += `
        <h1 class="loseWork">congratulation You Win</h1>
        <div class="startBtnParent">
        <button onclick="start()" class="btnn">Play again</button>
        </div>
        `
    }
    if (loseArray.length == 2) {

        child.className = "hello"
        childWork.innerHTML += `
        <h1 class="loseWork">You Lose..</h1>
        <div class="startBtnParent">
          <button onclick="start()" class="btnn">Try again</button>
        </div>
        
        `
    }
}

function roundCountProgram() {
    let roundCount = document.querySelector(".roundCount")

    roundCount.innerText = `${commanArray.length} Round`
}

function roundResultWork() {
    let h1 = document.querySelector(".round")

    h1.innerHTML = ""
    roundResult.map((item) => {
        h1.innerHTML += `${item} <br>`
    })
}

function start() {
    window.location.href="./instar.html"
}