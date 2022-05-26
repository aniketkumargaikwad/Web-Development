const game= document.getElementById("game");
const details= document.getElementById("details");
const submit= document.getElementById("btn");
const message= document.getElementById("message");
const reset= document.getElementById("btn1")

let palyer1;
let player2;
let playGame= true;
let activePlayer= 0;
let chances=0;

function showMessage(text){
    message.innerHTML=text;
}
function updateActivePlayer(){
    if(activePlayer==0){
        activePlayer=1
    }
    else{
        activePlayer=0;
    }
}
function initiateGame(){
    player1 = document.getElementById("player1").value
    player2 = document.getElementById("player2").value

    activePlayer=0;

    details.style.display="none";
    game.style.display="flex";

    showMessage(`${activePlayer===0? player1:player2}, It's Your Turn`);
    for(let i=0; i<9; i++){
        const div= document.createElement("div");
        div.id= i;
        div.classList.add("game-slot");

        div.addEventListener("click", function(){
            if(!div.innerText && playGame){
                chances++;
                div.innerText= activePlayer===0?"x":"o";
                const winner= getWinner()
                if(!winner){
                    updateActivePlayer()
                    showMessage(`${activePlayer===0? player1:player2}, It's Your Turn`);
                }
                if(winner){
                    showMessage(`${activePlayer===0? player1:player2}, Congratulations, You Won`)
                    reset.style.display="block"


                }
                if(chances==9){
                    showMessage(`Game Draw, Please Try Again`);
                    reset.style.display="block"
                }
            }           
        })
        game.appendChild(div)
    }
}

function getWinner(){
    let winnerBool=false;
    for(let i=0; i<winningSequences.length; i++){
        const winningCombo= winningSequences[i];

        const cell1= document.getElementById(winningCombo[0])
        const cell2= document.getElementById(winningCombo[1])
        const cell3= document.getElementById(winningCombo[2])

        const val1= cell1.innerText;
        const val2= cell2.innerText;
        const val3= cell3.innerText;

        if(val1==val2 && val2==val3 && val1!=""){
            winnerBool=true;
            cell1.style.backgroundColor="white"
            cell2.style.backgroundColor="white"
            cell3.style.backgroundColor="white"
            playGame=false;
            break;
        } 
    }
    return winnerBool;
}
const winningSequences=[
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]
];
submit.addEventListener("click",initiateGame);