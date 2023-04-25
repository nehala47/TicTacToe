var player;
var clickX = function () {
    player = 'X';
    clearScreen();
}

var clickO = function () {
    player = 'O';
    clearScreen();
}

var clearScreen = () => {
    var element = document.getElementById("container");
    element.style.display = "none";
    document.getElementById("txtChoose").innerHTML = "Start Playing!!"
    element = document.getElementById("box");
    element.style.display = "grid";
}

const winSpaces = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

window.addEventListener("DOMContentLoaded", function () {
    const spaces = Array.from(document.querySelectorAll(".space"));
    let isgameActive = true;
    let gameentries = ['', '', '', '', '', '', '', '', ''];

    var clickOnSpaces = function (space, index) {
        if (isValidMove(index) && isgameActive) {
            document.getElementById("txtChoose").innerHTML = "TIC TAC TOE!!!!!!".fontcolor("#32FAEA")
            let color = player === "X" ? "red" : "blue";
            space.innerHTML = player.fontcolor(color);
            gameentries[index] = player;
            checkForWins();
            player = player === "X" ? "O" : "X";
        }
    };

    var isValidMove = function (index) {
        if (gameentries[index] != "") {
            return false;
        }
        return true;
    }

    var checkForWins = function () {
        for (let i = 0; i < 8; i++) {
            let first = gameentries[winSpaces[i][0]];
            let second = gameentries[winSpaces[i][1]];
            let third = gameentries[winSpaces[i][2]];
            if (first == '' || second == '' || third == '') {

                continue;
            }
            if (first == second && second == third) {
                isgameActive = false;
                document.getElementById("txtChoose").innerHTML = `Player ${player} Won the Match!!`.fontcolor("#DFC86B")
                let element = document.getElementById("btnReload");
                element.style.visibility = "visible";
                return;
            }
        }
        if (!gameentries.includes("")) {
            isgameActive = false;
            document.getElementById("txtChoose").innerHTML = `Match Tied`.fontcolor("#DFC86B");
            let element = document.getElementById("btnReload");
            element.style.visibility = "visible";
        }
    };

    spaces.forEach((space, index) => {
        space.addEventListener("click", () => clickOnSpaces(space, index));
    });
});
