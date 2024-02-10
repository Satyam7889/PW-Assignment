function divisibility(){
    console.log("This function takes out the number which are divisible by 3 but not by 2 from given inputs ")
    let input=[]
    for(let i = 0;i<arguments.length;i++){
            input[i]=Number(arguments[i])
    }
    let output =[];
    let j=0;
    for(let i = 0;i<input.length;i++){
            if(input[i]%3==0){
                if(input[i]%2==0){
                    continue
                }
                else{
                    output[j]=input[i];
                    j++
                }
            }
    }

     for(let i = 0;i<output.length;i++)
        console.log(output[i])

}
divisibility(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21)