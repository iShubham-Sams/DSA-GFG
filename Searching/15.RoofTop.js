// You are given heights of consecutive buildings. You can move from the roof of a building to the roof of
//  next adjacent building. You need to find the maximum number of consecutive steps you can put forward such that you gain an increase
//   in altitude with each step.

// Example 1:

// Input:
// N = 5
// A[] = {1,2,2,3,2}
// Output: 1
// Explanation: 1, 2 or 2, 3 are the only consecutive 
// buildings with increasing heights thus maximum number
// of consecutive steps with increase in gain in altitude
// would be 1 in both cases.


const findRoof=(A, N)=>{
    let maxStep=0
    let tem=0
    for(let i=1;i<A.length;i++){
        if(A[i]>A[i-1]){
            tem++
        }else {
            tem=0
        }
        maxStep=Math.max(maxStep,tem)
    }
    return maxStep
}
console.log(findRoof([7 ,9, 9, 3, 6],5));