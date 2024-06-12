// Given n integer ranges, the task is to return the maximum occurring integer in the given ranges. If more than one such integer exists,
//  return the smallest one.
// The ranges are in two arrays l[] and r[].  l[i] consists of the starting point of the range and r[i] consists of the corresponding
//  endpoint of the range & a maxx which is the maximum value of r[].

// For example, consider the following ranges.
// l[] = {2, 1, 3}, r[] = {5, 3, 9}
// Ranges represented by the above arrays are.
// [2, 5] = {2, 3, 4, 5}
// [1, 3] = {1, 2, 3}
// [3, 9] = {3, 4, 5, 6, 7, 8, 9}
// The maximum occurred integer in these ranges is 3.

// Examples :

// Input: n = 4, l[] = {1,4,3,1}, r[] = {15,8,5,4}, maxx = 15
// Output: 4
// Explanation: The given ranges are [1, 15] [4, 8] [3, 5] [1, 4]. The smallest number that is most common or appears most times in the 
// ranges is 4.



let n = 5
let L= [1,5,9,13,21]
let R = [15,8,12,20,30]


const maxOccuredWithInTime=(L, R, n, maxx)=>{
    let arr = new Array(maxx+2).fill(0);
    for (let i = 0; i < n; i++) {
        arr[L[i]] += 1;
        arr[R[i] + 1] -= 1;
        }
    let msum = arr[0];
    let ind = 0;
        for (let i = 1; i < maxx; i++) {
            arr[i] += arr[i - 1];
            if (msum < arr[i]) {
                msum = arr[i];
                ind = i;
            }
        }
   
        return ind;
}

console.log(maxOccuredWithInTime(L,R,n,30));