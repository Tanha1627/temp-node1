const http1 = require('http');

const server = http1.createServer((req,res)=>{
  if(req.url === '/'){
    res.end('welcome to our home page')
  }
  if(req.url === '/about'){
    res.end('here is our short history')
  }
})


server.listen(5000)