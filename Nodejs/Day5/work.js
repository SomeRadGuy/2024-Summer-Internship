const EventEmitter = require('events')
const customEmitter = new EventEmitter()

customEmitter.on('response',(name, age)=>{
    console.log(`Hello ${name}!. You are ${age} years old!`)
})

customEmitter.emit('response', 'sanaullah', 18)

console.log("Hello World!!!")