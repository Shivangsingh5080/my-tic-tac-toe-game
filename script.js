console.log("Welcome to TIC TAC TOE");
let turnSong = new Audio("bubble-pop-04-323580.mp3")
let gameover=new Audio("game-over-417465.mp3")
let turn="X"
let gameoverreal=false;
//function to change the turn
const changeTurn=()=>{
    return turn==="X"?"0":"X"
}
//function to check for a win
const checkWin = ()=>{
    let boxtext=document.getElementsByClassName('boxtext');
let wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4.7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
wins.forEach(e =>{
   if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText===boxtext[e[2]].innerText) && (boxtext[e[0]].innerText!=='')){
   document.querySelector('.info').innerText=boxtext[e[0]].innerText + " WON"
   gameoverreal=true
   gameover.play();
   document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='200px'
   }
})
}
//game logic
let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',(e)=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
           turn= changeTurn();
            turnSong.play();
            checkWin();
            if(!gameoverreal){
           document.getElementsByClassName('info')[0].innerText="Turn for" + turn; 
        }
    }
    })
})
//add onclick listner to to reset button
Reset.addEventListener('click',()=>{
   let boxtexts=document.querySelectorAll('.boxtext');
   Array.from(boxtexts).forEach(element =>{
    element.innerText=''
   });
   turn="X";
   gameoverreal=false;
   document.getElementsByClassName('info')[0].innerText="Turn for" + turn; 
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='0px'
})