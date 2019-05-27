//Request modules
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const eventLog = require("morgan");
const path = require('path');
const passport = require('passport');
const helmet = require('helmet');
const session = require('express-session');
const customErrors = require("./serverfiles/customErrors");

//Init app
const app = express();

//App Settings
require('dotenv').config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors()); 
app.use(eventLog('dev')); 
app.use(require('method-override')());
app.disable('x-powered-by');
app.use(helmet());


//use react application as static
app.use(express.static(__dirname + '/public'));

app.use(session({ secret: 'ifyouwantitwemakeitsecret' , cookie: {maxAge: 60000 }, resave: false, saveUninitialized: false }));
// routesm models and passport config

require('./serverfiles/models/User');

require('./serverfiles/passportconfig');

app.use(require('./serverfiles/routes'));
//Handle errors

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Sorry route Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({'errors': {
    status: err.status || 500,
    message: err.message,
    error: {}
  }});
});

// db connection

mongoose.connect(process.env.MONGO_URL3 ,{ useNewUrlParser: true}).then(()=>{
  console.log('database connected');
});
mongoose.set('debug',true);

//Set up server
const port = process.env.NODE_ENV === 'production' ? 80 : process.env.PORT;
const server = app.listen(port, ()=> { 
  console.log(`Server running on port  ${port}` );
});
