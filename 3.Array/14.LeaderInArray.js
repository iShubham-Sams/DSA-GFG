// Write a program to print all the LEADERS in the array. An element is a leader if it is greater than all the elements to its right side. 
// And the rightmost element is always a leader. 
// Input: arr[] = {16, 17, 4, 3, 5, 2}, 
// Output: 17, 5, 2

// Input: arr[] = {1, 2, 3, 4, 5, 2}, 
// Output: 5, 2

const array=[7,10,4,10,6,5,2]
const geeksLeaderInArray = (arr) => {
  let currentLeader = arr[arraylength - 1];
  let leaderArray=[currentLeader]
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > currentLeader) {
      leaderArray.unshift(arr[i]);
      currentLeader = arr[i];
    }
  }
  return leaderArray
};

console.log(geeksLeaderInArray(array));




