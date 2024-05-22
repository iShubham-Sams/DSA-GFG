const array=[5,20,40,30,20,50,60]

const peakElement=(arr,n)=>{
let low=0 
let heigh=n
while(low<=heigh){
    let mid=Math.floor((low+heigh)/2)
    if((mid==0||(arr[mid]>=arr[mid-1]))
        &&(mid==n-1||(arr[mid]>=arr[mid+1]))){
        return arr[mid]
    }
    if(mid>0&&arr[mid]<arr[mid-1]){
        heigh=mid-1
    }else{
        low=mid+1
    }
}
}

console.log(peakElement(array,7));