// Given a keypad as shown in the diagram, and an N digit number which is represented by array a[ ], the 
// task is to list all words which are possible by pressing these numbers.
// Input: N = 3, a[] = {2, 3, 4}
const numberStr=['','','ABC','DEF','GHI','JKL','MNO','PQRS','TUV','WXYZ']

const ans=[]

const possible=(a,N,temp,i)=>{
if(i==N){
ans.push(temp)
return
}
for(let j=0;j<numberStr[a[i]].length;j++){
    possible(a,N,temp+numberStr[a[i]][j],i+1)
}
return ans
}

console.log(possible([3,4,5],3,'',0));