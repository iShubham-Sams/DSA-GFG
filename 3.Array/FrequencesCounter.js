// const array = [10, 10, 10, 25, 30, 25];

const frequencyCount = (arr) => {
  const ans = {};
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i];
    if (ans[temp] >= 1) {
      ans[temp]++;
    } else [(ans[temp] = 1)];
  }
  return ans;
};
// console.log(frequencyCount(array));

const array=[1, 1, 1, 2, 3, 3, 5, 5, 8, 8, 8, 9, 9, 10]

const frequ=(arr,n)=>{
let freq=1
for(let i=1;i<=n;i++){
    if(arr[i]==arr[i-1]){
        freq++
    }else{
        console.log(`Frequency of ${arr[i-1]} is: ${freq}`)
        freq=1
    }
}
}
frequ(array,14)