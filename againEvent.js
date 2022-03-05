
const school = require('./loading')
const lodaing = new school()


lodaing.on('loading', ()=>{
    console.log('web site is loding complite')
})

lodaing.loding()