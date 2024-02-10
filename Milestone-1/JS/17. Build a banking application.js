let obj = {name:"kane",balance:10000}

function withdraw(amount){
    if(obj.balance>amount){
    obj.balance=obj.balance-amount
    console.log(obj)
}
else{
    console.log("Insuffient Balance")
}
}
function deposit(amount){
    obj.balance = obj.balance+amount
    console.log(obj)
}
deposit(100)
withdraw(1000)
withdraw(10000)