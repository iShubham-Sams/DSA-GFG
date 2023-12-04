const JosephusProblem=(number,k)=>{
    if(number===1){
        return 0
    }else{
        const value= ((JosephusProblem(number-1,k))+k)%number
       return value
    }
}
console.log(JosephusProblem(5,2)+1)