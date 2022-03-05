const {bangla , airtal} = require('./variable')

function consoleValue(name , age){
    console.log(`my name is ${name} and also my age is ${age}`)
}
function getGPA(gpa){
    console.log(`my GPA is ${gpa} OK`)
}

function getSimName(){
    console.log(`my fast slode sim ${bangla} and seconds slod sim ${airtal}`);
}

module.exports = {
    consoleValue ,
    getGPA ,
    getSimName
}

