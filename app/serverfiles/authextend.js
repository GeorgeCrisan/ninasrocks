var jwt = require('express-jwt');
var secret = process.env.JWT_SECRET;


function getTokenFromCookie(req){
    console.log(req.cookies["ninasrocks-jt"] ,'token if any');
        let token = req.cookies["ninasrocks-jt"] || false;
        if(token){
          return token;
        }
    return null;
  }


  var auth = {
    required: jwt({
      secret: secret,
      userProperty: 'payload',
      getToken: getTokenFromCookie
    }),
    optional: jwt({
      secret: secret,
      userProperty: 'payload',
      credentialsRequired: false,
      getToken: getTokenFromCookie
    })
  };
  
  module.exports = auth; 