const array=[]

const smallestNumberInShortedArray=(arr,n)=>{
    let low=0
    let high=n
    if (arr[low] <= arr[high]) {
    return arr[low]
}
while (low <= high) {
    let mid = Math.floor((low + high) / 2);
 
    // Check if mid is the minimum element
    if (arr[mid] < arr[mid - 1]) {
      return arr[mid];
    }
    // If the left half is sorted, the minimum element must be in the right half
    if (arr[mid] > arr[high]) {
      low = mid + 1;
    }else {
    // If the right half is sorted, the minimum element must be in the left half
      high = mid - 1;
    }
  }
  
}

console.log(smallestNumberInShortedArray(array,1))