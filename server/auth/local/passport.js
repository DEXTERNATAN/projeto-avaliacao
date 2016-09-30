var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

exports.setup = function (User, config) {
  passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password' // this is the virtual field on the model
    },
    function(email, password, done) {
      console.log('xxxxxxxxxxxxxxx: ', User);
       User.findOne({
         email: email.toLowerCase()
       }, function(err, user) {
        console.log('xxxxxxxxxxxxxxx: ', User);
      //   if (err) return done(err);

      //   if (!user) {
      //     return done(null, false, { message: 'This email is not registered.' });
      //   }
      //   if (!user.authenticate(password)) {
      //     return done(null, false, { message: 'This password is not correct.' });
      //   }
      //   return done(null, user);
       });
    }
  ));
};