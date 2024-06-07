const joshephusZeroBase=(number,k)=>{
    if(number<=1){
        return 1
    }else{
       return (joshephusZeroBase(number-1,k)+k)%number
    }
}
console.log(joshephusZeroBase(3,2));