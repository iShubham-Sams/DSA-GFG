// Given a natural number n, print all distinct divisors of it.
const allDivisor=(N)=>{
    let i;
    for(i=1;i*i<N;i++){
        if((N%i)==0){
            console.log(i);
        }
    }
    for(let j=0;i>=1;i--){
        if(N%i==0){
            console.log(N/i);
        }
    }
}

allDivisor(100)