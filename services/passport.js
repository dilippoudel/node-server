const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecrete,
    callbackURL: '/auth/google/callback'
},(accessToken,refreshToken, profile, done)=>{
    console.log(profile.id)
    new User({ googleId: profile.id }).save();
})
);