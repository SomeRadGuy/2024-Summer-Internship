const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end("Welcome to our home page!")
    }
    if(req.url === "/about"){
        res.end("About page!")
    }
    res.end("404")
})

server.listen(5000)