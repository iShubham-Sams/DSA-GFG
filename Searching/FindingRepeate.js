const findRepeating=(arr,n,k)=>{
    let f=Math.floor((n)/k)
        let temp= Array.from({ length: arr.length }, (_, index) => 0);
        let count=0
        for(let i=0;i<arr.length;i++){
            temp[arr[i]]++
            if(temp[arr[i]]>f){
              count++
            }
        }
        return count
}



console.log(findRepeating([3,1,2,2,1,2,3,3],8,4))