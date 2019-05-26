//Request modules
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const eventLog = require("morgan");
const path = require('path');
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



//Set up server
const port = process.env.NODE_ENV === 'production' ? 80 : process.env.PORT;
const server = app.listen(port, ()=> { 
  console.log(`Server running on port  ${port}` );
});
