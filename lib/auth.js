class auth{
  authorizedAdmin (req, res, next){
    if (req.isAuthenticated()) {
      // Kiểm tra trường role của người dùng để xác định quyền truy cập
      if (req.user.phanQuyen === 0) {
        return next();
      } else {
        return res.status(403).send('Bạn không có quyền truy cập vào trang này.');
      }
    }

    res.redirect('/dang-nhap/quan-ly');
  };

  isLogged (req, res, next){
    if (req.isAuthenticated() && req.user.phanQuyen === 0) {
      return res.redirect('/quan-ly');
    }else if(req.isAuthenticated() && req.user.phanQuyen !== 0){
      return res.redirect('/');
    }
    return next();
  };
}


module.exports = new auth();
