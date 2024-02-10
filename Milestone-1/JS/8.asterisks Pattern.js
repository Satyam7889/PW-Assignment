function pattern(a){
    let b = Number(a)
        for( let i=0;i<b;i++){
            let x =""
           for(let j=0;j<b-i;j++) {
            x+="* "
           }
           console.log(x)
        }
}
 pattern("6")