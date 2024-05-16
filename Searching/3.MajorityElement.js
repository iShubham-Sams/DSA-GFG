const array=[15]
const MajorityElement=(a,size)=>{
    let more=Math.floor(size/2)
const map=new Map()
for(let i=0;i<size;i++){
    if (map.has(a[i])) {
        map.set(a[i], map.get(a[i]) + 1);
    } else {
        map.set(a[i], 1);
    }
}
console.log(map);
 let c = 0;
    for (let [key, value] of map) {
        if (value > more) {
            c=key
        }
    }

    return c>0?c:-1;
}

console.log(MajorityElement(array,1));