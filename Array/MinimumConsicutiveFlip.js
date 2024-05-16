let array=[0,0,1,1,0,0,1,1,0]

const minimumFlip=(arr,n)=>{

    for(let i=1;i<n;i++){
        if(arr[i]!=arr[i-1]){
            if(arr[i]!==arr[0]){
                console.log(`start printing from ${i}`);
            }else{
                console.log(`to ${i-1}`);
            }
        }
    }
    if(arr[n-1]!==arr[0]){
        console.log(`to ${n-1}`);
    }
}
minimumFlip(array,9)