// Given an array arr[] of n positive integers which can contain integers from 1 to p where elements can be repeated or can be absent from the array.
// Your task is to count the frequency of all numbers from 1 to n. Do modify the array in-place changes in arr[], such that arr[i] = 
// frequency(i) and assume
//  1-based indexing.

// Note: The elements greater than n in the array can be ignored for counting. 

// Examples
// Input: n = 5 arr[] = {2, 3, 2, 3, 5} p = 5
// Output: 0 2 2 0 1
// Explanation: Counting frequencies of each array element We have: 1 occurring 0 times. 2 occurring 2 times. 3 occurring 2 times.
//  4 occurring 0 times. 5 occurring 1 time.

const frequency=(arr,N)=>{
    let ind;
    for(let i=0;i<=N;){
        if(arr[i]>0&&arr[i]<=N){
            ind=arr[i]-1
            if(arr[ind]<0){
                arr[i]=0
                arr[ind]--
                i++
            }else{
                arr[i]=arr[ind]
                arr[ind]=-1
            }
        }else if(arr[i]>N){
            arr[i]=0
            i++
        }else{
           i++ 
        }
    }
    for(let i=0;i<N;i++){
        if(arr[i]!=0)
        arr[i]=arr[i]*-1
    }
    return arr
}
let n = 5
let array= [2, 3, 2, 3, 5]
console.log(frequency(array,n));