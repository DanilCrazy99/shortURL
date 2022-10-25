const symbols = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
const lengthUrl = 3;    //указываем значение на 1 меньше
const cookieLength = 5;     //указываем значение на 1 меньше

exports.param = {symbols, lengthUrl, cookieLength};


// const getRandomSymbols = {
//     myParamsModule: require(pathToRandomSymbols),

//     getSymbols() {  // узнаю символы разрешённые для использования в генераторе
//         return this.myParamsModule['param']['symbols'];
//     },

//     getLength() {   // узнаю количество символов в создаваемой ссылке
//         return this.myParamsModule['param']['lengthUrl'] - 1
//     },

//     getCookieLength() {     // узнаю максимальную длину куки
//         return this.myParamsModule['param']['cookieLength'] - 1
//     }
// }