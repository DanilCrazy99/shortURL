

const myCookies = {

    create() {
        let newCookie = '';
        for (let i = 0; getRandomSymbols.getCookieLength() >= i; i++) {
            newCookie += getRandomSymbols.getSymbols()[Math.floor(Math.random() * getRandomSymbols.getSymbols().length)]
        }
        return newCookie;
    }
}

module.exports = myCookies;