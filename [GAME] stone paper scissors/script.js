console.log("code is running");

const choices = document.querySelectorAll(".choice");

let options = ["stone", "paper", "scissors"];
let user = 0;
let comp = 0;

const randomindex = () => {
    let r =  Math.floor(Math.random() * 3);
    console.log(r)  
    return r;  
}


function playGame(user_choice, comp_choice) {

    if (user_choice === comp_choice) {
        user = user + 0;
        comp = comp + 0;
    }
    else {
        if ((user_choice === "stone" && comp_choice === "paper") || (user_choice === "paper" && comp_choice === "scissors") || (user_choice === "scissors" && comp_choice === "stone")) {
            user = user + 0;
            comp = comp + 1;
        }
        if ((comp_choice === "stone" && user_choice === "paper") || (comp_choice === "paper" && user_choice === "scissors") || (comp_choice === "scissors" && user_choice === "stone")) {
            comp = comp + 0;
            user = user + 1;
        }
    }
    console.log(user, comp);
    document.querySelector(".user-score").innerText = user;
    document.querySelector(".comp-score").innerText = comp;
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {

        let r = randomindex();

        let choice_selected_by_user = choice.getAttribute("id");
        console.log("choice selected is", choice_selected_by_user);

        let choice_selected_by_comp = options[r];
        console.log("choice by comp is", choice_selected_by_comp);
        if(r === 0)
        {
            document.getElementById("c_stone").style.display = "flex";
            document.getElementById("c_paper").style.display = "none";
            document.getElementById("c_scissors").style.display = "none";
        }
        else if(r === 1)
        {
            document.getElementById("c_stone").style.display = "none";
            document.getElementById("c_paper").style.display = "flex";
            document.getElementById("c_scissors").style.display = "none";
        }
        else{
            document.getElementById("c_stone").style.display = "none";
            document.getElementById("c_paper").style.display = "none";
            document.getElementById("c_scissors").style.display = "flex";
        }

        playGame(choice_selected_by_user, choice_selected_by_comp);
    })
})