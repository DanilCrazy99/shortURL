const sqlite3 = require('sqlite3').verbose();

const MyDataBase = {

    db: new sqlite3.Database("./usersData.db", (err) => {
        if (err) return console.error(err.message);
        console.log('Connection succesful');
    }),

    CreateTableDB() {   //  создание таблицы для хранения данных
        this.db.run("CREATE TABLE IF NOT EXISTS usersURLs (user TEXT, url TEXT, short TEXT UNIQUE)", (err) => {
            if (err) console.log("CreateTableDB:" + err);
        });
        this.db.close();
    },

    InsertUserData(userCookie, url) {   //  добавить данные о пользователе, его ссылку и новую ссылку
        const stmt = "INSERT INTO usersURLs VALUES (?, ?, ?)";
        this.db.run(stmt, [userCookie, url, ShortUrl.create()], (err) => {
            if (err) return console.error("InsertUserData:" + err.message);
            else console.log("Items Inserted");
            this.db.close();
        });
    },

    getUrlsThisUser(userCookie) {
        this.db.each("SELECT * FROM usersURLs WHERE user = " + userCookie + ";", (err, row) => {
            if (err) return console.error("getUrlsThisUser:" + err.message);
            else console.log(row.user + ": " + row.url);
        });
        this.db.close();
        return row.url
    },

    getAllUrls() {
        this.db.each("SELECT * FROM usersURLs", (err, row) => {
            if (err) return console.error("getAllUrls:" + err.message);
            console.log(row.user + ": " + row.url);
        });
        this.db.close();
        return row.url
    },

    getAllCookies() {
        this.db.each("SELECT * FROM usersURLs", (err, row) => {
            if (err) return console.error("getAllCookies:" + err.message);
            console.log(row.user + ": " + row.url);
        });
        this.db.close();
        return row.user
    }
}

module.exports = MyDataBase;