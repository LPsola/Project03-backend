const passport = require("passport");
const GithubStrategy = require("passport-github").Strategy;

const User = require("../models/User");

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.github_id,
      clientSecret: process.env.github_secret,
      callbackURL: "/api/github/success",
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log("GITHUB profile -------------");
      // console.log(profile);

      const { id, username, displayName, emails, _json } = profile;

      User.findOne({ githubID: id })
        .then(userDetails => {
          if (userDetails) {
            done(null, userDetails);
            return;
          }
          return User.create({
            githubID: id,
            username: username || displayName,
            githubAvatar_url: _json.avatar_url,
            email: emails ? emails[0].value : `${username}@github.com`
          }).then(newUser => {
            done(null, newUser);
          });
        })
        .catch(err => {
          done(err);
        });
    }
  )
);
