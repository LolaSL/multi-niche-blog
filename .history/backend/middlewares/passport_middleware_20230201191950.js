require("dotenv").config();
const passport = require('passport');
const { Strategy } = require('passport-jwt');
const SECRET = process.env.SECRET;
const db = require('../db');

const cookieExtractor = function (req) {
    let token = null
    if (req && req.cookies) token = req.cookies['atoken']
    return token
};
    
const options = {
    secretOrKey: SECRET,
    jwtFromRequest: cookieExtractor,
};

passport.use(
    new Strategy(options, async ({ id }, done) => {
        try {
            const { rows } = await db.query(
                'SELECT id, email FROM users WHERE id = $1',
                [id]
            )

            if (!rows.length) {
                throw new Error('401 not authorized')
            }

            let user = { id: rows[0].id, email: rows[0].email }

            return done(null, user)
        } catch (error) {
            console.log(error.message)
            done(null, false)
        }
    })
);