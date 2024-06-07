function swapCharacters(inputString, index1, index2) {
    let charArray = inputString.split('');
    [charArray[index1], charArray[index2]] = 
        [charArray[index2], charArray[index1]];
    return charArray.join('');
}

const printAll=(string,i=0)=>{
    if(i==string.length-1){
        console.log(string);
        return
    }
    for(let j=i;j<string.length;j++){
       string= swapCharacters(string,i,j)
        printAll(string,i+1)
     string=   swapCharacters(string,i,j)
    }
}
printAll("abc",0)