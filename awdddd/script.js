let currentPlayer = "X";
let gameEnded = false;

// Funktion som körs när en spelruta klickas
function cellClicked(index) {
    const cell = document.getElementsByClassName("cell")[index];
    if (!cell.textContent && !gameEnded) {
        cell.textContent = currentPlayer;
        if (checkWinner()) {
            alert(currentPlayer + " wins!");
            gameEnded = true;
        } else if (checkDraw()) {
            alert("It's a draw!");
            gameEnded = true;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

// Funktion för att kontrollera om en spelare har vunnit
function checkWinner() {
    const cells = document.getElementsByClassName("cell");
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            return true;
        }
    }
    return false;
}

// Funktion för att kontrollera om spelet är oavgjort
function checkDraw() {
    const cells = document.getElementsByClassName("cell");
    for (let cell of cells) {
        if (!cell.textContent) {
            return false;
        }
    }
    return true;
}
