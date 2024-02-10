let truePassword = "abc@123"
let confirmPassword = "abc@1a23"

function passwordValidator(){
    if(truePassword === confirmPassword)
        console.log("Password Matched. Password validation Successful.")
    else
        console.log("Password didn't match. Password validation unsuccessful")
    }

    passwordValidator()

