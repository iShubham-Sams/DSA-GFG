a = 'daxjheq'
b = 'eqdaxjh'

const checkStringRotate=(str1, str2)=>{
let rotateClock=str1.slice(2)+str1[0]+str1[1]
let rotateAnti=str1[str1.length-2]+str1[str1.length-1]+str1.slice(0,str1.length-2)
console.log(rotateAnti,'rotateAnti');
if((str2==rotateAnti)||(str2==rotateClock)){
    return 1
}
return 0
}

console.log(checkStringRotate(a,b));