const combination = document.getElementById("combinations");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
const sum1 = document.getElementById("sum1");
const sum2 = document.getElementById("sum2");
const sum3 = document.getElementById("sum3");
const sum4 = document.getElementById("sum4");
const sum5 = document.getElementById("sum5");
const sum6 = document.getElementById("sum6");
const threecomb = document.getElementById("threecomb");
const fourcomb = document.getElementById("fourcomb");
const threetwocomb = document.getElementById("threetwocomb");
const foursequence = document.getElementById("foursequence");
const fivecomb = document.getElementById("fivecomb");
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const dice3 = document.getElementById("dice3");
const dice4 = document.getElementById("dice4");
const dice5 = document.getElementById("dice5");
const roll = document.getElementById("roll");
const player1=document.querySelectorAll(".player1");
const player2=document.querySelectorAll(".player2");
const player3=document.querySelectorAll(".player3");
const player4=document.querySelectorAll(".player4");
const dicebuttons=document.querySelectorAll(".dicebuttons");

function sumof1(arr){
    const count= arr.filter(num => num===1).length;
    return count * 1;
}
function sumof2(arr){
    const count= arr.filter(num => num===2).length;
    return count * 2;
}
function sumof3(arr){
    const count= arr.filter(num => num===3).length;
    return count * 3;
}
function sumof4(arr){
    const count= arr.filter(num => num===4).length;
    return count * 4;
}
function sumof5(arr){
    const count= arr.filter(num => num===5).length;
    return count * 5;
}
function sumof6(arr){
    const count= arr.filter(num => num===6).length;
    return count * 6;
}
function sumofthreecomb(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===3){
            return (i+1)*3;
        }
    }
    return 0;
}
function sumoffourcomb(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===4){
            return (i+1)*4;
        }
    }
    return 0;
}
function sumofthreetwocomb(arr){
    arr.sort();
    if(arr[5]===3 && arr[4]===2){
        return 25;
    }
    return 0;
}
function sumoffourseq(arr){
    if((arr[0]===1 && arr[1]===1 && arr[2]===1 && arr[3]===1 &&arr[4]===1) || 
    (arr[1]===1 && arr[2]===1 && arr[3]===1 &&arr[4]===1 && arr[5]===1)){
        return 40;
    }
    return 0;
}
function sumoffivecomb(arr){
    arr.sort();
    if (arr[5]===5){
        return 50;
    }
    return 0;
}
function diceresult(fixarr,dicearr){
    for (let i=0; i<5; i++){
        if (!fixarr[i]){
            dicearr[i]=Math.floor(Math.random()*6)+1;
        }
    }
}
function fixdice(event){
    if(rollcount===1 || rollcount===2){
        switch(event.target){
            case dice1: {
                fixarr[0]= !fixarr[0];
                break;
            }
            case dice2: {
                fixarr[1]= !fixarr[1];
                break;
            }
            case dice3: {
                fixarr[2]= !fixarr[2];
                break;
            }
            case dice4: {
                fixarr[3]= !fixarr[3];
                break;
            }
            case dice5: {
                fixarr[4]= !fixarr[4];
                break;
            }       
        }
    }
}

dicebuttons.forEach(button=>{
    button.addEventListener("click",fixdice);
})

let currentplayer=1;
let playerTurns= {};
let lockedscores= {};
let dicearr=[];
let fixarr=[false,false,false,false,false];
let rollcount= 0;
let buttonclicked=false;
let numberOfPlayers=4;

for(i=1; i<=numberOfPlayers; i++){
    playerTurns[i]=0;
    lockedscores[i]={};
}
const players={
    1:player1,
    2:player2,
    3:player3,
    4:player4
};

Object.values(players).forEach(playerbuttons=>{
    playerbuttons.forEach(button=>{
        button.addEventListener("click",()=>{
            if(playerbuttons!==players[currentplayer]) return; //only currentplayer's buttons work
            if (rollcount===1 || rollcount===2 || rollcount===3){
                if(buttonclicked) return;
                
                if(lockedscores[currentplayer][button.id]!== undefined){
                    console.log("Please pick another option!");
                    return;
                }
                buttonclicked=true;
                lockedscores[currentplayer][button.id]=button.textContent; //Locks the score of selected button
                playerbuttons.forEach(btn=>{
                    if(btn!== button && lockedscores[currentplayer][btn.id]===undefined){
                        btn.textContent=0; //replaces values of unlocked buttons with 0
                    }
                });
                console.log(`Player ${currentplayer} has chosen the score.`);
                playerTurns[currentplayer]++; //increases currenplayers turn by 1
                roll.disabled=false; //enables rolling again
    
                if (currentplayer === numberOfPlayers && playerTurns[currentplayer] >= 11) {
                    console.log("Game Over! All players have completed their turns.");
                    roll.disable=true;
                    return;
                }
            
                if (playerTurns[currentplayer] <= 11) {
                    currentplayer++; // Move to next player
                }
                
                if (currentplayer > numberOfPlayers) {
                    currentplayer = 1; // Reset to player 1 after last player
                }
            
                currentplayerbuttons=players[currentplayer];
                dicearr=[];
                fixarr=[false,false,false,false,false];
                rollcount=0;
                buttonclicked=false;
                roll.disabled=false; //resets everything for another player's turn
                console.log(`It's player${currentplayer}'s turn`);        };    
        });
    });
});


function rolldice (){
    let currentplayerbuttons= players[currentplayer]; //chooses nodelist of currentplayer
    
    if(rollcount>=3 && !buttonclicked){
        console.log("No more rolls left. Select a score!");
        roll.disabled=true; //disables rolling dice after 3rd roll
        return; //makes mandatory for user to select a button after 3rd roll 
    }

    rollcount++;
    diceresult(fixarr,dicearr); //gets diceresults in dicearr
    console.log(dicearr);
    fixarr=[false,false,false,false,false];

    const count1=sumof1(dicearr);
    const count2=sumof2(dicearr);
    const count3=sumof3(dicearr);
    const count4=sumof4(dicearr);
    const count5=sumof5(dicearr);
    const count6=sumof6(dicearr);
    let countarr=[count1/1,count2/2,count3/3,count4/4,count5/5,count6/6];
    const sum3comb= sumofthreecomb(countarr);
    const sum4comb= sumoffourcomb(countarr);
    const sum32comb = sumofthreetwocomb(countarr);
    const sum4seq= sumoffourseq(dicearr);
    const sum5comb= sumoffivecomb(countarr);
    
    currentplayerbuttons.forEach((button,index) =>{
            if(!(button.id in lockedscores[currentplayer])){
            //updates possible scores in unlocked buttons from currentplayers nodelist
            button.textContent=[count1,count2,count3,count4,count5,count6,sum3comb,sum4comb,sum32comb,sum4seq,sum5comb][index];
        }
    });
    
}

roll.addEventListener("click",()=>rolldice());
console.log("Game starts. Player 1's turn");
