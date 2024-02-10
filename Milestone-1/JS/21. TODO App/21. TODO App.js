let input = document.getElementById("input")
let btn = document.getElementById("btn")
    function add(){
        let a = input.value
       let b = document.createElement("li")
        b.innerText=a
        document.body.appendChild(b)
    }


    btn.addEventListener("click",add)
    

