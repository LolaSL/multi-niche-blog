if (process.env.NODE_ENV !== 'production npm start') {
    require('dotenv').config({ override: true });
  }

const express = require('express');
const cors = require("cors");
const logger = require("morgan");
const postRouter = require('./routes/posts.js');
const authRouter = require('./routes/auth.js');



const app = express();

app.use(express.json())

app.use('/api/v1/posts', postRouter)
app.use('/api/v1/auth', authRouter)

app.listen(9000, () => {
    console.log('Server is connected')
})