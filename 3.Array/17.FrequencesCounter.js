// Given a sorted array, arr[] consisting of N integers, the task is to find the frequencies of each array element.

// Examples: 

// Input: arr[] = {1, 1, 1, 2, 3, 3, 5, 5, 8, 8, 8, 9, 9, 10} 
// Output: Frequency of 1 is: 3
//               Frequency of 2 is: 1
//               Frequency of 3 is: 2
//               Frequency of 5 is: 2
//               Frequency of 8 is: 3
//               Frequency of 9 is: 2
//               Frequency of 10 is: 1
const array=[1, 1, 1, 2, 3, 3, 5, 5, 8, 8, 8, 9, 9, 10]

const frequ=(arr,n)=>{
let freq=1
for(let i=1;i<=n;i++){
    if(arr[i]==arr[i-1]){
        freq++
    }else{
        console.log(`Frequency of ${arr[i-1]} is: ${freq}`)
        freq=1
    }
}
}
frequ(array,14)