const booksRoute = require("./books");
const loginRoute = require("./login");
const homeRoute = require("./home");
const logout = require("./logout");
const product = require("./product")
const auth = require("../lib/auth")


function route(app){
    app.use("/quan-ly", auth.authorizedAdmin, booksRoute);
    app.use("/dang-nhap", auth.isLogged, loginRoute);
    app.use("/dang-xuat", logout);
    app.use("/san-pham", product);
    app.use("/", homeRoute);    
}

module.exports = route