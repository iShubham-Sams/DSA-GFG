const array=[0,2,1,3,2,2]

const repeatingElement=(arr,n)=>{
const boolArray=new Array(n-1).fill(false)
for(let i=0;i<n;i++){
    const fin=arr[1]
    if(boolArray[fin]==true){
        return arr[i]
    }else{
        boolArray[fin]=true
    }
}
}
console.log(repeatingElement(array,6));