const frequency=(arr,N)=>{
    let ind;
    for(let i=0;i<=N;){
        if(arr[i]>0&&arr[i]<=N){
            ind=arr[i]-1
            if(arr[ind]<0){
                arr[i]=0
                arr[ind]--
                i++
            }else{
                let tem=arr[i]
                arr[i]=arr[ind]
                arr[ind]=-1
            }
        }else if(arr[i]>N){
            arr[i]=0
            i++
        }else{
           i++ 
        }
    }
    for(let i=0;i<N;i++){
        arr[i]=arr[i]*-1
    }
    return arr
}