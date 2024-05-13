const printOneToN=(n)=>{
    if(n==0){
        return
    }
    printOneToN(n-1)
    console.log(n)
}

printOneToN(4)

const printNtoOne=(n)=>{
    if(n==0){
        return
    }
    console.log(n) 
    printOneToN(n-1)
}