// Given a sorted array, the task is to remove the duplicate elements from the array.

// Examples: 

// Input  : arr[] = {2, 2, 2, 2, 2}
// Output : arr[] = {2}
// new size = 1
const array = [1, 2, 3, 4, 4, 5, 6, 6, 8, 9, 10, 10];

const removeDublicate = (arr) => {
  let ans = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[ans - 1]) {
      arr[ans] = arr[i];
      ans++;
    }
  }
  return ans;
};
console.log(removeDublicate(array));
