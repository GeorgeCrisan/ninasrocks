//Request modules
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const eventLog = require("morgan");
const path = require('path');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const compression = require('compression');


app.prepare().then(() => {

  //Init app
  const server = express();
  server.use(compression());

  //App Settings
  require('dotenv').config();
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());
  server.use(cors());
  server.use(eventLog('dev'));
  server.use(require('method-override')());
  server.disable('x-powered-by');
  server.use(cookieParser());
  server.use(helmet());


  require('./serverfiles/models/User');

  require('./serverfiles/passportconfig');

  server.use(require('./serverfiles/routes'));


  server.get('*', (req, res) => handle(req, res));

  //Handle errors

  /// catch 404 and forward to error handler
  server.use(function (req, res, next) {
    var err = new Error('Sorry route Not Found');
    err.status = 404;
    next(err);
  });

  server.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      'errors': {
        status: err.status || 500,
        message: err.message,
        error: {}
      }
    });
  });

  // db connection

  mongoose.connect(process.env.MONGO_URL3, { useNewUrlParser: true }).then(() => {
    console.log('database connected');
  });
  mongoose.set('debug', true);
  mongoose.set('useCreateIndex', true);
  //Set up server
  const port = process.env.NODE_ENV === 'production' ? process.env.PORT : 3000;


  server.listen(port, (err) => {
    if (err) throw err;
    console.log(` on http://localhost:${port}`);
  });
});