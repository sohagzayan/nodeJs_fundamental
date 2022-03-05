// global vs window 

const dirname = __dirname
const filename = __filename

//console.log(dirname)
//console.log(filename)

const {consoleValue , getGPA, getSimName} = require('./moduleFunc.js')
consoleValue('sohag', 40)
getGPA(3.44)
getSimName()