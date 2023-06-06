const Book = require("../models/booksModel.js");

class booksController{
    //[GET] quan-ly/
    async index(req, res) {
        const books = await Book.findAll();
        return res.render("books/index", { books });
    }

    //[GET] quan-ly/xem/:id
    async view(req, res) {
        const book = await Book.findByPk(req.params.id);
        return res.render("books/view", { book, errorMessage: "" });
    }

    //[GET] quan-ly/them/
    create(req, res){
        return res.render("books/create", {errorMessage: ""});
    }

    //[POST] quan-ly/them/
    async createAction(req, res){
        const {tieuDe, tacGia, moTa, theLoai, ngayPhatHanh, soTrang, soLuongBan} = req.body;

        if(tieuDe == "" || tacGia == "" || ngayPhatHanh == ""){
            return res.render("books/create", {errorMessage: "Vui lòng nhập đủ các trường bắt buộc: Tiêu đề, tác giả, ngày phát hành!",});
        }

        try {
            var anhBia = "";

            if (req.file){
                anhBia = req.file.originalname;
            }

            const book = await Book.create({tieuDe,tacGia,moTa,theLoai,ngayPhatHanh,soTrang,soLuongBan,anhBia});

            return res.redirect(`/quan-ly/`);
        } catch {
            return res.render("books/create", {errorMessage: "Có lỗi khi thêm sách! Vui lòng kiểm tra lại!",});
        }
    }

    //[POST] quan-ly/sua/
    async update(req, res) {
        const { id, tieuDe, tacGia, moTa, theLoai, ngayPhatHanh, soTrang, soLuongBan} = req.body;

        if(tieuDe == "" || tacGia == "" || ngayPhatHanh == ""){
            const book = await Book.findByPk(id);
            return res.render("books/view", { book, errorMessage: "Vui lòng nhập đủ các trường bắt buộc: Tiêu đề, tác giả, ngày phát hành!", });
        }

        try {
            const book = await Book.findByPk(id);

            var anhBia = book.dataValues.anhBia;

            if (req.file){
                anhBia = req.file.originalname;
            }

            const affectedRows = await Book.update(
                { tieuDe, tacGia, moTa, theLoai, ngayPhatHanh, soTrang, soLuongBan, anhBia },
                { where: { id } }
            );

            return res.redirect(`/quan-ly/xem/${id}`);

        } catch {
            const book = await Book.findByPk(id);
            res.render("books/view", { book, errorMessage: "Error updating book", });
        }
    }

    //[GET] quan-ly/xoa/
    async delete(req, res) {
        const id = req.params.id;
        try {
            const affectedRows = await Book.destroy({ where: { id } });
            res.redirect(`/quan-ly/`);
        } catch {
            res.redirect(`/quan-ly/`);
        }
    }
}

module.exports = new booksController();
