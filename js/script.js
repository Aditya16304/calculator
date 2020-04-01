
/*var btns=document.querySelectorAll(".btn");
for(let i=0;i<btns.length;i++){
    btns[i].addEventListener("click",function(){
        var a,b,sign;
        if(btns[i].textContent=="C"){
            input.innerText="0";
        }
        else if(btns[i].classList=="back btn btn-light btn-warning mr-1 px-3 flex-fill"){
            var data=input.textContent;
            if(data.length>1){
                input.innerText=data.substring(0,data.length-1);
            }
            else{
                input.innerText="0";
            }
        }
        else if(btns[i].textContent=="*"){
            a = parseFloat(input.textContent.substring(0,input.length-1));
            input.innerText="*";
        }
        else{
            if(input.innerText=="0")
            input.innerText=btns[i].textContent;
            else
            input.innerText+=btns[i].textContent;
        }
    });
}*/
let total=0.0;
let buffer="0";
let sign=null;
var input=document.querySelector(".text");
document.querySelector(".calBtn").addEventListener("click",function(event){
    buttonClick(event.target.innerText);
});

function buttonClick(value){
    if (isNaN(parseFloat(value))){
        handleSymbol(value);
    }
    else{
        handleNumber(value);
    }
    renderScreen();
}

function handleSymbol(value){
    switch (value) {
        case "C":
            buffer="0";
            sign=null;
            total=0.0;
            break;
        case "=":
            if(sign==="null"){
                return;
            }
            previousOperation(parseFloat(buffer));
            sign=null;
            buffer=""+total;
            total=0;
            break;
        case "←":
            if(buffer.length===1){
                buffer="0";
            }
            else{
                buffer=buffer.substring(0,buffer.length-1);
            }
            break;
        default:
            mathSolve(value);
            break;
    }
}

function mathSolve(value){
    if(buffer==="0"){
        return;
    }
    var intBuffer=parseFloat(buffer);
    if(total===0){
        total=intBuffer;
    }
    else{
        previousOperation(intBuffer);
    }
    sign=value;
    buffer="0";
}

function previousOperation(value){
    if(sign==="+"){
        total=total+value;
    }
    else if(sign==="-"){
        total-=value;
    }
    else if(sign==="*"){
        total*=value;
    }
    else{
        total/=value;
    }
}

function handleNumber(value){
    if(buffer==="0"){
        buffer=value;
    }
    else{
        buffer+=value;
    }
}
function renderScreen(){
    input.innerText=buffer;
}