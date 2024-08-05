const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./Nodejs/Day2/Fs/content/first.txt', 'utf8')
const second = readFileSync('./Nodejs/Day2/Fs/content/second.txt', 'utf8')

console.log(first)
console.log(second)

writeFileSync('./Nodejs/Day2/Fs/content/result-sync.txt', `Here is the result: ${first}, ${second}`,{flag:'a'})