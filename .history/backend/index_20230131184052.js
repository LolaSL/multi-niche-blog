if (process.env.NODE_ENV !== 'production npm start') {
    require('dotenv').config({ override: true });
  }

const express = require('express');
const cors = require("cors");
const logger = require("morgan");
const postRouter = require('./routes/posts.js');
const authRouter = require('./routes/auth.js');
const CLIENT_URL = process.env.CLIENT_URL;
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('cookie-session');
const TWO_HOURS = 60 * 60 * 1000 * 13;
const SESS_SECRET = process.env.SESS_SECRET;



const app = express();

app.use(cors({ origin: CLIENT_URL, credentials: true }))
app.use(express.json());
app.use(cookieParser());
app.use(session({
  name: process.env.SESS_NAME,
  cookieName: 'session',
  resave: false,
  saveUninitialized: true,
  secret:SESS_SECRET,
  cookie: {
      secure: process.env.NODE_ENV === 'production' ? "true" : "auto",
      sameSite: process.env.NODE_ENV === 'production' ? "none" : "lax",
      maxAge: TWO_HOURS,

  },

}));
app.use(logger('combined'));
app.use(passport.initialize())
require('./middlewares/passport_middleware')

app.use('/api/v1/posts', postRouter)
app.use('/api/v1/auth', authRouter)

app.listen(9000, () => {
    console.log('Server is connected')
})