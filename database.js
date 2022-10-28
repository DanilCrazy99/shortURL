const sqlite3 = require('sqlite3').verbose();

class MyDataBase {

    db = new sqlite3.Database("./usersData.db", sqlite3.OPEN_READWRITE, (err) => {
        if (err) return console.error(err.message);
        console.log('Connection succesful');
    })

    CreateTableDB() {   //  создание таблицы для хранения данных
        this.db.run("CREATE TABLE IF NOT EXISTS usersURLs (user TEXT, url TEXT, short TEXT UNIQUE)", (err) => {
            if (err) console.log("CreateTableDB:" + err);
        });
        console.log('Таблицы работают');
        // this.db.close();
    }

    InsertUserData(userCookie, url, createdShortUrl) {   //  добавить данные о пользователе, его ссылку и новую ссылку
        const stmt = "INSERT INTO usersURLs VALUES (?, ?, ?)";
        this.db.run(stmt, [userCookie, url, createdShortUrl], (err) => {
            if (err) return console.error("InsertUserData:" + err.message);
            else console.log(`Items Inserted: ${userCookie}, ${url}, ${createdShortUrl}}`);
            this.db.close();
        });
    }

    getUrlsThisUser(userCookie) {   //  получить urlы данного пользователя
        this.db.each("SELECT * FROM usersURLs WHERE user = " + userCookie + ";", (err, row) => {
            if (err) return console.error("getUrlsThisUser:" + err.message);
            else console.log(row.user + ": " + row.url + ": " + row.short);
        });
        this.db.close();
        return row.url, row.short
    }

    getAllUrls() {
        const dbReq = "SELECT * FROM usersURLs"
        this.db.all(dbReq, [], (err, row) => {
            if (err) return console.error("getAllUrls:" + err.message);
            console.log(row.user + ": " + row.url);
            return row.forEach(row)
        });
        this.db.close();
    }

    getAllCookies() {
        this.db.each("SELECT * FROM usersURLs", (err, row) => {
            if (err) return console.error("getAllCookies:" + err.message);
            console.log(row.user + ": " + row.url);
        });
        this.db.close();
        return row.user
    }
    findUserWithCookie() {
        this.db.each("SELECT * FROM usersURLs", (err, row) => {
            if (err) return console.error("findUserWithCookie:" + err.message);
            console.log(row.user + ": " + row.url);
        });
        this.db.close();
        return console.log(typeof row.user); 
    }
}

module.exports = MyDataBase;
