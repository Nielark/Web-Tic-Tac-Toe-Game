window.onload = function () {
    
    let cell = document.querySelectorAll(".cell");
    let imgMove = document.querySelectorAll(".imgMove");
    let btnReset = document.getElementById("btnReset");
    let ctnResult = document.getElementById("ctn-result");
    var arrBoard = ['#', '#', '#', '#', '#', '#', '#', '#', '#'];  // Represents the game board
    var p1Score = 0, p2Score = 0, allocatedCell = 0, playerID = 1;

    btnReset.addEventListener('click', reset);

    function reset() {
        p1Score = 0, p2Score = 0, allocatedCell = 0;
        playerID = 1;
        arrBoard = ['#', '#', '#', '#', '#', '#', '#', '#', '#'];

        for (let i = 0; i < 9; i++) {
            imgMove[i].style.display = "none"
        }
    }

    document.getElementById("btn-OK").addEventListener('click', function(){
        ctnResult.style.visibility = "hidden";
        reset(); // Function call to reset the scores and board moves
    })

    function result() {
        ctnResult.style.visibility = "visible";

        if (p1Score > p2Score) {
            document.getElementById("displayRes").textContent = "Player 1 wins";
        }
        else if (p1Score < p2Score) {
            document.getElementById("displayRes").textContent = "Player 2 wins";
        }
        else {
            document.getElementById("displayRes").textContent = "No one wins";
        }
    }

    function gameLogic() {
        if ((arrBoard[0] == 'X' && arrBoard[1] == 'X' && arrBoard[2] == 'X') ||
            (arrBoard[3] == 'X' && arrBoard[4] == 'X' && arrBoard[5] == 'X') ||
            (arrBoard[6] == 'X' && arrBoard[7] == 'X' && arrBoard[8] == 'X') ||
            (arrBoard[0] == 'X' && arrBoard[3] == 'X' && arrBoard[6] == 'X') ||
            (arrBoard[1] == 'X' && arrBoard[4] == 'X' && arrBoard[7] == 'X') ||
            (arrBoard[2] == 'X' && arrBoard[5] == 'X' && arrBoard[8] == 'X') ||
            (arrBoard[0] == 'X' && arrBoard[4] == 'X' && arrBoard[8] == 'X') ||
            (arrBoard[2] == 'X' && arrBoard[4] == 'X' && arrBoard[6] == 'X')
        ) {
            p1Score++;
        }
        else if ((arrBoard[0] == 'O' && arrBoard[1] == 'O' && arrBoard[2] == 'O') ||
            (arrBoard[3] == 'O' && arrBoard[4] == 'O' && arrBoard[5] == 'O') ||
            (arrBoard[6] == 'O' && arrBoard[7] == 'O' && arrBoard[8] == 'O') ||
            (arrBoard[0] == 'O' && arrBoard[3] == 'O' && arrBoard[6] == 'O') ||
            (arrBoard[1] == 'O' && arrBoard[4] == 'O' && arrBoard[7] == 'O') ||
            (arrBoard[2] == 'O' && arrBoard[5] == 'O' && arrBoard[8] == 'O') ||
            (arrBoard[0] == 'O' && arrBoard[4] == 'O' && arrBoard[8] == 'O') ||
            (arrBoard[2] == 'O' && arrBoard[4] == 'O' && arrBoard[6] == 'O')
        ) {
            p2Score++;
        }
    }

    // Function to handle a player's move
    function playersMove(cellPos, playersMove) {
        //if(gameMode == "multiplayer") {
            if (arrBoard[cellPos] === '#') {
                imgMove[cellPos].style.display = "block";
                arrBoard[cellPos] = playersMove;  // Store the players move in a particular index
                imgMove[cellPos].src = "images/" + playersMove + ".png";  // Displays the image of the players move
                allocatedCell++;  // Counter for the number of currently occupied cells
            }
            else {
                // If the cell is already occupied, rechoose again
                playersMove();
            }
        // }
        // else {

        // }
    }

    var multiplayer = document.getElementById("multiplayer");
    var vsComputer = document.getElementById("vsComputer");
    var gameMode = "";
    multiplayer.addEventListener('click', function() {
        gameMode = "multiplayer";
        game();
    });

    vsComputer.addEventListener('click', function() {
        gameMode = "vscomputer";
        game();
    });

    function game() {
        if(gameMode == "multiplayer") {
            // Add a single click event listener for all cells
            for (let cellPos = 0; cellPos < 9; cellPos++) {
                cell[cellPos].addEventListener('click', function () {
                    if (playerID === 1) {
                        playersMove(cellPos, 'X'); // Player 1's move
                        playerID = 2; // Switch to Player 2 for the next move
                    }
                    else {
                        playersMove(cellPos, 'O'); // Player 2's move
                        playerID = 1; // Switch to Player 1 for the next move
                    }

                    gameLogic();

                    if (p1Score != 0 || p2Score != 0 || allocatedCell == 9) {
                        setTimeout(result, 500);    // Function call to display the result of the game with a bit delay
                    }             
                });
            }
        }
        else {
            // Add a single click event listener for all cells
            for (let cellPos = 0; cellPos < 9; cellPos++) {
                cell[cellPos].addEventListener('click', function () {
                    if (playerID === 1) {
                        playersMove(cellPos, 'X'); // Player 1's move
                        playerID = 2; // Switch to Player 2 for the next move
                    }

                    // Set's a delay before the computer picks its move
                    setTimeout(function() {
                        // Computer's Move 
                        var computerMove = Math.floor((Math.random() * 9) );
                        playersMove(computerMove, 'O'); // Player 2's move
                        playerID = 1; // Switch to Player 1 for the next move
                    }, 500);

                    gameLogic();

                    if (p1Score != 0 || p2Score != 0 || allocatedCell == 9) {
                        setTimeout(result, 500);    // Function call to display the result of the game with a bit delay
                    }
                    
                });
            }
        }         
    }
}