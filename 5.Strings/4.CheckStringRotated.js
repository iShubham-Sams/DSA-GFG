const str1='mightandmagic'
const str2='andmagicmigth'

const CheckStringRotate=(s1,s2)=>{
if(s1==s2){
    return true
}
if(s1.length!==s2.length){
    return false
}
let tem=s1+s1
if(tem.includes(s2)){
    console.log(tem);
    return  true
}
return false
}

console.log(CheckStringRotate(str1,str2));;


