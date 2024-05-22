const string='1111'

const getSubstringWithStartAndEndOne=(n,a)=>{
    let m = 0; 
    for (let i = 0; i < n; i++)
    {
        if (a[i] == '1'){
            m++;
        }
    }
    
    return Math.floor((m * (m-1))/2)
}

console.log(getSubstringWithStartAndEndOne(4,string));