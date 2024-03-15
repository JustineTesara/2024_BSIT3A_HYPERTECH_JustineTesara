var currentPlayer = 'X';
        var board = ['', '', '', '', '', '', '', '', ''];

        function makeMove(index) {
            if (board[index] === '') {
                board[index] = currentPlayer;
                document.getElementsByClassName('cell')[index].innerHTML = currentPlayer;

                if (checkWinner()) {
                    alert('Player ' + currentPlayer + ' wins!');
                    resetBoard();
                } else if (board.every(cell => cell !== '')) {
                    alert("It's a draw!");
                    resetBoard();
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            } else {
                alert('Invalid move! Cell already taken.');
            }
        }

        function checkWinner() {
            const winPatterns = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
                [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
                [0, 4, 8], [2, 4, 6]             // Diagonals
            ];

            for (const pattern of winPatterns) {
                const [a, b, c] = pattern;
                if (board[a] !== '' && board[a] === board[b] && board[b] === board[c]) {
                    return true;
                }
            }

            return false;
        }

        function resetBoard() {
            board = ['', '', '', '', '', '', '', '', ''];
            currentPlayer = 'X';

            // Clear the board visually
            var cells = document.getElementsByClassName('cell');
            for (var i = 0; i < cells.length; i++) {
                cells[i].innerHTML = '';
            }
        }

        function resetGame() {
            resetBoard();
            alert('Game reset!');
        }


 