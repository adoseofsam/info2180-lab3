// starter events
window.onload = function() {
    // Game utility variables
     var board = document.getElementById("board");// get main board
     var state = ["", "", "", "", "", "", "", "", ""];// keeps track of the current game's state
     var btn = document.getElementsByClassName("btn")[0];
     var squares= board.children;// get squares in boards
     var raisee = true;
     

    
     for (let i = 0; i < squares.length; i++){
        squares[i].classList.add("square");
        squares[i].onclick = function () {click(squares[i], i)};// add event listener for making plays (clicks)
        squares[i].onmouseover = function () {OnMouse(squares[i])};
        squares[i].onmouseout = function () {OnMouse(squares[i])};
    }

    btn.onclick = function () {
        Restart()
    };

    function click(child, num) {
        if(state[num] === "") {
            
            if(raisee === true) {
               child.innerHTML = "X";
               child.classList.add("X");
               state[num] = "X";
               raisee = false;
               if(WinnerX()) {
                   document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
                   document.getElementById("status").classList.add("you-won");
                   for (let i = 0; i < squares.length; i++){
                       squares[i].onclick = function () {};
                   }
               }
            } else if(raisee == false) {
               child.innerHTML = "O";
               child.classList.add("O");
               state[raisee] = "O";
               raisee = true;   
               if(WinnerO()) {
                   document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
                   document.getElementById("status").classList.add("you-won");
                   for (let i = 0; i < squares.length; i++){
                       squares[i].onclick = function () {};
                   }
               }
            } 

        }
        
    }

    function OnMouse(child) {
        child.classList.add("hover");
    }

    function OnMouse(child) {
       child.classList.remove("hover");
   }

   function WinnerX() {
       for (let i = 0; i < 3; i++){
           if (state[i] === "X" && state[i+3] === "X" && state[i+6] === "X") {
               return true;
           }
       }

       for (let i = 0; i < 7; i+=3) {
           if (state[i] === "X" && state[i+1] === "X" && state[i+2] === "X") {
               return true;
           }
       }

       if(state[0] === "X" && state[4] === "X" && state[8] === "X") {
           return true;
       } else if (state[2] === "X" && state[4] === "X" && state[6] === "X") {
           return true;
       }

       return false;

   }

   function WinnerO() {
       for (let i = 0; i < 3; i++){
           if (state[i] === "O" && state[i+3] === "O" && state[i+6] === "O") {
               return true;
           }
       }

       for (let i = 0; i < 7; i+=3) {
           if (state[i] === "O" && state[i+1] === "O" && state[i+2] === "O") {
               return true;
           }
       }

       if(state[0] === "O" && state[4] === "O" && state[8] === "O") {
           return true;
       } else if (state[2] === "O" && state[4] === "O" && state[6] === "O") {
           return true;
       }

       return false;
   }

   function Restart() {

       for (let i = 0; i < squares.length; i++) {
           squares[i].innerHTML = "";
           squares[i].classList.remove("X");
           squares[i].classList.remove("O");
           squares[i].onclick = function () {
               click(squares[i], i)
            };
           state[i] = "";
       }
       document.getElementById("status").innerHTML = "Move your mouse over a square and click to play an X or an O.";
       document.getElementById("status").classList.remove("you-won");
   }

    

};