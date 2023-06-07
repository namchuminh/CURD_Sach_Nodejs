const Book = require("../models/booksModel.js");

class homeController{
    async index(req, res){
        const books = await Book.findAll();
        res.render("home/index", { books })
    }
}

module.exports = new homeController();