const express = require('express');
const app = express();
const port = 3000;
const MyDataBase = require('./database.js');
const myCookies = require('./createCookies.js');
const ShortUrl = require('./shortUrl.js')

// app.get('/', (req, res) => {
//     res.json({ user: 'tobi' })
// })

app.get('/short-url', (req, res) => {
    console.log(res.query)
    if(req.query['url']){
        console.log(req.query);
        return res.status(201).json({ 
            url: req.query['url'],
            'shortUrl': ShortUrl.create()
    }) 
    }
    return res.status(404).json({msg:'error'})
    
    
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
console.log('Server UP');
