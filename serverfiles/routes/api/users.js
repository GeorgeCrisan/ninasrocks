var mongoose = require('mongoose');
var router = require('express').Router();
var passport = require('passport');
var User = mongoose.model('User');
var auth = require('../../authextend');

router.get('/user', auth.required, function (req, res, next) {
  User.findById(req.payload.id).then(function (user) {
    if (!user) { return res.sendStatus(401); }

    return res.json({ user: user.toAuthJSON() });
  }).catch(next);
});

router.put('/user', auth.required, function (req, res, next) {
  User.findById(req.payload.id).then(function (user) {
    if (!user) { return res.sendStatus(401); }

    // only update fields that were actually passed...
    if (typeof req.body.username !== 'undefined') {
      user.username = req.body.username;
    }
    if (typeof req.body.user.email !== 'undefined') {
      user.email = req.body.email;
    }
    if (typeof req.body.bio !== 'undefined') {
      user.bio = req.body.bio;
    }
    if (typeof req.body.image !== 'undefined') {
      user.image = req.body.image;
    }
    if (typeof req.body.password !== 'undefined') {
      user.setPassword(req.body.password);
    }

    return user.save().then(function () {
      return res.json({ user: user.toAuthJSON() });
    });
  }).catch(next);
});

router.get('/users/login', auth.optional, function (req, res, next) {
  if (req.payload) {
    return res.json({ user: req.payload.username, access: true });
  } else {
    res.json({ access: false, message: 'Not authenticated' });
  }
});


router.post('/users/login', auth.required, function (req, res, next) {

  if (!req.body.email) {
    return res.status(422).json({ errors: { email: "can't be blank" } });
  }

  if (!req.body.password) {
    return res.status(422).json({ errors: { password: "can't be blank" } });
  }

  passport.authenticate('local', { session: false }, function (err, user, info) {
    if (err) { return next(err); }

    if (user) {
      user.token = user.generateJWT();
      res.cookie('ninasrocks-jt', user.token, { httpOnly: true, secure: false, signed: false, expires: new Date(Date.now() + 7200000) });
      return res.json({ user: user.toAuthJSON() });
    } else {
      return res.status(422).json(info);
    }
  })(req, res, next);

});

router.post('/user/register', function (req, res, next) {
  var user = new User();

  user.username = req.body.username;
  user.email = req.body.email;
  user.setPassword(req.body.password);

  user.save().then(function () {
    res.cookie('jwt', user.token, { httpOnly: true, expires: new Date(Date.now() + 7200000), httpOnly: true, signed: false });
    return res.json({ user: user.toAuthJSON() });
  }).catch(next);
});


module.exports = router;