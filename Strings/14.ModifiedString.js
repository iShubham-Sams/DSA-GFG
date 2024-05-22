const string='aaaaa'

const modified=(a)=>{
    let n = a.length;
    let count = 0;

    for (let i = 0; i < n - 2; i++) {
        let j = i + 1;
        let k = i + 2;
        if (a.charAt(i) === a.charAt(j) && a.charAt(i) === a.charAt(k)) {
            count++;
            i++;
        }
    }
    return count;
}
console.log(modified(string));