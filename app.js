const http = require('http');
const url = require('url');
const pathToRandomSymbols = './randomSymbols.js'
const MyDataBase = './database.js'


MyDataBase.CreateTableDB()

http.createServer((request, response) => {
    if (request.url == "/favicon.ico") { response.end('Hello favicon'); }
    // console.log(request.url);    // GET

    let urlRequest = url.parse(request.url, true);
    // console.log(urlRequest);    // URL ответ
    let ourUrl = urlRequest.search;

    if (!request.headers.cookie) {

        response.writeHead(200, {
            'Set-Cookie': myCookies.create(),
            'Content-Type': 'text/plain'
        });
    }

    if (request.url != '/favicon.ico') {
        console.log(request.headers.cookie);
        ourUrl = ourUrl.slice(11);
        console.log(ShortUrl.create());     // вывод короткой ссылки
    };

    response.end(request.headers.host + "/?" + ShortUrl.create());   // вывод ответа на сайт

}).listen(3000) // порт сервера
console.log('Server UP');


const ShortUrl = {

    checkValidate() {    // Проверка валидности ссылки

    },

    create() {   // создание ссылки и сохранение в базе данных
        randomLetter = Math.floor(Math.random() * getRandomSymbols.getSymbols().length + 1);
        let newUrl = '';
        for (let i = 0; getRandomSymbols.getLength() >= i; i++) {
            newUrl += getRandomSymbols.getSymbols()[Math.floor(Math.random() * getRandomSymbols.getSymbols().length)]
        }
        return newUrl;
    }
}


const getRandomSymbols = {
    myParamsModule: require(pathToRandomSymbols),

    getSymbols() {  // узнаю символы разрешённые для использования в генераторе
        return this.myParamsModule['param']['symbols'];
    },

    getLength() {   // узнаю количество символов в создаваемой ссылке
        return this.myParamsModule['param']['lengthUrl'] - 1
    },

    getCookieLength() {     // узнаю максимальную длину куки
        return this.myParamsModule['param']['cookieLength'] - 1
    }
}

const myCookies = {

    create() {
        let newCookie = '';
        for (let i = 0; getRandomSymbols.getCookieLength() >= i; i++) {
            newCookie += getRandomSymbols.getSymbols()[Math.floor(Math.random() * getRandomSymbols.getSymbols().length)]
        }
        return newCookie;
    }
}