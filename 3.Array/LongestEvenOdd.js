const array=[1, 2, 3, 4, 5, 7, 9]

const longEvenOdd=(arr,n)=>{
    let max=0
    let tem=0
    for( let i=0;i<n;i++){
        let iEvneOdd=arr[i]%2==0?true:false
         let iOneEvneOdd=arr[i+1]%2==0?true:false
         if((iEvneOdd==true&&iOneEvneOdd==false)||
         (iEvneOdd==false&&iOneEvneOdd==true)){
           tem++
           max=Math.max(tem,max)
         }else {
          tem=0
           max=Math.max(tem,max)   
         }
    }
    return max==0?0:++max
}

console.log(longEvenOdd(array,7))