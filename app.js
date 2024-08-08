// const http = require("http")

// const server = http.createServer((req, res) => {
//     if(req.url === "/"){
//         res.end("Home Page")
//     }
//     if(req.url === '/about') {
//         for(let i = 0; i < 10; i++){
//             for(let j = 0; j<1000; j++) {
//                 console.log(`${i}, ${j}`)
//             }
//         }
//         res.end("About page")
//     }
// })

// server.listen(5000, ()=>{
//     console.log("Server is listning on port 5000")
// })

//C:/Users/hp/2024-Summer-Internship/Nodejs/Day2/Fs/content/first.txt

// const {readFile} = require("fs")
// const { reject, result } = require("lodash")
// const { resolve } = require("path")

// const getText = (path) => {
//     return new Promise((resolve, reject)=>{
//         readFile(path, 'utf8',(err,data)=>{
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         } )
//     })
// }

// getText('C:/Users/hp/2024-Summer-Internship/Nodejs/Day2/Fs/content/first.txt').then((result)=> console.log(result)).catch((err) => console.log(err))


// const getText = (path) =>{
//     return new Promise((resolve, reject)=>{
//         readFile(path, 'utf8', (err, data)=>{
//             if(err){
//                 reject(err)
//             } else{
//                 resolve(data)
//             }
//         })
//     })
// }

const { readFile, writeFile } = require('fs').promises
const { resolve } = require('path')
// const util = require('util')

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async() =>{
    try {
        const first = await readFile('C:/Users/hp/2024-Summer-Internship/Nodejs/Day2/Fs/content/first.txt', 'utf8')
        const second = await readFile('C:/Users/hp/2024-Summer-Internship/Nodejs/Day2/Fs/content/second.txt', 'utf8')
        await writeFile('C:/Users/hp/2024-Summer-Internship/Nodejs/Day2/Fs/content/result-mind-grenade.txt', `THIS IS AWESOME: ${first}, ${second}`, {flag:'a'})
        console.log(first,second)
    } catch (error) {
        console.log(error)
    }
    
}

start()


// getText('C:/Users/hp/2024-Summer-Internship/Nodejs/Day2/Fs/content/first.txt').then((resolve)=>console.log(resolve)).catch((reject)=>console.log(reject))

 



