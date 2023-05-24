const http = require('http');

http.createServer((req, res) => {
    res.write('Hey!');
    res.end()   
}).listen(7777, () => console.log('Server running...'));
//localhost:7777