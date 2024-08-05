// Given an array A of N elements. Find the majority element in the array. A majority element in an array A of size N is an
// element that appears strictly more than N/2 times in the array.

// Example 1:

// Input:
// N = 3
// A[] = {1,2,3}
// Output:
// -1
// Explanation:
// Since, each element in
// {1,2,3} appears only once so there
// is no majority element.

const array = [15];
const MajorityElement = (a, size) => {
  let more = Math.floor(size / 2);
  const map = new Map();
  for (let i = 0; i < size; i++) {
    if (map.has(a[i])) {
      map.set(a[i], map.get(a[i]) + 1);
    } else {
      map.set(a[i], 1);
    }
  }
  let c = 0;
  for (let [key, value] of map) {
    if (value > more) {
      c = key;
    }
  }

  return c > 0 ? c : -1;
};

console.log(MajorityElement(array, 1));
