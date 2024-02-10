let inputa = document.getElementById("abc")
let h1 = document.getElementById("xyz")

function onKeyPress(e){
    h1.innerText = "you have pressed " + e.key

}
inputa.addEventListener("keypress",onKeyPress)
