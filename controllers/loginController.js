const User = require("../models/userModel.js");
const passport = require('passport')

class loginController{
    //[GET] dang-nhap/quan-ly
    index(req, res) {
        res.render("login/adminLogin", {message: ""});
    }

    //[POST] dang-nhap/quan-ly
    loginAdmin(req, res, next){
        passport.authenticate('local', {
            successRedirect: '/quan-ly',
            failureRedirect: '/dang-nhap/quan-ly',
            failureFlash: true
        }, (err, user, info) => {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.render('login/adminLogin', { message: info.message });
            }
            req.logIn(user, (err) => {
                if (err) {
                    return next(err);
                }
                return res.redirect('/quan-ly');
            });
        })(req, res, next);
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
