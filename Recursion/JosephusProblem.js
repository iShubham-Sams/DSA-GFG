const JosephusProblem=(number,k)=>{
    if(number<=1){
        return 1
    }else{
        const value= ((JosephusProblem(number-1,k))+((k+1)%number))
       return value
    }
}
console.log(JosephusProblem(3,2))

const findNxM=(n,m)=>{
    if(n==1||m==1){
        return 1
    }

    return findNxM(n-1,m)+findNxM(n,m-1)
}