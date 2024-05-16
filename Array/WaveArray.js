const array=[1,2,3,4,5]
const WaveArray=(arr,n)=>{
let loopN=Math.ceil(n/2)
for(let i=0;i<loopN;i++){
    let ind=i*2
    if(ind+1<n){
        let tem=arr[ind]
        arr[ind]=arr[ind+1]
        arr[ind+1]=tem
    }
}
return arr
}

console.log(WaveArray(array,5))