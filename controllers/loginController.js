const User = require("../models/userModel.js");

class loginController{
    //[GET] dang-nhap/quan-ly
    index(req, res) {
        res.render("login/adminLogin");
    }

    //[GET] dang-xuat/quan-ly
    logout(req, res){
        req.logout((err) => {
            if (err) {
                return next(err);
            }
            res.redirect('/dang-nhap/quan-ly');
        });
    }

}

module.exports = new loginController();
