// eslint-disable-next-line import/order
const { User } = require('../db/models/models');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github2').Strategy;
const passport = require('passport');

passport.serializeUser((user, done) => {
  // user.email = user.emails[0].value;
  done(null, user);
});
passport.deserializeUser(async (user, done) => {
  console.log(user);
  try {
    if (user.emails) {
      await User.findOne({ where: { email: user.emails[0].value } });
    }
    if (user.username) {
      await User.findOne({ where: { email: user.username } });
    }
  } catch (err) {
    console.log(err);
  }
  done(null, user);
});

passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:5001/auth/google/callback',
  },
  (async (accessToken, refreshToken, profile, done) => {
    console.log(profile);
    // пока тест - после занос в дб Поменять done на cb

    const user = await User.findOrCreate({
      where: {
        name: profile.displayName,
        email:
      profile.emails[0].value,
        password:
      profile.id,
        image: profile.photos[0].value,
      },
    });
    done(null, profile);
  }),
));

// github
passport.use(new GithubStrategy(
  {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: 'http://localhost:5001/auth/github/callback',
  },
  (async (accessToken, refreshToken, profile, done) => {
    console.log(profile.photos[0].value);
    // пока тест - после занос в дб Поменять done на cb
    const user = await User.findOrCreate({
      where: {
        name: profile.displayName,
        email:
        profile.username,
        password:
        profile.id,
        image: profile.photos[0].value,
      },
    });
    done(null, profile);
  }),
));
