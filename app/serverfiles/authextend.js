var jwt = require('express-jwt');
var secret = process.env.JWT_SECRET;


function getTokenFromHeader(req){
    console.log(req.headers ,'what are headers and check authorisation');
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token' ||
        req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1];
    }
  
    return null;
  }


  var auth = {
    required: jwt({
      secret: secret,
      userProperty: 'payload',
      getToken: getTokenFromHeader
    }),
    optional: jwt({
      secret: secret,
      userProperty: 'payload',
      credentialsRequired: false,
      getToken: getTokenFromHeader
    })
  };
  
  module.exports = auth;