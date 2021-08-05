//starting move
let moveNum = 1;



//crate cells across the grid
function makeGrid(){

    for(let i = 0; i<9; i++){
      $('.grid').append($(`<div class = 'free-cell' id = ${i}></div>`));
    
    }  
} 

//Place mark and alternate between players. Update the display for the players turn
$('body').on('click','.free-cell',function(){
    
    if(moveNum === 1){
        $('.display').text("Player O's Turn!");
        $(this).removeClass();
        $(this).addClass('x-move');
        $(this).append('X').ready(dWin);
        moveNum = 2;
        
    }else if(moveNum === 2){
        $('.display').text("Player X's Turn!");
        $(this).removeClass();
        $(this).addClass('o-move');
        $(this).append('O').ready(dWin);
        moveNum = 1;
        
    }

});


function dWin(){

    if (checkGame() != -1 && checkGame() != ''){
        if(checkGame() == 'X'){
            alert('X Wins! Press Reset to play again');
            $('.display').text('Player X Wins!');
            moveNum = null;
        }else{
            $('.display').text('Player O Wins!');
            alert('O Wins! Press Reset to play again');
            moveNum = null;
        }
        $('.taken').text('Game Over');
        $('.taken').css('color','red');
        $('.grid > div').off('click');
    }
}

//Check if cell is already used
function checkCell(){
    let cellBox = $(this).attr('class');
    // console.log(cellBox)
    if(cellBox !== 'free-cell' ){
        $('.taken').text('Invalid Move');
        $('.taken').css('color', 'red')
    }else{
        $('.taken').text('Valid Move');
        $('.taken').css('color', 'green');
        
    }
   
}

//check for wins
function checkGame(){

    let boxZero = $('#0').text();
    let boxOne = $('#1').text();
    let boxTwo = $('#2').text();
    let boxThree = $('#3').text();
    let boxFour = $('#4').text();
    let boxFive = $('#5').text();
    let boxSix = $('#6').text();
    let boxSeven = $('#7').text();
    let boxEight = $('#8').text();
    

    
    //check rows
    if ((boxZero == boxOne) && (boxOne == boxTwo)){
        return boxTwo
    }
    else if ((boxThree == boxFour) && (boxFour == boxFive)) {
        return boxFive
    }
    else if ((boxSix == boxSeven) && (boxSeven == boxEight)){
        return boxEight
    }

    //check columns
    else if ((boxZero == boxThree) && (boxThree == boxSix)){
        return boxSix
    }
    else if ((boxOne == boxFour) && (boxFour == boxSeven)){
        return boxSeven
    }
    else if ((boxTwo == boxFive) && (boxFive == boxEight)){
        return boxEight
    }

    //check diagonals
    else if((boxZero == boxFour) && (boxFour == boxEight)){
        return boxEight
    }else if((boxTwo == boxFour) && (boxFour == boxSix)){
        return boxSix
    }
    else{
        if ( !(boxZero == '') && !(boxOne == '') && !(boxTwo== '') 
        && !(boxThree == '') && !(boxFour == '') && !(boxFive == '') 
        && !(boxSix == '') && !(boxSeven == '') && !(boxEight == '') ){
            alert('Draw! Press Reset to play again')
            $('.display').text('Draw!');
            $('.taken').text('Draw!');
            $('.taken').css('color','red');
            $('.grid > div').off('click');

        }
    }
        
    return -1

}

function putNames(){
    let playerXName;
    let playerOName;
    let playerOne = prompt('Player X Enter Your Name', 'Name');
    let playerTwo = prompt('Player O Enter Your Name', 'Name');
    if (playerOne == null || playerOne =='' || playerOne == 'Name'){
        playerXName = ': No Name';
    }else{
        playerXName = ': ' + playerOne;
    }

    if (playerTwo == null || playerTwo ==''|| playerOne == 'Name'){
        playerOName = ': No Name';
    }else{
        playerOName = ': ' + playerTwo;
    }

    $('.playerX').append(playerXName)
    $('.playerO').append(playerOName)
  
}



 //Reset game
function gameReset(){
    $('.display').text('Play Time! Player X First');
    $('.grid > div').remove();
    $('.taken').text('Select Your Box');
    $('.taken').css('color', 'black');
    $('.taken').removeAttr('style');
    $('.playerX').text('Player X');
    $('.playerO').text('Player O');
    
    makeGrid()
    putNames()
    $('.grid .free-cell').click(checkCell);
    moveNum = 1;
    
}


makeGrid();
putNames();
$('.grid .free-cell').click(checkCell);
$('.reset').click(gameReset);
$(document).ready();



