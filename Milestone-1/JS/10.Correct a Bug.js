function correctBug(cart){
    for( let i = 0;i<cart.length;i++){
        cart[i] = cart[i]*2;
    }
    return cart
}
const cart =[2,4,6,8,10,12]

let correctCartValue = correctBug(cart)
console.log( correctCartValue)