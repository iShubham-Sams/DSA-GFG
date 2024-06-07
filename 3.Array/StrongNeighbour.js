const array=[78 ,77, 45]

const strongNeighbour=(sizeOfArray, arr)=>{
    for(let i=0;i<sizeOfArray-1;i++){
        console.log(Math.max(arr[i], arr[i + 1]) + " ");
    }
}
strongNeighbour(3,array);