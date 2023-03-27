const http=require('http');

const server= http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome Chutiye')
    }
    else if(req.url==='/about'){
        res.end('Here is our history')
    }

    else{
        res.end(`<h1>OOPS</h1> <p>Nahi Mila</p>`)
    }
    
})

server.listen(3000);