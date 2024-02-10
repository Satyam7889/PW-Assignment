function billSplitter(costOfEachDish,totalMembers){
    let sum =0
    for(let i = 0;i<costOfEachDish.length;i++){
        sum = sum +costOfEachDish[i];
    }
    let billPerPerson = sum/totalMembers;

    let obj ={totalbill:sum,invidualBill:billPerPerson}
    console.log(obj)
}
const costOfEachDish = [10,20,30,40,50,100]
billSplitter(costOfEachDish,5)




// const finalPrice=(info)=>{
//     let totalPrice = 0;
    
//     for( let i = 0;i<info.length;i++){
       
//         let keys =Object.values(info[i])
//            totalPrice = totalPrice + keys[0]*keys[1]
//     }
//     console.log(totalPrice);
   
// }
// let info = [{unitPrice:1000,quantity:2},{unitPrice:100,quantity:3},{unitPrice:10,quantity:4},{unitPrice:50,quantity:2}]

// finalPrice(info)