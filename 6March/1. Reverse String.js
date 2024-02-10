const input = "PWSkills"
    function reverseString(input){
         const arr = input.split("");
         const reverseArr = arr.reverse();
         const str =  arr.join("");
        console.log(str);
    }
    setTimeout(() => reverseString(input),2000)

