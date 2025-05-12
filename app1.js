const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    // const readstream = fs.createReadStream('index.html');
    // res.writeHead(200, {'Content-Type': 'text/html'});
    //const readstream = fs.createReadStream('example.json');
    const readstream = fs.createReadStream('wallpaper.jpg');
    res.writeHead(200, {'Content-Type': 'image/jpg'});
    readstream.pipe(res)
}).listen(3000)