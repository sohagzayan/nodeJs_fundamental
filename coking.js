const EventEmiter = require('events')

class Coking extends EventEmiter{
     cokingComplited(){
    
        console.log('start cokking');
    
        setTimeout(()=>{
            this.emit('cookingAllert')
        },3000)
    
    }
}

module.exports = Coking