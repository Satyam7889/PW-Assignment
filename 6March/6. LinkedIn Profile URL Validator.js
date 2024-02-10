const pattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_\-]{5,30}[a-zA-Z0-9]$/

let urlToBeChecked = "https://www.linkedin.com/in/vaibhav-mandarekar-24b174275"

let result = pattern.test(urlToBeChecked)
console.log(result)