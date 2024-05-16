const array=[4,6]

const largestSubArrayEvenAndOdd=(arr,N)=>{
let larg=1
let tem=1
for(let i=1;i<N;i++){
    if((arr[i]%2==0&&arr[i-1]%2==1)||(arr[i]%2==1&&arr[i-1]%2==0)){
    tem=tem+1
    larg=Math.max(larg,tem)
    }else{
        tem=1
    }
}
return larg
}

console.log(largestSubArrayEvenAndOdd(array,2));