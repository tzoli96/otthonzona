const passport = require("passport");
const {Strategy: FacebookStrategy} = require("passport-facebook");
const {createUser} = require("./utils/auth");
const {Strategy: GoogleStrategy} = require("passport-google-oauth20");

passport.use(
    new FacebookStrategy(
        {
            clientID: process.env.FB_CLIENT_ID,
            clientSecret: process.env.FB_CLIENT_SECRET,
            callbackURL: process.env.BACKEND_URL + "/api/auth/facebook/callback",
            profileFields: ["id", "displayName", "emails"],
        },
        async (accessToken, refreshToken, profile, done) => {
            const { displayName, emails } = profile;
            const email = emails?.[0]?.value;
            const [firstName, lastName] = displayName.split(" ");
            await createUser({ firstName, lastName, email, isEmailVerified: true });
            return done(null, profile);
        }
    )
);

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.BACKEND_URL + "/api/auth/google/callback",
        },
        async (accessToken, refreshToken, profile, done) => {
            const { displayName, emails, photos } = profile;
            const [firstName, lastName] = displayName.split(" ");
            const email = emails?.[0]?.value;
            const photo = photos?.[0]?.value;

            await createUser({
                firstName,
                lastName,
                email,
                photo,
                isEmailVerified: true,
            });

            return done(null, profile);
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});