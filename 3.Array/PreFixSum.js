const array=[2,8,3,9,6,5,4]
const modified=[array[0]]
for(let i=1;i<array.length;i++){
    modified[i]=array[i]+modified[i-1]
}
const getSum=(s,e)=>{
if(s>0){
    return modified[e]-modified[s-1]
}else{
    return modified[e]
}
}

console.log(getSum(0,2));