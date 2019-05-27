const passport = require('passport');
const mongoose = require('mongoose');
const LocalStrategy = require('passport-local').Strategy;
var User = mongoose.model('User');

passport.use(new LocalStrategy({
  usernameField: 'user[email]',
  passwordField: 'user[password]',
},function(email, password, done){
  User.findOne({ email: email }).then((user)=>{
    if(!user || !user.validPassword(password)){
      return done(null, false, {errors: {'email or password': 'is invalid'}});
    }

    return done(null, user);
  }).catch(done);
}));