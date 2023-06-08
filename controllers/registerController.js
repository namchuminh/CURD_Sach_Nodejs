const User = require("../models/userModel");

class registerController{
    async index(req, res){
        return res.render("login/userRegister")
    }

    async actionRegister(req, res){
        
    }
}

module.exports = new registerController();