const array=[1 ,0]

const rearrange=(arr,n)=>{
    let rearangeOrder=[]
    for(let i=0;i<n;i++){
        let temp=arr[i]
            rearangeOrder[i]=arr[temp]
    }
for(let i=0;i<n;i++){
    arr[i]=rearangeOrder[i]
}
return arr
}

rearrange(array,5)