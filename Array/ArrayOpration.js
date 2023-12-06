// insert in array
const insertInArray=(arr,insert,position)=>{
    
    for(let i=arr.length-1;i>=position-1;i--){
      arr[i+1]=arr[i] 
    }
    arr[position-1]=insert
    return arr
    }
console.log(insertInArray([5,10,20],7,2))

// delete index
const deleteInArray=(arr,deleteNum)=>{
    let deleteIndex=-1
for(let i=0;i<arr.length;i++){
    if(arr[i]===deleteNum&&deleteIndex==-1){
        deleteIndex=i
        arr[deleteIndex]=null
    }
    if(arr[i-1]==null&&deleteIndex!==-1){
        arr[i-1]=arr[i]
        arr[i]=null
    }
}
return arr
}

console.log(deleteInArray([3,8,12,5,6],3))

// insert at index
const insertAtIndex=(arr,ind,num)=>{
    for(let i=arr.length;i>=ind;i--){
        arr[i]=arr[i-1]
    }
    arr[ind]=num
    return arr
    }
    console.log(insertAtIndex([1,2,3,4,5],2,90))
