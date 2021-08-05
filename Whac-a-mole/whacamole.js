$(document).ready(function(){
    console.log( "ready!" );
});

const holes = $('.hole'); //array of all holes
const mole = $('.mole');
const time = $('.time');
const score = $('.score');

let point= 0;
let timer = null;
let holeCurrent;
let clockO = 30;
$(time).text(clockO)
let countDown;


function holeRandom(){
 
    //remove mole in hole in case it is there
    $(holes).removeClass('mole')

    //Alternate the holes where the mole will pop up from //6 holes total, numbered from 0 to 5
    let randomHole = holes[Math.floor(Math.random() * 6 )];

    //add the mole into a random hole
    $(randomHole).addClass('mole');

    holeCurrent = $(randomHole).attr('id');
}

//intergrate timer to mole pop up
function timedMole(){

    //set an interval for the random holes //1000ms = 1s
    timer = setInterval(holeRandom, 525);
}

$(holes).mousedown(function(){
    let holeNum = $(this).attr('id');

    if (holeNum == holeCurrent){
        point++;
        $(score).text(point);
        holeCurrent = null;
    }
});


function timerGame(){
    clockO--
    $(time).text(clockO)

    if (clockO == 0){
        clearInterval(countDown);
        clearInterval(timer);
        alert('Game Over!\nTotal Moles Clicked: '+ point + '\nPress Start to play again')
        $(holes).off('mousedown'); 
    }
}


$('.start').click(function(){
    countDown = setInterval(timerGame, 1000) //1000ms = 1s
    timedMole()
    clockO = 30;
    $(time).text(clockO)
    point = 0;
    $(score).text(point);
    $(holes).removeClass('mole')

    $(holes).mousedown(function(){
        let holeNum = $(this).attr('id');
        if (holeNum == holeCurrent){
            point++;
            $(score).text(point);
            holeCurrent = null;
        }
    });
});
