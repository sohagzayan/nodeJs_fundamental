const EventEmitter = require('events')



class School extends EventEmitter{

    loding(){
        console.log('start lodaing....')
        setTimeout(()=>{
            this.emit('loading')
        },3000)
    }

}


module.exports = School