const string='testsample'

const mostOccur=(str)=>{
    const arr=new Array(26).fill(0)
    let ind=0
    let max=0
    for(let i=0;i<str.length;i++){
        arr[str.charCodeAt(i)-'a'.charCodeAt(0)]++   
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
            ind=i
        }
    }
    return String.fromCharCode(ind+97)
}

console.log(mostOccur(string));