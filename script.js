function getComputerChoice(){
    let x=Math.floor(Math.random() * 100);
    if(x<33){
        return 0;
    }
    else if(x<66){
        return 1;
    }
    else {
        return 2;
    }
}

let x=0;
let y=0
function pick(color){
    console.log(color);
    c=getComputerChoice();
    console.log(c);
    p=color;
    let cs=document.querySelector(".cscore").querySelector(".score");
    let ps=document.querySelector(".pscore").querySelector(".score");
    let cp=document.querySelector(".cpick").querySelector(".pick");
    let pp=document.querySelector(".ppick").querySelector(".pick");
    cp.innerHTML=c;
    pp.innerHTML=p;
    if(p==="rock"){
        if(c===0){
            cp.innerHTML="rock";
        }
        else if(c===1){
            cp.innerHTML="paper";
            x++;
            cs.innerHTML=x;
        }
        else{
            cp.innerHTML="scissors";
            y++;
            ps.innerHTML=y;
        }
    }
    else if(p==="paper"){
        if(c===0){
            cp.innerHTML="rock";
            y++;
            ps.innerHTML=y;
        }
        else if(c===1){
            cp.innerHTML="paper";
        }
        else{
            cp.innerHTML="scissors";
            x++;
            cs.innerHTML=x;
        }
    }
    else if(p==="scissors"){
        console.log(`picked scissors`);
        if(c===0){
            cp.innerHTML="rock";
            x++;
            cs.innerHTML=x;
        }
        else if(c===1){
            cp.innerHTML="paper";
            y++;
            ps.innerHTML=y;
        }
        else{
            cp.innerHTML="scissors";
        }
    }
    else{
        return -1;
    }

}