console.log("Let's play TIC TAC TOE");

let audioTurn = new Audio("turn.mp3");
let audiotie = new Audio("tie.mp3");
let audioWin = new Audio("win.mp3");

let turn = 'X';
let isgameover = false;
let count = 0;
let iswin = false;

const changeTurn = ()=>{
    if(turn === 'X')
    {
        return '0';
    }
    else{
        return 'X';
    }
}

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName("input");
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if(boxtext[e[0]].innerText === boxtext[e[1]].innerText && boxtext[e[0]].innerText === boxtext[e[2]].innerText && boxtext[e[0]].innerText !="")
        {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            audioWin.play();
            document.querySelector(".winning").getElementsByTagName("img")[0].style.width = "60px"
            iswin = true;
        }
        else if(count==9 && iswin != true){
            document.querySelector(".info").innerText ="TIE";
            isgameover = true;
            audiotie.play();
        }
        
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".input");
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === '')
        {
            count = count +1;
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            audioTurn.playbackRate=4;
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
            }
        }
    })
})
let resetbutton = document.getElementById("reset");
let boxtext2 = document.getElementsByClassName("input")
resetbutton.addEventListener('click', ()=>{
    // Array.from(boxtext2).forEach(i=>{
    //     i.innerText = "";
    // })
    // turn = 'X';
    // document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
    // count = 0;
    // isgameover = false;
    // document.querySelector(".winning").getElementsByTagName("img")[0].style.width = "0px"

    location.reload();
})

let home = document.querySelector(".home");
home.addEventListener("click", ()=>{
    coverpage.style.left = "0vw";
    Array.from(boxtext2).forEach(i=>{
        i.innerText = "";
    })
    turn = 'X';
    document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
    count = 0;
    isgameover = false;
    document.querySelector(".winning").getElementsByTagName("img")[0].style.width = "0px";
    home.style.display = "none";

})

let start = document.querySelector(".button");
let coverpage = document.querySelector(".coverpage");
start.addEventListener("click", ()=>{
    coverpage.style.left = "-100vw";
    home.style.display = "flex";
})