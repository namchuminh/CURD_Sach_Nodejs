const Book = require("../models/booksModel");
const Order = require("../models/ordersModel");
const User = require("../models/userModel");

class ordersController{
    //[POST] dat-hang/thong-tin
    async infoOrder(req, res){
        const {number, book_id} = req.body;
        try{
            const user = await User.findByPk(req.user.id);
            const book = await Book.findByPk(book_id)
            return res.render("orders/infoOrder", {user, book, number});
        }catch{
            return res.status(404).send('Vui lòng kiểm tra lại thông tin đặt hàng!');
        }
    }

    //[POST] dat-hang/
    async orderAction(req, res){
        const {number, book_id, diaChi} = req.body;
        const user_id = req.user.id;
        const soLuong = number;
        try{
            const order = await Order.create({book_id, user_id, soLuong, diaChi});

            // Cập nhật cột soLuongBan của sách
            const book = await Book.findByPk(book_id);
            await book.increment('soLuongBan', { by: number });

            return res.redirect(`/don-hang`);
        }catch{
            return res.status(404).send('Có lỗi khi xử lý đơn hàng! Vui lòng thao tác lại!');
        }
    }
}

module.exports = new ordersController();