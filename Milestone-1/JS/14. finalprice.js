const finalPrice=(info)=>{
    let totalPrice = 0;
    
    for( let i = 0;i<info.length;i++){
       
        let keys =Object.values(info[i])
           totalPrice = totalPrice + keys[0]*keys[1]
    }
    console.log(totalPrice);
   
}



let info = [{unitPrice:1000,quantity:2},{unitPrice:100,quantity:3},{unitPrice:10,quantity:4},{unitPrice:50,quantity:2}]

finalPrice(info)