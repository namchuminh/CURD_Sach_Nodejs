const User = require("../models/userModel.js");

class loginController{
    index(req, res) {
        res.render("login/adminLogin");
    }

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
