function capatilize(name){
    let check = name[0]
    name.charCodeAt(0)>=97 &&  name.charCodeAt(0)<=122 ? check =String.fromCharCode(name.charCodeAt(0)-32) :check=check
    let capatilizeName = check + name.slice(1,name.length)
    console.log(capatilizeName)


}
capatilize("Arjun")