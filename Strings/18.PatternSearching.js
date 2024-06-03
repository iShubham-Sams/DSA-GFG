// naive pattern searching 

S = "aabaacaadaabaaabaa"
P = "aaba"

const search=(pat, txt)=>{
    let m=pat.length-1
    let n=txt.length-1
    for(let i=0;i<=n-m;i++){
        for(let j=0;j<=m;j++){
            if(pat[j]!==txt[i+j]){
                break
            }
            if(j==m){
                return true
            }
        }
    }
    return false
}
console.log(search(P,S));