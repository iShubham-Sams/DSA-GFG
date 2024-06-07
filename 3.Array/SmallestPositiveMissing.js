const array=[1,2,3,4,5]

const smallest=(arr,n)=>{
    for(let i=0;i<n;i++){
        let CI =arr[i]-1
        while(arr[i]>0 && arr[i]<=n && arr[i] !== arr[CI]){
            const temp = arr[i];
            arr[i] = arr[CI];
            arr[CI] = temp;
            CI=arr[i]-1
        }
    }
    for(let i=0;i<n;i++){
        if(arr[i]!=i+1){
            return i+1
        }
    }
    return n+1
    }
    console.log(smallest(array,9))


    