function delay(){
    setTimeout(()=>{
        console.log("time remaining for the new number is 3sec")},0)
        setTimeout(()=>{
            console.log("time remaining for the new number is 2sec")},1000)
            setTimeout(()=>{
                console.log("time remaining for the new number is 1sec")},2000)
                setTimeout(()=>{
                    console.log(Math.random())},3000)
                    
}

setInterval(()=>delay(),4000)