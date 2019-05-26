//Request modules
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const eventLog = require("morgan");
const handleError = require("./serverfiles/handleError");

//Init app
const app = express();

//App Settings
require('dotenv').config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(eventLog('dev'));

//Handle errors
app.use(handleError);

//Set up server
const port = process.env.NODE_ENV === 'production' ? 80 : process.env.PORT;
const server = app.listen(port, ()=> {
  console.log(`Server running on port  ${port}` );
});
