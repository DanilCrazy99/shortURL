const express = require('express');
const app = express();
const port = 3000;
const MyDataBase = require('./database.js');
const myCookies = require('./createCookies.js');
const ShortUrl = require('./shortUrl.js')



// app.get('/', (req, res) => {
//     res.json({ user: 'tobi' })
// })

// console.log();


app.get('/short-url', (req, res) => {
    
    if (!req.headers.cookie) {
        res.cookie('ShortUrlStorage', myCookies.create())
    }
    console.log('cookie: ', req.headers.cookie);
    if(req.query['url']){
        let moduleDB = new MyDataBase
        moduleDB.CreateTableDB();
        console.log('query: ', req.query);
        const valueShortUrl = ShortUrl.create()
        moduleDB.InsertUserData(req.headers.cookie, req.query['url'], valueShortUrl)
        return res.status(201).json({ 
            url: req.query['url'],
            'shortUrl': valueShortUrl
    }) 

    }
    console.log(404);
    return res.status(404).json({msg:'error'})
    
    
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
console.log('Server UP');
