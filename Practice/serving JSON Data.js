let http=require('http');


// fs: file system
// res.writeHead: write extra info of response
// res.end: send data back to client ,this method expect either string or buffer
// http.createServer : creates an HTTP Server object, this object can listen to ports on your computer and execute a function, a requestListener, each time a request is made.
// fs.createReadStream : reads sequentially from the current file position
// pipe : pop read stream data to client




// serving JSON Data
let server = http.createServer(function(req,res){
    console.log('request was made:'+ req.url)
    res.writeHead(200,{'Content-Type':'application/json'})
    const myObj={
        name:'sam',
        job:'rabbit',
        age:30
    };
    res.end(JSON.stringify(myObj))
})

server.listen(3000,'127.0.0.1');
console.log('now listen to port!');
