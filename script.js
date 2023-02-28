const squares = document.querySelectorAll('.square');
let currentPlayer = "X";

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function(e) {
    if (e.target.innerHTML === "") {
      e.target.innerHTML = currentPlayer;
      checkWinConditions();
      switchPlayer();
    }
  });
}

function switchPlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function checkWinConditions() {
  // Check rows
  for (let i = 0; i <= 6; i = i + 3) {
    if (squares[i].innerHTML !== "" && squares[i].innerHTML === squares[i + 1].innerHTML && squares[i + 1].innerHTML === squares[i + 2].innerHTML) {
      showAlert(`Player ${currentPlayer} wins!`);
      resetGame();
    }
  }

  // Check columns
  for (let i = 0; i <= 2; i++) {
    if (squares[i].innerHTML !== "" && squares[i].innerHTML === squares[i + 3].innerHTML && squares[i + 3].innerHTML === squares[i + 6].innerHTML) {
      showAlert(`Player ${currentPlayer} wins!`);
      resetGame();
    }
  }

  // Check diagonals
  if (squares[0].innerHTML !== "" && squares[0].innerHTML === squares[4].innerHTML && squares[4].innerHTML === squares[8].innerHTML) {
    showAlert(`Player ${currentPlayer} wins!`);
    resetGame();
  }
  if (squares[2].innerHTML !== "" && squares[2].innerHTML === squares[4].innerHTML && squares[4].innerHTML === squares[6].innerHTML) {
    showAlert(`Player ${currentPlayer} wins!`);
    resetGame();
  }
}

function resetGame() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerHTML = "";
  }
}

function restartbutton() {
  const restartButton = document.getElementById("restartButton");

  restartButton.addEventListener("click", function() {
    // Reset the squares
    squares.forEach(square => {
      square.textContent = "";
    });

    // Reset the turn
    turn = "X";
  });
}

function showAlert(message) {
    const alertBox = document.getElementById("alertBox");
    const alertText = document.getElementById("alertText");
    const alertButton = document.getElementById("alertButton");
  
    alertText.textContent = message;
    alertBox.classList.remove("hidden");
  
    alertButton.addEventListener("click", function() {
      alertBox.classList.add("hidden");
    });
  }
  
restartbutton(); // Call the restart button function

