const PowerOfHanoi=(integer,pollA,pollB,pollC)=>{
    if(integer===1){
        console.log(`move from ${pollA} to ${pollC}`);
        return
    }
    PowerOfHanoi(integer-1,pollA,pollC,pollB);
    console.log(`move from ${pollA} to ${pollC}`);
    PowerOfHanoi(integer-1,pollB,pollA,pollC)
}

PowerOfHanoi(3,"First","Second","Third")