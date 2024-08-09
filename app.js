const EventEmitter = require('events')
const customEmitter = new EventEmitter()

customEmitter.on('response',(name, age)=>{
    console.log(`Hello ${name}!. You are ${age} years old!`)
})

customEmitter.emit('response', 'sanaullah', 18)

for(let i = 0; i < 15; i++){
    console.log(i)
}