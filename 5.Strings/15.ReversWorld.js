const string='welcome to gfg'

const revers=(s)=>{
const arr=s.split(" ")
let start=0
let end=arr.length-1
while(start<=end){
    let tem=arr[start]
    arr[start]=arr[end]
    arr[end]=tem
    start++
    end--
}
 s=arr.join(",").replaceAll(","," ")
return s
}
console.log(revers(string));

