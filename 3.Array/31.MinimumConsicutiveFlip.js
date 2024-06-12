// In a realm where numbers hold secrets, a captivating challenge awaits, which is, Minimum Consecutive Flips!!!

// Our Task: Given a binary array, we need to convert this array into an array that either contains all 1s or all 0s. 
//  We need to do it using the minimum number of group flips. 

// Examples : 
// Input : arr[] = {1, 1, 0, 0, 0, 1}
// Output :  From 2 to 4
// Explanation : We have two choices, we make all 0s or do all 1s.  We need to do two group flips to make all elements 0 and one group 
// flip to make all elements 1.  Since making all elements 1 takes the least group flips, we do this.
 

let array=[1,1,0,0,1,1,0]

const minimumFlip=(arr,n)=>{

    for(let i=1;i<n;i++){
        if(arr[i]!=arr[i-1]){
            if(arr[i]!==arr[0]){
                console.log(`start printing from ${i}`);
            }else{
                console.log(`to ${i-1}`);
            }
        }
    }
    if(arr[n-1]!==arr[0]){
        console.log(`to ${n-1}`);
    }
}
minimumFlip(array,7)