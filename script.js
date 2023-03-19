function getComputerChoice(){
    let x=Math.floor(Math.random() * 3);
    if(x===0){
        return x;
    }
    else if(x===1){
        return x;
    }
    else {
        return 2;
    }
}

function playRound(){
    let p=prompt("So, Rock, Paper or Scissors?")
    p=p.toLowerCase();
    c=getComputerChoice();
    if(p==="rock"){
        if(c===0){
            window.alert("It's A tie");
            return 0;
        }
        else if(c===1){
            window.alert("You Lost, Unlucky!");
            return -1;
        }
        else{
            window.alert("Congrats You won This Round");
            return 1;
        }
    }
    else if(p==="paper"){
        if(c===0){
            window.alert("Congrats You won This Round");
            return 1;
        }
        else if(c===1){
            window.alert("It's A tie");
            return 0;
        }
        else{
            window.alert("You Lost, Unlucky!");
            return -1;
        }
    }
    else if(p==="scissors"){
        if(c===0){
            window.alert("You Lost, Unlucky!");
            return -1;
        }
        else if(c===1){
            window.alert("Congrats You won This Round");
            return 1;
        }
        else{
            window.alert("It's A tie");
            return 0;
        }
    }
    else{
        window.alert("Excuse me? you get a -1 for the typo")
        return -1;
    }

}
function game(){
    let m=prompt("How many round would you like to play?");
    let score=0;
    for (let i=0;i<m;i++){
        score=score+playRound();
        window.alert(`Score is ${score}`);
    }
}
game();