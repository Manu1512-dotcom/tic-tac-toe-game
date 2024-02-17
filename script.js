let boxes=document.querySelectorAll(".inner");
let turn0=false;
let container=document.querySelector("#msgContainer");
let msg=document.querySelector("#msg");
let newGame=document.querySelector("#newButton");
let resetGame=document.querySelector("#resetButton");

const winPatterns=[[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]];

const reset=()=>
{
    turn0=false;
    for(let box of boxes)
    {
        box.innerText="";
        box.disabled=false;
        container.classList.add("hide");
    }
}

const checkWinner=()=>
{
    for(pattern of winPatterns)
    {
        let value1=boxes[pattern[0]].innerText;
        let value2=boxes[pattern[1]].innerText;
        let value3=boxes[pattern[2]].innerText;
        if(value1===value2 && value2===value3 && value1!=="")
        {
            let winnerStatement=`Winner is Player "${value1}"`;
            msg.innerText=winnerStatement;
            container.classList.remove("hide");
            for(box of boxes)
            {
                box.setAttribute("disabled","true");
            }
        }
    }
}

resetButton.addEventListener("click",reset);
newButton.addEventListener("click",reset);


boxes.forEach((box)=>{
    box.addEventListener("click",()=>
    {
        if(turn0===true)
        {
            box.innerText="O";
            // box.style.color="red"
            turn0=false;
        }
        else if(turn0===false)
        {
            box.innerText="X";
            turn0=true;
        }
        box.setAttribute("disabled","true");
        checkWinner();
    });
});

