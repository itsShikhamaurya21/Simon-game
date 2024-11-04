
let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;


let btns=["yellow","blue","red","green"];
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
    console.log("game is started");
    started=true;

    levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}


function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level} `;
    // random btn choose
    let randomIdx=Math.floor(Math.random()*3);
    let randomColor=btns[randomIdx];
    let randomBtn=document.querySelector(`.${randomColor}`);
    // console.log(randomIdx);
    // console.log(randomColor);
    // console.log(randomBtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn);
}


function checkbtns(idx){
    // console.log("current level :",level);
    // let idx=level-1;
    if(userSeq[idx]===gameSeq[idx]){
        // console.log("same value");
        if(userSeq.length===gameSeq.length){
        // levelUp();
        setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`game over!! <u>your score was <b>${level}</b></u>  press any any key to play again`;
        // let div=document.querySelector("div");
        let body=document.querySelector("body").style.backgroundColor="red";
      
     
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="black";
        },1000);
        reset();
    }
}

function btnPress(){
    // console.log("btn was pressed");
    // console.log(this);
    let btn=this;
    userflash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userColor);
    checkbtns(userSeq.length-1);
}


let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
// let h3=document.createElement("h3");
// h3.innerText=`high score is ${level}`;
// h3.classList.add("h3");
// h2.appendChild("h3");
// const highscores=document.getElementById("#highscores");
// console.log(highscores);
