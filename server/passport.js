// eslint-disable-next-line import/order
const { User } = require('./db/models/models');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');

passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/api/auth/google/callback',
  },
  ((accessToken, refreshToken, profile, done) => {
    console.log(profile);
    console.log(profile.emails);
    console.log(profile.emails[0].value);
    // пока тест - после занос в дб Поменять done на cb
    const user = User.findOrCreate({
      where: {
        name: profile.displayName,
        email:
      profile.emails[0].value,
        password:
      profile.id,
      },
    });
    done(null, user);
  }),
));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));
