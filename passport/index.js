const passport = require("passport");

require("./serializers");
require("./localStrategy");
require("./github-strategy");

module.exports = app => {
  app.use(passport.initialize());
  app.use(passport.session());
};
