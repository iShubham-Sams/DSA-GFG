const string='abcba'

const checkPalindrome=(s)=>{
let start=0
let end=s.length-1
let flag=true
while(start<=end){
    if(s[start]!=s[end]){
        flag=false
        return false
    }
    start++
    end--
}
return flag
}

console.log(checkPalindrome(string));