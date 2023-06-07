const booksRoute = require("./books");
const login = require("./login");
const logout = require("./logout");
const auth = require("../lib/auth")


function route(app){
    app.use("/quan-ly", auth.authorizedAdmin, booksRoute);
    app.use("/dang-nhap", auth.isLogged, login);
    app.use("/dang-xuat", logout);  
}

module.exports = route