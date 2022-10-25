const randomSymbols = require('./randomSymbols.js')

const symbols = randomSymbols['param']['symbols']
const cookieLength = randomSymbols['param']['cookieLength']

const myCookies = {

    create() {
        let newCookie = '';
        for (let i = 0; cookieLength >= i; i++) {
            newCookie += symbols[Math.floor(Math.random() * symbols.length)]
        }
        return newCookie;
    }
}

module.exports = myCookies;