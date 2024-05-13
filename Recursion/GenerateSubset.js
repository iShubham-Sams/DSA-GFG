const GenerateSubset=(string,currentValue,index)=>{
    if(index===string.length){
        console.log(currentValue);
        return
    }
    GenerateSubset(string,currentValue,index+1)
    GenerateSubset(string,currentValue+string[index],index+1)

}
// GenerateSubset('ABC',"",0)





const sub=(val,cSt,i)=>{
    if(i===val.length){
        console.log(cSt);
        return
    }
    sub(val,cSt,i+1)
    sub(val,cSt+val[i],i+1)
}
sub("abc","",0)
