const fs = require('fs')

const readFile = fs.createReadStream(`./documnet.txt`, 'utf8')


readFile.on("data" , (data)=> {
    console.log(data)
})

