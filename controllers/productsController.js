const Book = require("../models/booksModel.js");

class productsController{
    //[GET] san-pham/:id
    async detail(req, res){
        const book = await Book.findByPk(req.params.id);
        return res.render('products/detail', { book });
    }
}

module.exports = new productsController();