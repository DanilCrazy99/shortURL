const randomSymbols = require('./randomSymbols.js')

const symbols = randomSymbols['param']['symbols']
const lengthUrl = randomSymbols['param']['lengthUrl']

const ShortUrl = {

    checkValidate() {    // Проверка валидности ссылки
    },

    create() {   // создание ссылки и сохранение в базе данных
        randomLetter = Math.floor(Math.random() * symbols.length + 1);
        let newUrl = '';
        for (let i = 0; lengthUrl >= i; i++) {
            newUrl += symbols[Math.floor(Math.random() * symbols.length)]
        }
        return newUrl;
    }
}

module.exports = ShortUrl;