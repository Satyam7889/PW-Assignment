function colorMixer(color1,color2){
        switch(color1){
            case 'red':
                switch(color2){
                    case 'blue':
                        console.log("purple")
                        break
                    case 'yellow':
                        console.log('orange')
                        break
                    default:
                        console.log("Invalid Colors")
                    
                }
                break
            case 'yellow':
                switch(color2){
                    case 'red':
                        console.log("orange")
                        break
                    case 'blue':
                        console.log("green")
                        break
                    default:
                        console.log("Invalid Colors")
                }
                break
            case 'blue':
                switch(color2){
                    case 'red':
                        console.log("purple")
                        break
                    case 'yellow':
                        console.log("green")
                        break
                    default:
                        console.log("Invalid Colors")
                }
                break
             default:
                 console.log("Invalid Colors")
                break
        }

}
colorMixer("red","yellow")
colorMixer("red","blue")
colorMixer("yellow","blue")