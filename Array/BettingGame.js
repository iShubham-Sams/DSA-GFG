const re = 'WLWLLWLLWWLWWW'

const bettingGame=(result)=>{
let current=4
let betAmount=1
for(let i=0;i<result.length;i++){

    if(current<=0 || current<betAmount){
        return -1
    }
    if(result.charAt(i)=='W'){
    current=current+betAmount
    betAmount=1
    }else if(result.charAt(i)=="L"){
    current=current-betAmount
    betAmount=betAmount*2
    }
}
return current
}
console.log(bettingGame(re));