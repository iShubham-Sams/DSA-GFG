
// Given a quadratic equation in the form ax2 + bx + c. Find its roots.

// Note: Return the maximum root followed by the minimum root.
let x = 1
let y = -2
let z = 1
const quadraticRoots=(a, b, c)=>
{
    let D=(b*b)-(4*a*c)
    if(D<0){
        return [-1]
    }
    if(D===0){
      let  x=-b/(2*a)
        return [x,x]
    }
    if(D>0){
       let x=Math.floor((-b+Math.sqrt(D))/(2*a))
    let    y=Math.floor((-b-Math.sqrt(D))/(2*a))
    let f=Math.max(x,y)
    let s=Math.min(x,y)
        return [f,s]
    }
}