let btn = document.getElementById("button")

function textChange(){
    btn.innerText = "You just clicked me";
    btn.style.fontSize = "35px";
    btn.style.backgroundColor = "red";
}
btn.addEventListener("click",textChange)