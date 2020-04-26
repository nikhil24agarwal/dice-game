
 

function f(){
    const p1 = window.prompt("first player name");
    const p2 = window.prompt("second player name");
const a=Math.ceil(Math.random()*6);


if(a===1){
    document.querySelectorAll("body img")[0]
    .setAttribute("src","images/dice1.png");
}

else if(a===2){
    document.querySelectorAll("body img")[0]
    .setAttribute("src","images/dice2.png");
}
else if(a===3){
    document.querySelectorAll("body img")[0]
    .setAttribute("src","images/dice3.png");
}
else if(a===4){
    document.querySelectorAll("body img")[0]
    .setAttribute("src","images/dice4.png");
}
else if(a===5){
    document.querySelectorAll("body img")[0]
    .setAttribute("src","images/dice5.png");
}
else if(a===6){
    document.querySelectorAll("body img")[0]
    .setAttribute("src","images/dice6.png");
}

const b=Math.ceil(Math.random()*6);

if(b===1){
    document.querySelectorAll("body img")[1]
    .setAttribute("src","images/dice1.png");
}

else if(b===2){
    document.querySelectorAll("body img")[1]
    .setAttribute("src","images/dice2.png");
}
else if(b===3){
    document.querySelectorAll("body img")[1]
    .setAttribute("src","images/dice3.png");
}
else if(b===4){
    document.querySelectorAll("body img")[1]
    .setAttribute("src","images/dice4.png");
}
else if(b===5){
    document.querySelectorAll("body img")[1]
    .setAttribute("src","images/dice5.png");
}
else if(b===6){
    document.querySelectorAll("body img")[1]
    .setAttribute("src","images/dice6.png");
}

if(a>b){
    document.getElementById("select").innerHTML=p1 + ' is the winner';
    document.getElementById("select").style.visibility="visible";
    }
else if(a<b){
        document.getElementById("select").innerHTML=p2 + " is the winner";
        document.getElementById("select").style.visibility="visible";
        }
else if(a===b){
    document.getElementById("select").innerHTML="Draw";
        document.getElementById("select").style.visibility="visible";
}


}