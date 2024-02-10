document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

   
    var emailRegex = /\S+@\S+\.\S+/;

 
    if (email.match(emailRegex) && password.length >= 8) {
        
        document.getElementById("message").textContent = "Valid email and password!";
        document.getElementById("message").style.color = "green";
    } else {

        document.getElementById("message").textContent = "Invalid email or password!";
        document.getElementById("message").style.color = "red";
    }
});
