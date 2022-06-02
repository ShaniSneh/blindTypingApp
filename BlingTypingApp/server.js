'use strict';
const fs = require('fs');
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {

    let url = req.url;
    let myReadStream;

    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    myReadStream = fs.createReadStream('blindTyping.html', 'utf-8');

    function readAndWriteFile() {

        myReadStream.on('data', (chunk) => {
            res.write(chunk);
        });
        myReadStream.on('end', () => {
            res.end();
        });
    }
    
}).listen(port);
