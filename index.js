const express = require("express");
const multer = require("multer"); // Import multer module
const methodOverride = require("method-override");
const app = express();
const route = require("./routes/index.js")
const path = require('path');
const morgan = require('morgan');
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
var md5 = require('md5');

const User = require("./models/userModel.js");

// Khởi tạo session
app.use(session({
  secret: 'abcdef',
  resave: false,
  saveUninitialized: true
}))

// Khởi tạo passport
app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, (email, password, done) => {
  User.findOne({ where: { email: email } })
    .then(user => {
      if (!user) {
        return done(null, false, { message: 'Email không tồn tại!' });
      }
      if (user.matKhau != md5(password)) {
        return done(null, false, { message: 'Sai mật khẩu!' });
      }
      return done(null, user);
    })
    .catch(err => {
      return done(err);
    });
}));


// Lưu thông tin người dùng vào session
passport.serializeUser((user, done) => {
  done(null, user)
})

// Lấy thông tin người dùng từ session
passport.deserializeUser((user, done) => {
  done(null, user)
})


// Connect to database
const sequelize = require('./config/db.js');

// Test database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection DATABASE successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

// Middlewares
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static(__dirname + '/public'));

// Set storage for file upload
const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, "./uploads"); //Set destination folder for uploaded files
  },
  filename: function(req, file, callback) {
    callback(null, file.originalname); //Set name for uploaded files
  }
});

const upload = multer({ storage }); // Initialize multer module with the storage configuration
app.use(upload.single("file"));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(function(req, res, next) {
  res.locals.baseUrl = req.protocol + "://" + req.hostname + ":3000";
  next();
});

app.use(morgan('common'));

// Routes
route(app)

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
