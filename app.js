const http = require('http');
const url = require('url');
const MyDataBase = require('./database.js');
const myCookies = require('./createCookies.js');
const ShortUrl = require('./shortUrl.js')


MyDataBase.CreateTableDB()
http.createServer((request, response) => {
    let urlRequest = url.parse(request.url, true);
    let ourUrl = urlRequest.query;
    // console.log(urlRequest);    // URL ответ
    console.log(ourUrl);
    console.log(Object.keys(ourUrl));
    // console.log(urlRequest);

        
    if (request.url == "/favicon.ico") { 
        if (!request.headers.cookie) {

            response.writeHead(200, {
                'Set-Cookie': myCookies.create(),
                'Content-Type': 'text/plain'
            });
        }
        response.end('Hello favicon'); 
    }
    // console.log(request.url);    // GET
    if (!request.headers.cookie) {

        response.writeHead(200, {
            'Set-Cookie': myCookies.create(),
            'Content-Type': 'text/plain'
        });
    }

    if (request.url != '/favicon.ico') {
        console.log("Cookie: " + request.headers.cookie);
    };

    response.end(request.headers.host + "/?" + ShortUrl.create());   // вывод ответа на сайт
    


    if (!request.headers.cookie) {
        response.writeHead(200, {
            'Set-Cookie': myCookies.create(),
            'Content-Type': 'text/html'
        });
    }
    response.end('hello')


}).listen(3000) // порт сервера
console.log('Server UP');
