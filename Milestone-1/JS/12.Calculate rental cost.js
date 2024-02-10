function rentalCost(carType,days){
    let cost
        switch(carType){

            case 'Economy':
                cost = 4000*days
                break
            case 'Midsize':
                 cost = 10000*days;
                 break 
            case 'Luxury':
                cost = 20000*days;
                 break 
            default:
                console.log("Invalid types")
        }
        return cost
}
let totalRentalCost=rentalCost('Luxury',5)
    console.log("Rental Cost " + totalRentalCost)