const str1='aacdb'
const str2='gafd'

const removeAndConcat=(s1,s2)=>{
    let ans=''
for(let i=0;i<s1.length;i++){
    if(!s2.includes(s1[i])){
        ans=ans+s1[i]
    }
}
for(let i=0;i<s2.length;i++){
    if(!s1.includes(s2[i])){
        ans=ans+s2[i]
    }
}
return ans?ans:-1
}
console.log(removeAndConcat(str1,str2));