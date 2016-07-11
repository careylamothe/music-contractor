import passport from 'passport';
import {Strategy as GoogleStrategy} from 'passport-google-oauth20';

require('dotenv').load();

export function setup(User, config) {
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
  },
  function(accessToken, refreshToken, profile, done) {
    User.find({where:{'google.id': profile.id}})
      .then(user => {
        if (user) {
          return done(null, user);
        }

        user = User.build({
          name: profile.displayName,
          email: profile.emails[0].value,
          role: 'user',
          username: profile.emails[0].value.split('@')[0],
          provider: 'google',
          google: profile._json
        });
        user.save()
          .then(user => done(null, user))
          .catch(err => done(err));
      })

//insert id into organizer or musician table

      .catch(err => done(err));
  }));
}
