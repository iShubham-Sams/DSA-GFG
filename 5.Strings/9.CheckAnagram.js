const s1='listen'
const s2='silent'

const checkAnagram=(str1,str2)=>{
    if(str1.length!==str2.length){
    return false
}
const arr=new Array(256).fill(0)
for(let i=0;i<str1.length;i++){
    arr[str1.charCodeAt(i)]++
    arr[str2.charCodeAt(i)]--
}
for(let i=0;i<arr.length;i++){
    if(arr[i]!==0){
        return false
    }
}
return true
}
console.log(checkAnagram(s1,s2));