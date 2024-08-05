const { log } = require('console')
const os = require('os')

const user = os.userInfo()
console.log(user)

console.log(`The System Uptime is ${os.uptime() / 3600} hours`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}
console.log(currentOS)

const path = require('path')

console.log(path.sep)

const filePath = path.join('./content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)