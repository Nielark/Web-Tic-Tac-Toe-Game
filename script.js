window.onload = function () {
    // Variable declarations
    var gameMode = "";
    var arrboard = ['#', '#', '#', '#', '#', '#', '#', '#', '#'];  // Represents the game board
    var p1Score = 0, p2Score = 0, allocatedCell = 0, playerID = 1;
    var compFirstMove = true;

    var multiplayer = document.getElementById("multiplayer");
    var vsComputer = document.getElementById("vsComputer");
    let cell = document.querySelectorAll(".cell");
    let imgMove = document.querySelectorAll(".imgMove");
    let btnReset = document.getElementById("btnReset");
    let ctnResult = document.getElementById("ctn-result");

    btnReset.addEventListener('click', reset);

    function reset() {
        p1Score = 0, p2Score = 0, allocatedCell = 0;
        playerID = 1;
        compFirstMove = true;

        for (let i = 0; i < 9; i++) {
            imgMove[i].style.display = "none"
            arrboard[i] = '#';
        }
    }

    document.getElementById("btn-OK").addEventListener('click', function () {
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
        if ((arrboard[0] == 'X' && arrboard[1] == 'X' && arrboard[2] == 'X') ||
            (arrboard[3] == 'X' && arrboard[4] == 'X' && arrboard[5] == 'X') ||
            (arrboard[6] == 'X' && arrboard[7] == 'X' && arrboard[8] == 'X') ||
            (arrboard[0] == 'X' && arrboard[3] == 'X' && arrboard[6] == 'X') ||
            (arrboard[1] == 'X' && arrboard[4] == 'X' && arrboard[7] == 'X') ||
            (arrboard[2] == 'X' && arrboard[5] == 'X' && arrboard[8] == 'X') ||
            (arrboard[0] == 'X' && arrboard[4] == 'X' && arrboard[8] == 'X') ||
            (arrboard[2] == 'X' && arrboard[4] == 'X' && arrboard[6] == 'X')
        ) {
            p1Score++;
        }
        else if ((arrboard[0] == 'O' && arrboard[1] == 'O' && arrboard[2] == 'O') ||
            (arrboard[3] == 'O' && arrboard[4] == 'O' && arrboard[5] == 'O') ||
            (arrboard[6] == 'O' && arrboard[7] == 'O' && arrboard[8] == 'O') ||
            (arrboard[0] == 'O' && arrboard[3] == 'O' && arrboard[6] == 'O') ||
            (arrboard[1] == 'O' && arrboard[4] == 'O' && arrboard[7] == 'O') ||
            (arrboard[2] == 'O' && arrboard[5] == 'O' && arrboard[8] == 'O') ||
            (arrboard[0] == 'O' && arrboard[4] == 'O' && arrboard[8] == 'O') ||
            (arrboard[2] == 'O' && arrboard[4] == 'O' && arrboard[6] == 'O')
        ) {
            p2Score++;
        }
    }

    function computerDecission() {
        if ((arrboard[0] == 'X' && arrboard[1] == 'X' && arrboard[2] == '#') ||
            (arrboard[6] == 'X' && arrboard[4] == 'X' && arrboard[2] == '#') ||
            (arrboard[5] == 'X' && arrboard[8] == 'X' && arrboard[2] == '#')
        ) {
            imgMove[2].style.display = "block";
            arrboard[2] = 'O';
            imgMove[2].src = "images/O.png";
            // checkBoard++;
            // randNum = 2;
        }
        else if ((arrboard[3] == 'X' && arrboard[4] == 'X' && arrboard[5] == '#') ||
            (arrboard[2] == 'X' && arrboard[8] == 'X' && arrboard[5] == '#')
        ) {
            imgMove[5].style.display = "block";
            arrboard[5] = 'O';
            imgMove[5].src = "images/O.png";
            // checkBoard++;
            // randNum = 5;
        }
        else if ((arrboard[6] == 'X' && arrboard[7] == 'X' && arrboard[8] == '#') ||
            (arrboard[0] == 'X' && arrboard[4] == 'X' && arrboard[8] == '#') ||
            (arrboard[2] == 'X' && arrboard[5] == 'X' && arrboard[8] == '#')
        ) {
            imgMove[8].style.display = "block";
            arrboard[8] = 'O';
            imgMove[8].src = "images/O.png";
            // checkBoard++;
            // randNum = 8;
        }
        else if ((arrboard[1] == 'X' && arrboard[2] == 'X' && arrboard[0] == '#') ||
            (arrboard[4] == 'X' && arrboard[8] == 'X' && arrboard[0] == '#') ||
            (arrboard[3] == 'X' && arrboard[6] == 'X' && arrboard[0] == '#')
        ) {
            imgMove[0].style.display = "block";
            arrboard[0] = 'O';
            imgMove[0].src = "images/O.png";
            // checkBoard++;
            // randNum = 0;
        }
        else if ((arrboard[4] == 'X' && arrboard[5] == 'X' && arrboard[3] == '#') ||
            (arrboard[0] == 'X' && arrboard[6] == 'X' && arrboard[3] == '#')
        ) {
            imgMove[3].style.display = "block";
            arrboard[3] = 'O';
            imgMove[3].src = "images/O.png";
            // checkBoard++;
            // randNum = 3;
        }
        else if ((arrboard[7] == 'X' && arrboard[8] == 'X' && arrboard[6] == '#') ||
            (arrboard[2] == 'X' && arrboard[4] == 'X' && arrboard[6] == '#') ||
            (arrboard[0] == 'X' && arrboard[3] == 'X' && arrboard[6] == '#')
        ) {
            imgMove[6].style.display = "block";
            arrboard[6] = 'O';
            imgMove[6].src = "images/O.png";
            // checkBoard++;
            // randNum = 6;
        }
        else if ((arrboard[3] == 'X' && arrboard[5] == 'X' && arrboard[4] == '#') ||
            (arrboard[1] == 'X' && arrboard[7] == 'X' && arrboard[4] == '#') ||
            (arrboard[0] == 'X' && arrboard[8] == 'X' && arrboard[4] == '#') ||
            (arrboard[2] == 'X' && arrboard[6] == 'X' && arrboard[4] == '#')
        ) {
            imgMove[4].style.display = "block";
            arrboard[4] = 'O';
            imgMove[4].src = "images/O.png";
            // checkBoard++;
            // randNum = 4;
        }
        else if ((arrboard[0] == 'X' && arrboard[2] == 'X' && arrboard[1] == '#') ||
            (arrboard[4] == 'X' && arrboard[7] == 'X' && arrboard[1] == '#')
        ) {
            imgMove[1].style.display = "block";
            arrboard[1] = 'O';
            imgMove[1].src = "images/O.png";
            // checkBoard++;
            // randNum = 1;
        }
        else if ((arrboard[6] == 'X' && arrboard[8] == 'X' && arrboard[7] == '#') ||
            (arrboard[1] == 'X' && arrboard[4] == 'X' && arrboard[7] == '#')
        ) {
            imgMove[7].style.display = "block";
            arrboard[7] = 'O';
            imgMove[7].src = "images/O.png";
            // checkBoard++;
            // randNum = 7;
        }
        else {
            if (arrboard[0] == 'O') {
                if (arrboard[1] != 'O' && arrboard[1] != 'X' && arrboard[2] == 'O') {
                    imgMove[1].style.display = "block";
                    arrboard[1] = 'O';
                    imgMove[1].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 1;
                }
                else if (arrboard[3] != 'O' && arrboard[3] != 'X' && arrboard[6] == 'O') {
                    imgMove[3].style.display = "block";
                    arrboard[3] = 'O';
                    imgMove[3].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 3;
                }
                else if (arrboard[4] != 'O' && arrboard[4] != 'X' && arrboard[8] == 'O') {
                    imgMove[4].style.display = "block";
                    arrboard[4] = 'O';
                    imgMove[4].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 4;
                }
                else if (arrboard[1] != 'O' && arrboard[1] != 'X' && arrboard[2] != 'O') {
                    imgMove[1].style.display = "block";
                    arrboard[1] = 'O';
                    imgMove[1].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 1;
                }
                else if (arrboard[3] != 'O' && arrboard[3] != 'X' && arrboard[6] != 'O') {
                    imgMove[3].style.display = "block";
                    arrboard[3] = 'O';
                    imgMove[3].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 3;
                }
                else if (arrboard[4] != 'O' && arrboard[4] != 'X' && arrboard[8] != 'O') {
                    imgMove[4].style.display = "block";
                    arrboard[4] = 'O';
                    imgMove[4].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 4;
                }
            }
            else if (arrboard[3] == 'O') {
                if (arrboard[4] != 'O' && arrboard[4] != 'X' && arrboard[5] == 'O') {
                    imgMove[4].style.display = "block";
                    arrboard[4] = 'O';
                    imgMove[4].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 4;
                }
                else if (arrboard[0] != 'O' && arrboard[0] != 'X' && arrboard[6] == 'O') {
                    imgMove[0].style.display = "block";
                    arrboard[0] = 'O';
                    imgMove[0].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 0;
                }
                else if (arrboard[6] != 'O' && arrboard[6] != 'X' && arrboard[0] == 'O') {
                    imgMove[6].style.display = "block";
                    arrboard[6] = 'O';
                    imgMove[6].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 6;
                }
                else if (arrboard[4] != 'O' && arrboard[4] != 'X' && arrboard[5] != 'O') {
                    imgMove[4].style.display = "block";
                    arrboard[4] = 'O';
                    imgMove[4].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 4;
                }
                else if (arrboard[0] != 'O' && arrboard[0] != 'X' && arrboard[6] != 'O') {
                    imgMove[0].style.display = "block";
                    arrboard[0] = 'O';
                    imgMove[0].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 0;
                }
                else if (arrboard[6] != 'O' && arrboard[6] != 'X' && arrboard[0] != 'O') {
                    imgMove[6].style.display = "block";
                    arrboard[6] = 'O';
                    imgMove[6].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 6;
                }
            }
            else if (arrboard[6] == 'O') {
                if (arrboard[3] != 'O' && arrboard[3] != 'X' && arrboard[0] == 'O') {
                    imgMove[3].style.display = "block";
                    arrboard[3] = 'O';
                    imgMove[3].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 3;
                }
                else if (arrboard[7] != 'O' && arrboard[7] != 'X' && arrboard[8] == 'O') {
                    imgMove[7].style.display = "block";
                    arrboard[7] = 'O';
                    imgMove[7].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 7;
                }
                else if (arrboard[4] != 'O' && arrboard[4] != 'X' && arrboard[2] == 'O') {
                    imgMove[4].style.display = "block";
                    arrboard[4] = 'O';
                    imgMove[4].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 4;
                }
                else if (arrboard[3] != 'O' && arrboard[3] != 'X' && arrboard[0] != 'O') {
                    imgMove[3].style.display = "block";
                    arrboard[3] = 'O';
                    imgMove[3].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 3;
                }
                else if (arrboard[7] != 'O' && arrboard[7] != 'X' && arrboard[8] != 'O') {
                    imgMove[7].style.display = "block";
                    arrboard[7] = 'O';
                    imgMove[7].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 7;
                }
                else if (arrboard[4] != 'O' && arrboard[4] != 'X' && arrboard[2] != 'O') {
                    imgMove[4].style.display = "block";
                    arrboard[4] = 'O';
                    imgMove[4].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 4;
                }
            }
            else if (arrboard[1] == 'O') {
                if (arrboard[4] != 'O' && arrboard[4] != 'X' && arrboard[7] == 'O') {
                    imgMove[4].style.display = "block";
                    arrboard[4] = 'O';
                    imgMove[4].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 4;
                }
                else if (arrboard[0] != 'O' && arrboard[0] != 'X' && arrboard[2] == 'O') {
                    imgMove[0].style.display = "block";
                    arrboard[0] = 'O';
                    imgMove[0].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 0;
                }
                else if (arrboard[2] != 'O' && arrboard[2] != 'X' && arrboard[0] == 'O') {
                    imgMove[2].style.display = "block";
                    arrboard[2] = 'O';
                    imgMove[2].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 2;
                }
                else if (arrboard[4] != 'O' && arrboard[4] != 'X' && arrboard[7] != 'O') {
                    imgMove[4].style.display = "block";
                    arrboard[4] = 'O';
                    imgMove[4].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 4;
                }
                else if (arrboard[0] != 'O' && arrboard[0] != 'X' && arrboard[2] != 'O') {
                    imgMove[0].style.display = "block";
                    arrboard[0] = 'O';
                    imgMove[0].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 0;
                }
                else if (arrboard[2] != 'O' && arrboard[2] != 'X' && arrboard[0] != 'O') {
                    imgMove[2].style.display = "block";
                    arrboard[2] = 'O';
                    imgMove[2].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 2;
                }
            }
            else if (arrboard[4] == 'O') {
                if (arrboard[3] != 'O' && arrboard[3] != 'X' && arrboard[5] == 'O') {
                    imgMove[3].style.display = "block";
                    arrboard[3] = 'O';
                    imgMove[3].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 3;
                }
                else if (arrboard[5] != 'O' && arrboard[5] != 'X' && arrboard[3] == 'O') {
                    imgMove[5].style.display = "block";
                    arrboard[5] = 'O';
                    imgMove[5].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 5;
                }
                else if (arrboard[1] != 'O' && arrboard[1] != 'X' && arrboard[7] == 'O') {
                    imgMove[1].style.display = "block";
                    arrboard[1] = 'O';
                    imgMove[1].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 1;
                }
                else if (arrboard[7] != 'O' && arrboard[7] != 'X' && arrboard[1] == 'O') {
                    imgMove[7].style.display = "block";
                    arrboard[7] = 'O';
                    imgMove[7].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 7;
                }
                else if (arrboard[0] != 'O' && arrboard[0] != 'X' && arrboard[8] == 'O') {
                    imgMove[0].style.display = "block";
                    arrboard[0] = 'O';
                    imgMove[0].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 0;
                }
                else if (arrboard[8] != 'O' && arrboard[8] != 'X' && arrboard[0] == 'O') {
                    imgMove[8].style.display = "block";
                    arrboard[8] = 'O';
                    imgMove[8].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 8;
                }
                else if (arrboard[2] != 'O' && arrboard[2] != 'X' && arrboard[6] == 'O') {
                    imgMove[2].style.display = "block";
                    arrboard[2] = 'O';
                    imgMove[2].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 2;
                }
                else if (arrboard[6] != 'O' && arrboard[6] != 'X' && arrboard[2] == 'O') {
                    imgMove[6].style.display = "block";
                    arrboard[6] = 'O';
                    imgMove[6].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 6;
                }




                else if (arrboard[3] != 'O' && arrboard[3] != 'X' && arrboard[5] != 'O') {
                    imgMove[3].style.display = "block";
                    arrboard[3] = 'O';
                    imgMove[3].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 3;
                }

                else if (arrboard[5] != 'O' && arrboard[5] != 'X' && arrboard[3] != 'O') {
                    imgMove[5].style.display = "block";
                    arrboard[5] = 'O';
                    imgMove[5].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 5;
                }
                else if (arrboard[1] != 'O' && arrboard[1] != 'X' && arrboard[7] != 'O') {
                    imgMove[1].style.display = "block";
                    arrboard[1] = 'O';
                    imgMove[1].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 1;
                }
                else if (arrboard[7] != 'O' && arrboard[7] != 'X' && arrboard[1] != 'O') {
                    imgMove[7].style.display = "block";
                    arrboard[7] = 'O';
                    imgMove[7].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 7;
                }
                else if (arrboard[0] != 'O' && arrboard[0] != 'X' && arrboard[8] != 'O') {
                    imgMove[0].style.display = "block";
                    arrboard[0] = 'O';
                    imgMove[0].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 0;
                }
                else if (arrboard[8] != 'O' && arrboard[8] != 'X' && arrboard[0] != 'O') {
                    imgMove[8].style.display = "block";
                    arrboard[8] = 'O';
                    imgMove[8].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 8;
                }
                else if (arrboard[2] != 'O' && arrboard[2] != 'X' && arrboard[6] != 'O') {
                    imgMove[2].style.display = "block";
                    arrboard[2] = 'O';
                    imgMove[2].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 2;
                }
                else if (arrboard[6] != 'O' && arrboard[6] != 'X' && arrboard[2] != 'O') {
                    imgMove[6].style.display = "block";
                    arrboard[6] = 'O';
                    imgMove[6].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 6;
                }
            }
            else if (arrboard[7] == 'O') {
                if (arrboard[4] != 'O' && arrboard[4] != 'X' && arrboard[1] == 'O') {
                    imgMove[4].style.display = "block";
                    arrboard[4] = 'O';
                    imgMove[4].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 4;
                }
                else if (arrboard[6] != 'O' && arrboard[6] != 'X' && arrboard[8] == 'O') {
                    imgMove[6].style.display = "block";
                    arrboard[6] = 'O';
                    imgMove[6].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 6;
                }
                else if (arrboard[8] != 'O' && arrboard[8] != 'X' && arrboard[6] == 'O') {
                    imgMove[8].style.display = "block";
                    arrboard[8] = 'O';
                    imgMove[8].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 8;
                }
                else if (arrboard[4] != 'O' && arrboard[4] != 'X' && arrboard[1] != 'O') {
                    imgMove[4].style.display = "block";
                    arrboard[4] = 'O';
                    imgMove[4].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 4;
                }
                else if (arrboard[6] != 'O' && arrboard[6] != 'X' && arrboard[8] != 'O') {
                    imgMove[6].style.display = "block";
                    arrboard[6] = 'O';
                    imgMove[6].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 6;
                }
                else if (arrboard[8] != 'O' && arrboard[8] != 'X' && arrboard[6] != 'O') {
                    imgMove[8].style.display = "block";
                    arrboard[8] = 'O';
                    imgMove[8].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 8;
                }
            }
            else if (arrboard[2] == 'O') {
                if (arrboard[1] != 'O' && arrboard[1] != 'X' && arrboard[0] == 'O') {
                    imgMove[1].style.display = "block";
                    arrboard[1] = 'O';
                    imgMove[1].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 1;
                }
                else if (arrboard[5] != 'O' && arrboard[5] != 'X' && arrboard[8] == 'O') {
                    imgMove[5].style.display = "block";
                    arrboard[5] = 'O';
                    imgMove[5].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 5;
                }
                else if (arrboard[4] != 'O' && arrboard[4] != 'X' && arrboard[6] == 'O') {
                    imgMove[4].style.display = "block";
                    arrboard[4] = 'O';
                    imgMove[4].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 6;
                }
                else if (arrboard[1] != 'O' && arrboard[1] != 'X' && arrboard[0] != 'O') {
                    imgMove[1].style.display = "block";
                    arrboard[1] = 'O';
                    imgMove[1].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 1;
                }
                else if (arrboard[5] != 'O' && arrboard[5] != 'X' && arrboard[8] != 'O') {
                    imgMove[5].style.display = "block";
                    arrboard[5] = 'O';
                    imgMove[5].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 5;
                }
                else if (arrboard[4] != 'O' && arrboard[4] != 'X' && arrboard[6] != 'O') {
                    imgMove[4].style.display = "block";
                    arrboard[4] = 'O';
                    imgMove[4].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 6;
                }
            }
            else if (arrboard[5] == 'O') {
                if (arrboard[4] != 'O' && arrboard[4] != 'X' && arrboard[3] == 'O') {
                    imgMove[4].style.display = "block";
                    arrboard[4] = 'O';
                    imgMove[4].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 4;
                }
                else if (arrboard[2] != 'O' && arrboard[2] != 'X' && arrboard[8] == 'O') {
                    imgMove[2].style.display = "block";
                    arrboard[2] = 'O';
                    imgMove[2].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 2;
                }
                else if (arrboard[8] != 'O' && arrboard[8] != 'X' && arrboard[2] == 'O') {
                    imgMove[8].style.display = "block";
                    arrboard[8] = 'O';
                    imgMove[8].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 8;
                }
                else if (arrboard[4] != 'O' && arrboard[4] != 'X' && arrboard[3] != 'O') {
                    imgMove[4].style.display = "block";
                    arrboard[4] = 'O';
                    imgMove[4].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 4;
                }
                else if (arrboard[2] != 'O' && arrboard[2] != 'X' && arrboard[8] != 'O') {
                    imgMove[2].style.display = "block";
                    arrboard[2] = 'O';
                    imgMove[2].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 2;
                }
                else if (arrboard[8] != 'O' && arrboard[8] != 'X' && arrboard[2] != 'O') {
                    imgMove[8].style.display = "block";
                    arrboard[8] = 'O';
                    imgMove[8].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 8;
                }
            }
            else if (arrboard[8] == 'O') {
                if (arrboard[5] != 'O' && arrboard[5] != 'X' && arrboard[2] == 'O') {
                    imgMove[5].style.display = "block";
                    arrboard[5] = 'O';
                    imgMove[5].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 5;
                }
                else if (arrboard[7] != 'O' && arrboard[7] != 'X' && arrboard[6] == 'O') {
                    imgMove[7].style.display = "block";
                    arrboard[7] = 'O';
                    imgMove[7].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 7;
                }
                else if (arrboard[4] != 'O' && arrboard[4] != 'X' && arrboard[0] == 'O') {
                    imgMove[4].style.display = "block";
                    arrboard[4] = 'O';
                    imgMove[4].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 4;
                }

                else if (arrboard[5] != 'O' && arrboard[5] != 'X' && arrboard[2] != 'O') {
                    imgMove[5].style.display = "block";
                    arrboard[5] = 'O';
                    imgMove[5].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 5;
                }
                else if (arrboard[7] != 'O' && arrboard[7] != 'X' && arrboard[6] != 'O') {
                    imgMove[7].style.display = "block";
                    arrboard[7] = 'O';
                    imgMove[7].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 7;
                }
                else if (arrboard[4] != 'O' && arrboard[4] != 'X' && arrboard[0] != 'O') {
                    imgMove[4].style.display = "block";
                    arrboard[4] = 'O';
                    imgMove[4].src = "images/O.png";
                    // checkBoard++;
                    // randNum = 4;
                }
            }
        }
    }

    function vsCompMove(cellPos) {
        if (arrboard[cellPos] === '#') {
            imgMove[cellPos].style.display = "block";
            arrboard[cellPos] = 'X';  // Store the players move in a particular index
            imgMove[cellPos].src = "images/X.png";  // Displays the image of the players move
            allocatedCell++;  // Counter for the number of currently occupied cells
        }
        else {
            vsCompMove();
        }
    
        setTimeout(function () {
            var computerMove = Math.floor((Math.random() * 9));

            if (compFirstMove == true) {
                if (arrboard[computerMove] === '#') {
                    imgMove[computerMove].style.display = "block";
                    arrboard[computerMove] = 'O';  // Store the players move in a particular index
                    imgMove[computerMove].src = "images/O.png";  // Displays the image of the players move
                    allocatedCell++;  // Counter for the number of currently occupied cells
                    compFirstMove = false;
                }
                else {
                    
                }
            }
            else {
                allocatedCell++;
                computerDecission();
            }
        }, 500);
    }

    // Function to handle a player's move
    function playersMove(cellPos, playersMove) {
        if (arrboard[cellPos] === '#') {
            imgMove[cellPos].style.display = "block";
            arrboard[cellPos] = playersMove;  // Store the players move in a particular index
            imgMove[cellPos].src = "images/" + playersMove + ".png";  // Displays the image of the players move
            allocatedCell++;  // Counter for the number of currently occupied cells
        }
        else {
            // If the cell is already occupied, rechoose again
            playersMove();
        }
    }

    multiplayer.addEventListener('click', function () {
        gameMode = "multiplayer";
        game();
    });

    vsComputer.addEventListener('click', function () {
        gameMode = "vscomputer";
        game();
    });

    function game() {
        // Add a single click event listener for all cells
        for (let cellPos = 0; cellPos < 9; cellPos++) {
            cell[cellPos].addEventListener('click', function () {
                // Multiplayer Mode
                if (gameMode === "multiplayer") {
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
                }
                // Versus Computer Mode
                else {
                    // vsCompMove(cellPos);
                    //if (playerID === 1) {
                        playersMove(cellPos, 'X'); // Player 1's move
                        //playerID = 2; // Switch to Player 2 for the next move
                    //}

                    setTimeout(function() {
                        if (compFirstMove == true) {
                            var computerMove = Math.floor((Math.random() * 9));
                            if (arrboard[computerMove] === '#') {
                                playersMove(computerMove, 'O'); // Player 2's move
                                compFirstMove = false;
                            }
                        }
                        else {
                            allocatedCell++;
                            computerDecission();
                        }
                        //playerID = 1; // Switch to Player 1 for the next move
                    }, 500)

                    gameLogic();

                    if (p1Score != 0 || p2Score != 0 || allocatedCell == 9) {
                        setTimeout(result, 500);    // Function call to display the result of the game with a bit delay
                    }
                }
            });
        }
    }
}