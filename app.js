document.addEventListener('DOMContentLoaded',()=>{
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#current-player')
    let currentPlayer = 1
    let gameIsOver = false

    const winningConditions = [
        // Horizontal winning conditions
        [0, 1, 2, 3],
        [1, 2, 3, 4],
        [2, 3, 4, 5],
        [3, 4, 5, 6],
        [7, 8, 9, 10],
        [8, 9, 10, 11],
        [9, 10, 11, 12],
        [10, 11, 12, 13],
        [14, 15, 16, 17],
        [15, 16, 17, 18],
        [16, 17, 18, 19],
        [17, 18, 19, 20],
        [21, 22, 23, 24],
        [22, 23, 24, 25],
        [23, 24, 25, 26],
        [24, 25, 26, 27],
        [28, 29, 30, 31],
        [29, 30, 31, 32],
        [30, 31, 32, 33],
        [31, 32, 33, 34],
        [35, 36, 37, 38],
        [36, 37, 38, 39],
        [37, 38, 39, 40],
        [38, 39, 40, 41],
      
        // Vertical winning conditions
        [0, 7, 14, 21],
        [1, 8, 15, 22],
        [2, 9, 16, 23],
        [3, 10, 17, 24],
        [4, 11, 18, 25],
        [5, 12, 19, 26],
        [6, 13, 20, 27],
        [7, 14, 21, 28],
        [8, 15, 22, 29],
        [9, 16, 23, 30],
        [10, 17, 24, 31],
        [11, 18, 25, 32],
        [12, 19, 26, 33],
        [13, 20, 27, 34],
        [14, 21, 28, 35],
        [15, 22, 29, 36],
        [16, 23, 30, 37],
        [17, 24, 31, 38],
        [18, 25, 32, 39],
        [19, 26, 33, 40],
        [20, 27, 34, 41],
      
        // Diagonal winning conditions (from bottom-left to top-right)
        [3, 9, 15, 21],
        [4, 10, 16, 22],
        [5, 11, 17, 23],
        [6, 12, 18, 24],
        [10, 16, 22, 28],
        [11, 17, 23, 29],
        [12, 18, 24, 30],
        [13, 19, 25, 31],
        [17, 23, 29, 35],
        [18, 24, 30, 36],
        [19, 25, 31, 37],
        [20, 26, 32, 38],
      
        // Diagonal winning conditions (from top-left to bottom-right)
        [0, 8, 16, 24],
        [1, 9, 17, 25],
        [2, 10, 18, 26],
        [6, 12, 18, 24],
        [7, 13, 19, 25],
        [8, 14, 20, 26],
        [14, 20, 26, 32],
        [15, 21, 27, 33],
        [21, 27, 33, 39],
        [22, 28, 34, 40],
        [23, 29, 35, 41],
      ];
      
      function checkBoard(){
        for(let y=0;y<winningConditions.length;y++){
            const square1 = squares[winningConditions[y][0]]
            const square2 = squares[winningConditions[y][1]]
            const square3 = squares[winningConditions[y][2]]
            const square4 = squares[winningConditions[y][3]]


            if(square1.classList.contains('player-one')&&
            square2.classList.contains('player-one')&&
            square3.classList.contains('player-one')&&
            square4.classList.contains('player-one')
            ){
                result.textContent = 'Player 1 Wins!'
                gameIsOver = true
                break
            }

            if(square1.classList.contains('player-two')&&
            square2.classList.contains('player-two')&&
            square3.classList.contains('player-two')&&
            square4.classList.contains('player-two')
            ){
                result.textContent = 'Player 2 Wins'
                gameIsOver=true
                break
            }
        }
      }
      

    for(let i =0 ; i< squares.length; i++){
        squares[i].onclick = ()=>{
            if(!gameIsOver){
            if(squares[i + 7].classList.contains('taken') &&! squares[i].classList.contains('taken')){
                if(currentPlayer == 1){
                    squares[i].classList.add('taken')
                    squares[i].classList.add('player-one')
                    currentPlayer = 2
                    displayCurrentPlayer.textContent =currentPlayer
                }
                else if(currentPlayer == 2 ){
                    squares[i].classList.add('taken')    
                    squares[i].classList.add('player-two')
                    currentPlayer=1 
                    displayCurrentPlayer.textContent =currentPlayer   
                }
            }
        }else alert("can't go here")
            checkBoard()
        }
    }


})