var http = require('http');

var server = http.createServer(function(request,response){
    
    if(request.url === '/'){
        response.writeHead(200,{"Content-Type":"text/html"});
        response.end("Hello World");  
    } else if (request.url === '/goodbye'){
      response.writeHead(200,{"Content-Type":"text/html"});
      response.end("Good  Bye !!");  
    }
  
    
});

server.listen(3000);