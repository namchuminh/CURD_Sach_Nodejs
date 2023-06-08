const User = require("../models/userModel");
var md5 = require("md5")
class registerController{
    index(req, res){
        return res.render("login/userRegister", { errorMessage: "", successMessage: "" })
    }

    async actionRegister(req, res){
        const {hoTen, email, matKhau} = req.body;
        const emailRegex = /^\S+@\S+\.\S+$/;
        try{
            if(hoTen == "" || email == "" || matKhau == ""){
                return res.render("login/userRegister", { errorMessage: "Vui lòng nhập đủ thông tin!", successMessage: ""})
            }
            if (!emailRegex.test(email)) {
                return res.render("login/userRegister", { errorMessage: "Email không hợp lệ!", successMessage: ""})
            }
            const count = await User.count({
                where: { email }
            });
            if(count >= 1){
                return res.render("login/userRegister", { errorMessage: "Email đã tồn tại, vui lòng nhập email khác!", successMessage: ""})
            }else{
                const md5MatKhau = md5(matKhau)
                const user = await User.create({ hoTen, email, matKhau: md5MatKhau, phanQuyen: 1 });
                return res.render("login/userRegister", { successMessage: "Đăng ký thành công!", errorMessage: ""})
            }       
        }catch{
            return res.render("login/userRegister", { errorMessage: "Có lỗi khi đăng ký, vui lòng nhập lại!", successMessage: ""})
        }
        
    }
}

module.exports = new registerController();