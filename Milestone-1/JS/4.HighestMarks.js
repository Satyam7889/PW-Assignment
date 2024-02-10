let marks = [25,30,45,35,28]
let highestMarks=marks[0]
for(let i=0;i<marks.length-1;i++){
    highestMarks>marks[i+1]?highestMarks=highestMarks:highestMarks=marks[i+1]
}
console.log("Highest marks in the class is "+highestMarks)
