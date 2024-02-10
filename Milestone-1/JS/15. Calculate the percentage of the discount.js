const calculations=(originalPrice,discountedPrice)=>{
        let discountedAmount=originalPrice-discountedPrice;
        let percentage = (discountedAmount/originalPrice)*100;
            let precision = percentage.toFixed(2)
        console.log(precision)
}
calculations(1250,750)