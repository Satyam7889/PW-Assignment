
function removeDuplicates(){
    let duplicateItemCart = []
    for(let i=0;i<arguments.length;i++){
        duplicateItemCart[i]=arguments[i]
    }
   
    for(let i=0;i<duplicateItemCart.length;i++){
        for(let j =i+1;j<duplicateItemCart.length;j++){
            if(duplicateItemCart[i]===duplicateItemCart[j]){
                duplicateItemCart.splice(j,1)
            }
        }

    }
    console.log("the new cartlist without any duplicate is as follow")
    for(let i=0;i<duplicateItemCart.length;i++){
       console.log(duplicateItemCart[i]) 
    }

}
removeDuplicates("surf","oreo","tea","jim-jam","oreo","tea","chocolates","cake","surf","tea")