const opr1 = 10
const opr2 = 12
const sign = "/"

function calculator(opr1,opr2,sign){
    let result
    let a = Number(opr1)
    let b = Number(opr2)
    let operator = sign
    switch(operator){
        case '+':
            result=a+b
            console.log("sum is" + result)
            break
        case '-':
            result=a-b
            console.log("differnce is"+ result)
            break
        case '*':
            result=a*b
            console.log("Product is"+ result)
            break
         case '/':
            result=a/b
            console.log("division is"+ result)
            break
            default:
                console.log("Inavlid operator")
    }
}

calculator(opr1,opr2,sign)