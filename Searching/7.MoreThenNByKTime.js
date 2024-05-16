const array=[7, 8, 9, 9, 9 ,6, 0, 9, 2, 2, 9, 1, 0, 5, 8]

const moreThenNbyK=(arr, n, k)=>{
    let more=Math.floor(n/k)
    let mp = new Map();
    for(let i=0;i<n;i++){
        if (mp.has(arr[i])) {
            mp.set(arr[i], mp.get(arr[i]) + 1);
        } else {
            mp.set(arr[i], 1);
        }
    }
    let c = 0;
    for (let [key, value] of mp) {
        if (value > more) {
            c++;
        }
    }

    return c;
}

console.log(moreThenNbyK(array,15,15));