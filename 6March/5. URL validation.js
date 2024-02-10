const pattern = /^(https?:\/\/)[a-zA-Z0-9_\- \.]+(\.[a-zA-Z]+)+$/

let urlToCheck ="https://www.example-123.com"
let result = pattern.test(urlToCheck)
console.log(result);