const a=[1,3,5,2,2]
const leftSum=[]
leftSum[0]=a[0]
const rightSum=[]
rightSum[n-1]=a[n-1]

for(let i=1;i<n;i++){
leftSum[i]=a[i]+leftSum[i-1]
}

for(let i=n-2;i>=0;i--){
    rightSum[i]=a[i]+rightSum[i+1]
}

const getEquilibriumPoint=(a)=>{
    for(let i=0;i<a.length;i++){
        if(leftSum[i]==rightSum[i]){
            return i
        }
    }
    return -1
}

console.log(getEquilibriumPoint(array));