const express = require("express");
const multer = require("multer"); // Import multer module
const methodOverride = require("method-override");
const app = express();
const route = require("./routes/index.js")
const path = require('path');
const morgan = require('morgan');

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
