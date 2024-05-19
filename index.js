const http = require('http');
const { hostname } = require('os');
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;

    const url = req.url;


    res.setHeader('Content-Type', 'text/html');
    if (url === '/') {
        res.write('<h1 style="color: red">Hello World!</h1>');
        res.write('<p>I wonder what else we can send...</p>');
    }


    if (url === '/about') {
        res.write('<h2>This is an about page</h2>')
    }


    res.end();
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})

