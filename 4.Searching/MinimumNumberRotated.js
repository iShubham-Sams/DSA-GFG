const minNumber=(arr)=>{
    let low=0
    let high=arr.length-1
     if (arr[low] <= arr[high]) {
     return arr[low];
   }
  
   // Binary search
   while (low <= high) {
     let mid = Math.floor((low + high) / 2);
  
     // Check if mid is the minimum element
     if (arr[mid] < arr[mid - 1]) {
       return arr[mid];
     }
     // If the left half is sorted, the minimum element must be in the right half
     if (arr[mid] > arr[high]) {
       low = mid + 1;
     }
  
     // If the right half is sorted, the minimum element must be in the left half
     else {
       high = mid - 1;
     }
   }
  
   // If no minimum element is found, return -1
   return -1;
 }
 console.log(minNumber([13, 24, 1]))