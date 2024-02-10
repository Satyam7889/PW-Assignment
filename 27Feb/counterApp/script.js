let dcr = document.getElementById("dcr")
let incr = document.getElementById("incr")
let reset = document.getElementById("reset")
let value = document.getElementById("value")
function decrement(){
    const x = Number(value.innerText)
    value.innerText =x-1
}
function increment(){
    const x = Number(value.innerText)
    value.innerText = x + 1
}
function res(){
    value.innerText = 0
}
dcr.addEventListener("click",decrement)
incr.addEventListener("click",increment)
reset.addEventListener("click",res)