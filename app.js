const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write("Hello World from nodejs1");
        res.end();
    }
    else{
        res.write("Hello World from nodejs2");
        res.end();
    }
});

server.listen(3000);
