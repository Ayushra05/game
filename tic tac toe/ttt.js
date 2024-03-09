let boxes=document.querySelectorAll(".box");
let resetgamebtn=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turno=true;
let winning =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(turno){
            box.innerHTML="O";
            turno=false;
            
    
        }
        else{
            box.innerHTML="X"
            turno=true;
        }
        box.disabled=true;
        checkwinner ();

        
    })
})

cont=checkwinner=() =>{
    for(pattern of winning){
        let pos1val=boxes[pattern[0]].innerHTML;
        let pos2val=boxes[pattern[1]].innerHTML;
        let pos3val=boxes[pattern[2]].innerHTML;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner",pos1val);
                showwinner(pos1val);
            }
        }


    }
}
const showwinner =(winner) =>{
    msg.innerHTML=`congratulation, the winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxs();

}

const disabledboxs =() =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enabledboxs =() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}
const resetgame =() =>{
    enabledboxs();
    turno=true;
    msgcontainer.classList.add("hide");

}

newbtn.addEventListener("click",resetgame);
resetgamebtn.addEventListener("click",resetgame);