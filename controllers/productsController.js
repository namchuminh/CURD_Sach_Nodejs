const Book = require("../models/booksModel.js");
const Comment = require("../models/commentsModel.js");
const User = require("../models/userModel.js");

class productsController{
    //[GET] san-pham/:id
    async detail(req, res){
        const book = await Book.findByPk(req.params.id);
        const comments = await Comment.findAll({
            where: {
              book_id: req.params.id
            },
            order: [
                ['id', 'DESC']
            ],
            include: [User]
        });

        console.log(comments)
        return res.render('products/detail', { book, comments, errorMessage: "" });
    }

    //[POST] san-pham/binh-luan
    async comment(req, res){
        const {noiDung} = req.body;

        if(noiDung == ""){
            return res.render("products/detail", {errorMessage: "Vui lòng nhập nội dung bình luận!",});
        }

        try {

            const book_id = req.params.id;
            const user_id = req.user.id

            const comment = await Comment.create({noiDung, book_id, user_id});

            return res.redirect(`/san-pham/${book_id}`);
        } catch {
            return res.render("books/create", {errorMessage: "Có lỗi khi thêm sách! Vui lòng kiểm tra lại!",});
        }
    }
}

module.exports = new productsController();