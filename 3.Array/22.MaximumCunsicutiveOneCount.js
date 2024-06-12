
const array=[1,0,1,1,1,1,0,1,1]

const maxConsicutiveOne=(arr,n)=>{
    let max=0
    let temp=0
    for(let i=0;i<n;i++){
        if(arr[i]==1){
            temp++
            max=Math.max(max,temp)
        }else{
            max=Math.max(max,temp)
            temp=0
        }
    }
    return max
}

console.log(maxConsicutiveOne(array,9))