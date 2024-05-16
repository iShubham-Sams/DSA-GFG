let n = 5
let L= [1,5,9,13,21]
let R = [15,8,12,20,30]

// const maximumAccurd=(L,R,n,maxx)=>{
//     let countArr=[]
//     for(let i=0;i<n;i++){
//     let start=L[i]-1
//     let end=R[i]
//     while(start<end){
//         if(countArr[start]>0){
//             countArr[start]=++countArr[start]
//             start++
//         }else{
//             countArr[start]=1
//             start++
//         }
//     }
//     }
//     for(let i=0;i<countArr.length;i++){

//     }
//     let maxAcc=countArr[0]
//     let maxCo=1
//     for(let i=0;i<countArr.length;i++){
//        if(maxCo<countArr[i]){
//         maxCo=countArr[i]
//         maxAcc=i
//        }
//     }

//     return maxAcc+1;
// }
// console.log(maximumAccurd(L,R,n,1));


const maxOccuredWithInTime=(L, R, n, maxx)=>{
    let arr = new Array(maxx);
    arr.fill(0);
    for (let i = 0; i < n; i++) {
        arr[L[i]] += 1;
        arr[R[i] + 1] -= 1;
    }
    let msum = arr[0];
        let ind = 0;
        for (let i = 1; i < maxx; i++) {
            arr[i] += arr[i - 1];
            if (msum < arr[i]) {
                msum = arr[i];
                ind = i;
            }
        }
   
        return ind;
}

console.log(maxOccuredWithInTime(L,R,n,30));