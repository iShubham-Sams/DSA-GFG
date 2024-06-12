// Given an array a[ ] of size N. The task is to find the median and mean of the array elements. 
// Mean is average of the numbers and median is the element which is smaller than half of the elements and greater than remaining half.
//   If there are odd elements, the median is simply the middle element in the sorted array. If there are even elements, then the median 
//   is floor of average of two middle numbers in the sorted array. If mean is floating point number, 
// then we need to print floor of it.

// N = 5
// a[] = {1, 2, 19, 28, 5}
// Output: 11 5
// Explanation: For array of 5 elements,
// mean is (1 + 2 + 19  + 28  + 5)/5 = 11.
// Median is 5 (middle element after 
// sorting)

const median=(A,N)=>{
    A.sort(function(a, b){return a - b});
    if(N%2==1){
        let mid=  Math.ceil(N/2)-1
        return A[mid]
      }else{
          let heiMid=N/2
          let lowMid=heiMid-1
          return Math.floor((A[lowMid]+A[heiMid])/2)
      }
}
const mean=(A,N)=>{
    let sum=0
        for(let i=0;i<N;i++){
            sum=sum+A[i]
        }
        return Math.floor(sum/N)
}