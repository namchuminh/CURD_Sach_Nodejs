const Book = require("../models/booksModel");
const Order = require("../models/ordersModel");
const User = require("../models/userModel");

class ordersController{
    //[GET] don-hang/
    async index(req, res){
        const orders = await Order.findAll({
            where: {
                user_id:req.user.id
            },
            order: [
                ['id', 'DESC']
            ],
            include: [Book]
        })
        return res.render("orders/ordered", { orders });
    }

    //[GET] don-hang/huy-don/:id
    async cancel(req, res){
        try{
            const deleteOrder = await Order.destroy({
                where: {
                    user_id:req.user.id,
                    id:req.params.id
                }
            })
            return res.redirect(`/don-hang`);
        }catch{
            return res.redirect(`/don-hang`);
        }
        
    }
}

module.exports = new ordersController();