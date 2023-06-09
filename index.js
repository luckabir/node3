const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
//console.log(req.url); 
/*
if(req.url === '/'){
    fs.readFile(
    path.join(__dirname, 'public', 'index.html'), 
    (err, content) => {
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(content);
    });
} 

if(req.url === '/api/users'){
    const users = [
        {name: 'Bob', age: 30},
        {name: 'Not Bob', age: 20}
    ];
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(users));
}*/


let filePath = path.join(
    __dirname, 'public', req.url === '/' ? 'index.html' : req.url
);

let extname = path.extname(filePath);
let contentType = 'text/html';
console.log(extname);

switch(extname) {
    case '.js':
    contentType = 'text/javascript';
    break;
    
    case '.css':
    contentType = 'text/css';
    break;

    case '.json':
    contentType = 'application/json';
    break;

    case '.png':
    contentType = 'image/png';
    break;

    case '.jpg':
    contentType = 'image/jpg';
    break;
}

fs.readFile(filePath, (err, content) => {
    if(err){
        if(err.code == 'ENOENT'){ //stránka se nenašla
            fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) =>
            {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(content, 'utf8');
            });
        }else{ //server err
            res.writeHead(500);
            res.end('Server Error: ' + err.code);
        }
    }else{ //vše ok
        res.writeHead(200, {'Content-Type': contentType});
        res.end(content, 'utf8');
    }
});

/*console.log(filePath);
res.end();*/
});

const PORT = process.env.PORT || 7777;
server.listen(PORT, () => console.log('Server running on port: '  + PORT ));



/*const Logger = require('./logger');
const logger = new Logger();

logger.on('message', (data) => 
console.log('Called Listener', data)
);

logger.log('heya');
logger.log('hey');
logger.log('...')*/


//console.log("Heya node.js");

/*console.log("Cesta ke složce: " + __dirname);
console.log("Cesta ke souboru:" + __filename);
const Person = require('./person');
const person1 = new Person("Lucy", 18);

person1.greeting();*/