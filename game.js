let userScore=0;
let compScore=0;
let drawScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const drawScorePara=document.querySelector("#draw-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];  
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame=()=>{
    drawScore++;
    drawScorePara.innerText=drawScore;
    msg.innerText="Game was draw!";
    msg.style.backgroundColor="gray";
};

const showWinner=(userWin,compChoice,userChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win!");
        msg.innerText=`you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`you lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);

    const compChoice=genCompChoice();
    console.log("comp choice = ",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissor"?false:true;
        }
            else{
                userWin=compChoice==="rock"?false:true;
            }
        showWinner(userWin,compChoice,userChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
       
        playGame(userChoice);
    });
});