let keya = document.getElementById("xyz")

function onKeyUp(e){
    keya.style.marginTop = "100px"
}
function onKeyDown(e){
    keya.style.marginTop = "600px"
}

document.addEventListener("keydown",onKeyDown)
document.addEventListener("keyup",onKeyUp)
