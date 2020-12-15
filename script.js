let answers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let turn = "O"
let count = 0

function gameTurn(box) {
    if (document.getElementById(box).textContent == "") {
        document.getElementById(box).textContent = turn
        answers[box] = turn
        if (turn == "O") {
            turn = "X"
            count++
            document.getElementById("player").textContent = "Turn: X"
        } else if (turn == "X") {
            turn = "O"
            count++
            document.getElementById("player").textContent = "Turn: O"
        }
        winner();
        if (count == 9){
            draw()
        }
    }
    console.log(answers);
}
function winner() {
    if (answers[1] == answers[2] && answers[1] == answers [3]) {
        document.getElementById("player").textContent = `${answers[1]} Wins!`
        document.getElementById(1).classList.add("winner")
        document.getElementById(2).classList.add("winner")
        document.getElementById(3).classList.add("winner")
    }
    if (answers[4] == answers[5] && answers[4] == answers [6]) {
        document.getElementById("player").textContent = `${answers[4]} Wins!`
        document.getElementById(4).classList.add("winner")
        document.getElementById(5).classList.add("winner")
        document.getElementById(6).classList.add("winner")
    }
    if (answers[7] == answers[8] && answers[7] == answers [9]) {
        document.getElementById("player").textContent = `${answers[7]} Wins!`
        document.getElementById(7).classList.add("winner")
        document.getElementById(8).classList.add("winner")
        document.getElementById(9).classList.add("winner")
    }
    if (answers[1] == answers[4] && answers[1] == answers [7]) {
        document.getElementById("player").textContent = `${answers[1]} Wins!`
        document.getElementById(1).classList.add("winner")
        document.getElementById(4).classList.add("winner")
        document.getElementById(7).classList.add("winner")
    }
    if (answers[2] == answers[5] && answers[2] == answers [8]) {
        document.getElementById("player").textContent = `${answers[2]} Wins!`
        document.getElementById(2).classList.add("winner")
        document.getElementById(5).classList.add("winner")
        document.getElementById(8).classList.add("winner")
    }
    if (answers[3] == answers[6] && answers[3] == answers [9]) {
        document.getElementById("player").textContent = `${answers[3]} Wins!`
        document.getElementById(3).classList.add("winner")
        document.getElementById(6).classList.add("winner")
        document.getElementById(9).classList.add("winner")
    }
    if (answers[1] == answers[5] && answers[1] == answers [9]) {
        document.getElementById("player").textContent = `${answers[1]} Wins!`
        document.getElementById(1).classList.add("winner")
        document.getElementById(5).classList.add("winner")
        document.getElementById(9).classList.add("winner")
    }
    if (answers[3] == answers[5] && answers[3] == answers [7]) {
        document.getElementById("player").textContent = `${answers[3]} Wins!`
        document.getElementById(3).classList.add("winner")
        document.getElementById(5).classList.add("winner")
        document.getElementById(7).classList.add("winner")
    }
}
function draw() {
    document.getElementById("player").textContent = "Draw"
    document.getElementById(1).classList.add("winner")
    document.getElementById(3).classList.add("winner")
    document.getElementById(2).classList.add("winner")
    document.getElementById(4).classList.add("winner")
    document.getElementById(5).classList.add("winner")
    document.getElementById(6).classList.add("winner")
    document.getElementById(7).classList.add("winner")
    document.getElementById(8).classList.add("winner")
    document.getElementById(9).classList.add("winner")
}
function reset() {
    document.getElementById(1).textContent = ""
    document.getElementById(2).textContent = ""
    document.getElementById(3).textContent = ""
    document.getElementById(4).textContent = ""
    document.getElementById(5).textContent = ""
    document.getElementById(6).textContent = ""
    document.getElementById(7).textContent = ""
    document.getElementById(8).textContent = ""
    document.getElementById(9).textContent = ""
    document.getElementById("player").textContent = "Turn: O"
    document.getElementById(1).classList.remove("winner")
    document.getElementById(3).classList.remove("winner")
    document.getElementById(2).classList.remove("winner")
    document.getElementById(4).classList.remove("winner")
    document.getElementById(5).classList.remove("winner")
    document.getElementById(6).classList.remove("winner")
    document.getElementById(7).classList.remove("winner")
    document.getElementById(8).classList.remove("winner")
    document.getElementById(9).classList.remove("winner")
    answers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    turn = "O"
}