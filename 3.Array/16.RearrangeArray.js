// Given a sorted array of positive integers. Your task is to rearrange the array elements alternatively 
// i.e first element should be max value, second should be min value, third should be second max, fourth should be second min and so on.
// // Note: Modify the original array itself. Do it without using any extra space. You do not have to return anything.

// Example:
// Input:
let n = 6
let array = [1,2,3,4,5,6]
// Output: 6 1 5 2 4 3
// Input:
// n = 11
// arr[]={10,20,30,40,50,60,70,80,90,100,110}
// Output:110 10 100 20 90 30 80 40 70 50 60


const rearrangeArray=(arr,n)=>{
    let max=arr[n-1]+1
    let max_ind=n-1
    let min_ind=0
for(let i=0;i<n;i++){
if(i%2==0){
    arr[i]=((arr[max_ind]%max)*max)+arr[i]
    max_ind--
}else{
    arr[i]=((arr[min_ind]%max)*max)+arr[i]
    min_ind++
}
}
for(let i=0;i<arr.length;i++){
    arr[i]=Math.floor(arr[i]/max)
}
return arr
}
console.log(rearrangeArray(array,n));