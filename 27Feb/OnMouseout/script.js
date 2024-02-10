let h1 = document.getElementById("h1")

function mouseOut(){
    h1.style.backgroundColor = "red"
    h1.innerText = "mouse has entered and exited"
}

h1.addEventListener("mouseout",mouseOut)