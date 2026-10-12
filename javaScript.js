let boxs = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let msg_container=document.querySelector(".mes-container");
let msg = document.querySelector("#msg");
let newbtn = document.querySelector("#new-btn");
let turnO = true;

const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
 
const resetgame = () => {
    turnO=true;
    count=0;
    enableboxs();
    msg_container.classList.add("hide");
}
let count=0;
boxs.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText="O";
            box.style.color="red";
            turnO=false;
        }
        else{
            box.innerText="X";
            box.style.color="green";
            turnO=true;
        }
        box.disabled=true;
        count++;
        let isWinner=checkwinner();
        
        if(count === 9 && !isWinner){
            msg_container.classList.remove("hide");
            msg.innerText=`draw, no winner play again`;
            
        }
    });
    
});
 
const disableboxs = () => {
    for(box of boxs){
        box.disabled = true;
    }
};

const enableboxs = () => {
    for(box of boxs){
        box.disabled = false;
        box.innerText="";
        box.style.color="";
    }
};

const showwinner = (winner) => {
    msg.innerText=`Congratulations,winner ${winner}`;
    msg_container.classList.remove("hide");
    disableboxs();
};

const checkwinner = () => {
    for(let ptn of winpatterns){
        let pos1val=boxs[ptn[0]].innerText;
        let pos2val=boxs[ptn[1]].innerText;
        let pos3val=boxs[ptn[2]].innerText;
        if(pos1val !== "" && pos2val !== "" && pos3val !== ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showwinner(pos1val);
                return true;
            }
        }  
    }
    return false;
};

newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);