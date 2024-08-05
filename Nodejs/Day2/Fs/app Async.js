const {readFile, writeFile} = require('fs')
readFile('./Nodejs/Day2/Fs/content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err)
        return;
    }
    const first = result
    readFile('./Nodejs/Day2/Fs/content/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err)
            return;
        }
        const second = result
        writeFile('./Nodejs/Day2/Fs/content/result-Async.txt', `Here is the result: ${first},${second}`, (err, result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})