let userscore = 0;
let compscore = 0;

let choices = document.querySelectorAll(".choice");
let userscorepara = document.querySelector("#user-score");
let compscorepara = document.querySelector("#comp-score");
let message = document.querySelector("#msg");

const computerchoice = () => {
    let randchoices = ["rock" , "paper" , "scissors"];
    let redidx = Math.floor(Math.random()*3);
    return randchoices[redidx];
}

const winpattern = (userwin) => {
    if(userwin){
        console.log("you won");
    }else{
        console.log("you lose");
    }
}
const drawcondition = () => {message.innerText = "the game is a draw";}
const scoreincrement = (userwin,choiceid,computercommand) => {
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        message.innerText = `You won your ${choiceid} beats ${computercommand}`;
    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
        message.innerText = `You lose your ${choiceid} beated by ${computercommand}`;
    }
}
let game = (choiceid) => {
    console.log("userchoice = " , choiceid);
    let computercommand = computerchoice();
    console.log("computer choice = " , computercommand);
    if(choiceid === computercommand){
        drawcondition();
    }else {
    let userwin = true;
    if(choiceid === "rock"){
        userwin = computercommand ==="paper" ? false : true ;
    } else if( choiceid === "paper"){
        userwin = computercommand ==="scissors" ? false : true;
    }else{
        userwin = computercommand ==="rock" ? false : true;
    }
    winpattern(userwin);
    scoreincrement(userwin,choiceid,computercommand);
    }
}
choices.forEach((choice) => {   
    choice.addEventListener("click" , () =>{
        choiceid = choice.getAttribute("id");
        game(choiceid);
    });
});