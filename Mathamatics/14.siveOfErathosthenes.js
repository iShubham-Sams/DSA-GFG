// print all the prime number till the n

const isPrime= (num) => {
  if (num == 1) {
    return false;
  } else if (num == 2 || num == 3) {
    return true;
  } else if (num % 2 == 0) {
    return false;
  } else if (num % 3 == 0) {
    return false;
  } else {
    for (let i = 5; i * i <= num; i = i + 6) {
      if (num % i == 0 || num % (i + 2) == 0) {
        return false;
      } else {
        return true;
      }
    }
  }
  return true;
};
const sieveOfErathosthenes=(N)=>{
const arr=new Array(N+1).fill(true)
// console.log(arr);
for(let i=2;i*i<N;i++){
if(isPrime(i)){
  for(let j=i*i;j<=N;j=j+i){
     arr[j]=false
  }
}
}
console.log(arr);
for(let i=2;i<=N;i++){
  if(arr[i]){
    console.log(i);
  }
}
}
sieveOfErathosthenes(10)