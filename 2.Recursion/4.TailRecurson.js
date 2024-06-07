// a recursive function called tail recursive when parent function nothing more have to do when the child function has finished
// tail recursive more faster then recursive because parent don't save the state because parent last work is call recursion call
const printOneToN=(n,k=1)=>{
    if(n==0){
        return
    }
    console.log(k)
    printOneToN(n-1,k+1)
}

printOneToN(4)