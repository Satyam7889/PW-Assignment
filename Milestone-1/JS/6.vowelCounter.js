let count = 0
let a = ["a","A","e","E","i","I","o","O","u","U"]
function vowelCounter(name){
    let nam =name
    for(let i=0;i<nam.length;i++){
        for(let j=0;j<a.length;j++){
        if(nam[i] == a[j])
            count++;
        }
    }
    console.log("Number of vowels in the given name is "+count)
}
vowelCounter("AEIOUaeiou")
