const maxIndex=(arr,n)=>{
    const left=new Array(n)
    const right=new Array(n)
    left[0]=arr[0]
    right[n-1]=arr[n-1]
    for(let i=1;i<n;i++){
        left[i]=Math.min(left[i-1],arr[i])
    }
    for(let j=n-2;j>=0;j--){
        right[j]=Math.max(right[j+1],arr[j])
    }
    let i=0; let j=0;let ans=0
    while(j<n&&i<n){
        if(left[i]<=right[j]){
            ans =Math.max(ans,j-i)
            j++
        }else{
            i++
        }
    }
return ans
}
const a=maxIndex([34, 8, 10, 3, 2, 80, 30, 33, 1],9)
console.log(a)