const binarySearch=(arr,find,low,max)=>{
    while(low<=max){
    let center=Math.floor((low+max)/2)
    if(arr[center]===find){
        return center
    }else if(arr[center]>find){
        max=center-1
    }else{
        low=center+1
    }
    }
    return -1
    }

const SearchInfiniteSize=(arr,find)=>{
if(arr[0]==find){return 0}
let i=1
while(arr[i]<find){
    i=i*2
    if(arr[i]==find){
        return i
    }
    
}
 return binarySearch(arr,find,(i/2)+1,i-1)
}

console.log(SearchInfiniteSize([1,10,15,20,40,60,80,100,200,500,1000],100))