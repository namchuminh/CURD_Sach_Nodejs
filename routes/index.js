const booksRoute = require("./books");

function route(app){
    app.use("/quan-ly", booksRoute);
}

module.exports = route