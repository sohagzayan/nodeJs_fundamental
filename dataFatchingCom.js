const EventManager = require('events')

class fetchingSesh extends EventManager {

     complitedDataFetcing(){

        console.log('fetching started')
        setTimeout(()=> {
    
            this.emit('dataFetchingComplited') 
        },3000)

    }


}
module.exports = fetchingSesh