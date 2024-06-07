const GenerateSubset=(string,currentValue,index)=>{
    if(index===string.length){
        console.log(currentValue);
        return
    }
    GenerateSubset(string,currentValue,index+1)
    GenerateSubset(string,currentValue+string[index],index+1)

}
GenerateSubset('ABC',"",0)
