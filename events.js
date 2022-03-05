
const fetchingSesh = require('./dataFatchingCom')
const alertDataLoding = new fetchingSesh()


const complitedDataFetcing = require('./dataFatchingCom')
alertDataLoding.on('dataFetchingComplited', ()=> {
    console.log('ok this loding spner is stoped right now')
})

alertDataLoding.complitedDataFetcing()