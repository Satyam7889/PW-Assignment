let btn = document.getElementById("button")
let h1 = document.getElementById("h1")

let a = h1.innervalue
console.log(a)

function toggle(){
    if(h1.textContent =="The most affordable learning platform")
         h1.innerText = "PW Skills"
    else
     h1.innerText = "The most affordable learning platform"
}
    btn.addEventListener("click",toggle)


