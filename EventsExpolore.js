const coking = require('./coking')
const CkingAlert = new coking()


CkingAlert.on('cookingAllert', ()=>{
    console.log('cooking complited pleace come and take your food');
})

CkingAlert.cokingComplited()
