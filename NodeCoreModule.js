// path module 

const path = require('path')
const os = require('os')
const fs =  require('fs')
const myPath = `A:/Peograming/Final Node js Practice a to z/Node js Fundamental/NodeCoreModule.js`

// console.log(path.parse(myPath))
// console.log(os.hostname())

console.log('ami upore')
const data = fs.readFile('app.jss',(req , res)=>{
        if(req === null){
            console.log(res.toString())
        
        }else{
            console.log(req)
        }
})
// console.log(data.toString())
console.log('ami nicha')

