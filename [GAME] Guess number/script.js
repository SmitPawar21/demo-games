const answer = (parseInt(Math.random()*100)+1);
console.log(answer);

let input_box = document.querySelector(".input_box");
let messageBox = document.querySelector(".messageBox");
let isgameStart = false;
let isWin = false;
let gamelost = false;

let play = document.querySelector(".play_but");
play.addEventListener('click', ()=>{
    play.style.backgroundColor = "#c29f13";
    play.style.color = "white";
    play.innerText = "playing...";
    input_box.style.display = "flex";
    messageBox.style.display = "flex";
    isgameStart = true;
})

//chances
let chances = 6;
let chanceText = document.querySelector("#chanceText");

let resultText = document.querySelector("#resultText");
let resultbox = document.querySelector(".result");
function playgame(ans, num){
    if(ans === num)
        {
            resultbox.style.top = "0vh";
            isWin = true;
        }
    else if(num > ans)
        {
            messageBox.innerText = "it is HIGH";
            isWin = false;
            chances = chances - 1;
            chanceText.innerText = `${chances}`;
            if(chances<=3)
                {
                    chanceText.style.color = "#a82d1a";
                }
        }
    else if(num < ans)
        {
            messageBox.innerText = "it is LOW";
            isWin = false;
            chances = chances - 1;
            if(chances<=3)
                {
                    chanceText.style.color = "#a82d1a";
                }
            chanceText.innerText = `${chances}`;
        }
}

//array of previous numbers:
// let prevNumbers = [];
let guessArray = document.querySelector("#guessArray"); 

let submit = document.querySelector(".sub_but");
submit.addEventListener('dblclick', ()=>{
    let inputText = document.querySelector("#numGuess");
    let number = parseInt(inputText.value);
    console.log(number);
    playgame(answer, number);

    if(!isWin)
        {
            // prevNumbers.unshift(number);
            guessArray.innerText += `${number}, `; 
        }

    if(chances===0)
        {
            if(!isWin)
                {
                    gamelost = true;
                    resultbox.style.top = "0vh";
                    resultText.innerText = "YOU LOSE";
                    resultText.style.color = "#a82d1a";
                }
        }
    
})

//backing
let refresh = document.querySelector(".ref_but");
refresh.addEventListener('click', ()=>{
    location.reload();
})

let goback = document.querySelector(".goback");
goback.addEventListener('click', ()=>{
    location.reload();
})